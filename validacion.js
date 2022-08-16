//Valida los datos y envia el formulario
const formulario = document.querySelector('.formcontato__form');
const inputs = document.querySelectorAll('.formcontato__input');
const inputsText = document.querySelectorAll('.formcontato__textarea');

const campos = {
	nombre: false,
	email: false,
	asunto: false,
	mensaje: false,
};
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	asunto: /^/,
	mensaje: /^/,
}; //Haz tú validación en javascript acá

const validarFormulario = (e) => {
	switch (e.target.name) {
		case 'nombre':
			validarCampo(expresiones.nombre, e.target, 'nombre');
			break;
		case 'email':
			validarCampo(expresiones.email, e.target, 'email');
			break;
		case 'asunto':
			validarCampo(expresiones.asunto, e.target, 'asunto');
			break;
		case 'mensaje':
			validarCampo(expresiones.mensaje, e.target, 'mensaje');
			break;
	}
};

const validarCampo = (expresion, input, campo) => {
	if (expresion.test(input.value)) {
		input.classList.add('formcontato__inputBien');
		input.classList.remove('formcontato__inputMal');
		campos[campo] = true;
	} else {
		input.classList.add('formcontato__inputMal');
		input.classList.remove('formcontato__inputBien');
		campos[campo] = false;
	}
};

inputs.forEach((input) => {
	input.addEventListener('blur', validarFormulario);
});

inputsText.forEach((input) => {
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	if (campos.nombre && campos.email && campos.asunto && campos.mensaje) {
		formulario.submit();
	} else {
		window.alert('Rellene o corrija los campos requeridos');
	}
});
