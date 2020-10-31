import IConta from "./IConta"
import ContaCorrente from "./ContaCorrente"
import ContaPoupanca from "./ContaPoupanca"

class ContaFactory {
    criarConta(tipo: string) {
        let conta: IConta

        if(tipo == "Corrente") conta = new ContaCorrente()

        if(tipo == "Poupanca") conta = new ContaPoupanca()

        return conta
    }
}

export default ContaFactory