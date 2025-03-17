export type Champion = {
  key: string; // "266"
  id: string; //"Aatrox"
  name: string; // "아트록스"
  title: string; // "다르킨의 검"
  image: {
    // 챔피언 초상화
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
};

export type RiotChampionResponse = {
  data: Record<string, Champion>;
};

export type ChampionCardProps = Pick<
  Champion,
  "id" | "name" | "title" | "image"
>;

export type ChampionDetail = Champion & {
  lore: string; // "한때는 공허에 맞써 싸우던 슈리마의 명예로운..."
  info: {
    // 스탯
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };
  spells: Spell[];
  passive: Passive;
};

// 챔피언 Q, W, E, R 스킬
export type Spell = {
  id: string;
  name: string;
  description: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
};

// 챔피언 패시브
export type Passive = {
  name: string;
  description: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
};
