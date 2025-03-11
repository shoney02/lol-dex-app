import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LOL Dex App",
  description: "LOL Dex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Link href={'/'}>홈</Link>
          <Link href={'/champions'}>챔피언 목록</Link>
          <Link href={'/items'}>아이템 목록</Link>
          <Link href={'/rotation'}>챔피언 로테이션</Link>
        </nav>
        {children}
        </body>
    </html>
  );
}
