import React from 'react';
import { InfoIcon } from './Icons';
import { Tooltip } from './Tooltip';

interface MixingTipsProps {
  tips: string[];
  educationMode: boolean;
}

export const MixingTips: React.FC<MixingTipsProps> = ({ tips, educationMode }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg">
      <h3 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-300 flex items-center gap-2">
        <span className="text-2xl">💡</span>
        5 Pro Tips
        {educationMode && (
          <Tooltip text="טיפים מעשיים וטכניקות ספציפיות לז'אנר שיעזרו לך להשיג סאונד מקצועי ומלוטש. התמקד ביישום טיפים אלו כדי לשפר את המיקסים שלך.">
            <InfoIcon className="w-5 h-5 text-yellow-500 dark:text-yellow-400 cursor-pointer" />
          </Tooltip>
        )}
      </h3>
      <ul className="space-y-3 list-inside">
        {tips.map((tip, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="text-indigo-500 dark:text-indigo-400 font-bold text-lg mt-0.5">▪</span>
            <p className="text-gray-700 dark:text-gray-300 flex-1">{tip}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
