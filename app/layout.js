
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import GridLines from "@/components/ui/GridLines";

const blatant = localFont({
  src: [
    {
      path: "../public/Font/Blatant.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Font/Blatant-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-blatant",
});

const urbanist = localFont({
  src: [
    {
      path: "../public/Font/Urbanist-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/Font/Urbanist-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../public/Font/Urbanist-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/Font/Urbanist-ExtraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../public/Font/Urbanist-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/Font/Urbanist-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/Font/Urbanist-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Font/Urbanist-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/Font/Urbanist-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/Font/Urbanist-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/Font/Urbanist-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/Font/Urbanist-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/Font/Urbanist-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/Font/Urbanist-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/Font/Urbanist-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/Font/Urbanist-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../public/Font/Urbanist-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/Font/Urbanist-BlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-urbanist",
});

export const metadata = {
  title: "Procraft - Crafting Growth Through Strategy & Design",
  description: "We turn business ideas into digital success stories — combining smart consulting, creative design, and cutting-edge technology to help brands grow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       className={`${blatant.variable} ${urbanist.variable} antialiased`}
      >
        <GridLines />
        <Navigation />
        <main className="">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

