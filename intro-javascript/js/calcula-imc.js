var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector(".info-imc");

  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);

  if(!pesoValido) {
    pesoValido = false;
    tdImc.textContent = "Peso Inválido";
    paciente.classList.add("paciente-invalido");
  }

  if(!alturaValida) {
    alturaValida = false;
    tdImc.textContent = "Altura Inválida";
    paciente.classList.add("paciente-invalido");
  }

  if (alturaValida && pesoValido) {
    var imc = calculaImc(peso,altura);
    tdImc.textContent = imc;
  }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function validaPeso(peso) {
  if (peso > 0 && peso < 500) {
    return true;
  }else {
    return false;
  }
}

function validaAltura(altura) {
  if (altura > 0 && altura < 3.00) {
    return true;
  }else {
    return false;
  }
}

function validaPaciente(paciente) {

  var erros = [];

  if (paciente.nome.legth == 0) {
    erros.push("O nome não pode ser em branco");
  }

  if(paciente.gordura.length == 0) {
    erros.push("A gordura não pode ficar em branco");
  }

  if(paciente.peso.length == 0){
    erro.push("O peso não pode ficar em branco");
  }

  if (paciente.altura.length == 0) {
    erros.push("A altura não pode ficar em branco");
  }

  if (!validaPeso(paciente.peso)) {
    erros.push("Peso é inválido");
  }

  if(!validaAltura(paciente.altura)) {
    erros.push("Altura é inválida");
  }

  return erros;
}

function exibeMensagensDeErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";

  erros.forEach(function(erro) {
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}
