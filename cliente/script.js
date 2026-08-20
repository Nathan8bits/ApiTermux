const numeroUsuario = document.getElementById('idUsuario');
const btnGet = document.getElementById('btnGet');
const btnGetTodos = document.getElementById('btnGetTodos');
const content = document.getElementById('context');
const consoleHtml = document.getElementById('console');
const listaUsuarios = document.querySelector("#listaUsuarios");

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
	GetUsuariosId(numeroUsuario.value);
})

btnGetTodos.addEventListener("click", async (event) => {
	event.preventDefault();
	GetTodos();
})

const render = (lista) => {
	listaUsuarios.innerHTML = "";

	lista.forEach((item) => {	
		const li = document.createElement("li");	
		li.textContent = `nome: ${item.nome}, idade: ${item.idade}`;	
		listaUsuarios.appendChild(li);
		
	})
}

const GetTodos = async () => {	
	consoleHtml.textContent = URL;

	const result = await fetchApi("");
	content.textContent = `${JSON.stringify(result, undefined, 2)}`;
	render(result);
}

const GetUsuariosId = async (value) => {
	consoleHtml.textContent = `${URL}/${value}`;

	const result = await fetchApi(`/${value}`);
	content.textContent = `${JSON.stringify(result, undefined, 2)}`;

	render(result);
}
