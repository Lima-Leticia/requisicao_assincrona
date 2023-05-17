
cep.addEventListener('focus', () =>{
    mostrarErro();
})
cep.addEventListener("blur", (e) => {
    const cep = document.querySelector("#cep").value;
  
    fetch(`https://viacep.com.br/ws/${cep}/json/`).then(response => {
      return response.json();
    })
      .then(data => {
        if (data.erro){
          mostrarErro();
          return ;
        }
        atribuirCampos(data);
      })
  })
  
function atribuirCampos(data) {
    const rua = document.querySelector("#street");
    const bairro = document.querySelector("#neighborhood");
    const estado = document.querySelector("#state");
    const cidade = document.querySelector("#city");
  
    rua.value = data.logradouro;
    bairro.value = data.bairro;
    estado.value = data.uf;
    cidade.value = data.localidade;
}
function mostrarErro(){
    cep.classList.add = ('cepError')
    cep.classList.remove = ('hidden')
    limparCampos()
}
function limparCampos(){
    rua.value = '';
    bairro.value = '';
    estado.value = '';
    cidade.value = '';
}
  