export const filters = ["全て", "完了済", "未完了", "削除済"] as const;
export type Filter = (typeof filters)[number];
