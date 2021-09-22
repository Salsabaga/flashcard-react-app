import { useState } from "react";

const FlashCard = ({ id, english, japanese, delItem }) => {
	const [onFlip, setOnFlip] = useState(false);

	const changeMode = () => {
		setOnFlip((prevValue) => {
			return !prevValue;
		});
	};

	return (
		<div>
			<div
				className={`flashCards ${onFlip ? "flip" : ""}`}
				onClick={changeMode}
			>
				<div className="front">{english}</div>
				<div className="back">{japanese}</div>
			</div>
			<div className="btn-area">
				<button
					onClick={() => {
						delItem(id);
					}}
					id="delete-btn"
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default FlashCard;
