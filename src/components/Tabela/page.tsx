"use client";

import { useEffect, useState } from "react";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import { Skeleton } from "@/components/ui/skeleton";

interface User {
  name: {
    first: string;
    last: string;
  };
  email: string;
  location: {
    city: string;
    country: string;
  };
  picture: {
    large: string;
  };
}

// Função para buscar os dados da API
async function getData(): Promise<Payment[]> {
  try {
    const response = await fetch("https://randomuser.me/api/?results=10");
    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.status}`);
    }

    const data: { results: User[] } = await response.json();

    return data.results.map((user, index) => ({
      id: `user-${index}`,
      amount: Math.floor(Math.random() * 1000),
      status: ["pending", "success", "failed"][Math.floor(Math.random() * 3)] as Payment["status"],
      email: user.email,
    }));
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
    return [];
  }
}

export default function DemoPage() {
  const [data, setData] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData().then((result) => {
      setData(result);
      setLoading(false);
    });
  }, []);

  // Criando skeletons dinamicamente
  const skeleton = Array.from({ length: 10 }, (_, index) => (
    <Skeleton key={index} className="w-full h-[20px] rounded-full" />
  ));

  return (
    <div className="container mx-auto py-10 px-10 text-gray-200">
      <h1 className="text-2xl font-bold mb-4 text-white">Tabela de Pagamentos</h1>

      {loading ? (
        <div className="space-y-2">{skeleton}</div> // Exibe Skeletons enquanto carrega
      ) : (
        <DataTable columns={columns} data={data} />
      )}
    </div>
  );
}
