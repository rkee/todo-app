import React from 'react';
import { useSelector } from 'react-redux';

const TotalCompleteItems: React.FC = () => {
	const numberOfTodos = useSelector(state => state.todos.todoItems.length)
	const numberofCompleted = useSelector(state => state.todos.todoItems.filter(todo => todo.completed === true).length)
	
	return <h4 className='mt-3'>Total Complete Items: {`${numberofCompleted}`} / {`${numberOfTodos}`} </h4>;
};

export default TotalCompleteItems;
