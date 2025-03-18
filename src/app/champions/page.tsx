import { fetchChampionList } from "@/utils/serverApi";
import { Champion } from "@/types/Champion";
import ChampionCard from "@/components/ChampionCard";

export default async function ChampionsPage() {
  const champions: Champion[] = await fetchChampionList();

  return (
    <section className="container mx-auto py-10 text-center">
      <h1 className="text-3xl font-bold text-red-500">챔피언 목록</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10">
        {champions.map(({ key, ...champ }) => (
          <ChampionCard key={key} {...champ} />
        ))}
      </div>
    </section>
  );
}
