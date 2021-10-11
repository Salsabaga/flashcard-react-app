import { useState } from "react";
import hiragana from "../hiragana";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const CreateCard = ({ addItm, validate }) => {
	const [inputWord, setInputWord] = useState({
		english: "",
		japanese: "",
	});

	const [errors, setErrors] = useState({});

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
						className={`input-style ${errors.english ? "err" : ""}`}
						name="english"
						placeholder="Type here"
						type="text"
						onChange={handleWordChange}
						value={inputWord.english}
					/>
					{errors.english && <div className="error-msg">{errors.english}</div>}
					<input
						className={`input-style ${errors.japanese ? "err" : ""}`}
						name="japanese"
						placeholder="Your translated word here"
						onChange={handleWordChange}
						value={inputWord.japanese}
					></input>
					{errors.japanese && (
						<div className="error-msg">{errors.japanese}</div>
					)}

					<Zoom in={true}>
						<Fab
							className="btn-web"
							onClick={(event) => {
								event.preventDefault();
								setErrors(validate(inputWord));
								if (inputWord.english && inputWord.japanese) {
									addItm(inputWord);
									setInputWord({
										english: "",
										japanese: "",
									});
								}
							}}
						>
							<AddIcon />
						</Fab>
					</Zoom>
				</form>

				<div>
					<div id="keybd-label">No Keyboard? No Problem, Click Here!</div>
					<Button
						className="btn-web"
						variant="outlined"
						onClick={enableKeyboard}
					>
						{keyboardChange ? "Disable" : "Enable"}
					</Button>
					{keyboardChange && (
						<div id="hira-btns">
							{hiragana.map((x) => {
								return (
									<button
										className="hiragana"
										value={x}
										onClick={addHira}
										lang="jap"
									>
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
