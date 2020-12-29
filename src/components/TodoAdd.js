import "./Todo.css";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default class TodoAdd extends Component {
  state = {
    todoText: "",
  };

  onChange = (event) => {
    this.setState({ todoText: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addTodoList(this.state.todoText);
    this.setState({ todoText: "" });
  };

  render() {
    return (
      <div className="todo-card todo-input">
        <FontAwesomeIcon className="todo-icon" icon={faPlus} />
        <form onSubmit={this.onSubmit}>
          <input
            name="add"
            type="text"
            placeholder="Type here. Press enter to add."
            value={this.state.todoText}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}
