import { RiSecurePaymentLine } from "react-icons/ri";
import { FaCreditCard, FaApplePay } from "react-icons/fa";
import { BsBank } from "react-icons/bs";

const Step3Payment = ({ onNext, onPrev }) => {
  return (
    <div className="text-right">
      <h2 className="text-xl font-bold mb-2">معلومات الدفع</h2>
      <p className="text-gray-500 text-sm mb-6">اختر طريقة الدفع المناسبة</p>

      <div className="bg-green-50 text-green-700 p-3 rounded-lg text-xs flex items-center gap-2 mb-6 border border-green-100">
        <RiSecurePaymentLine size={18} /> جميع المعاملات آمنة ومشفرة
      </div>

      <div className="space-y-3 mb-8">
        <div className="border-2 border-blue-500 p-4 rounded-xl flex justify-between items-center">
            <div className="flex items-center gap-3">
                <FaCreditCard className="text-blue-600" size={24}/>
                <span className="font-bold">بطاقة ائتمان / خصم</span>
            </div>
            <span className="text-xs text-gray-400 italic">Visa, Mastercard, Mada</span>
        </div>
        <div className="border border-gray-100 p-4 rounded-xl flex items-center gap-3 grayscale opacity-60 cursor-not-allowed">
            <FaApplePay size={30}/> <span className="font-bold">Apple Pay</span>
        </div>
      </div>

      {/* حقول البطاقة */}
      <div className="bg-gray-50 p-6 rounded-xl space-y-4">
        <div>
            <label className="block text-xs text-gray-500 mb-2">رقم البطاقة</label>
            <input type="text" placeholder="1234 5678 9012 3456" className="w-full p-2 border rounded-lg text-left" />
        </div>
        <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-xs text-gray-500 mb-2">تاريخ الانتهاء</label>
                <input type="text" placeholder="MM/YY" className="w-full p-2 border rounded-lg text-left" />
            </div>
            <div>
                <label className="block text-xs text-gray-500 mb-2">CVV</label>
                <input type="text" placeholder="123" className="w-full p-2 border rounded-lg text-left" />
            </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-10">
        <button onClick={onPrev} className="text-gray-500 flex items-center gap-2"> → السابق </button>
        <button onClick={onNext} className="bg-green-600 text-white px-10 py-2 rounded-lg font-bold"> تأكيد الحجز والدفع </button>
      </div>
    </div>
  );
};

export default Step3Payment;