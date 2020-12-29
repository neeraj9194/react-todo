import "./Todo.css";
import { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";

export default class Todo extends Component {
  onClick = () => {
    this.props.onStatusChange(this.props.entry, !this.props.data.completed);
  };

  onDelete = () => {
    this.props.onDelete(this.props.entry);
  };

  render() {
    return (
      <div className="todo-card">
        <div onClick={this.onClick}>
          <FontAwesomeIcon
            className={
              this.props.data.completed === true
                ? "todo-icon check-icon-checked"
                : "todo-icon check-icon"
            }
            icon={faCheck}
          />
        </div>
        <div
          className={
            this.props.data.completed === true
              ? "todo-text todo-text-done"
              : "todo-text"
          }
        >
          {this.props.data.text}
        </div>
        <div onClick={this.onDelete}>
          <FontAwesomeIcon className="todo-icon" icon={faTrash} />
        </div>
      </div>
    );
  }
}
