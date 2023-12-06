import Navbar from "./components/Navbar";
import { Providers } from "./components/Providers";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <Providers>
          <Navbar />
          <main className=' w-full fixed h-screen text-LightSlate bg-bodyColor overflow-x-hidden overflow-y-scroll   scrollbar-hide'>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
