import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import todoSlice from '../redux/todo/todoSlice';

// const a = "asdf";

// type AddTodoFormProps = {
// 	prop1: string;
// 	prop2: string[];
// 	prop3: (a: string, b?: number) => boolean | void
// }

const AddTodoForm: React.FC = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();

	const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
		event.preventDefault();
		if (value === '') return;		
		// which function is this "addTodo"? (I assume it's todoSlice.actions in todoSlice.js but not sure)
		dispatch(todoSlice.actions.addTodo({
			title: value 	// this object being passed into addTodo is called the payload
		}));
		console.log('user entered: ' + value);
		setValue('');
	};

	const onChange: React.ChangeEventHandler<HTMLInputElement> = React.useCallback((event) => {
		setValue(event.target.value);
	},[]);

	return (
		<form onSubmit={onSubmit} className='form-inline mt-3 mb-3'>
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className='form-control mb-2 mr-sm-2'
				placeholder='Add todo...'
				value={value}
				onChange={onChange}
			></input>

			<button type='submit' className='btn btn-primary mb-2'>
				Submit
			</button>
		</form>
	);
};

export default AddTodoForm;
