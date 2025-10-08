import React from 'react';
import type { Plugin } from '../types';
import { InfoIcon } from './Icons';
import { Tooltip } from './Tooltip';

interface GenrePluginsProps {
  plugins: Plugin[];
  educationMode: boolean;
}

const categoryTooltips: Record<string, string> = {
  "EQ": "משמש לחיתוך תדרים בעייתיים, פיסול הצליל והדגשת האזורים הסוניים המרכזיים של הז'אנר.",
  "Compression": "חיוני לשליטה בדינמיקה, הוספת 'פאנץ'' והדבקה של אלמנטים שונים במיקס ליצירת סאונד מהודק.",
  "Reverb": "יוצר תחושת מרחב ועומק. סוג ואורך הריוורב מגדירים את האווירה והסביבה האקוסטית של הז'אנר.",
  "Saturation": "מוסיף חום, הרמוניות ותחושת עוצמה נתפסת. משמש להוספת 'אופי' וצבע אנלוגי.",
  "Delay": "יוצר הדהודים קצביים ותחושת מרחב. שימושי לעיבוי שירה, הרחבת כלים ויצירת אפקטים מיוחדים.",
  "FX": "אפקטים מיוחדים היוצרים טקסטורות, תנועה או אופי ייחודי לז'אנר, כמו סיידצ'יין ב-EDM.",
  "Amp Sim": "חיוני לעיצוב הסאונד של גיטרות ובס חשמליים, ומחקה סאונד של מגברים וקבינות אמיתיים.",
  "Bus": "מתייחס לקומפרסור על ערוצי קבוצה (Bus) או על המאסטר, כדי 'להדביק' את כל הכלים יחד לסאונד מגובש.",
  "Sidechain": "טכניקת קומפרסיה הגורמת לעוצמה של ערוץ אחד להנמיך ערוץ אחר. הכרחי ב-EDM כדי שהקיק יחתוך דרך הבס והפדים.",
  "Limiter": "משמש בערוץ המאסטר להגברת העוצמה הכללית ולמניעת קליפינג. השימוש בו אגרסיבי ותלוי ז'אנר.",
  "Exciter": "מוסיף ברק ובהירות לתדרים הגבוהים על ידי יצירת הרמוניות. מעולה להבלטת שירה או סינת'ים.",
  "Stereo": "פלאגינים המשמשים להרחבה או היצרות של התמונה הסטריאופונית, ועוזרים ליצור מיקס רחב ומוגדר היטב.",
  "Tape": "פלאגינים המדמים מכונות סרט אנלוגיות, מוסיפים סטורציה עדינה, קומפרסיה וחום.",
  "De-esser": "קומפרסור מיוחד המטפל בתדרים צורמים של האות 'ס' (סיבילנס) בשירה, לקבלת סאונד חלק יותר.",
  "Analyzer": "כלים ויזואליים המציגים את ספקטרום התדרים, העוצמה ותמונת הסטריאו. קריטי לקבלת החלטות מיקס מושכלות.",
  "Chorus": "יוצר סאונד עבה ומרחף על ידי שכפול האות ושינוי עדין של גובה הצליל. משמש להוספת רוחב ועושר."
};

export const GenrePlugins: React.FC<GenrePluginsProps> = ({ plugins, educationMode }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-700/50 p-4 rounded-lg">
      <h3 className="text-xl font-bold mb-4 text-indigo-600 dark:text-indigo-300 flex items-center gap-2">
        <span className="text-2xl">🎛️</span>
        פלאגינים של הז’אנר
        {educationMode && (
          <Tooltip text="כלים נפוצים ומומלצים שעוזרים להשיג את הסאונד האופייני לז'אנר. הרשימה כוללת דוגמאות פופולריות והערות על השימוש בהן.">
            <InfoIcon className="w-5 h-5 text-yellow-500 dark:text-yellow-400 cursor-pointer" />
          </Tooltip>
        )}
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-right">
          <thead className="border-b-2 border-gray-300 dark:border-gray-600">
            <tr>
              <th className="p-2 font-semibold text-gray-600 dark:text-gray-300">קטגוריה</th>
              <th className="p-2 font-semibold text-gray-600 dark:text-gray-300">דוגמה</th>
              <th className="p-2 font-semibold text-gray-600 dark:text-gray-300">הערה</th>
            </tr>
          </thead>
          <tbody>
            {plugins.map((plugin) => (
              <tr key={plugin.category} className="border-b border-gray-200 dark:border-gray-700/50 hover:bg-gray-200/70 dark:hover:bg-gray-800/50">
                <td className="p-3 font-medium">
                  <div className="flex items-center gap-2 justify-end">
                     {educationMode && categoryTooltips[plugin.category] && (
                        <Tooltip text={categoryTooltips[plugin.category]}>
                          <InfoIcon className="w-4 h-4 text-yellow-500 dark:text-yellow-400 cursor-pointer" />
                        </Tooltip>
                      )}
                    <span>{plugin.category}</span>
                  </div>
                </td>
                <td className="p-3 text-gray-700 dark:text-gray-300">{plugin.example}</td>
                <td className="p-3 text-indigo-600 dark:text-indigo-400">{plugin.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};