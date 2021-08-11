export const AlignSelf = {
  auto: "align-self: auto",
  stretch: "align-self: stretch",
  center: "align-self: center",
  start: "align-self: flex-start",
  end: "align-self: flex-end",
  baseline: "align-self: baseline",
  initial: "align-self: initial",
  inherit: "align-self: inherit",
} as const;

export type AlignSelfType = typeof AlignSelf;
export type IAlignSelf = keyof AlignSelfType;
