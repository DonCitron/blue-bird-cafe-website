export interface SeasonalTheme {
  name: string;
  startDate: string; // MM-DD format
  endDate: string;
  theme: 'default' | 'sage' | 'peridot' | 'ocean';
  description: string;
}

export const seasonalThemes: SeasonalTheme[] = [
  {
    name: 'Frühling',
    startDate: '03-20',
    endDate: '06-20',
    theme: 'sage',
    description: 'Frisches Grün für die Frühlingszeit'
  },
  {
    name: 'Sommer',
    startDate: '06-21',
    endDate: '09-22',
    theme: 'peridot',
    description: 'Warme Erdtöne für den Sommer'
  },
  {
    name: 'Herbst',
    startDate: '09-23',
    endDate: '12-20',
    theme: 'default',
    description: 'Klassische warme Töne für den Herbst'
  },
  {
    name: 'Winter',
    startDate: '12-21',
    endDate: '03-19',
    theme: 'ocean',
    description: 'Kühle Blautöne für die Winterzeit'
  }
];

export const getCurrentSeason = (): SeasonalTheme => {
  const now = new Date();
  const currentMonth = now.getMonth() + 1; // 1-12
  const currentDay = now.getDate();
  const currentDate = `${currentMonth.toString().padStart(2, '0')}-${currentDay.toString().padStart(2, '0')}`;

  for (const season of seasonalThemes) {
    if (isDateInRange(currentDate, season.startDate, season.endDate)) {
      return season;
    }
  }

  // Fallback to winter if no match (shouldn't happen)
  return seasonalThemes[3];
};

const isDateInRange = (date: string, start: string, end: string): boolean => {
  // Handle year-crossing ranges (like winter)
  if (start > end) {
    return date >= start || date <= end;
  }
  return date >= start && date <= end;
};

export const getSeasonalRecommendation = (): string => {
  const season = getCurrentSeason();
  return `Aktuell empfohlen: ${season.name} Theme - ${season.description}`;
};