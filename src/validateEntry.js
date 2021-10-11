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

export default validateEntry;
