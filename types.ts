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
