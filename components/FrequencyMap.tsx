import React from 'react';
import { InfoIcon } from './Icons';
import { Tooltip } from './Tooltip';

interface FrequencyMapProps {
  emphasis: {
    Low: number;
    Mid: number;
    High: number;
  };
  educationMode: boolean;
}

const EmphasisBar: React.FC<{ label: string; value: number; color: string }> = ({ label, value, color }) => {
    const bgColor = `rgba(${color}, ${value * 0.8 + 0.2})`;
    const height = `${value * 100}%`;

    return (
        <div className="flex flex-col items-center flex-1 h-48">
            <div className="w-full h-full flex items-end bg-gray-200 dark:bg-gray-800 rounded-md overflow-hidden">
                <div 
                    className="w-full transition-all duration-500"
                    style={{ height, backgroundColor: bgColor, boxShadow: `0 0 15px ${bgColor}` }}
                ></div>
            </div>
            <span className="mt-2 font-semibold text-sm">{label}</span>
        </div>
    );
};

export const FrequencyMap: React.FC<FrequencyMapProps> = ({ emphasis, educationMode }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg">
      <h3 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-300 flex items-center gap-2">
        <span className="text-2xl">📊</span>
        מפת דגשים תדרית
        {educationMode && (
            <Tooltip text="מפה זו מציגה את 'טביעת האצבע' הסונית של הז'אנר. גובה העמודה מסמל את החשיבות היחסית של כל תחום תדרים: Low (בס, קיק), Mid (שירה, גיטרות), ו-High (בהירות, אווריריות).">
                <InfoIcon className="w-5 h-5 text-yellow-500 dark:text-yellow-400 cursor-pointer" />
            </Tooltip>
        )}
      </h3>
      <div className="flex justify-around items-end gap-4" dir="ltr">
        {/* FIX: Use uppercase properties to match the data model */}
        <EmphasisBar label="Low-End (40-120Hz)" value={emphasis.Low} color="239, 68, 68" /> 
        <EmphasisBar label="Mid (200-2kHz)" value={emphasis.Mid} color="234, 179, 8" />
        <EmphasisBar label="High (8-14kHz)" value={emphasis.High} color="59, 130, 246" />
      </div>
    </div>
  );
};