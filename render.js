function doGet(req) {
  const equipe = req.parameter.equipe; // Corrigido de 'reg' para 'req'
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(
    "INSCRIÇÕES"
  );
  const values = sheet.getDataRange().getValues();
  const saida = values
    .slice(1)
    .map(([_, nome, modalidade, , reserva, hora]) => ({
      Nome: nome,
      Modalidade: modalidade,
      Reserva: reserva,
      Hora: hora,
    }));

  const retornoDaSaida = equipe
    ? saida.filter((obj) =>
        obj.Nome.toLowerCase().includes(equipe.toLowerCase())
      )
    : saida;
  return ContentService.createTextOutput(
    JSON.stringify(retornoDaSaida)
  ).setMimeType(ContentService.MimeType.JSON);
}
