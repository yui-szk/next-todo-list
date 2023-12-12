import type { SelectHTMLAttributes } from "react";

type Props = {
  options: { value: string; name: string }[];
} & SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ options, defaultValue, onChange }: Props) {
  return (
    <select
      defaultValue={defaultValue}
      onChange={onChange}
      className="p-1 border-b border-r"
    >
      {options.map(({ value, name }) => (
        <option key={value} value={value}>
          {name}
        </option>
      ))}
    </select>
  );
}
