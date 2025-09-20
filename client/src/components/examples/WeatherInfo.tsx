import { LanguageProvider } from '@/contexts/LanguageContext';
import WeatherInfo from '../WeatherInfo';

export default function WeatherInfoExample() {
  return (
    <LanguageProvider>
      <div className="p-8">
        <WeatherInfo />
      </div>
    </LanguageProvider>
  );
}