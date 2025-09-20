import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Users, Shield, CreditCard, Truck, Heart, Zap } from 'lucide-react';

// Mock schemes data - todo: remove mock functionality
const mockSchemes = [
  {
    titleHi: 'पीएम-किसान सम्मान निधि',
    titleEn: 'PM-Kisan Samman Nidhi',
    descriptionHi: 'इस योजना के तहत, सभी पात्र किसान परिवारों को प्रति वर्ष ₹6,000 की आय सहायता प्रदान की जाती है।',
    descriptionEn: 'Under this scheme, income support of ₹6,000 per year is provided to all eligible farmer families.',
    link: 'https://pmkisan.gov.in/',
    icon: <Users className="h-6 w-6" />
  },
  {
    titleHi: 'प्रधानमंत्री फसल बीमा योजना',
    titleEn: 'Pradhan Mantri Fasal Bima Yojana',
    descriptionHi: 'प्राकृतिक आपदाओं, कीटों और रोगों के कारण फसल खराब होने की स्थिति में किसानों को बीमा कवरेज और वित्तीय सहायता।',
    descriptionEn: 'Insurance coverage and financial support to farmers in case of crop damage due to natural disasters, pests and diseases.',
    link: 'https://pmfby.gov.in/',
    icon: <Shield className="h-6 w-6" />
  },
  {
    titleHi: 'किसान क्रेडिट कार्ड (KCC)',
    titleEn: 'Kisan Credit Card (KCC)',
    descriptionHi: 'किसानों को कृषि और संबद्ध गतिविधियों के लिए समय पर और पर्याप्त क्रेडिट सहायता प्रदान करना।',
    descriptionEn: 'To provide timely and adequate credit support to farmers for agricultural and allied activities.',
    link: 'https://www.pmkisan.gov.in/Kcc.aspx',
    icon: <CreditCard className="h-6 w-6" />
  },
  {
    titleHi: 'प्रधानमंत्री किसान ट्रैक्टर योजना',
    titleEn: 'PM Kisan Tractor Yojana',
    descriptionHi: 'किसानों को ट्रैक्टर खरीदने के लिए सब्सिडी प्रदान करके आधुनिक कृषि उपकरणों तक पहुंच में सुधार।',
    descriptionEn: 'Improving access to modern agricultural equipment by providing subsidies to farmers for purchasing tractors.',
    link: 'https://www.india.gov.in/spotlight/pradhan-mantri-kisan-sampada-yojana',
    icon: <Truck className="h-6 w-6" />
  },
  {
    titleHi: 'आयुष्मान भारत योजना',
    titleEn: 'Ayushman Bharat Scheme',
    descriptionHi: 'गरीब और वंचित परिवारों को प्रति वर्ष ₹5 लाख तक का स्वास्थ्य बीमा कवरेज प्रदान करना।',
    descriptionEn: 'Providing health insurance coverage of up to ₹5 lakh per year to poor and deprived families.',
    link: 'https://www.pmjay.gov.in/',
    icon: <Heart className="h-6 w-6" />
  },
  {
    titleHi: 'प्रधानमंत्री सौर योजना',
    titleEn: 'PM Solar Scheme',
    descriptionHi: 'किसानों को सोलर पंप और सोलर पावर सिस्टम स्थापित करने के लिए सब्सिडी प्रदान करना।',
    descriptionEn: 'Providing subsidies to farmers for installing solar pumps and solar power systems.',
    link: 'https://mnre.gov.in/solar/schemes/',
    icon: <Zap className="h-6 w-6" />
  }
];

export default function GovernmentSchemes() {
  const { t, language } = useLanguage();

  const openLink = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="schemes" className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-2" data-testid="text-schemes-title">
          {t('schemes_title')}
        </h2>
        <p className="text-muted-foreground" data-testid="text-schemes-subtitle">
          {t('schemes_subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockSchemes.map((scheme, index) => (
          <Card key={index} className="h-full flex flex-col hover-elevate" data-testid={`card-scheme-${index}`}>
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  {scheme.icon}
                </div>
                <CardTitle className="text-lg flex-1" data-testid={`text-scheme-title-${index}`}>
                  {language === 'en' ? scheme.titleEn : scheme.titleHi}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <p className="text-muted-foreground flex-1 mb-4" data-testid={`text-scheme-description-${index}`}>
                {language === 'en' ? scheme.descriptionEn : scheme.descriptionHi}
              </p>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => openLink(scheme.link)}
                className="w-fit"
                data-testid={`button-scheme-learn-more-${index}`}
              >
                {t('learn_more')}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}