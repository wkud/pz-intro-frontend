import React, { Component } from 'react';

class Task extends Component {
  constructor() {
    super();
    this.onChecked = this.onChecked.bind(this);
  }
  state = {
    checked: true
  };
  onChecked(isNowChecked) {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    return (
      <div className="task-item">
        <input type='checkbox' onChange={event=>this.onChecked(event.target.checked)} />
        {this.state.checked ? this.props.text : <del>{this.props.text}</del>}
      </div>
    );
  }
}
export default Task;
