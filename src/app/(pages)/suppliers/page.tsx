"use client"

import EmptyState from "@/components/Dashboard/suppliers/EmptyState";
import Table from "@/components/Dashboard/suppliers/SuppliersTable";
import Loading from "@/components/Loading/Loading";
import api from "@/lib/axios";
import useSWR from 'swr';
import Error from "@/components/Dashboard/suppliers/Error";

export default function Suppliers() {
  const { data: dataSWR, error, isLoading } = useSWR('/supplier', api<{ data: ISupplier[] }>)

  if (isLoading) return <Loading />

  if (error) return <Error />

  return (
    <div>
      <div className={"animate-appearance shadow-lg mt-4 flow-root bg-white px-4 py-4 rounded-lg"}>
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full py-2 align-middle">
            {dataSWR?.data?.data && dataSWR.data.data.length > 0 ? (
              <Table data={dataSWR.data.data} />
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      </div>
    </div >
  )
}