import { LanguageProvider } from '@/contexts/LanguageContext';
import Chatbot from '../Chatbot';

export default function ChatbotExample() {
  return (
    <LanguageProvider>
      <div className="p-8">
        <Chatbot />
      </div>
    </LanguageProvider>
  );
}