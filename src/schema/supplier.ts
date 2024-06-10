import z from "zod"

export const supplierSchema = z.object({
  name: z.string().min(1, "Este campo não pode ser vazio"),
  product: z.string().min(1, "Este campo não pode ser vazio"),
  email: z.string().email("Formato inválido de E-mail").min(1, "Este campo não pode ser vazio"),
  telephone: z.string().refine((telephone) => !telephone.includes('_'), {
    message: "Preencha todos os caracteres necessários"
  }),
  address: z.string().min(1, "Este campo não pode ser vazio"),
  cep: z.string().refine((cep) => !cep.includes('_'), {
    message: "Preencha todos os caracteres necessários"
  }),
  road: z.string(),
  city: z.string().min(1, "Preencha um CEP válido para que este valor seja preenchido"),
  state: z.string().min(1, "Preencha um CEP válido para que este valor seja preenchido"),
  number: z.coerce.number().int("O número deve ser inteiro").min(0, "O número da casa não pode ser negativo")
})

export type SupplierSchema = z.infer<typeof supplierSchema>
