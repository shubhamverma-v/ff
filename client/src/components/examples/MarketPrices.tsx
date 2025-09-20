import { LanguageProvider } from '@/contexts/LanguageContext';
import MarketPrices from '../MarketPrices';

export default function MarketPricesExample() {
  return (
    <LanguageProvider>
      <div className="p-8">
        <MarketPrices />
      </div>
    </LanguageProvider>
  );
}