
import type * as React from 'react';

// Represents a single plugin recommendation
export interface Plugin {
  category: string;
  example: string;
  note: string;
}

// Base type for technical metrics and focus from the new JSON data
interface BaseGenreMetrics {
  name: string;
  LUFS: [number, number];
  RMS: [number, number];
  DR: number;
  Peak: number;
  Focus: { Low: number; Mid: number; High: number };
  Description: string;
  FlowStart: string[];
  Tips: string[];
  Plugins?: Plugin[];
}

// Represents a subgenre from the new data
export interface SubGenre extends BaseGenreMetrics {}

// Represents a main genre from the new data, which can have subgenres
export interface Genre extends BaseGenreMetrics {
  subgenres?: SubGenre[];
}

// The processed data types that will include React components (icons) for display
export interface DisplaySubGenre extends SubGenre {}

export interface DisplayGenre extends Genre {
  icon: (props: { className?: string }) => React.JSX.Element;
  subgenres?: DisplaySubGenre[];
}

// The final structure of our processed data, an array of display-ready genres
export type GenreBlueprint = DisplayGenre[];

// A path to uniquely identify any genre or subgenre, e.g., ['Pop', 'Electro-Pop']
export type GenrePath = [string, string?];
