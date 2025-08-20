import Header from './components/Header';
import Hero from './components/Hero';
import SocialLinks from './components/SocialLinks';
import HowItWorks from './components/HowItWorks';
import Categories from './components/Categories';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <SocialLinks />
      <HowItWorks />
      <Categories />
      <Footer />
    </div>
  );
}
