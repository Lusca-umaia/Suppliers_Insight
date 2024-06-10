"use client"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
import { useMemo } from "react"
import Button from "@/components/Button/Button"
import RedirectionBack from "@/components/RedirectionBack/RedirectionBack"

export default function Header() {
  const router = useRouter()
  const path = usePathname()

  const data = useMemo<IHeaderOptions>(() => {
    return {
      home: {
        title: "Dashboard"
      },
      suppliers: {
        title: "Fornecedores",
        action: {
          onAction: () => router.push("registerSupplier"),
          content: "Adicionar Fornecedor",
          type: "primary"
        }
      },
      supplier: {
        hrefBack: "/suppliers",
        title: "Informações do Fornecedor",
        description: `Edite e/ou delete o fornecedor clicando nos botões localizados na parte inferior.`
      },
      registerSupplier: {
        hrefBack: "/suppliers",
        title: "Registrar Fornecedor",
        description: `Ao finalizar o preenchimento do formulário, vá até a parte inferior e clique em "Salvar". Lembrando que só aceitamos CEPS brasileiros`
      },
    }
  }, [router])

  const getFirstPath = useMemo(() => {
    const firstPathWithoutSlash = path.split("/")[1]
    return data[firstPathWithoutSlash as keyof typeof data]
  }, [path, data])

  return (
    <>
      {getFirstPath && (
        <div className="flex max-md:flex-wrap gap-2 items-center justify-between mt-8 mb-5">
          <div>
            {getFirstPath.hrefBack && (
              <RedirectionBack hrefBack={getFirstPath.hrefBack} />
            )}
            <h1 className="max-md:text-xl text-2xl font-bold text-gray-900">{getFirstPath.title}</h1>
            {getFirstPath.description && (
              <p className="text-sm leading-6 font-medium text-gray-600">{getFirstPath.description}</p>
            )}
          </div>
          {getFirstPath.action && (
            <span className="ml-auto">
              <Button handleClick={getFirstPath.action.onAction} type='button' buttonStyle={getFirstPath.action.type}>
                {getFirstPath.action.content}
              </Button>
            </span>
          )}
        </div>
      )}
    </>
  )
}