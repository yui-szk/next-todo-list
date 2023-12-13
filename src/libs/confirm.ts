export function confirm(callback: () => void) {
  const result = window.confirm("本当に削除しますか？");

  if (result) callback();
}
