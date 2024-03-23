import React, { useState } from "react";

const YourComponent = () => {
	const [inputValue, setInputValue] = useState("");
	const [toDoItems, setToDoItems] = useState([]);

	const handleButtonClick = () => {
		const newItem = {
			id: Math.random().toString(36).substr(2, 9),
			text: inputValue,
		};

		setToDoItems((prevItems) => [...prevItems, newItem]);
		setInputValue("");
	};

	const handleDelete = (id) => {
		setToDoItems((prevItems) => prevItems.filter((item) => item.id !== id));
	};

	const handleEdit = (id) => {
		const newText = prompt("Enter new text:");
		if (newText) {
			setToDoItems((prevItems) =>
				prevItems.map((item) =>
					item.id === id ? { ...item, text: newText } : item
				)
			);
		}
	};

	return (
		<div>
			<input
				id="check"
				type="text"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button id="big" onClick={handleButtonClick}>
				Add Items
			</button>
			<div id="list">
				{toDoItems.map((item) => (
					<div
						key={item.id}
						style={{
							display: "flex",
							justifyContent: "left",
							flexDirection: "row-reverse",
						}}
					>
						<div>{item.text}</div>
						<div>
							<button onClick={() => handleDelete(item.id)}>Delete</button>
							<button onClick={() => handleEdit(item.id)}>Edit</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default YourComponent;
