import React, {Component} from 'react';

import PropTypes from 'prop-types';

class Todoitems extends Component {

  getStyle = () => {
    // if(this.props.todo.completed){
    //   return {
    //     textDecoration: 'line-through'
    //   }
    // }
    // else{
    //   return{
    //     textDecoration: 'none'
    //   }
    // }
    // replacing above if-else loop with ternary operator
    return {
      backgroundColor: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.todo.completed ? 'line-through': 'none'
    }
  }

  // markComplete = (e) => {
  //   console.log(this.props)
  // }

  render(){
    // destructuring
  const  {id, title} = this.props.todo;
  return (
    // This is jsx it would be similar to html but it is jsx.
    <div style={this.getStyle()}>
      <p>
      {/* So within the render method comments are allowed but in order to use
        them within JSX, you have to wrap them in braces and use multi-line
        style comments.*/}
      {/*Here we are going to deal with the events whenever the user click on
     the checkbox it must line-through the todo.title*/}
      <input type="checkbox" onChange=
      {this.props.markComplete.bind(this, id)}/>{' '}
        { title }
        <button style={btnStyle} onClick={this.props.onDelete.bind(this, id)}>x
        </button>
      </p>
    </div>
  );
}
}

// PropTypes
Todoitems.propTypes = {
  todo: PropTypes.object.isRequired
}

// By creating constant and avoiding inline styling directly inside the style
// attribute.
// const itemStyle = {
//   backgroundColor: '#f4f4f4'
// }

const btnStyle = {
  background: '#ff0000',
  color: '#fff',
  border: 'none',
  padding: '5px 8px',
  borderRadius: '50%',
  cursor: 'pointer',
  float: 'right',
}

Todoitems.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
}


export default Todoitems;

// We can do inline styling in react by putting style attribute in div tag and
// writing the property inside double curly braces. Eg.
// <div style={{ backgroundColor: '#f4f4f4' }}>
//   <p>{ this.props.todo.title }</p>
// </div>

// components drilling really important concept.
// destructuring concepts to pull the variable out
