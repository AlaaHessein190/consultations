import { AiFillStar, AiOutlineClockCircle, AiOutlineVideoCamera } from "react-icons/ai";
import { HiOutlineCheckCircle } from "react-icons/hi";

const BookingSidebar = ({ bookingDetails }) => {
  return (
    <div className="w-80 p-6 bg-white border border-gray-100 rounded-2xl shadow-sm dir-rtl text-right">
      <h3 className="font-bold text-lg mb-4 text-gray-700">ملخص الحجز</h3>
      <div className="flex items-center gap-3 mb-6">
        <img src="/doctor-image.jpg" className="w-14 h-14 rounded-full object-cover" alt="Dr" />
        <div>
          <h4 className="font-bold text-gray-800">د. ندى السيد</h4>
          <p className="text-xs text-gray-500">استشاري قانوني</p>
          <div className="flex items-center text-yellow-500 text-xs">
            <AiFillStar /> <span className="mr-1 text-gray-700 font-bold">4.9</span> <span className="text-gray-400 mr-1">(156)</span>
          </div>
        </div>
      </div>

      <div className="space-y-3 border-t pt-4 text-sm text-gray-600">
        <div className="flex justify-between">
          <span>الموعد</span>
          <span className="font-medium">{bookingDetails.date || "لم يحدد بعد"}</span>
        </div>
        <div className="flex justify-between">
          <span>المدة</span>
          <span className="flex items-center gap-1"><AiOutlineClockCircle /> 60 دقيقة</span>
        </div>
        <div className="flex justify-between">
          <span>النوع</span>
          <span className="flex items-center gap-1"><AiOutlineVideoCamera /> مكالمة فيديو</span>
        </div>
      </div>

      <div className="mt-6 space-y-2 border-t pt-4">
        <div className="flex justify-between text-gray-600">
          <span>سعر الجلسة</span>
          <span>500 ج.م</span>
        </div>
        <div className="flex justify-between text-green-600 font-medium">
          <span>رسوم المنصة</span>
          <span>مجاناً</span>
        </div>
        <div className="flex justify-between text-blue-600 font-bold text-lg pt-2">
          <span>المجموع</span>
          <span>500 ج.م</span>
        </div>
      </div>

      <div className="mt-6 space-y-2 text-xs text-gray-500 italic">
        <p className="flex items-center gap-2"><HiOutlineCheckCircle className="text-green-500" /> إلغاء مجاني حتى 24 ساعة</p>
        <p className="flex items-center gap-2"><HiOutlineCheckCircle className="text-green-500" /> ضمان استرجاع الأموال</p>
      </div>
    </div>
  );
};
export default BookingSidebar;
