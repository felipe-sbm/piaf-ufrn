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
        # Aqui pode processar a planilha, mas vou colocar no arquivo "reader.py"
        df = pd.read_excel(file)
        # Bro, faça o que precisar com o DataFrame df, deixei a sua disposição
        # Por exemplo, armazenar em uma variável, salvar em um banco de dados, etc. :)
        return jsonify({'message': 'Arquivo recebido com sucesso'}), 200
    else:
        return jsonify({'error': 'Tipo de arquivo não suportado'}), 400

if __name__ == '__main__':
    app.run(debug=True)