// function podeVotar(idade) {
//   if (typeof idade !== 'number') {
//     return false;
//   }

//   if (idade >= 16) {
//     return 'Voto opcional';
//   }

//   if (idade >= 18) {
//     return 'Voto obrigatório';
//   }

//   return 'Não precisa votar';
// }

// it('A função podeVotar deveria retornar uma mensagem', () => {
//   const result = podeVotar(13);
//   const isString = typeof result === 'string';
//   expect(isString).toBe(true);
// });

// it('Ao receber caractere não numérico deverá retornar false', () => {
//   const result = podeVotar('1x');
//   expect(result).toBe(false);
// });

// it('A função soma deve somar dois valores', () => {
//   const result = 1 + 1;
//   expect(result).toBe(2);
// });
