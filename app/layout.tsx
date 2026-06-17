import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Script from "next/script";
import { LanguageProvider } from "./context/LanguageContext";
import LanguageSwitcher from "./components/LanguageSwitcher";

export const metadata = {
  title: "VD Fokus",
  description: "Talent & HR Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
  style={{
    margin: 0,
    
    background: "#020617",
    color: "#fff",
    fontFamily: "Inter, sans-serif",
  }}
  
>
  <LanguageProvider>
  <Navbar />

  {children}

  <Footer />
   </LanguageProvider>
   <div
  id="google_translate_element"
  style={{ display: "none" }}
/>

<Script id="google-translate-init" strategy="afterInteractive">
  {`
    function googleTranslateElementInit() {
      new google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          autoDisplay: false
        },
        'google_translate_element'
      );
    }
  `}
</Script>

<Script
  src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
  strategy="afterInteractive"
/>
      </body>
      
    </html>
  );
}