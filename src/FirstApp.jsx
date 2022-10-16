const get_sum = (a,b) => {
	return a+b;
}

export const FirstApp = () => {
	return (
		<>
			<h1>Javier tus digitos suman { get_sum(5,11) }</h1>
			<p>Soy un subtitulo</p>
		</>
	);
}