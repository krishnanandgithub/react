import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use("*", cors());

const todoApp = {
  todos: [
    {
      id: 1,
      title: "Todo List",
      tasks: [
        { id: 1, task: "Learn React", done: false },
        { id: 2, task: "Learn JSX", done: false },
      ],
    },
    {
      id: 2,
      title: "Shopping List",
      tasks: [{ id: 1, task: "Buy Milk", done: false }],
    },
  ],
};

app.get("/api/todos", (c) => c.json(todoApp));

Deno.serve(app.fetch);
