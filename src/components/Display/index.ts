export const Display = {
  flex: "display: flex",
  column: "flex-direction: column",
  flexColumn: "display: flex; flex-direction: column",
  block: "display: block",
  inline: "display: inline",
  contents: "display: contents",
  grid: "display: grid",
  inlineBlock: "display: inline-block",
  inlineFlex: "display: inline-flex",
  inlineGrid: "display: inline-grid",
  inlineTable: "display: inline-table",
  runIn: "display: run-in",
  table: "display: table",
  tableCaption: "display: table-caption",
  tableColumnGroup: "display: table-column-group",
  tableHeaderGroup: "display: table-header-group",
  tableFooterGroup: "display: table-footer-group",
  tableRowGroup: "display: table-row-group",
  tableCell: "display: table-cell",
  tableColumn: "display: table-column",
  tableRow: "display: table-row",
  none: "display: none",
  initial: "display: initial",
  inherit: "display: inherit",
} as const;

export type DisplayType = typeof Display;
export type IDisplay = keyof DisplayType;
