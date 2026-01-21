import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Kaleen baba | carpet rugs",
  description: "carpet rugs seller from banaras",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className="antialiased" suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
