function App() {
	const hello = "Hello World";

	let phrase;
	return (
		<>
			<h1>{phrase = hello.split(' ')}</h1>
			<h1>{(phrase = hello.split("").join("==="))}</h1>
			<h1>{(phrase = hello.split("").join("-"))}</h1>
			<h1>{(phrase = hello.split("").join("/"))}</h1>
			<h1>{(phrase = hello.split("").join("b"))}</h1>
			<h1>{(phrase = hello.split("").reverse().join('x'))}</h1>
			<h1>{(phrase = hello.split("").reverse().join(','))}</h1>
			<h1>{(phrase = hello.split("").reverse().join('='))}</h1>
			<h1>{(phrase = hello.split("").reverse().join('@'))}</h1>
			<h1>{(phrase = hello.split("").reverse().join('bliz'))}</h1>
			
		</>
	);
}

export default App;
