import { useState } from "react";
import hiragana from "../hiragana";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import AddIcon from "@mui/icons-material/Add";

const CreateCard = ({ addItm }) => {
	const [inputWord, setInputWord] = useState({
		english: "",
		japanese: "",
	});

	const [keyboardChange, setKeyBoardChange] = useState(false);

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

		setInputWord((prevValue) => {
			return {
				...prevValue,
				japanese: inputWord.japanese + clickableInput,
			};
		});
	};

	const enableKeyboard = () => {
		setKeyBoardChange((prevValue) => !prevValue);
	};

	return (
		<div className="input-container">
			<div className="input-area">
				<form>
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
					<Zoom in={true}>
						<Fab
							className="btn-web"
							onClick={(event) => {
								addItm(inputWord);
								setInputWord({
									english: "",
									japanese: "",
								});
								event.preventDefault();
							}}
						>
							<AddIcon />
						</Fab>
					</Zoom>
				</form>
				<div>
					<div>No Keyboard? No Problem, Click Here!</div>
					<button className="btn-web" onClick={enableKeyboard}>
						Enable
					</button>
					{keyboardChange && (
						<div>
							{hiragana.map((x) => {
								return (
									<button value={x} onClick={addHira} lang="jap">
										{x}
									</button>
								);
							})}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CreateCard;
