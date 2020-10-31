interface IConta {
    agencia: string
    numero: string
    titular: string
    saldo: number

    depositar(valor: number): boolean
    sacar(valor: number): boolean
    getSaldo(): string
}

export default IConta