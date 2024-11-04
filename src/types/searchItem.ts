export type SearchItem = {
  label: string;
  content: string[];
  value: string;
  icon: JSX.Element;
  shortcut?: string;
  customOnSelect?: () => void;
};
