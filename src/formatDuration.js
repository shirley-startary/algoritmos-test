const formatDuration = (cantSegundos) => {
  let cantAnios = 0;
  let cantDias = 0;
  let cantHoras = 0;
  let cantMinutos = 0;
  const textArray = [];
  cantAnios = Math.trunc(cantSegundos / 31536000);
  cantSegundos = cantSegundos % 31536000;
  
  cantDias = Math.trunc(cantSegundos / 86400);
  cantSegundos = cantSegundos % 86400;
  
  cantHoras = Math.trunc(cantSegundos/3600);
  cantSegundos = cantSegundos % 3600;
  
  cantMinutos = Math.trunc(cantSegundos/60);
  cantSegundos = cantSegundos % 60;
  if ( cantAnios !== 0 ) {
    textArray.push((cantAnios > 1) ? `${cantAnios} years`: `${cantAnios} year`);
  }
  if ( cantDias !== 0 ) {
    textArray.push((cantDias > 1) ? `${cantDias} days`: `${cantDias} day`);
  }
  if ( cantHoras !== 0 ) {
    textArray.push((cantHoras > 1) ? `${cantHoras} hours`: `${cantHoras} hour`);
  }
  if ( cantMinutos !== 0 ) {
    textArray.push((cantMinutos > 1) ? `${cantMinutos} minutes`: `${cantMinutos} minute`);
  }
  if ( cantSegundos !== 0 ) {
    textArray.push((cantSegundos > 1) ? `${cantSegundos} seconds`: `${cantSegundos} second`);
  }

  let textResult = '';
  if(textArray.length === 1 ){
    return textArray[0];
  }

  for (let i = 0; i < textArray.length; i++ ){
    if(textArray.length > 1 && textArray.length - 1 === i){
      textResult += ` and ${textArray[i]}`;
      break;
    }
    textResult += i === 0 ? textArray[i] : `, ${textArray[i]}`;
    
  }
  return textResult;
};

export default formatDuration;