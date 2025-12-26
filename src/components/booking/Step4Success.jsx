import { HiCheckCircle } from "react-icons/hi";
import { Link } from "react-router-dom"; // تأكد أن المسار react-router-dom وليس react-router

// تأكد من وجود { onReset } هنا داخل الأقواس
const Step4Success = ({ onReset }) => {
  return (
    <div className="text-center py-10 flex flex-col items-center">
      <div className="bg-green-100 p-4 rounded-full mb-6">
        <HiCheckCircle className="text-green-500" size={60} />
      </div>
      <h2 className="text-2xl font-bold mb-2">تم تأكيد الحجز بنجاح!</h2>
      <p className="text-gray-500 mb-10">سيتم إرسال تفاصيل الموعد إلى بريدك الإلكتروني</p>

      {/* صندوق التفاصيل */}
      <div className="w-full max-w-md bg-blue-50/50 border border-blue-100 rounded-2xl p-6 text-right space-y-4 mb-8">
        <h3 className="font-bold text-gray-700 border-b border-blue-100 pb-2 mb-4 text-center">تفاصيل الحجز</h3>
        <div className="flex justify-between text-sm"> <span className="text-gray-500">المستشار:</span> <span className="font-bold text-blue-900">د. ندى السيد</span> </div>
        <div className="flex justify-between text-sm"> <span className="text-gray-500">التاريخ:</span> <span className="font-medium">السبت، 17 جمادى الأولى 1447 هـ</span> </div>
        <div className="flex justify-between text-sm"> <span className="text-gray-500">الوقت:</span> <span className="font-medium">12:00 م</span> </div>
        <div className="flex justify-between text-sm"> <span className="text-gray-500">النوع:</span> <span className="font-medium">مكالمة فيديو</span> </div>
        <div className="flex justify-between pt-4 border-t border-blue-100"> <span className="font-bold">المبلغ المدفوع:</span> <span className="text-blue-600 font-bold">500 ج.م</span> </div>
      </div>

      <div className="flex gap-4">
        {/* هذا الزر الآن سيعمل لأننا مررنا له onReset من الأب */}
        <button 
          onClick={onReset} 
          className="bg-[#1E293B] text-white px-8 py-2 rounded-lg hover:bg-slate-800 transition-all text-center font-medium"
        >
          حجز موعد جديد
        </button>

        <Link 
          to="/" 
          className="border border-gray-200 px-8 py-2 rounded-lg hover:bg-gray-50 transition-all block text-center font-medium"
        >
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
};

export default Step4Success;