const API_VERSION = "15.5.1";

export const fetchChampionList = () => {};

export const fetchChampionDetail = () => {};

export const fetchItemList = async () => {
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${API_VERSION}/data/ko_KR/item.json`
  );

  if (!res.ok) {
    throw new Error("아이템 데이터를 불러오는 데 실패했습니다.");
  }

  const data = await res.json();
  return Object.entries(data.data).map(([id, item]: [string, any]) => ({
    id,
    name: item.name,
    plaintext: item.plaintext,
    image: {
      full: item.image.full,
      sprite: item.image.sprite,
      group: item.image.group,
      x: item.image.x,
      y: item.image.y,
      w: item.image.w,
      h: item.image.h,
    },
  }));
};
