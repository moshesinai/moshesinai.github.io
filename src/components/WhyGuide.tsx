
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Target, TrendingUp, Car } from "lucide-react";

const WhyGuide = () => {
  const reasons = [
    {
      icon: Shield,
      title: "למה מלווה משקיעים ולא מתווך?",
      description: "בניגוד למתווך, שמייצג את שני הצדדים ומונע בעיקר מהרצון לסגור עסקה - ללא תלות במחיר או בתנאים - מלווה משקיעים פועל אך ורק לטובת הקונה. האינטרס היחיד שלו הוא הצלחת ההשקעה שלך."
    },
    {
      icon: Target,
      title: "ליווי מקצועי וממוקד מטרות",
      description: "מלווה המשקיעים בוחן את העסקה מכל היבט - החל מסביבת הנכס, מצבו של הבניין, איכות השכנים, ועד למצב המשפטי, התכנוני והשמאותי של הדירה. מדובר בעסקה ששווה הרבה מאוד כסף - ולכן נדרש מישהו שמבין לעומק."
    },
    {
      icon: TrendingUp,
      title: "מהחזון - לביצוע בפועל",
      description: "המטרה ברורה: לקחת אותך מנקודה A לנקודה B בהתאם ליעדים שנקבעו בפגישה הראשונית. מלווה המשקיעים הוא מי שמתרגם מטרות לרווחים בשטח."
    },
    {
      icon: Car,
      title: "האם היית רוכש רכב בלי ייעוץ מקצועי?",
      description: "קל וחומר כשמדובר בדירה - נכס יקר ומשמעותי בהרבה. כדי לבצע השקעת נדל\"ן אחת - ובטח כשיש שאיפה לבצע יותר - חשוב שיהיה לצידך מומחה שמבין את טיב העסקה ואת פוטנציאל הרווח שלה."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800" dir="rtl">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            למה מלווה משקיעים?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full flex items-center justify-center mb-6">
                  <reason.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-right">{reason.title}</h3>
                <p className="text-gray-300 leading-relaxed text-right">{reason.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGuide;
