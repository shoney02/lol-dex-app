import { Champion, RiotChampionResponse } from "@/types/Champion";
import { RawItem } from "@/types/Item";

const API_VERSION = "15.5.1";

export const fetchChampionList = async (): Promise<Champion[]> => {
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${API_VERSION}/data/ko_KR/champion.json`
  );

  if (!res.ok) {
    throw new Error("챔피언 데이터를 불러오는 데 실패했습니다.");
  }

  const data: RiotChampionResponse = await res.json();

  return Object.values(data.data).map((champ) => ({
    id: champ.id,
    name: champ.name,
    title: champ.title,
    image: {
      full: `https://ddragon.leagueoflegends.com/cdn/${API_VERSION}/img/champion/${champ.image.full}`,
      sprite: champ.image.sprite,
      group: champ.image.group,
      x: champ.image.x,
      y: champ.image.y,
      w: champ.image.w,
      h: champ.image.h,
    },
  }));
};

export const fetchChampionDetail = () => {};

export const fetchItemList = async () => {
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${API_VERSION}/data/ko_KR/item.json`
  );

  if (!res.ok) {
    throw new Error("아이템 데이터를 불러오는 데 실패했습니다.");
  }

  const data: { data: Record<string, RawItem> } = await res.json();

  return Object.entries(data.data).map(([id, item]) => ({
    id,
    name: item.name,
    plaintext: item.plaintext || "설명이 없습니다.",
    image: {
      full: `https://ddragon.leagueoflegends.com/cdn/${API_VERSION}/img/item/${item.image.full}`,
      sprite: item.image.sprite,
      group: item.image.group,
      x: item.image.x,
      y: item.image.y,
      w: item.image.w,
      h: item.image.h,
    },
  }));
};
