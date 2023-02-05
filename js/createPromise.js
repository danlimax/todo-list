export function createPromise(method, url, data = null) {
  //Precisa retornar um objeto do tipo promise
  const promise = new Promise(function (resolve, reject) {
    //precisa receber uma função por parâmetro.
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(data);

    xhr.onreadystatechange = verificaAjax;

    function verificaAjax() {
      if (xhr.readyState === 4) {
        if (xhr.status < 400) {
          const json = JSON.parse(xhr.responseText);
          resolve(json);
        } else {
          reject(Error("algo deu errado com a conexão"));
        }
      }
    }
  });
  console.log(promise);
  return promise;
}
