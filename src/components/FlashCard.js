import { useState } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		danger: {
			main: "hsl(14, 67%,29%)",
			contrastText: "#fff",
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
					<Button
						variant="contained"
						color="danger"
						onClick={() => {
							delItem(id);
						}}
						id="delete-btn"
					>
						<HighlightOffIcon />
					</Button>
				</ThemeProvider>
			</div>
		</div>
	);
};

export default FlashCard;
