import IConta from './IConta'
import ContaFactory from './ContaFactory'
import ContaCorrente from './ContaCorrente'

const contaFactory: ContaFactory = new ContaFactory()

const contaTeste: IConta = contaFactory.criarConta("Corrente")
const contaTeste2: IConta = contaFactory.criarConta("Poupanca")
const contaTeste3: IConta = new ContaCorrente()

contaTeste.saldo = 100
contaTeste2.saldo = 200
contaTeste3.saldo = 400

console.log(contaTeste.getSaldo())
console.log(contaTeste2.getSaldo())
console.log(contaTeste3.getSaldo())