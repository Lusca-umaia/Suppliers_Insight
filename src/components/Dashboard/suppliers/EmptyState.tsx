import { TiUserAddOutline } from "react-icons/ti";

export default function EmptyState() {
  return (
    <div className="text-center">
      <TiUserAddOutline className="text-4xl text-gray-500  mx-auto" />
      <h3 className="mt-2 text-sm font-semibold text-gray-900">Sem fornecedores cadastrados</h3>
      <p className="mt-1 text-sm text-gray-500">Clique em Adicionar Fornecedor para que se possa fazer o cadastro de um fornecedor.</p>
    </div>
  )
}