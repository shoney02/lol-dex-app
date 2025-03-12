import { Item } from "@/types/Item";
import { fetchItemList } from "@/utils/serverApi";
import Image from "next/image";
import React from "react";

const ItemsPage = async () => {
  const items: Item[] = await fetchItemList();

  return (
    <section className="container mx-auto py-10 text-center">
      <h1 className="text-3xl font-bold text-red-500">아이템 목록</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10">
        {items.map((item) => (
          <div key={item.id} className="p-4 bg-black border border-gray-600 rounded-lg shadow-md">
            <Image
              className="mx-auto"
              width={80}
              height={80}
              src={item.image.full}
              alt={item.name}
            />
            <h3 className="text-red-400 mt-2 font-bold">{item.name}</h3>
            <p className="text-gray-300 text-sm">{item.plaintext}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ItemsPage;
