import { createRoot } from "react-dom/client";
import Todo from "./App.js";
import { type Container } from "react-dom/client";

const root = document.getElementById("root") as Container;

createRoot(root).render(<Todo />);
