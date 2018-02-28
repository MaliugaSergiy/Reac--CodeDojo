import React from 'react';
import Checkbox from "./Checkbox";

function Stats(props) {
    let total = props.todos.length,
        completed = props.todos.filter(todo => todo.completed).length,
        notCompleted = total - completed;
    return(
        <table className="stats">
            <tbody>
            <tr>
                <td>Всего задач:</td>
                <td>{total}</td>
            </tr>
            <tr>
                <td>Выполнено:</td>
                <td>{completed}</td>
            </tr>
            <tr>
                <td>Осталось:</td>
                <td>{notCompleted}</td>
            </tr>
            </tbody>
        </table>
    );
}

Stats.propTypes = {
    todos: React.PropTypes.array.isRequired
};


export default Stats;