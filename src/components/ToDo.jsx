import React from 'react';
import Checkbox from './Checkbox';
import Button from './Button';

class ToDo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        };
    }

    render() {
        if (this.state.editing) {
            return (
                <form className="todo-edit-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="title" defaultValue={this.props.title}/>
                    <Button className="save icon" icon="save" type="submit"/>
                </form>
            )
        } else {
            return (
                <div className={`todo${this.props.completed ? " completed" : ""}`}>
                    <Checkbox
                        checked={this.props.completed}
                        onChange={() => this.props.onStatusChange(this.props.id)}
                    />
                    <span className="todo-title">{this.props.title}</span>
                    <Button className="edit icon" icon="edit"/>
                    <Button className="delete icon" icon={"delete"} onClick={() => this.props.onDelete(this.props.id)}/>

                </div>
            )
        }
    }
}


ToDo.propTypes = {
    // title : React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired,
    onStatusChange: React.PropTypes.func.isRequired,
    onDelete: React.PropTypes.func.isRequired
};


export default ToDo;


//////////////////////////////////-------------------------------


// import React from 'react';
// import Checkbox from './Checkbox';
// import Button from './Button';
//
// function ToDo(props) {
//     return (
//         <div className={`todo${props.completed ? " completed" : ""}`}>
//             <Checkbox checked={props.completed} />
//
//             <span className="todo-title">{props.title}</span>
//
//             <Button className="delete icon" icon="delete" />
//         </div>
//     )
// }
//
// ToDo.propTypes = {
//     title : React.PropTypes.string.isRequired,
//     completed : React.PropTypes.bool.isRequired
// }
//
// export default ToDo;