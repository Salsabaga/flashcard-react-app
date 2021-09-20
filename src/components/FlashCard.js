import { useState } from "react";

const FlashCard = ({ id, english, japanese, delItem }) => {
	const [onMemory, setOnMemory] = useState(true);

	const changeMode = () => {
		setOnMemory((prevValue) => {
			return !prevValue;
		});
	};

	return (
		<div
			className="flashCards"
			onClick={changeMode}
			style={{ backgroundColor: "#719FB0" }}
		>
			{onMemory ? (
				<div className="cardText" style={{ fontWeight: 700 }}>
					{english}
				</div>
			) : (
				<div className="cardText">{japanese}</div>
			)}
			<button
				onClick={() => {
					delItem(id);
				}}
				id="delete-btn"
			>
				DELETE
			</button>
		</div>
	);
};

export default FlashCard;
