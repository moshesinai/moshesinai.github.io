
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, Award } from "lucide-react";

const Contact = () => {
  const handleWhatsAppClick = () => {
    const whatsappNumber = "972123456789"; // Replace with your actual WhatsApp number
    const message = "היי משה, אני מעוניין לשמוע עוד על ליווי משקיעים";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            יצירת קשר
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            צור קשר עכשיו לייעוץ מקצועי בהשקעות נדל"ן
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">WhatsApp</h3>
              <button 
                onClick={handleWhatsAppClick}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                לחץ כאן לקשר מיידי
              </button>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">טלפון</h3>
              <p className="text-gray-600">זמין לייעוץ מקצועי</p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">מייל</h3>
              <p className="text-gray-600">moshiksinai1@gmail.com</p>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">ההצלחות שלי</h3>
              <p className="text-gray-600">ניסיון מוכח בהשקעות נדל"ן</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
