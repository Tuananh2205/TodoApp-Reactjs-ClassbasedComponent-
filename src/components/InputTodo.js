import React, { Component } from 'react';

class InputTodo extends Component {
	state = {
		title: '',
	};

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.addTodoProps(this.state.title);
		this.setState({
			title: '',
		});
	};

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					name="title"
					className="input-text"
					placeholder="Add todo..."
					value={this.state.title}
					onChange={this.onChange}
				/>
				<input type="submit" className="input-submit" value="Submit" />
			</form>
		);
	}
}
export default InputTodo;
