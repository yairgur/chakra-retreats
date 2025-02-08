import React from 'react';
import { Heart, Utensils, Users, Coffee, Activity, Calendar, Clock, MapPin, Sun, MessageCircleMore } from 'lucide-react';

const ValentineRetreat = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/972527430380', '_blank');
  };
  const registrationLink = "https://docs.google.com/forms/d/1IJ82IYULI4rqVXmwZ-Zc2uDZCIPXxmz8GRAtIQL95uM/viewform?edit_requested=true";

  const handleRegistration = () => {
    window.open(registrationLink, '_blank');
  };

  return (
    <div className="w-screen overflow-y-auto bg-pink-50 text-gray-800" dir="rtl">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-b from-pink-100 to-pink-50 py-24">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-pink-600 mb-6">
              חגיגת Valentine
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8">
              חוגגים יום של אהבה בריטריט יום שמוקדש כולו לאהבה לעצמנו, לטבע, לעולם ולסובבים אותנו
            </p>
            <p className="text-lg text-gray-600 mb-10">
              הזדמנות לצלול פנימה ולהעמיק את היחסים והחיבור שלנו לעצמנו ולעולם, לפתוח ולהרחיב את הלב ולאפשר לעוד אור ואהבה להכנס ולצאת ולחלוק אותו בקבוצה אינטימית של אנשים יפים וטובים
            </p>
            <button 
              onClick={handleRegistration}
              className="bg-pink-500 text-white px-10 py-4 rounded-full hover:bg-pink-600 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
              להרשמה
            </button>
          </div>
        </div>
      </div>

      {/* Main Activities */}
      <div className="w-full bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">מה מחכה לנו?</h2>
          <div className="space-y-12">
            <ActivityCard
              icon={<Sun className="w-8 h-8 text-pink-500" />}
              title="פתיחת בוקר על הגג"
              description="נפתח את הבוקר בגג עם נוף לים, תה ונישנושים, מעגל הכרות והתכווננות למסע שנעבור ביום הזה"
              images={[
                "/images/image1.jpg",
                "/images/image2.jpg",
                "/images/image3.jpg"
              ]}
            />
            <ActivityCard
              icon={<Activity className="w-8 h-8 text-pink-500" />}
              title="סדנת צ'אקרת המין"
              description="כדי להגיע אל הלב נצטרך לעבור דרך צ׳אקרת המין. נעורר את התשוקה והילדים הפנימיים שלנו דרך הגוף בדיטציה מונחת ותנועה ביחידים ובזוגות."
              images={[
                "/images/image4.jpg",
                "/images/image5.jpg",
                "/images/image6.jpg"
              ]}
            />
            <ActivityCard
              icon={<Utensils className="w-8 h-8 text-pink-500" />}
              title="סדנת בישול איטלקי"
              description="נכין יחד פסטה, ניוקי, ורביולי טריים עם טוויסטים מרגשים. נלוש, נצור ונשחק עם הבצק, ניצוק רטבים מסורתיים על טהרת המטבח האיטלקי ונתחבר דרך חוויה קולינרית משותפת, כל זאת בליווי יין משובח שיחמם את הלב"
              images={[
                "/images/image7.jpg",
                "/images/image8.jpg",
                "/images/image9.jpg"
              ]}
            />
            <ActivityCard
              icon={<Heart className="w-8 h-8 text-pink-500" />}
              title="סדנת אהבה וצ'אקרת הלב"
              description="אחרי שעוררנו את צ׳אקרת המין, והתגבשנו בסדנה של יאיר נוכל לעבור אל הקינוח- סדנה מיוחדת בנושא אהבה וצ׳אקרת הלב. צלילה אל מחוזות הלב והאהבה שיש בנו ובחיים שלנו ונתינת אהבה אחד.ת לשני.ה. נסיים בטקס קקאו שיחמם לנו את הלב יעלה את האנרגיות ויעיף אותנו למסיבה קבוצתית בגג."
              images={[
                "/images/image10.jpg",
                "/images/image11.jpg",
                "/images/image12.jpg"
              ]}
            />
          </div>
        </div>
      </div>

      {/* Guides Section */}
      <div className="w-full bg-pink-50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">המנחים שלנו</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 shadow-lg">
                <img 
                  src="/images/image13.jpg" 
                  alt="תאיר" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">תאיר</h3>
              <p className="text-gray-600 mb-4">
                שחקנית, אומנית יוצרת ומטפלת רגשית אנרגטית בשיטת הילינג במגע. מנחת סדנאות אימפרוביזציה, תנועה והתפתחות אישית
              </p>
              <p className="text-gray-600">
                מנחה את סדנאות המדיטציה, התנועה וטקס הקקאו
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 shadow-lg">
                <img 
                  src="/images/image14.jpg" 
                  alt="יאיר" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">יאיר</h3>
              <p className="text-gray-600 mb-4">
                חובב עולם וטיולים, רקדן אירועים ומאמין שבישול הוא גשר בין אנשים. חוקר תרבויות דרך טעמים ונוקט בגישת "הדרך ללב עוברת דרך הקיבה"
              </p>
              <p className="text-gray-600">
                .מנחה את סדנת הבישול האיטלקי שלנו 
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Event Details */}
      <div className="w-full bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">פרטי האירוע</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <DetailCard
              icon={<Calendar className="w-8 h-8 text-pink-500" />}
              title="מתי?"
              description="15.02.2025"
            />
            <DetailCard
              icon={<Clock className="w-8 h-8 text-pink-500" />}
              title="משך האירוע"
              description="11:00-18:00"
            />
            <DetailCard
              icon={<MapPin className="w-8 h-8 text-pink-500" />}
              title="איפה?"
              description="הבית השיתופי COM-UNITY
שדרות וושינגטון 20, תל אביב"
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="w-full bg-pink-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">מוכנים להצטרף אלינו?</h2>
          <p className="text-xl text-gray-600 mb-10">
            בואו לחוות יום של אהבה, חיבור והתחדשות
          </p>
          <button 
            onClick={handleRegistration}
            className="bg-pink-500 text-white px-10 py-4 rounded-full hover:bg-pink-600 transition-colors text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
            לפרטים והרשמה
          </button>
        </div>
      </div>
      {/* Floating WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 z-50 flex items-center justify-center"
        aria-label="פתח WhatsApp"
      >
        <MessageCircleMore className="w-6 h-6" />
      </button>
    </div>
  );
};

const ActivityCard = ({ icon, title, description, images }) => (
  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
    <div className="flex items-center mb-6">
      {icon}
      <h3 className="text-2xl font-bold mr-4">{title}</h3>
    </div>
    <p className="text-gray-600 mb-6 text-lg">{description}</p>
    <div className="grid grid-cols-3 gap-4">
      {images.map((src, index) => (
        <div key={index} className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-md">
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
  <div className="text-center p-6 bg-pink-50 rounded-2xl shadow-md hover:shadow-lg transition-shadow w-full max-w-sm mx-auto">
    <div className="flex justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600 text-lg">{description}</p>
  </div>
);

export default ValentineRetreat;