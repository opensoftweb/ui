export const JustifyContent = {
  stretch: "justify-content: stretch;",
  center: "justify-content: center;",
  start: "justify-content: flex-start;",
  end: "justify-content: flex-end;",
  between: "justify-content: space-between;",
  around: "justify-content: space-around;",
  initial: "justify-content: initial;",
  inherit: "justify-content: inherit;",
} as const;

export type JustifyContentType = typeof JustifyContent;
export type IJustifyContent = keyof JustifyContentType;
