import React from 'react'
import './ToDoList.scss'


export default class ToDoList extends React.Component{
  constructor(props){
    super(props);

    this.state={
      list: [],
      listComleted:[]
    }
    
  }

  comletedTask(event){
    let task = +event.target.dataset.id;
    let completed = this.state.listComleted.slice();
    const index = completed.indexOf(task)
    if(index > -1)
      completed.splice(index,1);
    else
      completed.push(task);
    
    this.setState({
      listComleted: completed
    })
  }
  handleSubmit(e){
    e.preventDefault();
    const task = e.target[0].value;
    e.target[0].value="";
    const list = this.state.list.slice();
    if(task){
      list.push(task);
      this.setState({list:list})
    }
  }
  
  render(){
    let completed = this.state.listComleted.slice();
    let list = this.state.list.map((val, ind)=>{
      return (<ToDoItem key={ind} value={val} completed={completed.includes(ind)} index={ind} delete={this.comletedTask.bind(this)}  ></ToDoItem>)
    });



    return(
      <React.Fragment>
        <ul className='toDoList'>
          {list}
        </ul>
        <form className="toDoList_add" onSubmit={this.handleSubmit.bind(this)}>
          <input className="toDoList_add-text" type="text"/>
        <input className="toDoList_add-btn" type="submit" value="Add" />
      </form>
      </React.Fragment>
    )
  }

}

function ToDoItem(props){
return (
  <li  className={props.completed ? 'completed' : ''} data-id={props.index} onClick={(e)=>props.delete(e)}>
    <input type="checkbox" name={props.value} value={props.value} checked={props.completed ? 'checked' : '' } ></input>
    {props.value}
  </li>
  )
}