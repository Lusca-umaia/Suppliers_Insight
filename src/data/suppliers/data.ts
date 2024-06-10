export let suppliers: ISupplier[] = [
  {
    "id": "1",
    "name": "Lucas Maia",
    "product": "Blusas",
    "telephone": "(99)9999-9999",
    "road": "Boa Vista-Castelão",
    "city": "Fortaleza",
    "state": "CE",
    "number": 50,
    "address": "Fortaleza - CE",
    "email": "lucas@example.com",
    "cep": "60743-540",
  },
  {
    "id": "2",
    "name": "Levy Santos",
    "product": "Vestidos",
    "telephone": "(99)9999-9992",
    "road": "Boa Vista-Castelão",
    "city": "Fortaleza",
    "state": "CE",
    "number": 25,
    "address": "Fortaleza - CE",
    "email": "levy@example.com",
    "cep": "60743-540",
  },
  {
    "id": "3",
    "name": "Marta Silva",
    "product": "Frutas",
    "telephone": "(99)9999-9991",
    "road": "Boa Vista-Castelão",
    "city": "Fortaleza",
    "state": "CE",
    "number": 30,
    "address": "Fortaleza - CE",
    "email": "marta@example.com",
    "cep": "60743-540",
  },
]

export function getSuppliers() {
  return suppliers
}

export function addSupplier(supplier: ISupplier) {
  suppliers.push(supplier)
}

export function getSupplier(id: string) {
  return suppliers.find((supplier) => supplier.id == id)
}

export function checkExistence(id: string) {
  return suppliers.some((supplier) => supplier.id == id)
}

export function deleteSupplier(id: string) {
  suppliers = suppliers.filter((supplier) => supplier.id !== id)
}

export function updateSupplier(id: string, data: Omit<ISupplier, "id">) {
  const supplier = getSupplier(id)

  if (supplier) {
    supplier.name = data.name
    supplier.product = data.product
    supplier.cep = data.cep
    supplier.email = data.email
    supplier.city = data.city
    supplier.address = data.address
    supplier.number = data.number
    supplier.state = data.state
    supplier.telephone = data.telephone
    supplier.road = data.road
  }

}