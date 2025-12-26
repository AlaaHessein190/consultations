import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Step1DateTime = ({ onNext }) => {
  const times = ["09:00 ص", "10:00 ص", "11:00 ص", "12:00 م", "02:00 م", "03:00 م", "04:00 م", "05:00 م", "06:00 م", "07:00 م"];

  return (
    <div className="text-right">
      <h2 className="text-xl font-bold mb-2">اختر التاريخ والوقت</h2>
      <p className="text-gray-500 text-sm mb-6">حدد الموعد المناسب لك</p>

      {/* تقويم مبسط - يمكنك استبداله بمكتبة تقويم لاحقاً */}
      <div className="border rounded-xl p-4 mb-6">
        <div className="flex justify-between items-center mb-4 px-2">
          <IoIosArrowBack className="cursor-pointer" />
          <span className="font-bold">November 2025</span>
          <IoIosArrowForward className="cursor-pointer" />
        </div>
        <div className="grid grid-cols-7 gap-2 text-center text-xs text-gray-400 mb-2">
          <span>Su</span> <span>Mo</span> <span>Tu</span> <span>We</span> <span>Th</span> <span>Fr</span> <span>Sa</span>
        </div>
        <div className="grid grid-cols-7 gap-2 text-center">
            {/* مثال لأيام الشهر */}
            {[...Array(30)].map((_, i) => (
                <button key={i} className={`p-2 rounded-lg text-sm ${i === 7 ? 'bg-blue-900 text-white' : 'hover:bg-gray-100'}`}>
                    {i + 1}
                </button>
            ))}
        </div>
      </div>

      <h3 className="font-bold mb-4 text-sm">الوقت المتاح</h3>
      <div className="grid grid-cols-5 gap-3 mb-8">
        {times.map((time, index) => (
          <button key={index} className="border py-2 rounded-lg text-xs hover:border-blue-600 transition-all">
            {time}
          </button>
        ))}
      </div>

      <button onClick={onNext} className="bg-slate-900 text-white px-8 py-2 rounded-lg flex items-center gap-2 mr-auto">
        التالي ←
      </button>
    </div>
  );
};

export default Step1DateTime;