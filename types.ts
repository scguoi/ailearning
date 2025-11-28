
export enum SlideType {
  COVER = 'COVER',
  LIST = 'LIST',
  SPLIT = 'SPLIT',
  TABLE = 'TABLE',
  GRID = 'GRID',
  CLOSING = 'CLOSING',
  IMAGE_SPLIT = 'IMAGE_SPLIT', // New layout for Text + Generated Image
  SECTION_HEADER = 'SECTION_HEADER' // New layout for section breaks
}

export interface SlideContent {
  title: string;
  subtitle?: string;
  points?: string[];
  columns?: {
    leftTitle: string;
    leftPoints: string[];
    rightTitle: string;
    rightPoints: string[];
  };
  table?: {
    headers: string[];
    rows: string[][];
  };
  gridItems?: {
    title: string;
    desc: string;
    icon?: string;
  }[];
  quote?: string;
  imagePrompt?: string; // Prompt for AI image generation
  generatedImage?: string; // Base64 string of the generated image
}

export interface Slide {
  id: number;
  type: SlideType;
  content: SlideContent;
}
