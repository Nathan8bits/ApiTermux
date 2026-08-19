const numeroUsuario = document.getElementById('idUsuario');
const btnGet = document.getElementById('btnGet');
const btnGetTodos = document.getElementById('btnGetTodos');
const content = document.getElementById('context');
const consoleHtml = document.getElementById('console');

const URL = "http://localhost:3000/usuarios";

const fetchApi = (value) => {
	//const urlMontada = URL + "/" + value;

	const result = fetch(`${URL}${value}`)
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		return data;
	})

	return result;
	}


btnGet.addEventListener('click', async (event) => {
	event.preventDefault();
	
	consoleHtml.textContent = `${URL}/${numeroUsuario.value}`;

	//console.log(`${URL}/${numeroUsuario.value}`);

	//const result = await fetchApi(`/${numeroUsuario.value}`);

	const result = await fetchApi(`/${numeroUsuario.value}`);
	content.textContent = `${JSON.stringify(result, undefined, 2)}`;
})

btnGetTodos.addEventListener("click", async (event) => {
	event.preventDefault();

		
	consoleHtml.textContent = URL;
	const result = await fetchApi("");
	content.textContent = `${JSON.stringify(result, undefined, 2)}`;
})
