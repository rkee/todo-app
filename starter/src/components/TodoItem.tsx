import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'redux/store';
import todoSlice from '../redux/todo/todoSlice';
import { Item } from "../redux/todo/types"
import EditableItem from './Editable';

const TodoItem:React.FC<Item> = ({ id, title, completed }) => {
	const dispatch = useDispatch<AppDispatch>();

	const onToggleComplete: React.ChangeEventHandler<HTMLInputElement> = () => {
		dispatch(todoSlice.actions.toggleComplete({
			id: id, 
			title: title,
			completed: !completed
		}));
	}

	const onDelete: React.MouseEventHandler<HTMLButtonElement> = () => {
		dispatch(todoSlice.actions.removeTodo({
			id: id
		}))
	}

	const onEditTitle: React.ChangeEventHandler<HTMLInputElement> = (event) => {
		dispatch(todoSlice.actions.editTitle({
			id: id,
			title: event.target.value,
			completed: completed
		}))
	}

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input type='checkbox' className='mr-3' checked={completed} onChange={onToggleComplete}></input>
					<EditableItem text={title} type='input'>
						<input type = 'text' name='task' value={title} onChange={onEditTitle} />
					</EditableItem>
				</span>
				<button className='btn btn-danger' onClick={onDelete}>Delete</button>
			</div>
		</li>
	);
};

export default TodoItem;