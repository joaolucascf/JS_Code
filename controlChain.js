Number.prototype.isBetween = function (ini, end) {
  return this >= ini && this <= end;
}

const printResult = function (note) {
  if (note.isBetween(9, 10)){
    console.log(("Hall of Fame!").toUpperCase());
  }else if(note.isBetween(7, 8.99)){
    console.log("Aprovado");
  }else if(note.isBetween(3, 6.99)){
    console.log("Exame");
  }else if(note.isBetween(0, 2.99)){
    console.log("Reprovado");
  }else {
    console.log("Nota inválida");
  }
}

printResult(0)