const Ajv = require("ajv");
const ajv = new Ajv();
const addFormats = require("ajv-formats");
addFormats(ajv);

router.post("/", (req, res) => {
  const usuario = req.body;

  const validate = ajv.compile(usuarioSchema);
  const valid = validate(usuario);

  if (valid) {
    const idUsuario = uuidv4();
    usuario.id = idUsuario;
    usuarios[idUsuario] = usuario;
    res.json({ msg: "Usuário adicionado com sucesso!" });
  } else {
    res.status(400).json({ msg: "Dados inválidos", errors: validate.errors });
  }
});
