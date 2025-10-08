
import React from 'react';
import { InfoIcon } from './Icons';
import { Tooltip } from './Tooltip';

interface StyleNuancesProps {
  description: string;
  educationMode: boolean;
}

export const StyleNuances: React.FC<StyleNuancesProps> = ({ description, educationMode }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg">
      <h3 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-300 flex items-center gap-2">
        <span className="text-2xl">📝</span>
        תיאור
        {educationMode && (
            <Tooltip text="תיאור תמציתי של האופי והתחושה הכללית של הז'אנר. זה עוזר להבין את המאפיינים הסוניים המרכזיים שלו במבט מהיר.">
                <InfoIcon className="w-5 h-5 text-yellow-500 dark:text-yellow-400 cursor-pointer" />
            </Tooltip>
        )}
      </h3>
      <div className="bg-gray-200 dark:bg-gray-800 p-3 rounded-md border-l-4 border-indigo-500">
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};
