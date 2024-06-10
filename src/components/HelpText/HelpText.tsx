import { classNames } from "@/functions/auxiliars";
import { useRef, useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";

interface IProps {
  text: string
  position: "right" | "left"
}

export default function HelpText(props: IProps) {
  const [open, setOpen] = useState(false)
  const [effect, setEffect] = useState({ active: false, style: "" })
 
  const effectTime = useRef<NodeJS.Timeout | null>(null)

  return (
    <div className="relative w-auto"
      onMouseEnter={() => {
        effectTime.current && clearTimeout(effectTime.current)
        setEffect({ ...effect, active: false, style: "" })
        setOpen(true)
      }}
      onMouseLeave={() => {
        setEffect({ ...effect, active: true, style: "opacity-0 duration-200" })
        effectTime.current = setTimeout(() => setOpen(false), 300)
      }}
    >
      {open && (
        <div className={
          classNames(
            effect.active ? effect.style : "",
            props.position == "right" ? "left-4 origin-top-left" : "md:right-4  max-md:left-4 max-md:origin-top-left md:origin-top-right",
            "border-gray-200 px-2.5 py-2 h-auto w-56 animate-appearance absolute duration-100 bg-white border rounded-md shadow-lg top-2"
          )
        }>
          <p className="text-sm font-medium text-gray-600 leading-4">
            {props.text}
          </p>
        </div>
      )}
      <IoMdInformationCircleOutline className="text-gray-600 text-base" />
    </div>
  )
}