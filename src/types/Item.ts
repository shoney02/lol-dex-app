export type Item = {
  id: string;
  name: string; // "장화"
  plaintext: string; // "이동속도가 약간 증가합니다."
  image: { // 아이템 이미지
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
};
