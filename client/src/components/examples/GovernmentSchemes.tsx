import { LanguageProvider } from '@/contexts/LanguageContext';
import GovernmentSchemes from '../GovernmentSchemes';

export default function GovernmentSchemesExample() {
  return (
    <LanguageProvider>
      <div className="p-8">
        <GovernmentSchemes />
      </div>
    </LanguageProvider>
  );
}