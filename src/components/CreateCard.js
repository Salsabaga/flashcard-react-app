import { useState } from "react";

const CreateCard = ({ addItm, hiragana }) => {
	const [inputWord, setInputWord] = useState({
		english: "",
		japanese: "",
	});

	const [clickedWord, setClickedWord] = useState("");

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

	const addHira = (e) => {
		const clickableInput = e.target.value;
		setClickedWord((prevValue) => {
			return prevValue + clickableInput;
		});
		setInputWord((prevValue) => {
			return {
				...prevValue,
				japanese: clickedWord,
			};
		});
	};

	return (
		<div className="inputContainer">
			<form>
				<div className="inputArea">
					<input
						className="input-style"
						name="english"
						placeholder="Type here"
						type="text"
						onChange={handleWordChange}
						value={inputWord.english}
					/>
					<textarea
						className="input-style"
						name="japanese"
						placeholder="Your translated word here"
						rows="2"
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
							setClickedWord("");
							event.preventDefault();
						}}
					>
						Add
					</button>
				</div>
			</form>
			{hiragana.map((x) => {
				return (
					<button value={x} onClick={addHira}>
						{x}
					</button>
				);
			})}
		</div>
	);
};

export default CreateCard;
