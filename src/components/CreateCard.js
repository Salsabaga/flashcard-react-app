import { useState } from "react";

const CreateCard = ({ addItm }) => {
	const [inputWord, setInputWord] = useState({
		english: "",
		japanese: "",
	});
	const handleWordChange = (event) => {
		const newInput = event.target.value;
		const nameInput = event.target.name;

		setInputWord((prevValue) => {
			return {
				...prevValue,
				[nameInput]: newInput,
			};
		});
	};

	return (
		<div className="inputContainer">
			<form>
				<div className="inputArea">
					<input
						name="english"
						placeholder="type here"
						type="text"
						onChange={handleWordChange}
						value={inputWord.english}
					/>
					<textarea
						name="japanese"
						placeholder="your translated word here"
						rows="3"
						onChange={handleWordChange}
						value={inputWord.japanese}
					></textarea>
					<button
						onClick={(event) => {
							addItm(inputWord);
							setInputWord({
								english: "",
								japanese: "",
							});
							event.preventDefault();
						}}
					>
						Add
					</button>
				</div>
			</form>
		</div>
	);
};

export default CreateCard;
