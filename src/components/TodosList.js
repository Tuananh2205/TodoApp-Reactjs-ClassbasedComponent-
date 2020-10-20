import React from 'react';
import TodoItem from './TodoItem';
class TodosList extends React.Component {
	render() {
		const filter = this.props.filter;
		if (filter === 'ALL') {
			return (
				<div>
					<h3>List of Todo(s)</h3>
					{this.props.state.todos.map((todo) => (
						<TodoItem
							key={todo.id}
							todo={todo}
							handleChangeProps={this.props.handleChangeProps}
							deleteTodoProps={this.props.deleteTodoProps}
						/>
					))}
				</div>
			);
		} else if (filter === 'COMPLETE') {
			return (
				<div>
					<h3>List of Todo(s)</h3>
					{this.props.state.done.map((done) => (
						<TodoItem
							key={done.id}
							todo={done}
							handleChangeProps={this.props.handleChangeProps}
							deleteTodoProps={this.props.deleteTodoProps}
						/>
					))}
				</div>
			);
		} else if (filter === 'INCOMPLETE') {
			return (
				<div>
					<h3>List of Todo(s)</h3>
					{this.props.state.undone.map((undone) => (
						<TodoItem
							key={undone.id}
							todo={undone}
							handleChangeProps={this.props.handleChangeProps}
							deleteTodoProps={this.props.deleteTodoProps}
						/>
					))}
				</div>
			);
		}
	}
}

export default TodosList;
