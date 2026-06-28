import type { Metadata } from "next";
import { Jersey_20, Nunito } from "next/font/google";
import "./globals.css";

const jersey = Jersey_20({
  variable: "--font-jersey",
  subsets: ["latin"],
  weight: "400",
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Michael Ibia | Developer Portfolio",
  description:
    "React Native, Vue.js & React developer building production-deployed apps. Portfolio featuring Emora AI chatbot, Dandori productivity app, Litmus vector search, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jersey.variable} ${nunito.variable} h-full scroll-smooth antialiased`}>
      <body
        className="min-h-full text-white"
        style={{ fontFamily: "var(--font-nunito)" }}
      >
        {children}
      </body>
    </html>
  );
}
