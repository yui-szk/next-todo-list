import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ ...rest }: Props) {
  return (
    <button
      className={`border border-slate-600 p-1 ${rest.className}`}
      {...rest}
    />
  );
}
