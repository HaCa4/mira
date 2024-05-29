export enum EColorOptions {
  RED = "#ff4d4f",
  BLACK = "#000000",
  BLUE = "#1890ff",
  GRAY = "#6c757d",
}

export interface ButtonProps {
  title: string;
  variant: "outlined" | "contained";
  color: EColorOptions;
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
}

export enum EMessageVariants {
  SENT = "message sent",
  RECEIVED = "message received",
}

export interface ChatLineProps {
  content: string;
  variant: EMessageVariants;
}

export interface ContentContainerProps {
  children: React.ReactNode;
  direction: "row" | "column";
}

export interface SectionContainerProps {
  children: React.ReactNode;
  title: string;
  button?: React.JSX.Element;
}
