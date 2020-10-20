import React from 'react';
import TodosList from './TodosList';
import Header from './Header';
import InputTodo from './InputTodo';
import TodoFilter from './TodoFilter';
import { v4 as uuidv4 } from 'uuid';
class TodoContainer extends React.Component {
	state = {
		filter: 'ALL',
		todos: [],
		done: [],
		undone: [],
	};

	handleChange = (id) => {
		this.setState({
			todos: this.state.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			}),
		});
	};

	delTodo = (id) => {
		this.setState({
			todos: [
				...this.state.todos.filter((todo) => {
					return todo.id !== id;
				}),
			],
		});
	};

	addTodoItem = (title) => {
		const newTodo = {
			id: uuidv4(),
			title: title,
			completed: false,
		};
		this.setState({
			todos: [...this.state.todos, newTodo],
		});
	};

	filterComplete = (complete) => {
		if (complete === 'COMPLETE') {
			this.setState({
				done: [
					...this.state.todos.filter((todo) => {
						return todo.completed === true;
					}),
				],
				filter: 'COMPLETE',
			});
		}
		console.log('done: ' + this.state.done);
	};

	filterActive = (incomplete) => {
		if (incomplete === 'INCOMPLETE') {
			this.setState({
				undone: [
					...this.state.todos.filter((todo) => {
						return todo.completed === false;
					}),
				],
				filter: 'INCOMPLETE',
			});
		}
		console.log('undone: ' + this.state.undone);
	};

	filterAll = (all) => {
		if ((all = 'ALL')) {
			this.setState({
				todos: this.state.todos,
				filter: 'ALL',
			});
		}
		console.log('todos: ' + this.state.todos);
	};
	render() {
		return (
			<div className="container">
				<Header />
				<InputTodo addTodoProps={this.addTodoItem} />
				<TodosList
					state={this.state}
					filter={this.state.filter}
					handleChangeProps={this.handleChange}
					deleteTodoProps={this.delTodo}
				/>
				<TodoFilter
					filterCompleteProps={this.filterComplete}
					filterActiveProps={this.filterActive}
					filterAllProps={this.filterAll}
				/>
			</div>
		);
	}
}

export default TodoContainer;
