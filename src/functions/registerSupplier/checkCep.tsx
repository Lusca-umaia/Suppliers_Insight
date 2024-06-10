import axios from "axios"
import { SupplierSchema } from "@/schema/supplier"

interface IParams {
  value: string
  setValue: (field: keyof SupplierSchema, value: string | number) => void,
  setError: (field: keyof SupplierSchema, error: { message: string, type: string }) => void
  clearErrors: (field: keyof SupplierSchema) => void
}

export default async function checkCep(params: IParams) {
  if (params.value.split("_").length == 1) {
    await axios(`https://viacep.com.br/ws/${params.value.replace(/-/g, '')}/json/`)
      .then((response) => {
        if (response.data.erro) {
          params.setError("cep", { message: "CEP inválido", type: "invalidCep" })
          params.setValue("city", "")
          params.setValue("state", "")
          params.setValue("road", "")
        }
        else {
          params.clearErrors("cep")
          params.setValue("city", response.data.localidade)
          params.setValue("state", response.data.uf)
          params.setValue("road", response.data.logradouro)
        }
      })
      .catch((error) => console.log(error))
  }
}