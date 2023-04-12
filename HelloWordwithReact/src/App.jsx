function App() {
	const hello = "Hello World";

	return (
		<>
			<h1>{hello.split(" ").reverse()}</h1>
			<h1>{hello.split("").join("===")}</h1>
			<h1>{hello.split("").join("-")}</h1>
			<h1>{hello.split("").join("/")}</h1>
			<h1>{hello.split("").join("b")}</h1>
			<h1>{hello.split("").reverse().join("x")}</h1>
			<h1>{hello.split("").reverse().join(",")}</h1>
			<h1>{hello.split("").reverse().join("=")}</h1>
			<h1>{hello.split("").reverse().join("@")}</h1>
			<h1>{hello.split("").reverse().join("bliz")}</h1>
		</>
	);
}

export default App;
