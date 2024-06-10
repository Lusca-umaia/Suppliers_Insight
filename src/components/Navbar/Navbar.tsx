"use client"
import Topbar from "@/components/Navbar/topbar/Topbar"
import Sidebar from "@/components/Navbar/sidebar/Sidebar"
import { useState } from "react"

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="flex h-full flex-col">
      <Topbar openMenu={openMenu} setOpenMenu={() => setOpenMenu(openMenu => !openMenu)} />
      <Sidebar openMenu={openMenu} setOpenMenu={() => setOpenMenu(openMenu => !openMenu)} />
    </div>
  )
}