
import api from "@/lib/axios";
import { SupplierSchema } from "@/schema/supplier";
import { useContext } from "react";
import { NotificationContext } from "@/context/NotificationContext";
import { useRouter } from "next/navigation";

export default function useRequests() {
  const addNotification = useContext(NotificationContext)
  const router = useRouter()

  async function handleSupplierUpdate({ id, data, setLoading, initialValues }: { id: string, data: SupplierSchema, setLoading: (loading: boolean) => void, initialValues?: SupplierSchema }) {
    let dataHasChanged = false;
    setLoading(true)

    if (initialValues)
      for (let key of Object.keys(data)) {
        if (data[key as keyof SupplierSchema] != initialValues[key as keyof SupplierSchema]) {
          dataHasChanged = true
          break;
        }
      }

    if (dataHasChanged) {
      try {
        await api.put(`/supplier/${id}`, data)
          .then((data) => console.log(data))
        router.push("/suppliers")
        addNotification({ message: "Dados atualizados com sucesso!", title: "Atualização realizada!", type: "success" })
      } catch (error) {
        console.log(error)
        addNotification({ message: "Erro inesperado!", title: "Error inesperado, tente novamente mais tarde", type: "error" })
      }
    }
    else {
      addNotification({ message: "Nenhuma alteração foi realizada!", title: "Os dados continuam iguais, faça pelo menos uma alteração!", type: "error" })
    }

    setLoading(false)
  }

  async function handleSupplierDelete(id: string) {
    try {
      await api.delete(`/supplier/${id}`)
        .then((data) => console.log(data))
      router.push("/suppliers")
      addNotification({ message: "O fornecedor foi excluído!", title: "Fornecedor removido com sucesso!", type: "success" })

    } catch (error) {
      console.log(error)
      addNotification({ message: "Erro inesperado!", title: "Error inesperado, tente novamente mais tarde", type: "error" })
    }
  }

  async function handleSupplierRegister({ data, setIsLoading }: { data: SupplierSchema, setIsLoading: (loading: boolean) => void }) {
    setIsLoading(true)
    try {
      await api.post("/supplier", data)
        .then((data) => console.log(data))
      addNotification({ message: "Fornecedor cadastrado com sucesso!", title: "Fornacedor cadastrado!", type: "success" })
      router.push("/suppliers")
    } catch (error) {
      addNotification({ message: "Fornecedor cadastrado com sucesso!", title: "Fornacedor cadastrado!", type: "success" })
      console.log(error)
    }
    setIsLoading(false)
  }

  return { handleSupplierUpdate, handleSupplierDelete, handleSupplierRegister }

}