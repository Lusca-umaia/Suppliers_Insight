"use client"
import SidebarMobile from "@/components/Navbar/sidebar/SidebarMobile";
import SidebarDesktop from "@/components/Navbar/sidebar/SidebarDesktop";
import { usePathname } from "next/navigation";

interface IProps {
  openMenu: boolean,
  setOpenMenu: () => void
}

export default function Sidebar(props: IProps) {
  const path = usePathname()

  return (
    <>
      <SidebarMobile
        openMenu={props.openMenu}
        path={path}
        setOpenMenu={props.setOpenMenu}
      />
      <SidebarDesktop path={path} />
    </>
  )
}