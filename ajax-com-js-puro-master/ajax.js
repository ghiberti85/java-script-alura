let inputCep = document.querySelector('input[id=cep]');
inputCep.addEventListener('change', buscaCep);

function preencheCampos(json) {
  document.querySelector('input[id=logradouro]').value = json.logradouro;
  document.querySelector('input[id=bairro]').value = json.bairro;
  document.querySelector('input[id=complemento]').value = json.complemento;
  document.querySelector('input[id=cidade]').value = json.localidade;
  document.querySelector('input[id=uf]').value = json.uf;
}

function buscaCep () {
  let inputCep = document.querySelector('input[id=cep\]');
  let cep = inputCep.value.replace('-', '');
  let url = 'http://viacep.com.br/ws/' + cep + '/json';
  let xhr = new XMLHttpRequest();

  xhr.open('GET', url, true);

  xhr.onreadystatechange = function() {
    if(xhr.readyState == 4) {
      if (xhr.status == 200) {
        preencheCampos(JSON.parse(xhr.responseText));
      }
    }
  }
  xhr.send();
}
