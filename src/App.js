import "./App.css";
import { Component } from "react";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";

export default class App extends Component {
  state = {
    todos: [
      {
        text: "This is the first todo element.",
        completed: true,
      },
    ],
    remaining: 0,
  };

  addTodo = (todoText) => {
    let newTodo = { text: todoText, completed: false };
    this.setState((prevState) => ({
      todos: [...prevState.todos, newTodo],
      remaining: prevState.remaining + 1,
    }));
  };

  onStatusChange = (index, status) => {
    this.setState((prevState) => {
      prevState.todos[index].completed = status;
      return {
        todos: [...prevState.todos],
        remaining: status ? prevState.remaining - 1 : prevState.remaining + 1,
      };
    });
  };

  onDelete = (index) => {
    this.setState((prevState) => {
      let status = prevState.todos[index].completed;
      return {
        todos: [...prevState.todos.filter((item, i) => i !== index)],
        remaining: status ? prevState.remaining : prevState.remaining - 1,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>TODO APP</h1>
        </header>
        <div className="todo-stats">
          Total: {this.state.todos.length} tasks, {this.state.remaining}{" "}
          remaining
        </div>
        <TodoAdd addTodoList={this.addTodo} />
        <TodoList
          todos={this.state.todos}
          onStatusChange={this.onStatusChange}
          onDelete={this.onDelete}
        />
        <footer>&copy; Neeraj 2020-21. All rights reserved</footer>
      </div>
    );
  }
}
