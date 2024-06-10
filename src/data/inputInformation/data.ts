export const inputInformation: IInputInformation[] = [
  {
    label: "Nome",
    name: "name",
    required: true,
    type: "text",
    customClass: "col-span-full md:col-span-3"
  },
  {
    label: "Produto",
    required: true,
    name: "product",
    type: "text",
    customClass: "col-span-full md:col-span-3"
  },
  {
    label: "Email",
    name: "email",
    required: true,
    type: "email",
    customClass: "col-span-full md:col-span-4"
  },
  {
    label: "Telefone",
    required: true,
    name: "telephone",
    type: "text",
    mask: "(99)9999-9999",
    customClass: "col-span-full md:col-span-2"
  },
  {
    label: "Endereço",
    required: true,
    name: "address",
    type: "text",
    customClass: "col-span-full md:col-span-4"
  },
  {
    label: "CEP",
    required: true,
    name: "cep",
    type: "text",
    mask: "99999-999",
    customClass: "col-span-full md:col-span-2"
  },
  {
    label: "Logradouro",
    name: "road",
    type: "text",
    disabled: true,
    helpText: {
      text: "Preencha o input de CEP para que este valor seja preenchido",
      position: "right"
    },
    customClass: "col-span-full md:col-span-2"
  },
  {
    label: "Cidade",
    name: "city",
    type: "text",
    required: true,
    helpText: {
      text: "Preencha o input de CEP para que este valor seja preenchido",
      position: "right"
    },
    disabled: true,
    customClass: "col-span-full md:col-span-2"
  },
  {
    label: "Estado",
    name: "state",
    required: true,
    helpText: {
      text: "Preencha o input de CEP para que este valor seja preenchido",
      position: "left"
    },
    type: "text",
    disabled: true,
    customClass: "col-span-full md:col-span-2"
  },
  {
    label: "Número",
    required: true,
    name: "number",
    type: "number",
    customClass: "col-span-full md:col-span-2"
  },
]