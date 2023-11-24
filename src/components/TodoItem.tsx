import type { Todo } from "@/types/todo";

type Props = {
  todo: Todo;
  editTodo: (args: Pick<Todo, "id" | "value">) => void;
  checkTodo: (args: Pick<Todo, "id" | "checked">) => void;
  removeTodo: (args: Pick<Todo, "id" | "removed">) => void;
};

export function TodoItem({ todo, checkTodo, editTodo, removeTodo }: Props) {
  return (
    <li className="flex space-x-3">
      <input
        type="text"
        disabled={todo.checked || todo.removed}
        value={todo.value}
        onChange={(e) => editTodo({ id: todo.id, value: e.target.value })}
        className="p-1 border border-slate-700"
      />
      <input
        type="checkbox"
        disabled={todo.removed}
        checked={todo.checked}
        onChange={() => checkTodo({ id: todo.id, checked: !todo.checked })}
      />
      <button
        onClick={() => removeTodo({ id: todo.id, removed: !todo.removed })}
        className="border border-slate-600 p-1"
      >
        {todo.removed ? "Restore" : "Delete"}
      </button>
    </li>
  );
}
