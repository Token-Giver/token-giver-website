export type Step = {
  id: number;
  title: string;
  subtext: string;
  points: string[];
  illus: string;
  faintText?: string;
};

export type HighlightedTextProps = {
  text: string;
  highlight: string;
  className?: string;
  highlightClassName?: string;
};
