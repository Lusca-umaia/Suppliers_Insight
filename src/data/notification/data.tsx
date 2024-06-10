import { BiError } from "react-icons/bi";
import { GoVerified } from "react-icons/go";

export const notificationOptions = {
  error: {
    icon: <BiError className="text-red-600 text-2xl" />,
    color: "text-red-600"
  },
  success: {
    icon: <GoVerified className="text-green-600 text-2xl" />,
    color: "text-green-600"
  }
}