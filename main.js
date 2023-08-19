const form = document.getElementById('form-deposito'); //Criado uma constante seleionando um elemento ID form-deposito
const nomeBeneficiario = document.getElementById('nome-beneficiario'); //Criado uma constante seleionando um elemento ID nome-beneficiario
let formEValido = false; //variavel para dizer se o formulario é valido ou não

function validaNome(nomeCompleto){ //Função para validar o nome completo do usuario
    const nomeComoArray =  nomeCompleto.split(' '); //Separa os nomes do usuario 
    return nomeComoArray.length >= 2; //Determina o minimo de 2 nomes ou mais para ser valido
}

form.addEventListener('submit', function(e) { //Remover a recarga da tela ao clicar em depositar 03:37
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta'); //Criado uma constante seleionando um elemento ID numero-conta
    const valorDeposito = document.getElementById('valor-deposito'); //Criado uma constante seleionando um elemento ID valor-deposito
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`; //Mensagem que vai aparecer em caso de sucesso
    
    formEValido = validaNome(nomeBeneficiario.value);
    if (formEValido) { //Retorna um valor True ou False
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso; //Aula 5.2 - Foi trocado o alert por uma mensagem de sucesso abaixo do botao depositar usando o innerHTML para escrever as informações novas
        containerMensagemSucesso.style.display = 'block'; //Aula 5.4 foi posto o document.querryselector em uma variavel para qua a mensagem de sucesso so apareça ao clicar em depositar

        nomeBeneficiario.value = ''; //Limpa os campos apos serem submetidos
        numeroContaBeneficiario.value = ''; //Limpa os campos apos serem submetidos
        valorDeposito.value = ''; //Limpa os campos apos serem submetidos

    } else {
        nomeBeneficiario.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block'; //Alerta se for falso
    }
})

nomeBeneficiario.addEventListener('keyup', function(e){ //Função para alterar o evendo de mudança de cor apos a correção dos dados
    console.log(e.target.value); //mostra o evento value dentro do target
    formEValido = validaNome(e.target.value);

    if (!formEValido) {
        nomeBeneficiario.classList.add('error');
        document.querySelector('.error-message').style.display = 'block'; //Alerta se for falso

    } else {
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
})