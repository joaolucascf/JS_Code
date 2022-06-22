function area(largura, altura) {
  const area = largura * altura;
  if(area >20){
    console.log(`Valor acima do máximo permitido: ${area}m^2`);  
  }else{
    return area;
  }
}

console.log(area(2,2));
console.log(area(5,5));