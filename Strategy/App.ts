import Correios from "./Correios";
import Fedex from "./Fedex";
import Entrega from "./Entrega";

const entrega: Entrega = new Entrega(new Correios(), 200);

console.log(entrega.calcularFreteComContexto());
console.log(entrega.calcularTempoComContexto());

entrega.setCompanhia(new Fedex());

console.log(entrega.calcularFreteComContexto());
console.log(entrega.calcularTempoComContexto());
