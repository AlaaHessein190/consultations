import React from "react";
import { FaGraduationCap, FaPlus, FaPen, FaTrash, FaCertificate, FaBriefcase, FaTimes } from "react-icons/fa";

const ProfessionalInfo = () => {
  return (
    <div className="space-y-10 animate-fadeIn text-right">
        
        {/* المؤهلات العلمية */}
        <div>
            <div className="flex justify-between items-center mb-4 ">
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 ">
                    <FaGraduationCap className="text-gray-600"/> المؤهلات العلمية
                </h2>
                <button className="border border-gray-200 px-3 py-1.5 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-50 ">
                    <FaPlus size={10} /> إضافة مؤهل
                </button>
            </div>
            <div className="space-y-3">
                {/* كارت 1 */}
                <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl flex justify-between items-start ">
                    <div className="text-right">
                        <h3 className="font-bold text-gray-800">دكتوراه في القانون التجاري</h3>
                        <p className="text-sm text-gray-500">جامعة الملك سعود</p>
                        <span className="inline-block mt-2 bg-white border border-gray-200 px-2 py-0.5 rounded text-xs text-gray-600">2008</span>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2 text-gray-400 hover:text-blue-600"><FaPen /></button>
                        <button className="p-2 text-gray-400 hover:text-red-500"><FaTrash /></button>
                    </div>
                </div>
                {/* كارت 2 */}
                <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl flex justify-between items-start ">
                    <div className="text-right">
                        <h3 className="font-bold text-gray-800">ماجستير في القانون الدولي</h3>
                        <p className="text-sm text-gray-500">جامعة القاهرة</p>
                        <span className="inline-block mt-2 bg-white border border-gray-200 px-2 py-0.5 rounded text-xs text-gray-600">2005</span>
                    </div>
                    <div className="flex gap-2">
                        <button className="p-2 text-gray-400 hover:text-blue-600"><FaPen /></button>
                        <button className="p-2 text-gray-400 hover:text-red-500"><FaTrash /></button>
                    </div>
                </div>
            </div>
        </div>

        {/* الشهادات والتراخيص */}
        <div>
            <div className="flex justify-between items-center mb-4 ">
                <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 ">
                    <FaCertificate className="text-gray-600"/> الشهادات والتراخيص
                </h2>
                <button className="border border-gray-200 px-3 py-1.5 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-50 ">
                    <FaPlus size={10} /> إضافة شهادة
                </button>
            </div>
            <div className="space-y-3">
                {["محامي معتمد من وزارة العدل السعودية", "عضو الجمعية السعودية للمحامين", "شهادة في التحكيم التجاري الدولي"].map((cert, idx) => (
                    <div key={idx} className="bg-gray-50 border border-gray-100 p-4 rounded-xl flex justify-between items-center ">
                        <div className="flex items-center gap-3 flex-row-reverse">
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                                <FaCertificate size={14} />
                            </div>
                            <h3 className="font-bold text-gray-700">{cert}</h3>
                        </div>
                        <div className="flex gap-2">
                            <button className="p-2 text-gray-400 hover:text-blue-600"><FaPen /></button>
                            <button className="p-2 text-gray-400 hover:text-red-500"><FaTrash /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* مجالات الخبرة */}
        <div>
            <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2 mb-4 ">
                <FaBriefcase className="text-gray-600"/> مجالات الخبرة
            </h2>
            <div className="bg-gray-50 border border-gray-100 p-4 rounded-xl">
                 <div className="flex flex-wrap gap-2 mb-4 justify-end">
                    {["الاستشارات القانونية للشركات الناشئة", "حل النزاعات التجارية", "تأسيس الشركات والمؤسسات", "صياغة ومراجعة العقود التجارية"].map((skill, idx) => (
                        <span key={idx} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-lg text-sm flex items-center gap-2 ">
                            {skill} <FaTimes className="text-gray-500 cursor-pointer hover:text-red-500 text-xs" />
                        </span>
                    ))}
                 </div>
                 <div className="flex gap-2 flex-row-reverse">
                     <input type="text" placeholder="أضف مجال خبرة جديد" className="flex-1 bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none text-right" />
                     <button className="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-black ">
                         <FaPlus size={10} /> إضافة
                     </button>
                 </div>
            </div>
        </div>

    </div>
  );
};

export default ProfessionalInfo;