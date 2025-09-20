import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Search, TrendingUp, TrendingDown } from 'lucide-react';

// Mock data - todo: remove mock functionality
const mockMarketData = [
  // Cereals / अनाज
  { crop: 'गेहूं / Wheat', price: '₹2,150', change: '+2.5%', trend: 'up' },
  { crop: 'धान / Rice (Basmati)', price: '₹3,850', change: '+1.8%', trend: 'up' },
  { crop: 'धान / Rice (Common)', price: '₹1,850', change: '-1.2%', trend: 'down' },
  { crop: 'मक्का / Corn', price: '₹1,750', change: '+1.8%', trend: 'up' },
  { crop: 'जौ / Barley', price: '₹1,950', change: '+0.5%', trend: 'up' },
  { crop: 'ज्वार / Jowar (Sorghum)', price: '₹1,650', change: '+2.1%', trend: 'up' },
  { crop: 'बाजरा / Bajra (Pearl Millet)', price: '₹1,750', change: '-0.5%', trend: 'down' },
  { crop: 'रागी / Ragi (Finger Millet)', price: '₹3,200', change: '+1.2%', trend: 'up' },

  // Pulses / दालें
  { crop: 'चना / Chickpea', price: '₹4,200', change: '+3.2%', trend: 'up' },
  { crop: 'तुवर दाल / Toor Dal', price: '₹6,500', change: '+2.8%', trend: 'up' },
  { crop: 'मूंग दाल / Moong Dal', price: '₹7,200', change: '-1.5%', trend: 'down' },
  { crop: 'उड़द दाल / Urad Dal', price: '₹6,800', change: '+1.9%', trend: 'up' },
  { crop: 'मसूर दाल / Masoor Dal', price: '₹5,400', change: '+0.8%', trend: 'up' },
  { crop: 'राजमा / Kidney Beans', price: '₹8,500', change: '+2.3%', trend: 'up' },
  { crop: 'काबुली चना / Kabuli Chana', price: '₹5,800', change: '-0.9%', trend: 'down' },

  // Oilseeds / तिलहन
  { crop: 'सरसों / Mustard', price: '₹5,150', change: '-0.8%', trend: 'down' },
  { crop: 'मूंगफली / Groundnut', price: '₹4,800', change: '+1.6%', trend: 'up' },
  { crop: 'सूरजमुखी / Sunflower', price: '₹5,500', change: '+2.1%', trend: 'up' },
  { crop: 'तिल / Sesame', price: '₹8,200', change: '+1.4%', trend: 'up' },
  { crop: 'सोयाबीन / Soybean', price: '₹3,850', change: '-1.1%', trend: 'down' },
  { crop: 'कुसुम / Safflower', price: '₹4,900', change: '+0.7%', trend: 'up' },
  { crop: 'अलसी / Linseed', price: '₹5,300', change: '+1.8%', trend: 'up' },

  // Spices / मसाले
  { crop: 'हल्दी / Turmeric', price: '₹12,500', change: '+3.5%', trend: 'up' },
  { crop: 'धनिया / Coriander', price: '₹8,800', change: '+2.2%', trend: 'up' },
  { crop: 'जीरा / Cumin', price: '₹25,000', change: '+4.1%', trend: 'up' },
  { crop: 'काली मिर्च / Black Pepper', price: '₹45,000', change: '-2.3%', trend: 'down' },
  { crop: 'लाल मिर्च / Red Chilli', price: '₹15,600', change: '+2.8%', trend: 'up' },
  { crop: 'इलायची / Cardamom', price: '₹120,000', change: '+1.9%', trend: 'up' },
  { crop: 'अजवाइन / Ajwain', price: '₹18,500', change: '+1.3%', trend: 'up' },
  { crop: 'मेथी / Fenugreek', price: '₹6,200', change: '+0.9%', trend: 'up' },

  // Cash Crops / नकदी फसलें
  { crop: 'कपास / Cotton', price: '₹5,800', change: '+1.7%', trend: 'up' },
  { crop: 'गन्ना / Sugarcane', price: '₹350', change: '+2.4%', trend: 'up' },
  { crop: 'जूट / Jute', price: '₹4,200', change: '-0.6%', trend: 'down' },
  { crop: 'तम्बाकू / Tobacco', price: '₹145', change: '+1.1%', trend: 'up' },

  // Fruits / फल
  { crop: 'आम / Mango', price: '₹3,500', change: '+5.2%', trend: 'up' },
  { crop: 'केला / Banana', price: '₹2,200', change: '+1.8%', trend: 'up' },
  { crop: 'सेब / Apple', price: '₹8,500', change: '+2.1%', trend: 'up' },
  { crop: 'संतरा / Orange', price: '₹3,800', change: '+1.5%', trend: 'up' },
  { crop: 'अंगूर / Grapes', price: '₹4,200', change: '+2.8%', trend: 'up' },
  { crop: 'अमरूद / Guava', price: '₹2,800', change: '+1.2%', trend: 'up' },
  { crop: 'पपीता / Papaya', price: '₹1,500', change: '+0.9%', trend: 'up' },

  // Vegetables / सब्जियां
  { crop: 'आलू / Potato', price: '₹1,200', change: '+3.5%', trend: 'up' },
  { crop: 'प्याज / Onion', price: '₹2,800', change: '+4.2%', trend: 'up' },
  { crop: 'टमाटर / Tomato', price: '₹2,500', change: '-2.1%', trend: 'down' },
  { crop: 'गोभी / Cauliflower', price: '₹1,800', change: '+1.6%', trend: 'up' },
  { crop: 'पत्ता गोभी / Cabbage', price: '₹1,200', change: '+2.3%', trend: 'up' },
  { crop: 'गाजर / Carrot', price: '₹2,200', change: '+1.4%', trend: 'up' },
  { crop: 'मूली / Radish', price: '₹1,500', change: '+0.8%', trend: 'up' },
  { crop: 'भिंडी / Okra', price: '₹3,500', change: '+2.9%', trend: 'up' },
  { crop: 'बैंगन / Brinjal', price: '₹2,800', change: '+1.7%', trend: 'up' },
  { crop: 'खीरा / Cucumber', price: '₹1,800', change: '+1.1%', trend: 'up' },

  // Other Important Crops / अन्य महत्वपूर्ण फसलें
  { crop: 'चावल / Rice (IR-64)', price: '₹2,050', change: '+1.3%', trend: 'up' },
  { crop: 'गेहूं / Wheat (Durum)', price: '₹2,350', change: '+2.8%', trend: 'up' },
  { crop: 'अरहर / Arhar Dal', price: '₹6,800', change: '+2.5%', trend: 'up' },
  { crop: 'चना दाल / Chana Dal', price: '₹4,800', change: '+1.9%', trend: 'up' },
  { crop: 'काला चना / Black Chickpea', price: '₹4,500', change: '+1.6%', trend: 'up' }
];

const states = [
  'उत्तर प्रदेश / Uttar Pradesh',
  'पंजाब / Punjab',
  'हरियाणा / Haryana',
  'राजस्थान / Rajasthan',
  'मध्य प्रदेश / Madhya Pradesh',
  'महाराष्ट्र / Maharashtra'
];

export default function MarketPrices() {
  const { t } = useLanguage();
  const [selectedState, setSelectedState] = useState('');
  const [searchCrop, setSearchCrop] = useState('');

  const filteredData = mockMarketData.filter(item =>
    item.crop.toLowerCase().includes(searchCrop.toLowerCase())
  );

  return (
    <section id="mandi" className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-2" data-testid="text-mandi-title">
          {t('mandi_title')}
        </h2>
        <p className="text-muted-foreground" data-testid="text-mandi-subtitle">
          {t('mandi_subtitle')}
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Label htmlFor="state-select" className="text-sm font-medium">
                {t('select_state')}
              </Label>
              <Select value={selectedState} onValueChange={setSelectedState}>
                <SelectTrigger id="state-select" data-testid="select-state">
                  <SelectValue placeholder={t('select_state')} />
                </SelectTrigger>
                <SelectContent>
                  {states.map((state) => (
                    <SelectItem key={state} value={state}>
                      {state}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex-1">
              <Label htmlFor="crop-search" className="text-sm font-medium">
                {t('search_crop')}
              </Label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  id="crop-search"
                  type="text"
                  placeholder={t('crop_placeholder')}
                  value={searchCrop}
                  onChange={(e) => setSearchCrop(e.target.value)}
                  className="pl-10"
                  data-testid="input-crop-search"
                />
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <div className="text-sm text-muted-foreground mb-4">
            {filteredData.length} crops found
          </div>
          
          <div className="border rounded-lg overflow-hidden">
            {/* Fixed Header */}
            <div className="bg-card border-b border-border shadow-sm sticky top-0 z-40">
              <table className="w-full table-fixed">
                <thead>
                  <tr>
                    <th className="w-2/5 py-4 px-4 text-left text-sm font-semibold text-primary border-r border-border">
                      फसल का नाम / Crop Name
                    </th>
                    <th className="w-1/3 py-4 px-4 text-left text-sm font-semibold text-primary border-r border-border">
                      औसत मूल्य / Price (₹/quintal)
                    </th>
                    <th className="w-1/4 py-4 px-4 text-left text-sm font-semibold text-primary">
                      बदलाव / Change
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
            
            {/* Scrollable Content */}
            <ScrollArea className="h-80">
              <table className="w-full table-fixed">
                <tbody>
                  {filteredData.map((item, index) => (
                    <tr key={index} className="border-b hover-elevate" data-testid={`row-crop-${index}`}>
                      <td className="w-2/5 py-2 px-4 font-medium text-sm truncate" data-testid={`text-crop-name-${index}`}>
                        {item.crop}
                      </td>
                      <td className="w-1/3 py-2 px-4 text-lg font-semibold text-primary" data-testid={`text-crop-price-${index}`}>
                        {item.price}
                      </td>
                      <td className="w-1/4 py-2 px-4">
                        <Badge 
                          variant={item.trend === 'up' ? 'default' : 'destructive'}
                          className="flex items-center gap-1 w-fit text-xs"
                          data-testid={`badge-crop-change-${index}`}
                        >
                          {item.trend === 'up' ? (
                            <TrendingUp className="h-3 w-3" />
                          ) : (
                            <TrendingDown className="h-3 w-3" />
                          )}
                          {item.change}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </ScrollArea>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}