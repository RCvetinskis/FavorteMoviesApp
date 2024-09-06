export interface Route {
  href?: string;
  label?: string;
  active?: boolean;
  Component: React.ComponentType<any>;
}

export type MovieApiResponse = {
  results: any[];
  total_results: number;
  total_pages: number;
};

export type SortOptions = {
  value: string;
  label: string;
};

export type Genre = {
  id: number;
  name: string;
};
export type Language = {
  iso_639_1: string;
  english_name: string;
  name: string;
};

export type KeyWordType = {
  id: number;
  name: string;
};
