function completaInputs () {
    var inputBairro = document.getElementById('text-modal-name-bairro');

    // Pegando valores do select
    var selectCreche = document.getElementById("select-modal-name-creche");
    var selectItem = selectCreche.options[selectCreche.selectedIndex].value;

    //Alterando input com os valores do select
    if (selectItem == "Sonho de Infância"){
        inputBairro.value = "Centro Norte";
        inputBairro.readOnly = true;

    }else if (selectItem == "Estrela Cadente") {
        inputBairro.value = "Centro Sul";
        inputBairro.readOnly = true;

    }else if (selectItem == "Mundo da Criança") {
        inputBairro.value = "Bairo das Torres";
        inputBairro.readOnly = true;
    }
}

function completaInputCrianca (){
    var inputResponsavel = document.getElementById('text-modal-name-responsavel');

    // Pegando valores do select
    var selectCrianca = document.getElementById("select-modal-name-crianca");
    var selectItem = selectCrianca.options[selectCrianca.selectedIndex].value;

    //Alterando input com os valores do select
    if (selectItem == "Joãozinho da Silva"){
        inputResponsavel.value = "Bruno da Silva";
        inputResponsavel.readOnly = true;

    }else if (selectItem == "Lucas Fernando Souza") {
        inputResponsavel.value = "Maria Souza";
        inputResponsavel.readOnly = true;

    }else if (selectItem == "Vinicius Mendez") {
        inputResponsavel.value = "João Mendez";
        inputResponsavel.readOnly = true;
    }
}