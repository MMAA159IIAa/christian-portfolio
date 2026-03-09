import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import AudioPlayer from "@/components/AudioPlayer/AudioPlayer";

export const metadata: Metadata = {
  title: "Arturo Valencia | AI Builder & Innovador Tecnológico",
  description: "Portafolio de Christian Arturo Estrada Valencia - AI Builder, Desarrollador de Automatización y Especialista en Innovación con enfoque en colaboración Humano + IA.",
  keywords: ["AI Developer", "Automatización", "Portafolio", "Arturo Valencia", "Innovación", "Rapid Prototyping", "Influencer Tech"],
  openGraph: {
    title: "Arturo Valencia | AI Builder",
    description: "Construyendo el futuro con la colaboración Humano + IA.",
    url: "https://arturo-portfolio.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <AudioPlayer />
        {children}
        <footer style={{ padding: '4rem 0', textAlign: 'center', borderTop: '1px solid var(--border-color)', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
          <div className="container">
            © {new Date().getFullYear()} Christian Arturo Estrada Valencia. Built with AI + Human Collaboration.
          </div>
        </footer>
      </body>
    </html>
  );
}
