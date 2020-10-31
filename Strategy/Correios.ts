import IEmpresaStrategy from "./IEmpresaStrategy";

class Correios implements IEmpresaStrategy {
  tarifaKm: number = 0.5;
  horasKm: number = 1.8;
  imposto: number = 1.2;

  calculaFrete(quilometros: number): string {
    return `R$ ${quilometros * this.tarifaKm * this.imposto}`;
  }
  calculaTempo(quilometros: number): string {
    return `R$ ${quilometros * this.horasKm} horas para realizar a entrega`;
  }
}

export default Correios;
