import { AiOutlineVideoCamera, AiOutlinePhone, AiOutlineMessage } from "react-icons/ai";

const Step2Type = ({ onNext, onPrev }) => {
  const options = [
    { id: 'video', title: 'مكالمة فيديو', desc: 'تواصل وجهاً لوجه مع المستشار عبر مكالمة فيديو مباشرة', icon: <AiOutlineVideoCamera size={24}/>, badge: 'الأكثر شيوعاً' },
    { id: 'voice', title: 'مكالمة صوتية', desc: 'تواصل صوتي مع المستشار عبر مكالمة هاتفية', icon: <AiOutlinePhone size={24}/> },
    { id: 'chat', title: 'محادثة كتابية', desc: 'تواصل كتابي مع المستشار عبر الرسائل النصية', icon: <AiOutlineMessage size={24}/> },
  ];

  return (
    <div className="text-right">
      <h2 className="text-xl font-bold mb-2">نوع الاستشارة</h2>
      <p className="text-gray-500 text-sm mb-6">اختر الطريقة المفضلة للاستشارة</p>

      <div className="space-y-4 mb-8">
        {options.map((opt) => (
          <div key={opt.id} className={`flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-all ${opt.id === 'video' ? 'border-blue-500 bg-blue-50/30' : 'border-gray-100'}`}>
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-lg ${opt.id === 'video' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500'}`}>
                {opt.icon}
              </div>
              <div>
                <div className="flex items-center gap-2">
                    <span className="font-bold">{opt.title}</span>
                    {opt.badge && <span className="bg-green-100 text-green-600 text-[10px] px-2 py-0.5 rounded-full">{opt.badge}</span>}
                </div>
                <p className="text-xs text-gray-500 mt-1">{opt.desc}</p>
              </div>
            </div>
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${opt.id === 'video' ? 'border-blue-600' : 'border-gray-300'}`}>
                {opt.id === 'video' && <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>}
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mt-10">
        <button onClick={onPrev} className="text-gray-500 flex items-center gap-2"> → السابق </button>
        <button onClick={onNext} className="bg-slate-900 text-white px-10 py-2 rounded-lg"> التالي </button>
      </div>
    </div>
  );
};

export default Step2Type;