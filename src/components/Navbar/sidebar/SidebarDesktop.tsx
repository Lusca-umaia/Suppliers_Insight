import { useState } from "react"
import { classNames } from "@/functions/auxiliars"
import { useRouter } from "next/navigation";
import { navigationOptions } from "@/data/navbar/data"

interface IProps {
  path: string,
}

export default function SidebarDesktop(props: IProps) {
  const router = useRouter()
  const [openSidebar, setOpenSidebar] = useState<Boolean>(false)

  return (
    <div className="max-lg:hidden z-10 pt-12 top-0 left-0 fixed flex items-end h-full">
      <ul
        onMouseEnter={() => setOpenSidebar(true)}
        onMouseLeave={() => setOpenSidebar(false)}
        className={classNames(
          openSidebar ? "w-56" : "w-14",
          "flex flex-col gap-2.5 duration-100 h-full bg-white py-2.5 border-r px-2 shadow-inner"
        )}>
        {navigationOptions.map((option, index) => (
          <li
            onClick={() => router.push(option.href)}
            key={index}
            className={classNames(
              openSidebar ? `w-full justify-start` : "w-10 justify-center",
              props.path.split("/")[1] == option.href ? "bg-indigo-600 text-gray-100" : "text-gray-900 bg-gray-50",
              "cursor-pointer shadow-md hover:bg-indigo-600 hover:scale-105 px-2 hover:text-gray-100 duration-100 h-10 flex items-center rounded-md")
            }>
            <option.icon className="text-2xl mx-2 shrink-0 duration-100" />
            <span className={classNames(openSidebar ? "w-full" : "w-0 overflow-hidden", "text-sm font-semibold duration-100")}>{option.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}