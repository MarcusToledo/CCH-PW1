function completaInputs () {
    var inputBairro = document.getElementById('text-modal-name-bairro');
    var iframeDiv = document.getElementById('iframe-modal-map-creche');
    var iframe = document.getElementById('iframe-map-creche')
    // Pegando valores do select
    var selectCreche = document.getElementById("select-modal-name-creche");
    var selectItem = selectCreche.options[selectCreche.selectedIndex].value;

    //Alterando input com os valores do select
    if (selectItem == "Sonho de Infância"){
        inputBairro.value = "Centro Norte";
        inputBairro.readOnly = true;
        iframeDiv.style.display = "block"
        iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1511.0500759996653!2d-53.059229868386716!3d-25.74072106374234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f047ed3a750d9b%3A0xffbbaf0027f41000!2sCentro%20Norte%2C%20Dois%20Vizinhos%20-%20PR%2C%2085660-000!5e0!3m2!1spt-BR!2sbr!4v1655908211895!5m2!1spt-BR!2sbr"

    }else if (selectItem == "Estrela Cadente") {
        inputBairro.value = "Centro Sul";
        inputBairro.readOnly = true;
        iframeDiv.style.display = "block"
        iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14373.696980760507!2d-53.06742278941321!3d-25.756547086938312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f0479b0ad7f659%3A0x59fd4e2394371971!2sCentro%20Sul%2C%20Dois%20Vizinhos%20-%20PR%2C%2085660-000!5e0!3m2!1spt-BR!2sbr!4v1655916466668!5m2!1spt-BR!2sbr"

    }else if (selectItem == "Mundo da Criança") {
        inputBairro.value = "Bairo das Torres";
        inputBairro.readOnly = true;
        iframeDiv.style.display = "block"
        iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14373.696980760507!2d-53.06742278941321!3d-25.756547086938312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f0478b7d516e2d%3A0x3710aabdc4e4fb1!2sBairro%20Das%20Torres%2C%20Dois%20Vizinhos%20-%20PR%2C%2085660-000!5e0!3m2!1spt-BR!2sbr!4v1655916497263!5m2!1spt-BR!2sbr"
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