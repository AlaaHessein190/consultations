import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPendingExperts, acceptExpert, rejectExpert } from '../../redux/slices/adminSlice';
import { toast } from 'react-hot-toast';

// استيراد المكونات الفرعية
import AdminHeader from '../../components/Admin/AdminHeader';
import PendingExpertCard from '../../components/Admin/PendingExpertCard';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { pendingExperts, loading } = useSelector((state) => state.admin);

  // سطر للتأكد من حالة الـ State في الكومبوننت
  console.log("قائمة المستشارين في الداشبورد:", pendingExperts);

  useEffect(() => {
    dispatch(fetchPendingExperts());
  }, [dispatch]);

  const handleAccept = (id) => {
    dispatch(acceptExpert(id))
      .unwrap()
      .then(() => toast.success("تم تفعيل حساب المستشار بنجاح"))
      .catch((err) => toast.error(err));
  };

  const handleReject = (id) => {
    if(window.confirm("هل أنت متأكد من رفض وحذف هذا الطلب؟")) {
      dispatch(rejectExpert(id))
        .unwrap()
        .then(() => toast.success("تم رفض الطلب بنجاح"))
        .catch((err) => toast.error(err));
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FBFF] p-6 md:p-12 font-sans" dir="rtl">
      <div className="max-w-6xl mx-auto">
        
        <AdminHeader count={pendingExperts?.length || 0} />

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
             <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
             <p className="font-bold">جاري تحديث القائمة...</p>
          </div>
        ) : (
          <div className="space-y-4">
            {pendingExperts && pendingExperts.length > 0 ? (
              pendingExperts.map((expert) => (
                <PendingExpertCard 
                  key={expert._id} 
                  expert={expert} 
                  onAccept={handleAccept} 
                  onReject={handleReject} 
                />
              ))
            ) : (
              <div className="bg-white rounded-[40px] p-24 text-center border-2 border-dashed border-gray-100 flex flex-col items-center">
                 <div className="text-6xl mb-4">🎉</div>
                 <h3 className="text-2xl font-black text-gray-800">لا توجد طلبات جديدة</h3>
                 <p className="text-gray-400 font-medium mt-2">لقد قمت بمراجعة كافة الطلبات المعلقة.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;