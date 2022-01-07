// Promise se não utilizar o resolve ou reject, ela sempre vai retornar pending

//Primeira forma de pegar as respostas
const apiCall = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Sucesso!');
    reject('Error!');
  }, 2000);
});

//Usando o then, ele não trava a callstack
apiCall.then((resposta) => {
  console.log(resposta);
}).catch((error) => {
  console.log(error);
});

//Segunda forma de pegar as respostas


const apiCallAsync = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('Sucesso Async!');
    reject('Error Async!');
  }, 2000);
});

//Usando o await, ele vai esperar a resposta, para continuar o código
async function run() {
  try {
    const resposta = await apiCallAsync;
    console.log(resposta);

  } catch (error) {
    console.log(error);
  }
}

run();



