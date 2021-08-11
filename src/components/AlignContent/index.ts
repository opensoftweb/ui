export const AlignContent = {
  stretch: "align-content: stretch",
  center: "align-content: center",
  start: "align-content: flex-start",
  end: "align-content: flex-end",
  between: "align-content: space-between",
  around: "align-content: space-around",
  initial: "align-content: initial",
  inherit: "align-content: inherit",
} as const;

export type AlignContentType = typeof AlignContent;
export type IAlignContent = keyof AlignContentType;
