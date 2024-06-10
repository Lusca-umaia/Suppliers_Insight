"use client"
import { useEffect, useState } from 'react';
import { supplierSchema, SupplierSchema } from '@/schema/supplier';
import FormInput from '@/components/FormInput/FormInput';
import useRequests from '@/hooks/useRequests';
import useSWR from 'swr';
import Error from '@/components/Dashboard/supplier/Error';
import Loading from '@/components/Loading/Loading';
import { inputInformation } from '@/data/inputInformation/data';
import { useForm } from "react-hook-form"
import InformationBox from '@/components/Dashboard/supplier/InformationBox';
import { zodResolver } from '@hookform/resolvers/zod';
import HelpText from '@/components/HelpText/HelpText';
import checkCep from '@/functions/registerSupplier/checkCep';
import api from '@/lib/axios';
import Actions from '@/components/Dashboard/supplier/Actions';
import { useParams } from 'next/navigation';

export default function EditSupplier() {
  const { id } = useParams()
  const { handleSupplierUpdate, handleSupplierDelete } = useRequests()

  const [buttoIsLoading, setButtonIsLoading] = useState(false)
  const [inEditing, setInEditing] = useState(false)

  const { data: dataSWR, error, isLoading } = useSWR(`/supplier/${id}`, api<{ data: SupplierSchema }>, {
    revalidateOnFocus: false
  })

  const { register, handleSubmit, formState: { errors }, setValue, setError, clearErrors, reset } = useForm<SupplierSchema>({
    resolver: zodResolver(supplierSchema),
  })

  async function handleUpdate(data: SupplierSchema) {
    handleSupplierUpdate({ data: data, id: id as string, initialValues: dataSWR?.data?.data, setLoading: setButtonIsLoading })
  }

  useEffect(() => {
    if (!isLoading) {
      reset(dataSWR?.data?.data)
    }
  }, [inEditing, reset, dataSWR, isLoading])

  if (isLoading) return <Loading />

  if (error) return <Error />

  return (
    <div className='animate-appearance space-y-12 divide-y divide-gray-900/10'>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <div className="bg-white shadow-md p-4 rounded-lg">
          <dl className="divide-y divide-gray-100">
            {inputInformation.map((information, index) => (
              <InformationBox
                key={information.name}
                index={index}
                length={inputInformation.length}
              >
                <dt className=" flex gap-1 items-center text-sm font-semibold leading-6 text-gray-900">
                  <span>{information.label}{!inEditing && <span className='md:hidden'>:</span>}</span>
                  {information.helpText && inEditing && (
                    <HelpText text={information.helpText.text} position='right' />
                  )}
                </dt>
                <dd className="text-sm leading-6 font-medium text-gray-700 sm:col-span-1">
                  {inEditing ? (
                    <FormInput
                      name={information.name}
                      handleChange={information.name == "cep" ? (value) => checkCep({ setValue, clearErrors, setError, value }) : undefined}
                      required={information.required}
                      disabled={information.disabled}
                      mask={information.mask}
                      type={information.type}
                      key={information.name}
                      error={errors[information.name as keyof SupplierSchema]?.message}
                      register={register}
                    />
                  ) : dataSWR?.data?.data[information.name as keyof SupplierSchema]}
                </dd>
              </InformationBox>
            ))}
            <Actions
              handleSupplierDelete={() => handleSupplierDelete(id as string)}
              inEditing={inEditing}
              reset={reset}
              loading={buttoIsLoading}
              setInEditing={setInEditing}
            />
          </dl>
        </div >
      </form>
    </div >
  )
}