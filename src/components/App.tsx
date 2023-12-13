"use client";
import { useState } from "react";
import { TodoItem } from "@/components/TodoItem";
import { Select } from "@/components/Select";
import { filters, type Filter, options } from "@/constants/filter";
import { useTodos } from "@/hooks/useTodos";
import { confirm } from "@/dev/confirm";

export function App() {
  const [text, setText] = useState("");
  const {
    addTodo,
    editTodo,
    checkTodo,
    removeTodo,
    handleFilter,
    handleEmpty,
    filter,
    canHandleEmpty,
    filteredTodos,
  } = useTodos();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = () => {
    if (text) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <main className="mx-auto max-w-2xl">
      <header className="m-6 flex h-24 items-center justify-between px-4">
        <div className="p-4 text-xl">マイタスク</div>
        <Select
          options={[...options]}
          defaultValue={"all"}
          onChange={(e) => handleFilter(e.target.value as Filter)}
        />
      </header>
      <div className="mx-auto max-w-4xl space-y-0 p-4">
        {filter === "removed" ? (
          <button
            onClick={() => confirm(handleEmpty)}
            disabled={canHandleEmpty}
            className="items-right border-1 rounded-md bg-gray-600 px-4 py-2 text-xs font-bold text-gray-100 hover:text-gray-400"
          >
            ゴミ箱を空にする
          </button>
        ) : (
          filter !== "checked" && (
            <form
              className="flex h-16 items-center justify-between border-b"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <input
                type="text"
                value={text}
                onChange={(e) => handleChange(e)}
                placeholder="タスクの追加..."
                className="w-full p-1 focus:outline-none"
              />
              <button
                type="submit"
                className="flex w-14 shrink-0 items-center justify-center "
              >
                <div className="relative h-5 w-5">
                  <div className="absolute left-1/2 top-0 h-5 w-0.5 -translate-x-1/2 bg-slate-600" />
                  <div className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-slate-600" />
                </div>
              </button>
            </form>
          )
        )}
        <ul>
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              editTodo={editTodo}
              checkTodo={checkTodo}
              removeTodo={removeTodo}
            />
          ))}
        </ul>
      </div>
    </main>
  );
}
