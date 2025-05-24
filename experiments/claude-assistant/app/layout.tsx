import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Calling Claude",
  description: "Assistant IA bienveillant pour la famille",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
