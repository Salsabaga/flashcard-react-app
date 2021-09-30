const hiragana = [];

for (let i = 12353; i < 12437; ++i) {
	if (i !== 12433) {
		hiragana.push(String.fromCharCode(i));
	}
}

export default hiragana;
