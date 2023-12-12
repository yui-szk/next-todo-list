import type { SelectHTMLAttributes } from "react";

type Props = {
  options: { value: string; name: string }[];
} & SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ options, defaultValue, onChange }: Props) {
  return (
    <select
      defaultValue={defaultValue}
      onChange={onChange}
      className="cursor-pointer border-b border-r p-1 focus:outline-0"
    >
      {options.map(({ value, name }) => (
        <option key={value} value={value}>
          {name}
        </option>
      ))}
    </select>
  );
}
