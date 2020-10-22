console.log('Sistema de Tarefas')

// FUNÇÕES
// function addTarefa(){}
// let addTarefa = function(){}
// let addTarefa = () => {}
// const soma = (a, b) => a + b;
// console.log(soma(10,15));
// function soma(a, b){
//   return a+b;
// }

let listaDeTarefas = [];
const addTarefa = (titulo, completa) => {
  let tarefa = {
    titulo, 
    data: new Date(),
    completa
  }
  listaDeTarefas.push(tarefa);
}
addTarefa('Tarefa 1', false);
addTarefa('Tarefa 2', false);
addTarefa('Tarefa 3', true);
addTarefa('Tarefa 4', false);

const listarTarefas = () => {
  if(listaDeTarefas.length == 0){
    return 'Não há tarefas cadastradas!'  
  }  
  console.log("-".repeat(5), "Lista de tarefas", "-".repeat(5));  
  listaDeTarefas.forEach(tarefa => console.log(`${tarefa.titulo} - Completa: ${tarefa.completa}`));  
  console.log("-".repeat(5), "Fim da lista", "-".repeat(5));
}

const listarTarefasConcluidas = () => {
  const concluidas = listaDeTarefas.filter((tarefa) => tarefa.completa === true)
  if(concluidas.length == 0){
    return 'Não há tarefas concluídas!'
  }  

  console.log("-".repeat(5), "Lista de tarefas concluídas", "-".repeat(5));
  concluidas.forEach(tarefa => console.log(`${tarefa.titulo}`));
  console.log("-".repeat(5), "Fim da lista", "-".repeat(5));
}

// FUNÇÕES DE ARRAY
//Callback é uma função que a gente passa por parâmetro
// let frutas = [{id: 1, nome:'banana', total:15, status:'madura' },
//               {id: 2, nome: 'laranja', total:12, status:'verde'  }, 
//               {id: 3, nome: 'maçã', total:7, status:'madura' }, 
//               {id: 4, nome: 'pêra', total:20, status: 'madura' }]
// for(i = 0; i < frutas.length; i++){
//   console.log(frutas[i])
// }
// frutas.forEach((fruta, i)=>{
//   console.log(fruta, i)
// });
// frutas.map((fruta, i, frutas)=>{
//   console.log(fruta, i)
// });

// const listarTarefas = listaDeTarefas.map((tarefa) => {
//     if(tarefa){
//       return console.log('Não há tarefas cadastradas!');
//     }
//     return `${tarefa.titulo} - ${tarefa.completa}`  
//   }
// )

// console.log(frutas.filter((fruta) => fruta.status == 'verde'));
// console.log(frutas.reduce((total, fruta) => total += fruta.total, 0));
// const excluirFruta = fruta => console.log(frutas.filter(id => fruta.id !== id));
// var index = array.indexOf(item);
// array.splice(index, 1);




