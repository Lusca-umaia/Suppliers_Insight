import { FaXmark } from "react-icons/fa6";
import { classNames } from "@/functions/auxiliars";
import { useEffect, useState } from "react";
import useNotification from "@/hooks/useNotification";
import { notificationOptions } from "@/data/notification/data";

export default function NotificationElement(props: INotification) {
  const [effect, setEffect] = useState({ active: false, style: "" })
  const { hideNotification } = useNotification()

  useEffect(() => {
    const timer = setTimeout(() => {
      setEffect(effect => { return { ...effect, active: true, style: "opacity-0 duration-500" } })
    }, 3500)

    return () => { clearTimeout(timer) }
  }, [])

  return (
    <div className={
      classNames(
        effect.active ? effect.style : "",
        "animate-appearance w-full pointer-events-auto duration max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5"
      )
    } >
      <div className="p-3.5">
        <div className="flex items-start">
          <div className="flex-shrink-0">
            {notificationOptions[props.type].icon}
          </div>
          <div className="ml-1.5 w-0 flex-1 pt-0.5">
            <p className={classNames("text-sm font-semibold", notificationOptions[props.type].color)}>{props.title}</p>
            <p className="mt-1 text-sm text-gray-900 font-medium">{props.message}</p>
          </div>
          <div className="ml-4 flex flex-shrink-0">
            <button
              type="button"
              className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={() => {
                setEffect({ ...effect, active: true, style: "opacity-0 duration-200" })
                setTimeout(() => hideNotification(props.id), 300)
              }}
            >
              <FaXmark className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div >
  )
}