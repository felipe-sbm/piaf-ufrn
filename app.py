from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)
# Se necessário, para evitar problemas de CORS em desenvolvimento.

# Rota para upload de arquivos

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'Nenhum arquivo enviado'}), 400
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'Nenhum arquivo selecionado'}), 400
    if file and file.filename.endswith(('.xlsx', '.xls')):
        df = pd.read_excel(file)
        return jsonify({'message': 'Arquivo recebido com sucesso'}), 200
    else:
        return jsonify({'error': 'Tipo de arquivo não suportado'}), 400

if __name__ == '__main__':
    app.run(debug=True)

from flask import Flask, request, send_file
from flask_cors import CORS
import pandas as pd
import io

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
        # Aqui pode processar a planilha, mas vou colocar no arquivo "reader.py"
        df_sorted = df.sort_values(by='horário de inscrição')
        # Salvar o DataFrame ordenado em um arquivo Excel em memória
        # Bro, faça o que precisar com o DataFrame df, deixei a sua disposição
        # Por exemplo, armazenar em uma variável, salvar em um banco de dados, etc. :)
        output = io.BytesIO()
        with pd.ExcelWriter(output, engine='xlsxwriter') as writer:
            df_sorted.to_excel(writer, index=False, sheet_name='Sheet1')
        output.seek(0)
        return send_file(output, attachment_filename='planilha_ordenada.xlsx', as_attachment=True)
    else:
        return {'error': 'Tipo de arquivo não suportado'}, 400

if __name__ == '__main__':
    app.run(debug=True)