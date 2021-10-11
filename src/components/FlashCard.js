import { useState } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		danger: {
			main: "hsl(0, 0%,100%)",
		},
	},
});

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
				<ThemeProvider theme={theme}>
					<DeleteForeverIcon
						variant="contained"
						color="danger"
						onClick={() => {
							delItem(id);
						}}
						id="delete-btn"
					/>
				</ThemeProvider>
			</div>
		</div>
	);
};

export default FlashCard;
