const HiraganaInput = ({ hira }) => {
	return hira.map((x) => {
		return <p>{x}</p>;
	});
};

export default HiraganaInput;
