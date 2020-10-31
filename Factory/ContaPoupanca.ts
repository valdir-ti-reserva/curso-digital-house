import IConta from "./IConta"

class ContaPoupanca implements IConta {
    agencia: string
    numero: string
    titular: string
    saldo: number

    sacar(valor: number){
        if(this.saldo < valor) return false
        this.saldo -= valor
        return true 
    }

    depositar(valor: number){
        this.saldo += valor 
        return true 
    }

    getSaldo() {
        return `saldo: ${this.saldo}`
    }
}

export default ContaPoupanca