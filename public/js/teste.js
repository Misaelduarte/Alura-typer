var nomeMae = $("#nome-mae");
var nomePai = $("#nome-pai");

nomeMae.on('input', function () {
  nomePai.attr('disabled', true);

  var xptoMae = nomeMae.val().length;
  if (xptoMae < 1) {
    nomePai.attr('disabled', false);
  }
})

nomePai.on('input', function () {
  nomeMae.attr('disabled', true);

  var xptoPai = nomePai.val().length;
  if (xptoPai < 1) {
    nomeMae.attr('disabled', false);
  }
})

/****************************************************************/