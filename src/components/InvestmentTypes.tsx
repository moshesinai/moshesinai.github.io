
import { Card, CardContent } from "@/components/ui/card";
import { Zap, DollarSign } from "lucide-react";

const InvestmentTypes = () => {
  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            מהי המטרה שלך?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-amber-50">
            <CardContent className="p-10">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <Zap className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">עסקת FLIP</h3>
              <p className="text-gray-700 leading-relaxed text-right text-lg">
                רווח מהיר ממכירה מהירה של נכס, תוך פרק זמן קצר בד"כ 18 חודשים.
              </p>
              <p className="text-gray-700 leading-relaxed text-right text-lg mt-4">
                בעסקה מסוג זה ניתן לממש את הרווחים בתוך טווח זמן מצומצם ולהגדיל את ההון באופן מהיר ויעיל.
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
            <CardContent className="p-10">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                <DollarSign className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Cashflow - תזרים מזומנים חיובי</h3>
              <p className="text-gray-700 leading-relaxed text-right text-lg">
                עסקת נדל"ן שמייצרת תזרים מזומנים חיובי - כאשר דמי השכירות מכסים את תשלום המשכנתא ומותירים עודף חודשי בכיס.
              </p>
              <p className="text-gray-700 leading-relaxed text-right text-lg mt-4">
                השילוב בין השבחת הנכס לניהול פיננסי נכון יוצר הכנסה פסיבית יציבה, שמאפשרת למשקיע ליהנות מרווח חודשי שוטף לאורך זמן.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default InvestmentTypes;
