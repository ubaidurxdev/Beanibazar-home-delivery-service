import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";


const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Beanibazar Delivery Service",
  description: "A delivery service in Beanibazar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${hankenGrotesk.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
