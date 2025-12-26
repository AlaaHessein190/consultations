// components/ContactHero.jsx
import React from 'react';
import ContactInfoCard from '../Consultants/ContactInfoCard/ContactInfoCard';

// أيقونات بسيطة (يمكن استبدالها بأيقونات من مكتبة مثل react-icons)
const ClockIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const LocationPinIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const PhoneIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const MailIcon = <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;


const ContactHero = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white pt-16 pb-24 px-4 text-center">
      {/* شعار "تواصل معنا" الصغير */}
      <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-4 py-1 rounded-full mb-8">
        تواصل معنا
      </span>

      {/* العنوان الرئيسي */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
        نحن هنا لمساعدتك
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-16">
        لديك سؤال أو استفسار؟ فريقنا جاهز للإجابة على جميع أسئلتك ومساعدتك
      </p>

      {/* بطاقات معلومات الاتصال */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <ContactInfoCard
          icon={ClockIcon}
          title="ساعات العمل"
          description={["9:00 ص - 6:00 م", "من السبت إلى الخميس"]}
        />
        <ContactInfoCard
          icon={LocationPinIcon}
          title="العنوان"
          description={["الرياض، المملكة العربية السعودية", "شارع الملك فهد، حي العليا"]}
        />
        <ContactInfoCard
          icon={PhoneIcon}
          title="الهاتف"
          description={["+966 12 345 6789", "متاح من السبت إلى الخميس"]}
        />
        <ContactInfoCard
          icon={MailIcon}
          title="البريد الإلكتروني"
          description={["info@estisharati.com", "أرسل لنا رسالة في أي وقت"]}
        />
      </div>
    </div>
  );
};

export default ContactHero;