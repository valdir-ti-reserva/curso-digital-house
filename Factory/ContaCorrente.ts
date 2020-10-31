import IConta from "./IConta"

class ContaCorrente implements IConta {
    agencia: string;
    numero: string;
    titular: string;
    saldo: number;
    chequeEspecial: number = 1000

    depositar(valor: number): boolean {
        this.saldo += valor
        return true
    }
    sacar(valor: number): boolean {
        if(this.saldo + this.chequeEspecial < valor) return false
        if(this.saldo < valor) {
            this.chequeEspecial += (this.saldo - valor)
            this.saldo = 0
            return true
        }
        if(this.saldo > valor) {
            this.saldo -= valor
            return true
        }
        return false
    }
    getSaldo(): string {
        return `saldo: ${this.saldo}, cheque especial: ${this.chequeEspecial}`
    }
    
}

export default ContaCorrente