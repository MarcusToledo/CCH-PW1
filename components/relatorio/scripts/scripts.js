jQuery(function ($) {
    $("#exportButton").click(function () {
        // Realiza um parse na tabela com id reportTable 
        var dataSource = shield.DataSource.create({
            data: "#reportTable",
            schema: {
                type: "table",
                fields: {
                    Creche: { type: String },
                    Bairro: { type: String },
                    VagasOcupadas: { type: Number },
                    VagasDisponiveis: { type: Number }
                }
            }
        });

        // Após o parse dos dados é gerado o PDF
        dataSource.read().then(function (data) {
            var pdf = new shield.exp.PDFDocument({
                author: "MarcusToledo",
                created: new Date()
            });

            pdf.addPage("a4", "portrait");

            pdf.table(
                30,
                20,
                data,
                [
                    { field: "Creche", title: "Creche", width: 200 },
                    { field: "Bairro", title: "Bairro", width: 200 },
                    { field: "VagasOcupadas", title: "Vagas Ocupadas", width: 70 },
                    { field: "VagasDisponiveis", title: "Vagas Disponiveis", width: 70 }
                ],
                {
                    margins: {
                        top: 50,
                        left: 50
                    }
                }
            );

            pdf.saveAs({
                fileName: "RelatorioVagas"
            });
        });
    });
});