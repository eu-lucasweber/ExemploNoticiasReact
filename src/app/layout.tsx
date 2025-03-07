import "./globals.css";
import NavBar from '@/components/navbar';

export const metadata = {
  title: "Notícias ADS",
  description: "Exemplo feito em aula",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
};