"use client";

import { getChampionRotation } from "@/utils/riotApi";
import { fetchChampionList } from "@/utils/serverApi";
import { Champion } from "@/types/Champion";
import ChampionCard from "@/components/ChampionCard";
import { useQuery } from "@tanstack/react-query";

const RotationPage = () => {
  const {
    data: rotationData,
    error: rotationError,
    isLoading: isRotationLoading,
  } = useQuery({
    queryKey: ["championRotation"],
    queryFn: getChampionRotation,
  });

  const {
    data: allChampions,
    error: championsError,
    isLoading: isChampionsLoading,
  } = useQuery({
    queryKey: ["championList"],
    queryFn: fetchChampionList,
  });

  // 로딩 상태
  if (isRotationLoading || isChampionsLoading) {
    return <p className="text-white text-center mt-10">로딩 중...</p>;
  }

  // 에러 처리
  if (rotationError || championsError) {
    return (
      <p className="text-red-500 text-center mt-10">
        데이터를 불러오는 중 오류가 발생했습니다.
      </p>
    );
  }

  // `key` 값으로 로테이션 챔피언 찾기
  const filteredChampions = (allChampions ?? []).filter((champ) =>
    rotationData.freeChampionIds.includes(Number(champ.key))
  );

  return (
    <section className="container mx-auto py-10 text-center">
      <h1 className="text-3xl font-bold text-red-500">
        챔피언 로테이션{" "}
        <span className="text-orange-400">(이번주 무료로 플레이 가능!)</span>
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-10">
        {filteredChampions.length > 0 ? (
          filteredChampions.map(({ key, ...champ }) => (
            <ChampionCard key={key} {...champ} />
          ))
        ) : (
          <p className="text-gray-300 text-lg">
            이번 주 무료 챔피언 데이터가 없습니다.
          </p>
        )}
      </div>
    </section>
  );
};

export default RotationPage;
