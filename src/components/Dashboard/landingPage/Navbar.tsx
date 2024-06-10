import Image from "next/image"
import Link from "next/link"

interface IProps {
  navigation: {
    name: string,
    href: string
  }[],
  scrollToSection: (id: string) => void
}

export default function Navbar(props: IProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Image
            width={100}
            height={100}
            quality={100}
            className="h-10 w-auto"
            src="/logo.svg"
            alt=""
          />
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {props.navigation.map((item) => (
            <button key={item.name}
              onClick={() => props.scrollToSection(item.href)}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </button>
          ))}
        </div>
        <div className="flex flex-1 justify-end">
          <Link href={"/suppliers"} className="text-base font-semibold leading-6 text-gray-900">
            Entrar <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  )
}