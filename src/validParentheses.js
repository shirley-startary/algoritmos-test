const validParentheses = (parens)  => {
  const apertura = "(";
  const cierre = ")";
  const comparador = {")": "("};
  const pila = [];

  for (const caracter of parens) {
    if (apertura === caracter) {
      pila.push(caracter);
    } else if (cierre === caracter) {
      if (pila.length == 0) {
      	return false;
      }
      if (pila[pila.length -1] === comparador[caracter]) { 
	      pila.pop();
      }
    }
  }
  return pila.length === 0;
}

export default validParentheses;