import { fetchChampionDetail } from "@/utils/serverApi";
import { Metadata } from "next";
import Image from "next/image";

type Props = {
  params: { id: string };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const champion = await fetchChampionDetail(params.id);

  return {
    title: `${champion.name} - 리그 오브 레전드`,
    description: champion.lore,
    openGraph: {
      images: [champion.image.full],
    },
  };
};

export const ChampionDetailPage = async ({ params }: Props) => {
  const champion = await fetchChampionDetail(params.id);

  return (
    <section className="container mx-auto py-10 text-center">
      <h1 className="text-3xl font-bold text-red-500">{champion.name}</h1>
      <h2 className="text-xl text-gray-300">{champion.title}</h2>

      <Image
        src={champion.image.full}
        alt={champion.name}
        width={160}
        height={160}
        className="mx-auto my-4 rounded-lg shadow-lg"
      />

      <p className="text-gray-300 mt-4 text-lg">{champion.lore}</p>

      <div className="mt-6 text-left text-red-400 text-lg">
        <h3 className="font-bold">스탯</h3>
        <ul className="mt-2 ml-4 list-disc">
          <li>공격력: {champion.info.attack}</li>
          <li>방어력: {champion.info.defense}</li>
          <li>마법력: {champion.info.magic}</li>
          <li>난이도: {champion.info.difficulty}</li>
        </ul>
      </div>
    </section>
  );
};

export default ChampionDetailPage;
