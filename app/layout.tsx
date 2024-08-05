
import "./globals.css";
import Menu from "./Menu";
import jupiter from "../public/imgs/jupiter.jpg";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "neptune place",
  description: "neptune's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="min-h-screen flex flex-col"
        style={{
          backgroundImage: `url(${jupiter.src})`,
          backgroundSize: "auto 57vh",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top right",
          backgroundColor: "black",
        }}
      >
        <div className="sticky top-0 z-10 bg-black bg-opacity-75">
          <Menu />
        </div>
        {children}
        <footer className="bg-black bg-opacity-25 mt-auto">
          <p className="px-5 py-2 text-xs text-white">
            {
              "&copy; 2024 neptune. i should say something interesting but please don't steal. steal bad. jail."
            }
          </p>
        </footer>
      </body>
    </html>
  );
}
