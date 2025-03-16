"use client";

import { useEffect, useState } from "react";
import { getChampionRotation } from "@/utils/riotApi";
import { fetchChampionList } from "@/utils/serverApi";
import { Champion } from "@/types/Champion";
import ChampionCard from "@/components/ChampionCard";

export default function RotationPage() {
  const [rotationChampions, setRotationChampions] = useState<Champion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRotationData() {
      try {
        setLoading(true);
        setError(null);

        const rotationData = await getChampionRotation();
        const allChampions = await fetchChampionList();

        const filteredChampions = allChampions.filter((champ) =>
          rotationData.freeChampionIds.includes(Number(champ.id))
        );

        setRotationChampions(filteredChampions);
      } catch (err) {
        setError("데이터를 불러오는 중 오류가 발생했습니다.");
      } finally {
        setLoading(false);
      }
    }

    fetchRotationData();
  }, []);

  if (loading)
    return <p className="text-white text-center mt-10">로딩 중...</p>;
  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

  return (
    <section className="container mx-auto py-10 text-center">
      <h1 className="text-3xl font-bold text-red-500">
        챔피언 로테이션{" "}
        <span className="text-orange-400">(이번주 무료로 플레이 가능!)</span>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10">
        {rotationChampions.map((champ) => (
          <ChampionCard key={champ.id} {...champ} />
        ))}
      </div>
    </section>
  );
}
