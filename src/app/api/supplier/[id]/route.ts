import { NextRequest, NextResponse } from "next/server";
import { checkExistence, getSupplier, deleteSupplier, updateSupplier } from "@/data/suppliers/data";
import { supplierSchema } from "@/schema/supplier";
import z from "zod"

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  if (checkExistence(params.id)) {
    return NextResponse.json({ data: getSupplier(params.id) }, { status: 200 })
  }
  return NextResponse.json({ errors: { message: "Not found" } }, { status: 404 })
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  if (checkExistence(params.id)) {
    const data = getSupplier(params.id)
    deleteSupplier(params.id)
    return NextResponse.json({ data, message: "Item deleted successfully!" }, { status: 200 })
  }
  return NextResponse.json({ errors: { message: "Not found" } }, { status: 404 })
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  if (checkExistence(params.id)) {
    try {
      const body: Omit<ISupplier, "id"> = await request.json();
      supplierSchema.parse(body);

      const data: Omit<ISupplier, "id"> = {
        name: body.name,
        product: body.product,
        cep: body.cep,
        email: body.email,
        city: body.city,
        address: body.address,
        number: body.number,
        state: body.state,
        telephone: body.telephone,
        road: body.road
      }

      updateSupplier(params.id, data)
      return NextResponse.json({ data, message: "Item updated successfully!" }, { status: 200 })
    } catch (e) {
      if (e instanceof z.ZodError) {
        return NextResponse.json({ errors: e.errors }, { status: 422 });
      }

      return NextResponse.json({ message: "Erro inesperado" }, { status: 500 });
    }
  }
  return NextResponse.json({ errors: { message: "Not found" } }, { status: 404 })

}
