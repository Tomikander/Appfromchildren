import { useState } from 'react';

export default function TodoPage() {
	const[tasks, setTasks] = useState([]);
	const[inputValue, setInputValue] = useState('');

	const addTask = () => {
		if (inputValue.trim()) {
			const newTask = {
				id: Date.now(),
				text: inputValue,
				completed: false
			};

			setTasks([...tasks, newTask]);
			setInputValue('');
		}
	};

	const toggleComplete = (id) => {
		setTasks(
			tasks.map((task) => 
				task.id === id ? {...task, completed: !task.completed } : task
			)
		);
	};
	const deleteTask = (id) => {
		setTasks(tasks.filter((task) => task.id !== id));
	};

	return (
		<div className='container mt-5'>
			<h2>📝 To-Do список</h2>

			<div className='input-group mb-3'>
				<input 
					type="text"
          className="form-control"
          placeholder="Что нужно сделать?"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
				/>
				<button className="btn btn-success" onClick={addTask}>
					Добавить
				</button>
			</div>	
				<ul className='list-group'>
					{tasks.map((task) => 
						<li 
						key={task.id}
            className={`list-group-item d-flex justify-content-between align-items-center ${
              task.completed ? "list-group-item-success" : ""
            }`}
            onClick={() => toggleComplete(task.id)}
            style={{ cursor: "pointer", userSelect: "none" }}
						>
						<span>{task.text}</span>
						<button 
							 className="btn btn-danger btn-sm"
							 onClick={(e) => {
								 e.stopPropagation();
								 deleteTask(task.id);
							 }}
						>
							❌	
						</button>
						</li>
					)}
				</ul>
				{tasks.length === 0 && (
        <p className="mt-3 text-muted">Список дел пустой</p>
      		)}
		</div>
	)
}