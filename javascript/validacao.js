function validarDados() {
  var NomeMensagem = document.getElementById("NomeMensagem");
  var TextoNome = document.getElementById("TextoNome");
  var SobrenomeMensagem = document.getElementById("SobrenomeMensagem");
  var EmailMensagem = document.getElementById("EmailMensagem");
  var TelefoneMensagem = document.getElementById("TelefoneMensagem");
  var CPFMensagem = document.getElementById("CPFMensagem");
  var CEPMensagem = document.getElementById("CEPMensagem");
  var CidadeMensagem = document.getElementById("CidadeMensagem");
  var BairroMensagem = document.getElementById("BairroMensagem");
  var RuaMensagem = document.getElementById("RuaMensagem");
  var NumeroMensagem = document.getElementById("NumeroMensagem");
  var SenhaMensagem = document.getElementById("SenhaMensagem");
  var ConfirmacaoSenhaMensagem = document.getElementById(
    "SenhaConfirmacaoMensagem"
  );
  console.log(document.getElementById("validacaoTelefone").value.length);
  if (document.getElementById("validacaoNome").value == "") {
    NomeMensagem.innerHTML = "<img src='img/error-icon.svg'>";
    TextoNome.innerHTML = " Digite Novamente";
  } else {
    NomeMensagem.innerHTML = "<img src='img/success-icon.svg'>";
    TextoNome.innerHTML = "";
  }
  if (document.getElementById("validacaoSobrenome").value == "") {
    SobrenomeMensagem.innerHTML = "<img src='img/error-icon.svg'>";
    TextoSobrenome.innerHTML = " Digite Novamente";
  } else {
    SobrenomeMensagem.innerHTML = "<img src='img/success-icon.svg'>";
    TextoSobrenome.innerHTML = "";
  }
  if (document.getElementById("validacaoEmail").value == "") {
    EmailMensagem.innerHTML = "<img src='img/error-icon.svg'>";
    TextoEmail.innerHTML = " Digite Novamente";
  } else {
    EmailMensagem.innerHTML = "<img src='img/success-icon.svg'>";
    TextoEmail.innerHTML = "";
  }
  if (document.getElementById("validacaoTelefone").value.length != 11) {
    TelefoneMensagem.innerHTML = "<img src='img/error-icon.svg'>";
    TextoTelefone.innerHTML = " Digite Novamente";
  } else {
    TelefoneMensagem.innerHTML = "<img src='img/success-icon.svg'>";
    TextoTelefone.innerHTML = "";
  }
  if (document.getElementById("validacaoCPF").value.length != 11) {
    CPFMensagem.innerHTML = "<img src='img/error-icon.svg'>";
    TextoCPF.innerHTML = " Digite Novamente";
  } else {
    CPFMensagem.innerHTML = "<img src='img/success-icon.svg'>";
    TextoCPF.innerHTML = "";
  }
  if (document.getElementById("validacaoCEP").value.length != 8) {
    CEPMensagem.innerHTML = "<img src='img/error-icon.svg'>";
    TextoCEP.innerHTML = " Digite Novamente";
  } else
    [
      (CEPMensagem.innerHTML = "<img src='img/success-icon.svg'>"),
      (TextoCEP.innerHTML = ""),
    ];
  if (document.getElementById("validacaoCidade").value == "") {
    CidadeMensagem.innerHTML = "<img src='img/error-icon.svg'>";
    TextoCidade.innerHTML = " Digite Novamente";
  } else {
    CidadeMensagem.innerHTML = "<img src='img/success-icon.svg'>";
    TextoCidade.innerHTML = "";
  }
  if (document.getElementById("validacaoBairro").value == "") {
    BairroMensagem.innerHTML = "<img src='img/error-icon.svg'>";
    TextoBairro.innerHTML = " Digite Novamente";
  } else {
    BairroMensagem.innerHTML = "<img src='img/success-icon.svg'>";
    TextoBairro.innerHTML = "";
  }
  if (document.getElementById("validacaoRua").value == "") {
    RuaMensagem.innerHTML = "<img src='img/error-icon.svg'>";
    TextoRua.innerHTML = " Digite Novamente";
  } else {
    RuaMensagem.innerHTML = "<img src='img/success-icon.svg'>";
    TextoRua.innerHTML = "";
  }
  if (document.getElementById("validacaoNumero").value.length == 0) {
    NumeroMensagem.innerHTML = "<img src='img/error-icon.svg'>";
    TextoNumero.innerHTML = " Digite Novamente";
  } else {
    NumeroMensagem.innerHTML = "<img src='img/success-icon.svg'>";
    TextoNumero.innerHTML = "";
  }
  if (document.getElementById("validacaoSenha").value.length == 0) {
    SenhaMensagem.innerHTML = "<img src='img/error-icon.svg'>";
    TextoSenha.innerHTML = " Digite Novamente";
  } else {
    SenhaMensagem.innerHTML = "<img src='img/success-icon.svg'>";
    TextoSenha.innerHTML = "";
  }
  if (
    document.getElementById("validacaoConfirmarSenha").value.length !=
      document.getElementById("validacaoSenha").value.length ||
    document.getElementById("validacaoConfirmarSenha").value.length == 0
  ) {
    ConfirmacaoSenhaMensagem.innerHTML = "<img src='img/error-icon.svg'>";
    TextoConfirmacaoSenha.innerHTML = " Digite Novamente";
  } else {
    ConfirmacaoSenhaMensagem.innerHTML = "<img src='img/success-icon.svg'>";
    TextoConfirmacaoSenha.innerHTML = "";
  }
  if (document.getElementById("validacaoObservacoes").value == "") {
    console.log("Ele não digitou nenhuma observação.");
  }
}
