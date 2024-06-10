"use client"
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "@/components/Button/Button";
import checkCep from "@/functions/registerSupplier/checkCep";
import { inputInformation } from "@/data/inputInformation/data";
import FormInput from "@/components/FormInput/FormInput";
import { SupplierSchema, supplierSchema } from "@/schema/supplier";
import useRequests from "@/hooks/useRequests";

export default function RegisterSupplier() {
  const { handleSupplierRegister } = useRequests()
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors }, setValue, setError, clearErrors } = useForm<SupplierSchema>({
    resolver: zodResolver(supplierSchema)
  })

  async function handleData(data: SupplierSchema) {
    handleSupplierRegister({ data, setIsLoading })
  }

  return (
    <form onSubmit={handleSubmit(handleData)}>
      <div className="space-y-12">
        <div className="bg-white shadow-lg w-full col-span-2 p-4 rounded-lg grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {inputInformation.map((information) => (
            <FormInput
              key={information.name}
              error={errors[information.name as keyof SupplierSchema]?.message}
              {...information}
              handleChange={information.name == "cep" ? (value) => checkCep({ setValue, clearErrors, setError, value }) : undefined}
              register={register}
            />
          ))}
          <div className=" col-span-full pt-6 flex items-center justify-end border-t border-gray-900/10">
            <Button isLoading={isLoading} disabled={isLoading} type='submit' buttonStyle='primary'>
              {isLoading ? "Salvando..." : "Salvar"}
            </Button>
          </div>
        </div>
      </div>
    </form >
  )
}