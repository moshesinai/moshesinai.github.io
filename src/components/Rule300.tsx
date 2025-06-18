
import { Card, CardContent } from "@/components/ui/card";
import { Calculator, TrendingUp } from "lucide-react";

const Rule300 = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            הכירו את חוק ה-300
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border-0 shadow-2xl">
            <CardContent className="p-12">
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                  <Calculator className="h-12 w-12 text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">חוק ה-300 נועד לייצר ודאות בהשגת המטרה</h3>
              
              <div className="text-gray-700 leading-relaxed text-right space-y-6 text-lg">
                <p className="text-xl font-semibold text-amber-700">
                  כיצד ניתן לדעת מהו הסכום שאיתו ניתן להיות בחופש כלכלי?
                </p>
                
                <p>
                  חשבו, מהן ההוצאות החודשיות שלכם לאחר שתפסיקו לעבוד?
                </p>
                
                <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-8 rounded-lg border-r-4 border-amber-500">
                  <p className="text-xl font-bold text-gray-900 mb-4">דוגמה לחישוב:</p>
                  <p className="text-lg mb-2">
                    אם ההוצאות החודשיות שלכם מסתכמות ב-20,000 ₪
                  </p>
                  <p className="text-lg mb-4">
                    אז החישוב מתבצע כך: 20,000 × 300 = 6,000,000 ₪
                  </p>
                  <div className="flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-green-600 ml-2" />
                    <span className="text-xl font-bold text-green-700">6 מיליון שקל</span>
                  </div>
                </div>
                
                <p className="text-xl font-semibold text-indigo-700">
                  כאשר מגיעים לסכום הנדרש ניתן לקבל ממנו תשואה קבועה שמאפשרת חופש כלכלי.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Rule300;
