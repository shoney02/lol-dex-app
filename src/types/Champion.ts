export type Champion = {
  id: string; //"Aatrox"
  name: string; // "아트록스"
  title: string; // "다르킨의 검"
  image: { // 챔피언 초상화
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
};

export type ChampionDetail = Champion & {
  lore: string; // "한때는 공허에 맞써 싸우던 슈리마의 명예로운..."
  info: { // 스탯
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
};
