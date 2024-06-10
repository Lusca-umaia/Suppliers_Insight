import { TiUserAdd } from "react-icons/ti";
import { FaUsers } from "react-icons/fa";

export const navigationOptions = [
  {
    name: "Fornecedores",
    icon: FaUsers,
    href: "suppliers"
  },
  {
    name: "Registrar Fornecedor",
    icon: TiUserAdd,
    href: "registerSupplier"
  },
]