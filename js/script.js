// SALVAR A UNIDADE ESCOLHIDA

function selecionarUnidade(unidade) {

    localStorage.setItem("unidade", unidade);

    window.location.href = "codigo.html";

}



// MOSTRAR A UNIDADE NAS TELAS

window.addEventListener("load", function () {


    let unidade = localStorage.getItem("unidade");


    let campoUnidade = document.getElementById("unidadeEscolhida");


    if (campoUnidade && unidade) {

        campoUnidade.innerHTML = unidade;

    }



    let unidadeFinal = document.getElementById("unidadeFinal");


    if (unidadeFinal && unidade) {

        unidadeFinal.innerHTML = unidade;

    }



    // MOSTRAR O PACOTE NA TELA FINAL

    let pacote = localStorage.getItem("pacote");


    let campoPacote = document.getElementById("pacote");


    if (campoPacote && pacote) {

        campoPacote.innerHTML = pacote;

    }


});





// VERIFICAR O CÓDIGO DIGITADO

function verificarCodigo() {


    let codigoDigitado = document.getElementById("codigo").value;


    let unidade = localStorage.getItem("unidade");



    let pacotes = {


        "Lauro de Freitas": {

            codigo: "123456",

            pacote: "Pedido LS-001"

        },


        "Salvador": {

            codigo: "654321",

            pacote: "Pedido LS-002"

        },


        "Camaçari": {

            codigo: "123654",

            pacote: "Pedido LS-003"

        }


    };




    if (

        pacotes[unidade] &&

        codigoDigitado == pacotes[unidade].codigo

    ) {


        localStorage.setItem(

            "pacote",

            pacotes[unidade].pacote

        );


        window.location.href = "verificando.html";


    } else {


        window.location.href = "erro.html";


    }


}

// REDIRECIONAR APÓS VERIFICAÇÃO

if(window.location.pathname.includes("verificando.html")){


    setTimeout(function(){


        let pacote = localStorage.getItem("pacote");


        if(pacote){

            window.location.href = "liberado.html";

        }

        else{

            window.location.href = "erro.html";

        }


    },2000);


}