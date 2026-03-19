import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Pet2Home | 宠物跨境回家咨询",
    template: "%s | Pet2Home",
  },
  icons: {
    icon: [{ url: "/logo.png?v=20260319", type: "image/png" }],
    shortcut: ["/logo.png?v=20260319"],
    apple: [{ url: "/logo.png?v=20260319", type: "image/png" }],
  },
  description:
    "Pet2Home 基于中国→加拿大→新西兰真实经验，提供宠物赴新西兰时间线与文件全流程咨询。",
  keywords: [
    "Pet2Home",
    "宠物移民新西兰",
    "宠物跨境时间线",
    "宠物文件清单",
    "中国宠物赴新西兰",
    "pet relocation to new zealand",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
