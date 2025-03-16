import { ChampionRotation } from "@/types/ChampionRotation";
import { NextResponse } from "next/server";

const RIOT_API_KEY = process.env.RIOT_API_KEY;

export const GET = async () => {
  if (!RIOT_API_KEY) {
    return NextResponse.json({ error: "API 키가 없습니다." }, { status: 500 });
  }

  try {
    const res = await fetch(
      "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
      {
        headers: { "X-Riot-Token": RIOT_API_KEY },
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "API 요청 실패" },
        { status: res.status }
      );
    }

    const data: ChampionRotation = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "서버 오류 발생" }, { status: 500 });
  }
};
