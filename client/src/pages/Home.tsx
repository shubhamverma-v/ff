import Header from '@/components/Header';
import MarketPrices from '@/components/MarketPrices';
import WeatherInfo from '@/components/WeatherInfo';
import GovernmentSchemes from '@/components/GovernmentSchemes';
import Chatbot from '@/components/Chatbot';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto p-4 md:p-8">
        <MarketPrices />
        <WeatherInfo />
        <GovernmentSchemes />
        <Chatbot />
      </main>
      
      <footer className="bg-primary text-primary-foreground p-6 mt-12">
        <div className="container mx-auto text-center">
          <p className="text-sm">
            © 2025 किसान सुरक्षा / Farmer Safety. 
            <span className="mx-2">|</span>
            सभी अधिकार सुरक्षित / All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}