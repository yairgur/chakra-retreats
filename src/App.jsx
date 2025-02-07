import React from 'react';
import { Heart, Utensils, Users, Coffee, Activity, Calendar, Clock, MapPin, Sun } from 'lucide-react';

const ValentineRetreat = () => {
  const registrationLink = "https://docs.google.com/forms/d/1IJ82IYULI4rqVXmwZ-Zc2uDZCIPXxmz8GRAtIQL95uM/viewform?edit_requested=true";

  const handleRegistration = () => {
    window.open(registrationLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800 overflow-x-hidden" dir="rtl">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-pink-100 to-pink-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-pink-600 mb-4">
              חגיגת Valentine
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              חוגגים יום של אהבה בריטריט יום שמוקדש כולו לאהבה לעצמנו, לטבע, לעולם ולסובבים אותנו
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              הזדמנות לצלול פנימה ולהעמיק את היחסים והחיבור שלנו לעצמנו ולעולם, לפתוח ולהרחיב את הלב ולאפשר לעוד אור ואהבה להכנס ולצאת ולחלוק אותו בקבוצה אינטימית של אנשים יפים וטובים
            </p>
            <button 
              onClick={handleRegistration}
              className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors">
              להרשמה
            </button>
          </div>
        </div>
      </div>

      {/* Main Activities */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">מה מחכה לנו?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ActivityCard
            icon={<Sun className="w-8 h-8 text-pink-500" />}
            title="פתיחת בוקר על הגג"
            description="נפתח את הבוקר בגג עם נוף לים, תה ונישנושים, מעגל הכרות והתכווננות למסע שנעבור ביום הזה"
            images={[
              "/api/placeholder/400/300",
              "/api/placeholder/400/300",
              "/api/placeholder/400/300"
            ]}
          />
          <ActivityCard
            icon={<Activity className="w-8 h-8 text-pink-500" />}
            title="סדנת צ'אקרת המין"
            description="נעבור דרך הצ'אקרה התחתונה בדרך אל הלב. נעשה מדיטציה מונחת, נעורר את הגוף בתנועה ביחידים ובזוגות"
            images={[
              "/api/placeholder/400/300",
              "/api/placeholder/400/300",
              "/api/placeholder/400/300"
            ]}
          />
          <ActivityCard
            icon={<Utensils className="w-8 h-8 text-pink-500" />}
            title="סדנת בישול איטלקי"
            description="נבשל יחד ארוחה איטלקית רומנטית עם יאיר - נכין פסטה וניוקי בצורות עם רטבים מגוונים וטעימים"
            images={[
              "/api/placeholder/400/300",
              "/api/placeholder/400/300",
              "/api/placeholder/400/300"
            ]}
          />
          <ActivityCard
            icon={<Heart className="w-8 h-8 text-pink-500" />}
            title="סדנת אהבה וצ'אקרת הלב"
            description="נחווה דמיון מודרך, הילינג, וטקס קקאו. נפתח את הלב דרך שיח מעמיק, ריפוי ומגע אוהב"
            images={[
              "/api/placeholder/400/300",
              "/api/placeholder/400/300",
              "/api/placeholder/400/300"
            ]}
          />
        </div>
      </div>

      {/* Guides Section */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">המנחים שלנו</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <img 
                  src="/api/placeholder/192/192" 
                  alt="תאיר" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">תאיר</h3>
              <p className="text-gray-600 mb-4">
                שחקנית, אומנית יוצרת ומטפלת רגשית אנרגטית בשיטת הילינג במגע. מנחת סדנאות אימפרוביזציה, תנועה והתפתחות אישית
              </p>
              <p className="text-gray-600">
                מנחה את סדנאות המדיטציה, התנועה וטקס הקקאו
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200">
                <img 
                  src="/api/placeholder/192/192" 
                  alt="יאיר" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">יאיר</h3>
              <p className="text-gray-600">
                שף ומומחה למטבח האיטלקי, מנחה את סדנת הבישול הרומנטית שלנו
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div className="bg-pink-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">פרטי האירוע</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <DetailCard
              icon={<Calendar className="w-6 h-6 text-pink-500" />}
              title="מתי?"
              description="14.2.2025"
            />
            <DetailCard
              icon={<Clock className="w-6 h-6 text-pink-500" />}
              title="משך האירוע"
              description="10:00-18:00"
            />
            <DetailCard
              icon={<MapPin className="w-6 h-6 text-pink-500" />}
              title="איפה?"
              description="הבית השיתופי - תל אביב"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-pink-100 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">מוכנים להצטרף אלינו?</h2>
          <p className="text-xl text-gray-600 mb-8">
            בואו לחוות יום של אהבה, חיבור והתחדשות
          </p>
          <button 
            onClick={handleRegistration}
            className="bg-pink-500 text-white px-8 py-3 rounded-full hover:bg-pink-600 transition-colors">
            לפרטים והרשמה
          </button>
        </div>
      </div>
    </div>
  );
};

const ActivityCard = ({ icon, title, description, images }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    <div className="flex items-center mb-4">
      {icon}
      <h3 className="text-xl font-bold mr-3">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{description}</p>
    <div className="grid grid-cols-3 gap-2">
      {images.map((src, index) => (
        <div key={index} className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
          <img 
            src={src} 
            alt={`${title} - תמונה ${index + 1}`} 
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  </div>
);

const DetailCard = ({ icon, title, description }) => (
  <div className="text-center">
    <div className="flex justify-center mb-3">
      {icon}
    </div>
    <h3 className="font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default ValentineRetreat;