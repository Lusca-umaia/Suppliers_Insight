import Table from "@/components/Table";
import Link from "next/link";

const headItems = [
  {
    name: "Nome",
    field: "name",
    order: 1
  },
  {
    name: "Produto",
    field: "product",
    order: 2
  },
  {
    name: "Endereço",
    field: "address",
    order: 3
  },
  {
    name: "Email",
    field: "email",
    order: 4
  },
]

export default function SuppliersTable({ data }: { data: ISupplier[] }) {
  return (
    <Table.Root >
      <Table.Head headItems={headItems} />
      {data.map((supplier, index) => (
        <Table.Body key={index}>
          <Table.Row>
            {headItems.map((item) => (
              <Table.Item key={item.name}>
                {supplier[item.field as keyof typeof supplier]}
              </Table.Item>
            ))}
            <Table.Item>
              <span className="flex items-center justify-end gap-2">
                <Link className="underline text-gray-500" href={`/supplier/${supplier.id}`}>Visualizar</Link>
              </span>
            </Table.Item>
          </Table.Row>
        </Table.Body>
      ))}

    </Table.Root>
  )
}