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
    <li className="h-16 flex border-b justify-between items-center space-x-4">
      <input
        type="checkbox"
        disabled={todo.removed}
        checked={todo.checked}
        onChange={() => checkTodo({ id: todo.id, checked: !todo.checked })}
        className="w-5 h-5"
      />
      <input
        type="text"
        disabled={todo.checked || todo.removed}
        value={todo.value}
        onChange={(e) => editTodo({ id: todo.id, value: e.target.value })}
        className="w-full"
      />
      <button
        onClick={() => removeTodo({ id: todo.id, removed: !todo.removed })}
        className="shrink-0"
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
