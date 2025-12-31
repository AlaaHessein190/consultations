const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'profile', label: 'الملف الشخصي' },
    { id: 'history', label: 'السجل' },
    { id: 'consultations', label: 'الاستشارات' },
    
    
  ];

  return (
    <div className="flex bg-gray-100/80 p-1 rounded-2xl mt-10 w-full md:w-fit md:min-w-[450px] mx-auto overflow-hidden shadow-inner">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`flex-1 md:flex-none md:px-12 py-2.5 md:py-3 rounded-xl text-[11px] sm:text-xs md:text-sm font-bold transition-all duration-300 whitespace-nowrap
            ${activeTab === tab.id 
              ? "bg-white text-blue-600 shadow-md transform scale-[1.02]" 
              : "text-gray-500 hover:text-gray-800"}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;