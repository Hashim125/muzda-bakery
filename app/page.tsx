import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import HomePage from '@/components/home/HomePage';

export default function Home() {
  return (
    <div className="page-shell">
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
