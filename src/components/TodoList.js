import { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo, i) => (
          <Todo
            key={`todo-${i}`}
            entry={i}
            data={{ ...todo }}
            onStatusChange={this.props.onStatusChange}
            onDelete={this.props.onDelete}
          />
        ))}
      </div>
    );
  }
}
