const validParentheses = (cadena)  => {
  const apertura = "(";
  const cierre = ")";
  const comparador = {")": "("};
  const pila = [];

  for (const caracter of cadena) {
    if (apertura.includes(caracter)) {
      pila.push(caracter);
    } else if (cierre.includes(caracter)) {
      if (pila.length == 0) {
      	return false;
      }
      if (pila[pila.length -1] === comparador[caracter]) { 
	      pila.pop();
      } else {
	      return false;
      }
    }
  }
  return pila.length === 0;
}

export default validParentheses;