import IEmpresaStrategy from "./IEmpresaStrategy";

class Entrega {
  companhia: IEmpresaStrategy;
  distancia: number;

  constructor(companhia: IEmpresaStrategy, distancia: number) {
    this.companhia = companhia;
    this.distancia = distancia;
  }

  setCompanhia(companhia: IEmpresaStrategy) {
    this.companhia = companhia;
  }

  calcularFreteComContexto(): string {
    return this.companhia.calculaFrete(this.distancia);
  }

  calcularTempoComContexto(): string {
    return this.companhia.calculaTempo(this.distancia);
  }
}

export default Entrega;
