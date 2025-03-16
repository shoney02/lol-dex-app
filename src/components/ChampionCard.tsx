import Image from "next/image";
import Link from "next/link";
import { ChampionCardProps } from "@/types/Champion";

export default function ChampionCard({
  id,
  name,
  title,
  image,
}: ChampionCardProps) {
  return (
    <Link
      href={`/champions/${id}`}
      className="p-4 bg-black border border-gray-600 rounded-lg shadow-md hover:scale-105 transition"
    >
      <Image
        src={image.full}
        alt={name}
        width={80}
        height={80}
        className="mx-auto"
      />
      <h3 className="text-red-400 mt-2 font-bold">{name}</h3>
      <p className="text-gray-300 text-sm">{title}</p>
    </Link>
  );
}
