import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const Task = (props) => (
    <div className="card"
    style={{padding:'15px',margin:'30px'}}
    >
        <div className="card-header">{props.task.username}</div>
        <div className="card-body">
            <h6 className="card-title">{props.task.duration} mins</h6>
            <h4 className="card-text">{props.task.description}</h4>
            <button className="btn btn-secondary">
                <Link to={'/edit/'+props.task._id} style={{color:'white'}}>
                    Edit
                </Link>
            </button>{" "}
            <button className="btn btn-danger"
            onClick={()=>{props.deleteTask(props.task._id)}}
            >
                Delete
            </button>
        </div>
    </div>
);


class TasksList extends Component {
    constructor(props){
        super(props);
        this.state={
            tasks:[],
        };
        this.deleteTask = this.deleteTask.bind(this);
    }

    componentDidMount(){
        axios.get("http://localhost:5000/tasks/")
            .then((res)=>{
                this.setState({tasks:res.data});
            })
            .catch((err)=>{console.log(err)});
    }

    deleteTask(id){
        axios.delete("http://localhost:5000/tasks/"+id)
        .then((res)=>console.log(res.data));

        this.setState({
            tasks: this.state.tasks.filter((ele)=> ele._id !== id )
        })
    }

    taskList(){
        return this.state.tasks.map((currentTask)=>{
            return (
                <Task
                style={{margin:'30px'}}
                task={currentTask}
                deleteTask={this.deleteTask}
                key={currentTask._id}
                />
            )
        })
    }


    render() {
        return (
            <div 
            className="container"
            style={{
                textAlign:'center',
                height:'100vh'
            }}
            >
                {this.taskList()}
            </div>
        );
    }
}

export default TasksList;