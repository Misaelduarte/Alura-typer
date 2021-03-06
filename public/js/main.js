var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(function () {
  atualizaTamanhoFrase();
  inicializaContadores();
  inicializaCronometro();
  $("#botao-reiniciar").click(reiniciaJogo);
  inicializaMarcadores();
});

function atualizaTamanhoFrase() {
  var frase = $(".frase").text();
  var numPalavras = frase.split(" ").length;
  var tamanhoFrase = $("#tamanho-frase");
  tamanhoFrase.text(numPalavras);
}

function inicializaContadores() {
  campo.on("input", function () {
    var conteudo = campo.val();
    var qtdPalavras = conteudo.split(/\S+/).length - 1;

    $("#contador-palavras").text(qtdPalavras);

    var qtdCaracteres = conteudo.length;
    $("#contador-caracteres").text(qtdCaracteres);
  });
}

function inicializaCronometro() {
  var tempoRestante = $("#tempo-digitacao").text();
  campo.one("focus", function () {
    var cronometroID = setInterval(() => {
      $("#botao-reiniciar").attr("disabled", true)
      tempoRestante--;
      $("#tempo-digitacao").text(tempoRestante);
      if (tempoRestante < 1) {
        campo.attr("disabled", true);
        clearInterval(cronometroID);
        $("#botao-reiniciar").attr("disabled", false)
        campo.toggleClass("campo-desativado");
      }
    }, 1000);
  });
}

function inicializaMarcadores() {
  var frase = $(".frase").text();
  campo.on("input", function () {
    var digitado = campo.val();
    var comparavel = frase.substr(0, digitado.length);
    console.log("Digitado:" + digitado);
    console.log("Frase C.:" + comparavel);

    if (digitado == comparavel) {
      campo.addClass("borda-verde");
      campo.removeClass("borda-vermelha");
    } else {
      campo.addClass("borda-vermelha");
      campo.removeClass("borda-verde");
    }
  });
}

function reiniciaJogo() {
  campo.attr("disabled", false);
  campo.val("");
  $("#contador-palavras").text("0");
  $("#contador-caracteres").text("0");
  $("#tempo-digitacao").text(tempoInicial);
  inicializaCronometro();
  campo.toggleClass("campo-desativado");
  campo.removeClass("borda-verde");
  campo.removeClass("borda-vermelha");
}