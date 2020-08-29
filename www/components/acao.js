// This is a JavaScript file

$(document).on('click','#calc',function(){

  var genero = $("#gender").val();
    console.log(genero);
  var idade = $("#idade").val();
    console.log(idade);
  var altura = $("#altura").val();
    console.log(altura);
  var peso = $("#peso").val();
    console.log(peso);
  var taxaAtv = $("#taxaAtv").val();
    console.log(taxaAtv);

  if(gender="m"){
   var resp = taxaAtv * (66 + (((13,7 * peso) + ( 5 * altura - (6,8 * idade)))))
   }
   

  else if(gender="f"){
  var resp = parseFloat(taxaAtv) * (655 + (((9,6 * parseFloat(peso) + (1,8 * parseFloat(altura)) - (4,7 * parseFloat(idade))))))}

  $("#resp").val("pão");
  console.log(resp);
});