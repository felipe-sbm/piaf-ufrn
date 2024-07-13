const XLSX = require("xlsx");
const { dialog } = require("electron").remote;

document.getElementById("upload").addEventListener("click", () => {
  dialog
    .showOpenDialog({
      properties: ["openFile"],
      filters: [{ name: "Spreadsheets", extensions: ["xlsx"] }],
    })
    .then((result) => {
      if (!result.canceled) {
        const workbook = XLSX.readFile(result.filePaths[0]);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const data = XLSX.utils.sheet_to_json(worksheet);
        // Implemente a lógica de sorteio aqui, usando os dados.
        // Depois, vamos criar mais funções, vão ser por aqui,
        // mas por enquanto, vamos só exibir os dados na ordem.
      }
    })
    .catch((err) => {
      console.error(err);
    });
});
