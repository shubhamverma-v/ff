import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'hi' | 'en' | 'pa' | 'mr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  hi: {
    app_title: 'किसान सुरक्षा',
    nav_mandi: 'मंडी भाव',
    nav_weather: 'मौसम',
    nav_schemes: 'सरकारी योजनाएं',
    nav_chatbot: 'चैटबॉट',
    mandi_title: 'वास्तविक समय मंडी भाव',
    mandi_subtitle: 'अपने नजदीकी मंडी में फसलों के नवीनतम भाव जानें',
    weather_title: 'मौसम की जानकारी',
    weather_subtitle: 'वर्तमान और साप्ताहिक मौसम पूर्वानुमान',
    schemes_title: 'सरकारी योजनाएं',
    schemes_subtitle: 'किसानों के लिए महत्वपूर्ण सरकारी योजनाओं की जानकारी',
    chatbot_title: 'कृषि सहायता चैटबॉट',
    chatbot_subtitle: 'अपने कृषि संबंधी प्रश्न पूछें',
    select_state: 'राज्य चुनें',
    search_crop: 'फसल खोजें',
    crop_placeholder: 'जैसे, गेहूं',
    current_weather: 'अभी का मौसम',
    forecast_title: 'अगले 7 दिनों का पूर्वानुमान',
    send_message: 'संदेश भेजें',
    type_message: 'अपना संदेश टाइप करें...',
    learn_more: 'और जानें'
  },
  en: {
    app_title: 'Farmer Safety',
    nav_mandi: 'Market Prices',
    nav_weather: 'Weather',
    nav_schemes: 'Government Schemes',
    nav_chatbot: 'Chatbot',
    mandi_title: 'Real-time Market Prices',
    mandi_subtitle: 'Know the latest prices of crops in your nearby market',
    weather_title: 'Weather Information',
    weather_subtitle: 'Current and weekly weather forecast',
    schemes_title: 'Government Schemes',
    schemes_subtitle: 'Important government schemes information for farmers',
    chatbot_title: 'Agricultural Assistant Chatbot',
    chatbot_subtitle: 'Ask your agriculture related questions',
    select_state: 'Select State',
    search_crop: 'Search Crop',
    crop_placeholder: 'e.g., Wheat',
    current_weather: 'Current Weather',
    forecast_title: '7-Day Forecast',
    send_message: 'Send Message',
    type_message: 'Type your message...',
    learn_more: 'Learn More'
  },
  pa: {
    app_title: 'ਕਿਸਾਨ ਸੁਰੱਖਿਆ',
    nav_mandi: 'ਮੰਡੀ ਭਾਅ',
    nav_weather: 'ਮੌਸਮ',
    nav_schemes: 'ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ',
    nav_chatbot: 'ਚੈਟਬੋਟ',
    mandi_title: 'ਰੀਅਲ-ਟਾਈਮ ਮੰਡੀ ਭਾਅ',
    mandi_subtitle: 'ਆਪਣੇ ਨੇੜਲੇ ਮੰਡੀ ਵਿੱਚ ਫਸਲਾਂ ਦੇ ਨਵੀਨਤਮ ਭਾਅ ਜਾਣੋ',
    weather_title: 'ਮੌਸਮ ਦੀ ਜਾਣਕਾਰੀ',
    weather_subtitle: 'ਮੌਜੂਦਾ ਅਤੇ ਹਫ਼ਤਾਵਾਰੀ ਮੌਸਮ ਪੂਰਵਾਨੁਮਾਨ',
    schemes_title: 'ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ',
    schemes_subtitle: 'ਕਿਸਾਨਾਂ ਲਈ ਮਹੱਤਵਪੂਰਨ ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ ਦੀ ਜਾਣਕਾਰੀ',
    chatbot_title: 'ਖੇਤੀ ਸਹਾਇਕ ਚੈਟਬੋਟ',
    chatbot_subtitle: 'ਆਪਣੇ ਖੇਤੀ ਸਬੰਧੀ ਸਵਾਲ ਪੁੱਛੋ',
    select_state: 'ਰਾਜ ਚੁਣੋ',
    search_crop: 'ਫਸਲ ਖੋਜੋ',
    crop_placeholder: 'ਜਿਵੇਂ, ਕਣਕ',
    current_weather: 'ਮੌਜੂਦਾ ਮੌਸਮ',
    forecast_title: '7 ਦਿਨਾਂ ਦਾ ਪੂਰਵਾਨੁਮਾਨ',
    send_message: 'ਸੰਦੇਸ਼ ਭੇਜੋ',
    type_message: 'ਆਪਣਾ ਸੰਦੇਸ਼ ਟਾਈਪ ਕਰੋ...',
    learn_more: 'ਹੋਰ ਜਾਣੋ'
  },
  mr: {
    app_title: 'शेतकरी सुरक्षा',
    nav_mandi: 'मंडी भाव',
    nav_weather: 'हवामान',
    nav_schemes: 'सरकारी योजना',
    nav_chatbot: 'चॅटबॉट',
    mandi_title: 'रिअल-टाइम मंडी भाव',
    mandi_subtitle: 'तुमच्या जवळच्या मंडीतील पिकांच्या नवीनतम भावाची माहिती',
    weather_title: 'हवामान माहिती',
    weather_subtitle: 'सध्याचे आणि साप्ताहिक हवामान अंदाज',
    schemes_title: 'सरकारी योजना',
    schemes_subtitle: 'शेतकऱ्यांसाठी महत्वाच्या सरकारी योजनांची माहिती',
    chatbot_title: 'कृषी सहाय्यक चॅटबॉट',
    chatbot_subtitle: 'तुमचे कृषी संबंधित प्रश्न विचारा',
    select_state: 'राज्य निवडा',
    search_crop: 'पीक शोधा',
    crop_placeholder: 'उदा., गहू',
    current_weather: 'सध्याचे हवामान',
    forecast_title: '७ दिवसांचा अंदाज',
    send_message: 'संदेश पाठवा',
    type_message: 'तुमचा संदेश टाइप करा...',
    learn_more: 'अधिक जाणून घ्या'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('hi');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}