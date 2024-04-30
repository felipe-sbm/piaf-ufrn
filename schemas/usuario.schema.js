module.exports = {
  type: "object",
  properties: {
    cpf: { type: "number", minimum: 11, maximum: 11 },
    data: { type: "string", format: "date" },
    email: { type: "string", format: "email" },
    responsaveis: {
      type: "array",
      items: { type: "string", minimum: 1, maximum: 5 },
    },
    vinculo: { type: "" },
  },
  required: ["data", "cpf", "email", "responsaveis", "vinculo"],
  additionalProperties: false,
};
