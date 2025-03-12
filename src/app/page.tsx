import Image from "next/image";
import Link from "next/link";
import Logo1 from "@/public/assets/logo1.webp";
import Logo2 from "@/public/assets/logo2.webp";
import Logo3 from "@/public/assets/logo3.webp";

const Home = () => {
  return (
    <section className="text-center">
      <h1 className="text-3xl font-extrabold text-red-500">
        리그 오브 레전드 정보 앱
      </h1>
      <p className="mt-4 text-gray-500">
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
      </p>

      <div className="mt-[40px] flex flex-col justify-center gap-10">
        <Link
          href="/champions"
          className="flex flex-col justify-center items-center gap-5 text-amber-400"
        >
          <Image
            className="rounded-lg shadow-lg"
            width={300}
            height={200}
            src={Logo1}
            alt="logo1"
          />
          챔피언 목록 보기
        </Link>
        <Link
          href="/rotation"
          className="flex flex-col justify-center items-center gap-5 text-amber-400"
        >
          <Image
            className="rounded-lg shadow-lg"
            width={300}
            height={200}
            src={Logo2}
            alt="logo2"
          />
          금주 로테이션 확인
        </Link>
        <Link
          href="/items"
          className="flex flex-col justify-center items-center gap-5 text-amber-400"
        >
          <Image
            className="rounded-lg shadow-lg"
            width={300}
            height={200}
            src={Logo3}
            alt="logo3"
          />
          아이템 목록 보기
        </Link>
      </div>
    </section>
  );
};

export default Home;
