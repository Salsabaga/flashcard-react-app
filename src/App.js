import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import examples from "./examples";
import hiragana from "./hiragana";
import Header from "./components/Header";
import FlashCard from "./components/FlashCard";
import CreateCard from "./components/CreateCard";
import HiraganaInput from "./components/HiraganaInput";

import Practice from "./Practice";

function App() {
	const [words, setWords] = useState(examples);

	const [randomIndexNumber, setRandomIndexNumber] = useState(0);

	const addWords = (inputWord) => {
		setWords((prevValue) => {
			return [...prevValue, inputWord];
		});
	};

	const deleteNote = (id) => {
		setWords((prevValue) => {
			return prevValue.filter((words, index) => {
				return index !== id;
			});
		});
	};

	const indexGenerator = () => {
		const randomIndexNumber = Math.floor(Math.random() * words.length);
		setRandomIndexNumber(randomIndexNumber);
	};
	return (
		<Router>
			<Header />
			<div id="app-container">
				<div className="flashCards-container">
					{words.map((word, index) => {
						return (
							<FlashCard
								key={index}
								id={index}
								english={word.english}
								japanese={word.japanese}
								delItem={deleteNote}
							/>
						);
					})}
				</div>
				<CreateCard addItm={addWords} hiragana={hiragana} />
			</div>
			<HiraganaInput hira={hiragana} />
		</Router>
	);
}

export default App;
