export const options = [
  { value: "all", name: "全て" },
  { value: "checked", name: "完了済" },
  { value: "unchecked", name: "未完了" },
  { value: "removed", name: "削除" },
] as const;

export const filters = options.map(({ value }) => value);
export type Filter = (typeof filters)[number];
