
import React from 'react';
import { InfoIcon } from './Icons';
import { Tooltip } from './Tooltip';

interface TechMetricsProps {
  metrics: {
    LUFS: [number, number];
    RMS: [number, number];
    DR: number;
    Peak: number;
  };
  educationMode: boolean;
}

const MetricItem: React.FC<{ label: string; value: string; tip?: string; educationMode: boolean }> = ({ label, value, tip, educationMode }) => (
    <div className="bg-gray-200 dark:bg-gray-800 p-3 rounded-md flex justify-between items-center">
        <span className="font-semibold text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
          {label}
          {educationMode && tip && (
            <Tooltip text={tip}>
              <InfoIcon className="w-4 h-4 text-yellow-500 dark:text-yellow-400 cursor-pointer" />
            </Tooltip>
          )}
        </span>
        <span className="font-bold text-lg text-indigo-600 dark:text-indigo-400">{value}</span>
    </div>
);

export const TechMetrics: React.FC<TechMetricsProps> = ({ metrics, educationMode }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg">
      <h3 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-300 flex items-center gap-2">
      <span className="text-2xl">📈</span>
        מדדים טכניים ממוצעים
        {educationMode && (
            <Tooltip text="ערכים אלו מייצגים מטרות נפוצות בז'אנר, במיוחד עבור שחרורים מסחריים. הם קריטיים להתאמה לפלטפורמות סטרימינג ולשמירה על תחרותיות.">
                <InfoIcon className="w-5 h-5 text-yellow-500 dark:text-yellow-400 cursor-pointer" />
            </Tooltip>
        )}
      </h3>
      <div className="space-y-2">
          <MetricItem 
            label="Loudness (LUFS)" 
            value={`${metrics.LUFS[0]} to ${metrics.LUFS[1]}`} 
            tip="מודד את העוצמה הנתפסת לאורך זמן. קריטי עבור פלטפורמות סטרימינג כמו ספוטיפיי ואפל מיוזיק כדי למנוע הנמכה אוטומטית (Normalization)."
            educationMode={educationMode}
          />
          <MetricItem 
            label="RMS Average" 
            value={`${metrics.RMS[0]} to ${metrics.RMS[1]}`} 
            tip="מודד את העוצמה הממוצעת של הקטע. ערך גבוה יותר מצביע על מיקס דחוס יותר ופחות דינמי."
            educationMode={educationMode}
          />
          <MetricItem 
            label="Dynamic Range" 
            value={`${metrics.DR} DR`} 
            tip="ההבדל בין החלקים השקטים והרועשים ביותר. ערך גבוה יותר פירושו יותר דינמיקה, בעוד ערך נמוך יותר מעיד על דחיסה רבה."
            educationMode={educationMode}
          />
          <MetricItem 
            label="Peak Level (dBFS)" 
            value={`${metrics.Peak.toFixed(1)}`} 
            tip="הנקודה הגבוהה ביותר שהאודיו מגיע אליה. שמירה על ערך מתחת ל-0.0 מונעת עיוות דיגיטלי (Clipping) ומותירה מרווח בטוח לממירים."
            educationMode={educationMode}
          />
      </div>
    </div>
  );
};
