import type { Todo } from "@/types/todo";
import Image from "next/image";
import localImage from "public/delete.svg";

type Props = {
  todo: Todo;
  editTodo: (args: Pick<Todo, "id" | "value">) => void;
  checkTodo: (args: Pick<Todo, "id" | "checked">) => void;
  removeTodo: (args: Pick<Todo, "id" | "removed">) => void;
};

export function TodoItem({ todo, checkTodo, editTodo, removeTodo }: Props) {
  return (
    <li className="flex h-16 items-center justify-between space-x-4 border-b">
      <input
        type="checkbox"
        disabled={todo.removed}
        checked={todo.checked}
        onChange={() => checkTodo({ id: todo.id, checked: !todo.checked })}
        className="peer h-6 w-6 cursor-pointer"
      />
      <input
        type="text"
        disabled={todo.checked || todo.removed}
        value={todo.value}
        onChange={(e) => editTodo({ id: todo.id, value: e.target.value })}
        className="h-10 w-full bg-white focus:outline-none peer-checked:opacity-50"
      />
      <button
        onClick={() => removeTodo({ id: todo.id, removed: !todo.removed })}
        className="flex h-12 w-14 shrink-0 items-center justify-center rounded bg-gray-200 text-xs font-bold text-gray-600"
      >
        {todo.removed ? (
          "元に戻す"
        ) : (
          <Image src={localImage} alt="delete icon" />
        )}
      </button>
    </li>
  );
}
