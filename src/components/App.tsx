"use client";
import { useState } from "react";
import { TodoItem } from "@/components/TodoItem";
import { Select } from "@/components/Select";
import { filters, type Filter } from "@/constants/filter";
import { useTodos } from "@/hooks/useTodos";

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
    if (!text) return;
    addTodo(text);
    setText("");
  };

  return (
    <main className="max-w-2xl mx-auto">
      <header className="h-24 flex justify-between items-center px-4">
        マイタスク
        <Select
          options={filters.map((v) => ({ value: v, name: v }))}
          defaultValue={"all"}
          onChange={(e) => handleFilter(e.target.value as Filter)}
        />
      </header>
      <div className="p-4 mx-auto max-w-4xl space-y-10">
        {filter === "削除済" ? (
          <button onClick={handleEmpty} disabled={canHandleEmpty}>
            ゴミ箱を空にする
          </button>
        ) : (
          filter !== "完了済" && (
            <form
              className="flex space-x-3"
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <input
                type="text"
                value={text}
                onChange={(e) => handleChange(e)}
                className="border border-slate-700 p-1"
              />
              <input
                type="submit"
                value="Add"
                onSubmit={handleSubmit}
                className="border border-slate-600 p-1"
              />
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
