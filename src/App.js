import React, {Component} from 'react';

import './App.css';
import Todos from "./components/Todos";
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
// import uuid from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import About from './components/pages/About';
import axios from 'axios';


class App extends Component {
  state = {
    todos: [
    ]
    }

    componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }));
    }

    // Todo complete
    markComplete = (id) => {
      this.setState({todos: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })});
    }

    // Delete Todo
    onDelete = (id) => {
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(res => this.setState({ todos: [...this.state.todos.filter(todo =>
          todo.id !== id)]}))

    }

    addTodo = (title) => {
      axios.post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false
      })
      .then(res => this.setState({ todos: [...this.state.todos, res.data]}));
    }

  render() {
    // console.log(this.state.todos)
  return (
    // This is jsx it would be similar to html but it is jsx
    <Router>
    <div className="App">
      <div className="container">
      <Header/>
      <Route exact path="/" render={props => (
        <React.Fragment>
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete}
          onDelete={this.onDelete}/>
        </React.Fragment>
      )} />
      <Route path="/about" component={About} />
      </div>
    </div>
    </Router>
  );
 }
}

export default App;
