
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const LeadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `פנייה חדשה מהאתר:
שם מלא: ${formData.name}
טלפון: ${formData.phone}
מייל: ${formData.email}
הודעה: ${formData.message || 'לא צוין'}`;
    
    // Your WhatsApp number (replace with your actual number)
    const whatsappNumber = "972123456789"; // Replace with your actual WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "מעביר לוואטסאפ",
      description: "את/ה מועבר/ת לוואטסאפ לשליחת הפנייה.",
    });
    
    // Reset form
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800" dir="rtl">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            השארת פרטים
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            מלא את הפרטים ואצור איתך קשר לייעוץ מקצועי
          </p>
        </div>
        
        <Card className="bg-white/10 backdrop-blur-sm border-0 shadow-2xl">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label className="block text-white font-medium mb-2">שם מלא *</Label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 text-right"
                  placeholder="הכנס את השם המלא"
                />
              </div>
              
              <div>
                <Label className="block text-white font-medium mb-2">טלפון *</Label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 text-right"
                  placeholder="הכנס מספר טלפון"
                />
              </div>
              
              <div>
                <Label className="block text-white font-medium mb-2">מייל *</Label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 text-right"
                  placeholder="הכנס כתובת מייל"
                />
              </div>
              
              <div>
                <Label className="block text-white font-medium mb-2">כל מה שבא לך לרשום לי:</Label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 text-right"
                  placeholder="ספר לי על המטרות שלך, התקציב והציפיות..."
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 text-lg transition-all duration-300 hover:scale-105"
              >
                שלח בוואטסאפ
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LeadForm;
