function completaInputResponsavel () {
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
