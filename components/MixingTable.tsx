import React from 'react';
import { InfoIcon } from './Icons';
import { Tooltip } from './Tooltip';

interface MixingTableProps {
  data: {
    component: string;
    trap: string;
    pop: string;
    rock: string;
  }[];
  educationMode: boolean;
}

export const MixingTable: React.FC<MixingTableProps> = ({ data, educationMode }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg">
      <h3 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-300 flex items-center gap-2">
      <span className="text-2xl">🎚️</span>
        טבלת ערכי מיקס מומלצים
        {educationMode && (
            <Tooltip text="נקודות התחלה מומלצות לאיזון עוצמות ואפקטים. התאם אותן לפי ההקשר של השיר הספציפי.">
                <InfoIcon className="w-5 h-5 text-yellow-500 dark:text-yellow-400 cursor-pointer" />
            </Tooltip>
        )}
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-right">
          <thead className="border-b-2 border-gray-300 dark:border-gray-600">
            <tr>
              <th className="p-2 font-semibold text-gray-600 dark:text-gray-300">רכיב</th>
              <th className="p-2 font-semibold text-gray-600 dark:text-gray-300">Trap</th>
              <th className="p-2 font-semibold text-gray-600 dark:text-gray-300">Pop</th>
              <th className="p-2 font-semibold text-gray-600 dark:text-gray-300">Rock</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.component} className="border-b border-gray-200 dark:border-gray-700/50 hover:bg-gray-200/70 dark:hover:bg-gray-800/50">
                <td className="p-3 font-medium">{row.component}</td>
                <td className="p-3 text-indigo-600 dark:text-indigo-400">{row.trap}</td>
                <td className="p-3 text-indigo-600 dark:text-indigo-400">{row.pop}</td>
                <td className="p-3 text-indigo-600 dark:text-indigo-400">{row.rock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};