export interface AppRoute {
  path: string;
  element: () => JSX.Element;
  title: string;
  previewIcon: string;
  isProtected: boolean;
}
