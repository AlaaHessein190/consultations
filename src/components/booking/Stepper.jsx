import { FaCheck } from "react-icons/fa";

const Stepper = ({ currentStep }) => {
  const steps = ["اختيار الموعد", "نوع الاستشارة", "الدفع", "4"];
  return (
    <div className="flex items-center justify-center mb-10 dir-rtl">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div className={`flex flex-col items-center relative`}>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 
              ${currentStep > index + 1 ? "bg-blue-600 border-blue-600 text-white" : 
                currentStep === index + 1 ? "bg-blue-600 border-blue-600 text-white" : "bg-gray-200 border-gray-300 text-gray-500"}`}>
              {currentStep > index + 1 ? <FaCheck size={14} /> : index + 1}
            </div>
            <span className="absolute -bottom-6 text-xs font-medium text-gray-600 whitespace-nowrap">{step !== "4" && step}</span>
          </div>
          {index < steps.length - 1 && (
            <div className={`w-20 h-0.5 ${currentStep > index + 1 ? "bg-blue-600" : "bg-gray-200"}`}></div>
          )}
        </div>
      ))}
    </div>
  );
};
export default Stepper;
