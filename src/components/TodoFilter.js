import React, { Component } from 'react';

class TodoFilter extends Component {
	handleClick = (e) => {
		e.preventDefault();
		if (e.target.id === 'done') {
			this.props.filterCompleteProps('COMPLETE');
		} else if (e.target.id === 'undone') {
			this.props.filterActiveProps('INCOMPLETE');
		} else this.props.filterAllProps('ALL');
	};

	render() {
		return (
			<div className="button-filter">
				<button id="all" onClick={this.handleClick}>
					All
				</button>
				<button id="undone" onClick={this.handleClick}>
					Active
				</button>
				<button id="done" onClick={this.handleClick}>
					Completed
				</button>
			</div>
		);
	}
}
export default TodoFilter;
