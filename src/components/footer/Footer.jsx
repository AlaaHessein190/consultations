import React from "react";
import logo from "../../assets/logoFooter.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaRocket,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-secondColor text-white py-12  border-t border-gray-700">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* النبذة عن الموقع */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src={logo} alt="شعار استشاراتي" className="w-12 h-12 object-contain" />
            <div>
              <h3 className="text-xl font-bold">استشاراتي</h3>
              <p className="text-gray-300 text-sm">منصة الاستشارات الاحترافية</p>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            منصتك الموثوقة للحصول على استشارات احترافية من أفضل الخبراء المعتمدين في جميع المجالات.
          </p>

          <h4 className="text-lg font-semibold mb-3">تابعنا</h4>
          <div className="flex gap-3">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-3 bg-[#314158] text-white rounded hover:bg-white hover:text-secondColor transition-all duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* روابط سريعة */}
        <div>
          <h4 className="text-lg font-semibold mb-3">روابط سريعة</h4>
          <ul className="space-y-2 text-gray-400">
            {["من نحن", "كيف نعمل", "التخصصات", "المستشارون", "الأسعار"].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* الدعم */}
        <div>
          <h4 className="text-lg font-semibold mb-3">الدعم</h4>
          <ul className="space-y-2 text-gray-400">
            {["الأسئلة الشائعة", "مركز المساعدة", "سياسة الخصوصية", "الشروط والأحكام", "اتصل بنا"].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* النشرة البريدية والتواصل */}
        <div>
          <h4 className="text-lg font-semibold mb-3">اشترك في نشرتنا البريدية</h4>
          <p className="text-gray-300 text-sm mb-4">
            احصل على آخر الأخبار والعروض الحصرية.
          </p>

          {/* حقل البريد */}
          <div className="flex space-x-1 rounded-xl w-full mb-6 shadow-md">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 px-4 py-2 text-sm rounded-xl bg-[#314158] text-white placeholder-gray-400 outline-none border-none"
            />
            <button
              type="button"
              className="bg-white text-secondColor px-4 rounded-xl  flex items-center justify-center hover:bg-[#0F172b] hover:text-white transition-all duration-300"
            >
              <FaRocket className="text-lg" />
            </button>
          </div>

          {/* بيانات التواصل */}
          <h4 className="text-lg font-semibold mb-3">تواصل معنا</h4>
          <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-lg text-white" />
              <div>
                <h5 className="font-semibold">البريد الإلكتروني</h5>
                <p>info@estisharati.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-lg text-white" />
              <div>
                <h5 className="font-semibold">الهاتف</h5>
                <p>+201012345678</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-lg text-white" />
              <div>
                <h5 className="font-semibold">العنوان</h5>
                <p>القاهرة، مصر</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* حقوق النشر */}
          <div className="container">
                  <div className="flex flex-col md:flex-row items-center justify-between mt-10 border-t border-gray-600 pt-4 text-gray-400 text-sm gap-4">
  {/* الحقوق */}
  <p className="text-center md:text-right">
    © {new Date().getFullYear()}{" "}
    <span className="text-white font-semibold">استشاراتي</span>. جميع الحقوق محفوظة.
  </p>

  {/* روابط السياسات */}
  <ul className="flex flex-wrap items-center justify-center gap-4 text-gray-400">
    <li>
      <a href="#" className="hover:text-white transition">سياسة الخصوصية</a>
    </li>
    <li>
      <a href="#" className="hover:text-white transition">الشروط والأحكام</a>
    </li>
    <li>
      <a href="#" className="hover:text-white transition">سياسة الاسترجاع</a>
    </li>
  </ul>
</div>
          </div>

    </footer>
  );
}

export default Footer;
