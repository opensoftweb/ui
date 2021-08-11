export const AlignItems = {
  stretch: "align-items: stretch",
  center: "align-items: center",
  start: "align-items: flex-start",
  end: "align-items: flex-end",
  baseline: "align-items: baseline",
  initial: "align-items: initial",
  inherit: "align-items: inherit",
} as const;

export type AlignItemsTypes = typeof AlignItems;
export type IAlignItems = keyof AlignItemsTypes;
