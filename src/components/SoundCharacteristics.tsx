
import React from 'react';
import { InfoIcon } from './Icons';
import { Tooltip } from './Tooltip';

interface SoundCharacteristicsProps {
  characteristics: { name: string; tip: string }[];
  educationMode: boolean;
}

export const SoundCharacteristics: React.FC<SoundCharacteristicsProps> = ({ characteristics, educationMode }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg">
      <h3 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-300 flex items-center gap-2">
      <span className="text-2xl">👂</span>
        מאפייני סאונד וזיהוי מהיר
        {educationMode && (
            <Tooltip text="רשימת מאפיינים 'אוזניים' שעוזרים לזהות את הז'אנר ולהבין את האסתטיקה שלו.">
                <InfoIcon className="w-5 h-5 text-yellow-500 dark:text-yellow-400 cursor-pointer" />
            </Tooltip>
        )}
      </h3>
      <div className="flex flex-wrap gap-3">
        {characteristics.map((char) => (
          <Tooltip key={char.name} text={char.tip}>
            <div className="bg-indigo-100 dark:bg-indigo-800/50 border border-indigo-300 dark:border-indigo-700 hover:bg-indigo-200 dark:hover:bg-indigo-700/50 cursor-pointer text-indigo-800 dark:text-indigo-200 font-medium py-1 px-3 rounded-full transition-colors">
              {char.name}
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};
