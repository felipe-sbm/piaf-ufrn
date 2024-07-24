const Excel = require('excel.js');

document.getElementById('readButton').addEventListener('click', () => {
    window.electronAPI.handleFileRead().then(filePath => {
        if (filePath) {
            // Chamar função para ler a planilha
            Excel.lerPlanilha(filePath, dados);
        }
    });
});

document.getElementById('writeButton').addEventListener('click', () => {
    window.electronAPI.handleFileSave().then(filePath => {
        if (filePath) {
            const dados = [{nome: 'Julia', modalidade: 'Karatê', hora: '22:56'}];
            // Chamar função para escrever a planilha
            Excel.escreverPlanilha(filePath, dados);
        }
    })
});
