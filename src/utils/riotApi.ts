export const getChampionRotation = async () => {
  const res = await fetch("/api/rotation");
  if (!res.ok) throw new Error("챔피언 로테이션 데이터를 불러올 수 없습니다.");
  return res.json();
};
