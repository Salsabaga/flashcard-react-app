import { useState } from "react";
import validate from "./validateEntry";
import examples from "./examples";
import Header from "./components/Header";
import FlashCard from "./components/FlashCard";
import CreateCard from "./components/CreateCard";

function App() {
	const [words, setWords] = useState(examples);

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

	return (
		<div id="main-wrapper">
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
				<CreateCard key={0} addItm={addWords} validate={validate} />
			</div>
		</div>
	);
}

export default App;
