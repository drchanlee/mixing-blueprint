import React, { useState, useEffect, useCallback } from 'react';
import type { GenrePath, Genre, SubGenre } from './types';
import { GENRE_DATA } from './constants';
import { GenreSelector } from './components/GenreSelector';
import { FlowChart } from './components/FlowChart';
import { FrequencyMap } from './components/FrequencyMap';
import { TechMetrics } from './components/TechMetrics';
import { StyleNuances } from './components/StyleNuances';
import { MixingTips } from './components/MixingTips';
import { GenrePlugins } from './components/GenrePlugins';
import { SunIcon, MoonIcon } from './components/Icons';

const getGenreDataFromPath = (path: GenrePath | null): (Genre | SubGenre) | null => {
    if (!path) return null;
    const [mainGenreName, subGenreName] = path;
    const mainGenre = GENRE_DATA.find(g => g.name === mainGenreName);
    if (!mainGenre) return null;
    if (subGenreName && mainGenre.subgenres) {
        return mainGenre.subgenres.find(sg => sg.name === subGenreName) || mainGenre;
    }
    return mainGenre;
};

const GenreDetailView: React.FC<{ genreData: Genre | SubGenre; educationMode: boolean }> = ({ genreData, educationMode }) => {
  const mainGenreData = GENRE_DATA.find(g => g.name === (('subgenres' in genreData) ? genreData.name : GENRE_DATA.find(mg => mg.subgenres?.some(sg => sg.name === genreData.name))?.name));
  const Icon = mainGenreData?.icon || (() => null);
  const plugins = mainGenreData?.Plugins;

  return (
    <div className="bg-white dark:bg-gray-800 p-4 md:p-6 rounded-lg shadow-md space-y-6 flex-1 min-w-0 animate-fade-in">
      <div className="flex justify-between items-start gap-4">
        <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 flex items-center gap-3">
          <Icon className="w-8 h-8" />
          {genreData.name} Blueprint
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <FlowChart flow={genreData.FlowStart} educationMode={educationMode} />
          <TechMetrics metrics={genreData} educationMode={educationMode} />
        </div>
        <div className="space-y-6">
          <FrequencyMap emphasis={genreData.Focus} educationMode={educationMode} />
          <StyleNuances description={genreData.Description} educationMode={educationMode} />
        </div>
      </div>
      
      {genreData.Tips && genreData.Tips.length > 0 && (
          <div className="mt-6">
              <MixingTips tips={genreData.Tips} educationMode={educationMode} />
          </div>
      )}

      {plugins && plugins.length > 0 && (
          <div className="mt-6">
              <GenrePlugins plugins={plugins} educationMode={educationMode} />
          </div>
      )}
    </div>
  );
};

export default function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    () => (localStorage.getItem('theme') as 'light' | 'dark' || 'dark')
  );
  const [selectedPath, setSelectedPath] = useState<GenrePath>(['Hip-Hop / Trap / Drill', 'Trap (ATL)']);
  const [comparePath, setComparePath] = useState<GenrePath | null>(null);
  const [isComparing, setIsComparing] = useState<boolean>(false);
  const [educationMode, setEducationMode] = useState<boolean>(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
        root.classList.add('dark');
    } else {
        root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    try {
        const lastGenrePath = localStorage.getItem('lastGenrePath');
        if (lastGenrePath) {
            const parsedPath = JSON.parse(lastGenrePath) as GenrePath;
            if (getGenreDataFromPath(parsedPath)) {
                setSelectedPath(parsedPath);
            }
        }
    } catch (error) {
        console.error("Failed to parse last genre from localStorage", error);
        setSelectedPath(['Hip-Hop / Trap / Drill', 'Trap (ATL)']);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('lastGenrePath', JSON.stringify(selectedPath));
  }, [selectedPath]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const handleSelectGenre = (path: GenrePath) => {
    if (isComparing) {
        if(JSON.stringify(path) !== JSON.stringify(selectedPath)) {
            setComparePath(path);
        }
    } else {
      setSelectedPath(path);
    }
  };
  
  const handleToggleCompare = () => {
    if(isComparing) {
        setIsComparing(false);
        setComparePath(null);
    } else {
        setIsComparing(true);
        const currentMainGenre = GENRE_DATA.find(g => g.name === selectedPath[0]);
        const otherMainGenre = GENRE_DATA.find(g => g.name !== selectedPath[0]);
        if(otherMainGenre) {
            setComparePath([otherMainGenre.name, otherMainGenre.subgenres?.[0]?.name]);
        }
    }
  };

  const selectedGenreData = getGenreDataFromPath(selectedPath);
  const compareGenreData = getGenreDataFromPath(comparePath);

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-screen-2xl mx-auto">
        <header className="flex justify-between items-center mb-8">
            <div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-600 dark:text-indigo-500">
                Mixing
                </h1>
                <p className="text-lg text-gray-500 dark:text-gray-400 mt-1">by. Dr. Chan</p>
                <p className="text-xl font-semibold text-gray-600 dark:text-gray-300 mt-2">מיקסינג פלופרינט לפי ז'אנר</p>
            </div>
            <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
            >
                {theme === 'dark' ? (
                <SunIcon className="w-6 h-6 text-yellow-400" />
                ) : (
                <MoonIcon className="w-6 h-6 text-indigo-500" />
                )}
            </button>
        </header>

        <GenreSelector
          genres={GENRE_DATA}
          selectedPath={selectedPath}
          comparePath={comparePath}
          onSelect={handleSelectGenre}
          isComparing={isComparing}
          onToggleCompare={handleToggleCompare}
          educationMode={educationMode}
          onToggleEducationMode={() => setEducationMode(prev => !prev)}
        />

        <main className="mt-8">
          <div className="flex flex-col md:flex-row gap-8">
            {selectedGenreData && (
              <GenreDetailView genreData={selectedGenreData} educationMode={educationMode} />
            )}
            {isComparing && compareGenreData && (
              <GenreDetailView genreData={compareGenreData} educationMode={educationMode} />
            )}
          </div>
        </main>

        <footer className="text-center mt-12 text-gray-500">
          <p>כל הזכויות שמורות לסאיי רקורדס ו Probeat</p>
        </footer>
      </div>
    </div>
  );
}