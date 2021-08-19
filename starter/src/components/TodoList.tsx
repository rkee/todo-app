import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoList:React.FC = () => {
	const todos = useSelector((state) => state.todos); // this is a list of objects {id, title, completed}
	// state.todos is one specific SLICE of the store

	return (
		<ul className='list-group'>
			{todos.todoItems.map((todo) => (
				<TodoItem key={todo.id} id={todo.id} title={todo.title} completed={todo.completed} />
			))}
		</ul>
	);
};

export default TodoList;
