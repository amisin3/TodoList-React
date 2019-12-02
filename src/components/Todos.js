import React, {Component} from 'react';

import Todoitems from "./Todoitems";
import PropTypes from 'prop-types';

class Todos extends Component {

  // markComplete = () => {
  //   console.log('Hello')
  // }

  render(){

  return this.props.todos.map((todo) =>(
      <Todoitems key={todo.id} todo={todo} markComplete=
      {this.props.markComplete} onDelete={this.props.onDelete}/>
  ));
    // This is jsx it would be similar to html but it is jsx.
}
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Todos;
