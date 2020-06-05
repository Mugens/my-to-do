import React from 'react';
import './App.scss';
import Header from './components/Header'
import ToDoList from './components/ToDoList'

class ToDo extends React.Component{
  constructor(props){
    super(props);

    this.state={
      date: new Date(),
    }
  }

  getDay = ()=> String(this.state.date.getDate()).padStart(2, '0');
  getMonth = ()=>String(this.state.date.getMonth() + 1).padStart(2, '0');
  getYear = ()=>this.state.date.getFullYear();


  render(){

    return(
      <div className="main">
        <Header day={this.getDay()} month={this.getMonth()} year={this.getYear()}></Header>
        <ToDoList></ToDoList>
      </div>
    )
  }
}

export default ToDo;
