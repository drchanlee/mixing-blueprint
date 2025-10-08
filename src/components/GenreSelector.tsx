
import React from 'react';
import type { GenrePath, GenreBlueprint } from '../types';

interface GenreSelectorProps {
  genres: GenreBlueprint;
  selectedPath: GenrePath;
  comparePath: GenrePath | null;
  onSelect: (path: GenrePath) => void;
  isComparing: boolean;
  onToggleCompare: () => void;
  educationMode: boolean;
  onToggleEducationMode: () => void;
}

export const GenreSelector: React.FC<GenreSelectorProps> = ({
  genres,
  selectedPath,
  comparePath,
  onSelect,
  isComparing,
  onToggleCompare,
  educationMode,
  onToggleEducationMode,
}) => {
  const selectedMainGenre = genres.find(g => g.name === selectedPath[0]);

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg space-y-4">
      {/* Main Genres */}
      <div className="flex flex-wrap justify-center gap-3">
        {genres.map((genre) => {
          const Icon = genre.icon;
          const isSelected = selectedPath[0] === genre.name;
          let buttonClass = "transition-all duration-200 ease-in-out transform hover:-translate-y-1 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 ";

          if (isSelected) {
            buttonClass += "bg-indigo-600 shadow-lg ring-2 ring-offset-2 ring-offset-gray-100 dark:ring-offset-gray-900 ring-indigo-500";
          } else {
            buttonClass += "bg-gray-600 dark:bg-gray-700 hover:bg-indigo-500 hover:shadow-lg";
          }

          return (
            <button
              key={genre.name}
              onClick={() => onSelect([genre.name, genre.subgenres?.[0]?.name])}
              className={buttonClass}
            >
              <Icon className="w-6 h-6" />
              <span className="truncate max-w-[200px]">{genre.name}</span>
            </button>
          );
        })}
      </div>

      {/* Subgenres for selected Main Genre */}
      {selectedMainGenre?.subgenres && (
        <div className="flex flex-wrap justify-center gap-2 p-4 mt-2 border-t-2 border-dashed border-gray-200 dark:border-gray-700">
          {selectedMainGenre.subgenres.map((subgenre) => {
            const isSelected = selectedPath[1] === subgenre.name && selectedPath[0] === selectedMainGenre.name;
            const isCompareSelected = comparePath?.[1] === subgenre.name && comparePath?.[0] === selectedMainGenre.name;
            let buttonClass = "transition-colors duration-200 text-sm font-medium py-1 px-3 rounded-full ";
            
            if (isComparing) {
                if (isSelected) {
                    buttonClass += "bg-indigo-500 text-white ring-2 ring-indigo-300";
                } else if (isCompareSelected) {
                    buttonClass += "bg-fuchsia-500 text-white ring-2 ring-fuchsia-300";
                } else {
                    buttonClass += "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200";
                }
            } else {
                if (isSelected) {
                    buttonClass += "bg-indigo-500 text-white";
                } else {
                    buttonClass += "bg-gray-200 dark:bg-gray-700 hover:bg-indigo-500 hover:text-white text-gray-700 dark:text-gray-200";
                }
            }

            return (
              <button
                key={subgenre.name}
                onClick={() => onSelect([selectedMainGenre.name, subgenre.name])}
                className={buttonClass}
              >
                {subgenre.name}
              </button>
            );
          })}
        </div>
      )}

      <div className="flex flex-wrap justify-center items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
        <button 
          onClick={onToggleCompare} 
          className={`font-bold py-2 px-5 rounded-lg transition-colors duration-200 text-white ${isComparing ? 'bg-fuchsia-500 hover:bg-fuchsia-600' : 'bg-gray-500 dark:bg-gray-600 hover:bg-gray-600 dark:hover:bg-gray-500'}`}
        >
          {isComparing ? 'ביטול השוואה' : 'השוואת ז\'אנרים (A/B)'}
        </button>
        <button 
          onClick={onToggleEducationMode}
          className={`flex items-center gap-2 font-bold py-2 px-5 rounded-lg transition-colors duration-200 ${educationMode ? 'bg-yellow-400 text-black hover:bg-yellow-500' : 'bg-gray-500 dark:bg-gray-600 text-white hover:bg-gray-600 dark:hover:bg-gray-500'}`}
        >
          🎓
          <span>{educationMode ? 'כיבוי מצב לימוד' : 'הפעל מצב לימוד'}</span>
        </button>
      </div>
    </div>
  );
};
