import React from 'react';
//using Function component
/*function TodoItem(props) {
	return (
		<>
			<li>{props.todo.title}</li>;
		</>
	);
}
*/

//using Class-based component

class TodoItem extends React.Component {
	render() {
		return (
			<li className="todo-item">
				<input
					className="checkbox"
					type="checkbox"
					checked={this.props.todo.completed}
					onChange={() => this.props.handleChangeProps(this.props.todo.id)}
				/>
				{this.props.todo.title}
				<button onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>Delete</button>
			</li>
		);
	}
}

export default TodoItem;
