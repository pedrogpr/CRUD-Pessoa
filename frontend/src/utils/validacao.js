export function validar(cadastro) {

  if (cadastro.length === 11) {
    cadastro = cadastro.replace(/[^\d]+/g, '');

    // Elimina CPFs invalidos conhecidos	
    if (cadastro === "00000000000" ||
      cadastro === "11111111111" ||
      cadastro === "22222222222" ||
      cadastro === "33333333333" ||
      cadastro === "44444444444" ||
      cadastro === "55555555555" ||
      cadastro === "66666666666" ||
      cadastro === "77777777777" ||
      cadastro === "88888888888" ||
      cadastro === "99999999999")
      return false;
    // Valida 1o digito	
    let add = 0;
    for (let i = 0; i < 9; i++)
      add += parseInt(cadastro.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev === 10 || rev === 11)
      rev = 0;
    if (rev !== parseInt(cadastro.charAt(9)))
      return false;
    // Valida 2o digito	
    add = 0;
    for (let i = 0; i < 10; i++)
      add += parseInt(cadastro.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev === 10 || rev === 11)
      rev = 0;
    if (rev !== parseInt(cadastro.charAt(10)))
      return false;
    return true;
  }

  else if (cadastro.length === 14) {
    cadastro = cadastro.replace(/[^\d]+/g, '');

    // Elimina cadastros invalidos conhecidos
    if (cadastro === "00000000000000" ||
      cadastro === "11111111111111" ||
      cadastro === "22222222222222" ||
      cadastro === "33333333333333" ||
      cadastro === "44444444444444" ||
      cadastro === "55555555555555" ||
      cadastro === "66666666666666" ||
      cadastro === "77777777777777" ||
      cadastro === "88888888888888" ||
      cadastro === "99999999999999")
      return false;

    // Valida DVs
    let tamanho = cadastro.length - 2
    let numeros = cadastro.substring(0, tamanho);
    let digitos = cadastro.substring(tamanho);
    let soma = 0;
    let pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
        pos = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== digitos.charAt(0))
      return false;

    tamanho = tamanho + 1;
    numeros = cadastro.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (let i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
        pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado !== digitos.charAt(1))
      return false;

    return true;
  } else
    return false;
}
