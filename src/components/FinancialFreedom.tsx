
import { Card, CardContent } from "@/components/ui/card";
import { Sunrise, Plane, Heart, Calculator } from "lucide-react";

const FinancialFreedom = () => {
  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            חופש כלכלי ממה? ולמה?
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-0 shadow-xl mb-12">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-4 gap-8 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sunrise className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">קום בלי שעון מעורר</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plane className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">טיולים בעולם</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">זמן למשפחה</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-gray-700 font-medium">הכנסה פסיבית</p>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">חופש כלכלי – זה לא חלום, זו מטרה עם דרך</h3>
              
              <div className="text-gray-700 leading-relaxed text-right space-y-4 text-lg">
                <p>
                  רובנו חולמים להשתחרר מהשגרה השוחקת, מהמרוץ הבלתי נגמר של עבודה, דאגות ולחצים. כולנו מדמיינים את היום שבו נוכל לקום בבוקר בלי שעון מעורר – כשההכנסות הפאסיביות שלנו מכסות את כל ההוצאות, ואנחנו חופשיים לבחור איך נראה היום שלנו.
                </p>
                <p>
                  לטייל בעולם, לאפות או לבשל בכיף, להשקיע זמן במשפחה, לתרום לקהילה או פשוט לנשום לרווחה – החופש הזה אפשרי.
                </p>
                <p>
                  אבל כדי להגיע אליו, חייבים לעשות את הצעד הראשון. אחריו יבואו עוד צעדים – חלקם קלים, חלקם מאתגרים – אבל מי שנשאר ממוקד ולא מוותר, יכול למצוא את עצמו תוך כמה שנים במקום שבו אחרים רק חולמים להיות.
                </p>
                <p className="font-bold text-indigo-700 text-xl">
                  המסע לחופש כלכלי מתחיל בהחלטה אחת. והשאר? עניין של עשייה והתמדה.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FinancialFreedom;
