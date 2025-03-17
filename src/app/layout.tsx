import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import QueryProvider from "@/providers/QueryProvider";

export const metadata: Metadata = {
  title: "LOL Dex App",
  description: "LOL Champion, Item, Rotation Info App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <QueryProvider>
          <header className="bg-gray-800 py-4">
            <nav className="container mx-auto flex justify-around gap-10 text-lg font-semibold">
              <Link href={"/"} className="hover:text-blue-400">
                홈
              </Link>
              <Link href={"/champions"} className="hover:text-blue-400">
                챔피언 목록
              </Link>
              <Link href={"/items"} className="hover:text-blue-400">
                아이템 목록
              </Link>
              <Link href={"/rotation"} className="hover:text-blue-400">
                챔피언 로테이션
              </Link>
            </nav>
          </header>

          <main className="container mx-auto mt-10">{children}</main>

          <footer className="bg-gray-800 p-4 mt-8 fixed bottom-0 w-full">
            <div className="container mx-auto text-center text-white text-sm">
              LOL Dex App is not endorsed by Riot Games and does not
              reflect the views or opinions of Riot Games or anyone officially
              involved in producing or managing Riot Games properties. Riot
              Games and all associated properties are trademarks or registered
              trademarks of Riot Games, Inc.
            </div>
          </footer>
        </QueryProvider>
      </body>
    </html>
  );
}
