function inserePlacar() {
  var corpoTabela = $(".placar").find("tbody");
  var usuario = "Fernando";
  var numPalavras = $("#contador-palavras").text();

  var linha = novaLinha(usuario, numPalavras);
  linha.find(".botao-remover").click(removeLinha);

  corpoTabela.append(linha);

  $(".placar").slideDown(500);
  scrollPLacar();

}

function novaLinha(usuario, palavras) {
  var linha = $("<tr>");
  var colunaUsuario = $("<td>").text(usuario);
  var colunaPalavras = $("<td>").text(palavras);
  var colunaRemover = $("<td>");

  var link = $("<a>").addClass("botao-remover").attr("href", "#");
  var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

  //Ícone dentro do <a>
  link.append(icone);

  // <a> dentro do <td>
  colunaRemover.append(link);

  //Os três <td> dentro do <tr>
  linha.append(colunaUsuario);
  linha.append(colunaPalavras);
  linha.append(colunaRemover);

  return linha;
}

function removeLinha(event) {
  event.preventDefault();
  var linha = $(this).parent().parent();

  linha.fadeOut(1000);
  setTimeout(function() {
    linha.remove();
  }, 1000);
}

$("#botao-placar").click(mostraPlacar);

function mostraPlacar () {
  $(".placar").stop().slideToggle(600);
}

function scrollPLacar() {
  var posicaoPlcar = $(".placar").offset().top;

  $("body").animate(
    {
      scrollTop: posicaoPlcar + "px"
    }, 1000);
}