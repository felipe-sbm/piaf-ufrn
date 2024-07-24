const ExcelJS = require('exceljs');

async function lerPlanilha(caminho) {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(caminho);
  const worksheet = workbook.getWorksheet(1);

  worksheet.eachRow({ includeEmpty: true }, function(row, rowNumber) {
    console.log("Row " + rowNumber + " = " + JSON.stringify(row.values));
  });
}

async function escreverPlanilha(caminho, dados) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Minha Planilha');
  
    // Adiciona um cabeçalho na planilha
    worksheet.addRow(['Nome', 'Modalidade', 'Horário de Inscrição']);
  
    // Adiciona os dados
    dados.forEach(dado => {
      worksheet.addRow([dado.nome, dado.modalidade, dado.hora]);
    });
  
    // Salva a planilha de acordo com o comando do usuário :)
    await workbook.xlsx.writeFile(caminho);
  }