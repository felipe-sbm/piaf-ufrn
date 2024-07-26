import io
from flask import Flask, request, send_file
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return {'error': 'Nenhum arquivo enviado'}, 400
    file = request.files['file']
    if file.filename == '':
        return {'error': 'Nenhum arquivo selecionado'}, 400
    if file and file.filename.endswith(('.xlsx', '.xls')):
        df = pd.read_excel(file)
        # Ordenar o DataFrame pelo "horário de inscrição"
        df_sorted = df.sort_values(by='Hora de inscrição')
        # Salvar o DataFrame ordenado em um arquivo Excel em memória
        output = io.BytesIO()
        with pd.ExcelWriter(output, engine='xlsxwriter') as writer:
            df_sorted.to_excel(writer, index=False, sheet_name='Sheet1')
        output.seek(0)
        return send_file(output, download_name='planilha_ordenada.xlsx', as_attachment=True)
    else:
        return {'error': 'Tipo de arquivo não suportado'}, 400

if __name__ == '__main__':
    app.run(debug=True)