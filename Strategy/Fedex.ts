import IEmpresaStrategy from "./IEmpresaStrategy";

class Fedex implements IEmpresaStrategy {
  tarifaKm: number = 0.35;
  horasKm: number = 1;

  calculaFrete(quilometros: number): string {
    return `R$ ${quilometros * this.tarifaKm}`;
  }
  calculaTempo(quilometros: number): string {
    return `R$ ${quilometros * this.horasKm} horas para realizar a entrega`;
  }
}

export default Fedex;
