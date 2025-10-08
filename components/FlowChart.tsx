import React from 'react';
import { InfoIcon } from './Icons';
import { Tooltip } from './Tooltip';

interface FlowChartProps {
  flow: string[];
  educationMode: boolean;
}

export const FlowChart: React.FC<FlowChartProps> = ({ flow, educationMode }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg">
      <h3 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-300 flex items-center gap-2">
        <span className="text-2xl">➔</span>
        תרשים זרימה ("Flow Start")
        {educationMode && (
          <Tooltip text="מציג סדר פעולות נפוץ לבניית השלד הראשוני של המיקס בז'אנר זה. התחלה מהאלמנטים הדומיננטיים ביותר עוזרת לקבוע את האיזון הכללי. זוהי המלצה, לא חוק.">
            <InfoIcon className="w-5 h-5 text-yellow-500 dark:text-yellow-400 cursor-pointer" />
          </Tooltip>
        )}
      </h3>
      <div className="flex items-center justify-center flex-wrap gap-2">
        {flow.map((step, index) => (
          <React.Fragment key={index}>
            <div className="bg-gray-200 dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white font-semibold py-2 px-4 rounded-md shadow-md">
              {step}
            </div>
            {index < flow.length - 1 && (
              <span className="text-indigo-500 dark:text-indigo-400 font-bold text-2xl mx-1">←</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};