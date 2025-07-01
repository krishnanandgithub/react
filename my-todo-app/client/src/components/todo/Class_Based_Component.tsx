import { Component } from "react";
import "./App.css";

class Task extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const msg = (
      <span
        style={
          this.props.done
            ? { textDecoration: "line-through", color: "darkgray" }
            : {}
        }
      >
        {this.props.task}
      </span>
    );

    return (
      <p
        className="todo-item"
        onClick={this.props.toggle(this.props.taskId, this.props.todoId)}
      >
        {msg}
      </p>
    );
  }
}

class Tasks extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.tasks.map((task) => {
          return (
            <Task
              key={task.taskId}
              taskId={task.taskId}
              task={task.task}
              done={task.done}
              toggle={this.props.toggle}
              todoId={this.props.todoId}
            />
          );
        })}
      </div>
    );
  }
}

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.setState(() => {
      if (event.key === "Enter" && event.target.value) {
        this.props.addItem(event.target.value, this.props.todoId);

        return { value: "" };
      }
    });
  }

  render() {
    return (
      <input
        type="text"
        placeholder={this.props.placeholder || "Add a new task"}
        value={this.state.value}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}

class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todo">
        <h1 className="title">{this.props.title}</h1>
        <Input addItem={this.props.addItem} todoId={this.props.todoId} />
        <Tasks
          tasks={this.props.tasks}
          toggle={this.props.toggle}
          todoId={this.props.todoId}
        />
      </div>
    );
  }
}

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      id: 1,
    };
    this.addTodo = this.addTodo.bind(this);
    this.addItem = this.addItem.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
  }

  addItem(task, todoId) {
    this.setState((prev) => {
      const todo = prev.todos.find((t) => t.todoId === todoId);
      const newTask = { taskId: this.state.id++, task, done: false };
      todo.tasks.push(newTask);
      return { todos: [...prev.todos] };
    });
  }

  toggleStatus(taskId, todoId) {
    return () => {
      this.setState((prev) => {
        const todo = prev.todos.find((t) => t.todoId === todoId);
        const task = todo.tasks.find((t) => t.taskId === taskId);
        task.done = !task.done;

        return { todos: [...prev.todos] };
      });
    };
  }

  addTodo(todo) {
    this.setState((prev) => {
      const newTodo = { todoId: this.state.id++, title: todo, tasks: [] };
      return { todos: [...prev.todos, newTodo] };
    });
  }

  render() {
    return (
      <div className="todos">
        <Input
          addItem={this.addTodo}
          placeholder="Add a new Todo..."
          className="todo-card"
        />
        {this.state.todos.map((todo) => {
          return (
            <Todo
              addItem={this.addItem}
              title={todo.title}
              tasks={todo.tasks}
              todoId={todo.todoId}
              toggle={this.toggleStatus}
            />
          );
        })}
      </div>
    );
  }
}

export default Todos;
