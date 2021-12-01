# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Flashcards App Made with React

### Description

This app allows the user to add/delete words to the container/list, one input will allow the user to add English words/phrases and the other input will add Japanese words/phrases, and if the user does not have the Japanese keyboard enabled or installed they can enable the hiragana alphabet to add the characters individually.

Inside the container are the user-inputed flashcards added in a sequential order. The words added will show the English side first, and when clicked the flashcard will flip over to show over the Japanese translated side, using the CSS animation to provide a fluid transition. A delete button is also added inside the flashcard to remove the card from the container.

#### Flashcards V1

This project was built with the knowledge of creating a Notes app from Udemy Courses. Utitlising my knowledge of passing props, managing components and using the spread operator to handle a value change of an input, to further expand the my expertise in React by creating a flashcard app that creates a flashcard used for translation that I have also been practicing, a attempt of recreating Quizlet but at its basic foundation.

#### New ideas I used

##### Empty Data Validation

Reacts framework enabled me to refresh many important aspects of front-end programming, data validation being one example. The issue of form submissions is that empty values could also be added to the flashcards which can really affect user experience and should I incorporate a database to post the entire form, and would involve more error handling at the back-end. So I would create a function with a parameter that would return an object created should it find either input with no value and display it to the screen.

```javascript
const validateEntry = (entry) => {
	let errors = {};

	if (!entry.english) {
		errors.english = "Enter a word";
	}
	if (!entry.japanese) {
		errors.japanese = "Enter your translation";
	}

	return errors;
};
```

What I also needed was to make sure that the value of the input will not reset should one user just input only one value, but also not submit the value on its own.

```javascript
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
```

#### Handle change on input, regardless of type

Handle change I discovered is such a fundamental aspect of React for form submissions, yet one aspect I want to expand on was the use of buttons that would add to the value of the handle change. However, what I wanted to do was, regardless of the value of the input, that it would not change since there are different variations, such as a resetting the input or changing the value. So I would add another function that is independent from the handle change to add on to the value.

```javascript
const addHira = (e) => {
	const clickableInput = e.target.value;

	setInputWord((prevValue) => {
		return {
			...prevValue,
			japanese: inputWord.japanese + clickableInput,
		};
	});
};
```

#### Flipping the Cards

To add the 180 flip of the card is the use of both Javascript and CSS, adding a state on whether the card is flipped or not and by adding on a class name. For the CSS another important property was backface-visibility and setting its value to hidden, based on its definition of whether the back of the element should be visible or not when facing the user, which has now become a fundamental aspect for the flashcard UX which I see myself using more often. In addition, positioning the text inside the elements was almost a daunting experience but thankfully solved using the top and left properties to ensure both sides have centered text.

```css
.flashCards.flip {
	--rotate-card-y: 180deg;
}

.flashCards .front,
.flashCards .back {
	backface-visibility: hidden;
	position: absolute;
	top: 50%;
}

.flashCards .front {
	left: 50%;
	transform: translate(-50%, -50%);
}

.flashCards .back {
	transform: rotateY(180deg) translate(-50%, -50%);
	right: 50%;
}
```

### Approaching new ideas for the next version

While learning of the many functions required to add and delete notes/data, I also added in form validation in order for users not to pass in blank data into the form, as well as keeping the value of the input in either input boxes rather than resetting the values all together. In addition, some clients/users who would be studying a language such as japanese, mandarin or even Arabic would have some trouble typing out the letters since their keyboard suited for the language they want to use is not enabled and would have to go and install it. I had provided an alternative, should they need to, of enabling a keyboard containing all the hiragana characters so users can input the letters of their word inside the translation input area. Other languages will be coming soon but I would also put an alert/modal encouraging users to install a new keyboard from their OS.
