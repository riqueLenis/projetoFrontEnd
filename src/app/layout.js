import './styles/globals.css';
import Header from './layout/Header';
import Footer from './layout/Footer'

export const metadata = {
  title: 'Liva - Empreendimentos',
  description: 'Construindo confiança e realizando sonhos',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header /> {}
        <main>{children}</main>
        {}
        <Footer /> {}
      </body>
    </html>
  );
}