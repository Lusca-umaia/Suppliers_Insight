import { classNames } from "@/functions/auxiliars"
import { ReactNode } from "react"

interface IProps {
  index: number,
  length: number,
  children: ReactNode
}

export default function InformationBox(props: IProps) {
  return (
    <div className={classNames(
      props.index == 0 ? "pb-6 pt-2" : "",
      props.index == props.length - 1 ? "pt-6 pb-6" : "",
      props.index != 0 && props.index != props.length - 1 ? "py-6" : "",
      "relative sm:items-center grid md:grid-cols-2 lg:grid-cols-3 sm:px-0"
    )}>
      {props.children}
    </div>
  )
}