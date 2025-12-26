const TabNavigation = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'profile', label: 'الملف الشخصي' },
        { id: 'history', label: 'السجل' },
    { id: 'consultations', label: 'الاستشارات' },
  ];

  return (
    <div className="flex justify-center gap-1 bg-gray-100/50 p-1 rounded-2xl mt-10 w-fit mx-auto overflow-hidden">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-10 py-3 rounded-xl text-sm font-bold transition-all
            ${activeTab === tab.id ? "bg-white text-blue-600 shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default TabNavigation;