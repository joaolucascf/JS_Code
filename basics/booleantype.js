let activeState = false;
console.log(activeState);

activeState = true;
console.log(activeState);

activeState = 1;
console.log(activeState);

//true states in JS
console.log(!!1);
console.log(!!-1);
console.log(!!" ");//string com qualquer conteúdo gera true
console.log(!!"qualquer coisa");
console.log(!!{});
console.log(!![]);
console.log(!!Infinity);
console.log(activeState = true);//atribuições geram o valor atribuído na saída

//false states in JS
console.log(!!0);
console.log(!!"");//strings vazias geram valor falso
console.log(!!NaN);
console.log(!!null);
console.log(!!undefined);
console.log(activeState = false);

//operações lógicas em JS
console.log(!!(null || 0 || undefined || '' || 1));
console.log(!!(1 && 0));