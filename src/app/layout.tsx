import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "우리동네 대표 | 내 지역 의원 정보",
  description: "주소를 입력하면 해당 지역의 국회의원, 시도지사, 시군구청장, 시도의원, 기초의원, 교육감 정보를 확인할 수 있습니다.",
  keywords: ["국회의원", "지방의원", "시장", "구청장", "교육감", "선거", "정치", "지역구"],
  openGraph: {
    title: "우리동네 대표",
    description: "내 지역 국회의원, 지자체장, 지방의원 정보를 한눈에",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#1e3a5f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} antialiased bg-gray-50`}>
        {children}
      </body>
    </html>
  );
}
