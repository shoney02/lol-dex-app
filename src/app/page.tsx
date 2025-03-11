import Link from "next/link";

const Home = () => {
  return (
    <div>
      <h1>리그 오브 레전드 정보 앱</h1>
      <p>Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.</p>
      <div>
        <Link href="/champions">챔피언 목록 보기</Link>
        <Link href="/rotation">금주 로테이션 확인</Link>
        <Link href="/items">아이템 목록 보기</Link>
      </div>
    </div>
  );
};

export default Home;
