import type { Metadata } from "next";
import { Sono, Lora, Patua_One } from "next/font/google";
import "./globals.css";

const sono = Sono({
  subsets: ["latin"],
  variable: "--font-sono",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const patuaOne = Patua_One({
  subsets: ["latin"],
  variable: "--font-patua-one",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Mohamed Aden | Software Engineer",
  description:
    "Mohamed Aden — CS graduate and software engineer based in Minneapolis, MN. Building performant, elegant software.",
  keywords: ["Mohamed Aden", "software engineer", "CS graduate", "Minneapolis", "portfolio", "developer"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sono.variable} ${lora.variable} ${patuaOne.variable} scroll-smooth`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
