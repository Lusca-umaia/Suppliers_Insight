import { NextResponse, NextRequest } from "next/server";
import { getSuppliers, addSupplier } from "@/data/suppliers/data";
import { v4 as uuidv4 } from 'uuid';
import { supplierSchema } from "@/schema/supplier";
import z from "zod"

export async function GET() {
  const suppliers = getSuppliers();
  return NextResponse.json({ data: suppliers }, { status: 200 })
}

export async function POST(request: NextRequest) {
  try {
    const body: Omit<ISupplier, "id"> = await request.json();
    supplierSchema.parse(body);

    const data: ISupplier = {
      name: body.name,
      product: body.product,
      cep: body.cep,
      email: body.email,
      city: body.city,
      address: body.address,
      id: uuidv4(),
      number: body.number,
      state: body.state,
      telephone: body.telephone,
      road: body.road
    }

    addSupplier(data)
    return NextResponse.json({ data }, { status: 201 });
  } catch (e) {
    if (e instanceof z.ZodError) {
      return NextResponse.json({ errors: e.errors }, { status: 422 });
    }

    return NextResponse.json({ message: "Erro inesperado" }, { status: 500 });
  }

}