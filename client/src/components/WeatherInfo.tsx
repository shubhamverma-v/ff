import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Cloud, Sun, CloudRain, Wind, Droplets } from 'lucide-react';

// Mock weather data - todo: remove mock functionality
const mockCurrentWeather = {
  temperature: '26°C',
  condition: 'Partly Cloudy',
  humidity: '75%',
  windSpeed: '5 km/h',
  icon: 'partly-cloudy'
};

const mockForecast = [
  { day: 'आज / Today', high: '28°', low: '18°', condition: 'Sunny', icon: 'sunny' },
  { day: 'कल / Tomorrow', high: '25°', low: '16°', condition: 'Cloudy', icon: 'cloudy' },
  { day: 'परसों / Day After', high: '24°', low: '15°', condition: 'Rainy', icon: 'rainy' },
  { day: 'शुक्रवार / Friday', high: '27°', low: '17°', condition: 'Partly Cloudy', icon: 'partly-cloudy' },
  { day: 'शनिवार / Saturday', high: '29°', low: '19°', condition: 'Sunny', icon: 'sunny' },
  { day: 'रविवार / Sunday', high: '26°', low: '16°', condition: 'Cloudy', icon: 'cloudy' },
  { day: 'सोमवार / Monday', high: '23°', low: '14°', condition: 'Rainy', icon: 'rainy' }
];

function getWeatherIcon(condition: string) {
  switch (condition) {
    case 'sunny':
      return <Sun className="h-8 w-8 text-yellow-500" />;
    case 'cloudy':
      return <Cloud className="h-8 w-8 text-gray-500" />;
    case 'rainy':
      return <CloudRain className="h-8 w-8 text-blue-500" />;
    case 'partly-cloudy':
    default:
      return <Cloud className="h-8 w-8 text-gray-400" />;
  }
}

function getCurrentWeatherIcon() {
  return <Cloud className="h-24 w-24 text-yellow-400 mx-auto" />;
}

export default function WeatherInfo() {
  const { t } = useLanguage();

  return (
    <section id="weather" className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-2" data-testid="text-weather-title">
          {t('weather_title')}
        </h2>
        <p className="text-muted-foreground" data-testid="text-weather-subtitle">
          {t('weather_subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-1">
          <CardHeader className="text-center">
            <CardTitle className="text-lg">{t('current_weather')}</CardTitle>
            <CardDescription>सितम्बर 20, 2025</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            {getCurrentWeatherIcon()}
            <div className="mt-4">
              <div className="text-4xl font-bold mb-2" data-testid="text-current-temp">
                {mockCurrentWeather.temperature}
              </div>
              <div className="text-muted-foreground mb-4" data-testid="text-current-condition">
                आंशिक रूप से बादल छाए रहेंगे
              </div>
              <div className="flex justify-around text-sm">
                <div className="flex items-center gap-1" data-testid="text-current-humidity">
                  <Droplets className="h-4 w-4 text-blue-500" />
                  {mockCurrentWeather.humidity}
                </div>
                <div className="flex items-center gap-1" data-testid="text-current-wind">
                  <Wind className="h-4 w-4 text-gray-500" />
                  {mockCurrentWeather.windSpeed}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">{t('forecast_title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockForecast.map((day, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-3 rounded-lg hover-elevate border"
                  data-testid={`forecast-day-${index}`}
                >
                  <div className="flex items-center gap-3">
                    {getWeatherIcon(day.icon)}
                    <div>
                      <div className="font-medium" data-testid={`text-forecast-day-${index}`}>
                        {day.day}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {day.condition}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold" data-testid={`text-forecast-high-${index}`}>
                      {day.high}
                    </div>
                    <div className="text-sm text-muted-foreground" data-testid={`text-forecast-low-${index}`}>
                      {day.low}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}