interface IEmpresaStrategy {
  tarifaKm: number;
  horasKm: number;

  calculaFrete(quilometros: number): string;
  calculaTempo(quilometros: number): string;
}

export default IEmpresaStrategy;
