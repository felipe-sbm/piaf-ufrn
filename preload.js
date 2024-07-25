const { contextBridge, ipcRenderer } = require('electron');

// Expor métodos para o contexto de renderização da PIAF
contextBridge.exposeInMainWorld('excelAPI', {
    openExcelFile: async (filePath) => {
        try {
            const result = await ipcRenderer.invoke('openExcelFile', filePath);
            return result;
        } catch (error) {
            console.error('Erro ao abrir o arquivo Excel:', error);
            throw error;
        }
    },
    saveExcelFile: async (filePath, data) => {
        try {
            const result = await ipcRenderer.invoke('saveExcelFile', filePath, data);
            return result;
        } catch (error) {
            console.error('Erro ao salvar o arquivo Excel:', error);
            throw error;
        }
    },
});

// Permitir apenas as APIs necessárias, sem causar problemas de segurança.
contextBridge.exposeInMainWorld('api', {
    // Adicionar aqui depois outras APIs que você precisa expor para o contexto de renderização
    // Nesta versão não iremos desenvolver algo profundo, somente raso para terminar rápido.
});