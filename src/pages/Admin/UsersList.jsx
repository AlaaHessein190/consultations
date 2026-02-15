import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../../redux/slices/adminSlice';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35 },
  },
};

const UsersList = () => {
  const dispatch = useDispatch();
  const { allUsers, loading } = useSelector((state) => state.admin);

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const getRoleInfo = (role) => {
    switch (role) {
      case 'expert':
        return { label: 'مستشار', class: 'bg-indigo-50 text-indigo-600' };
      case 'admin':
        return { label: 'مدير', class: 'bg-red-50 text-red-600' };
      default:
        return { label: 'عميل', class: 'bg-green-50 text-green-600' };
    }
  };

  return (
    <div className="min-h-screen bg-[#F9FBFF] p-4 md:p-12 font-sans" dir="rtl">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <header className="mb-8 md:mb-10 flex flex-col md:flex-row justify-between items-start md:items-center bg-white p-5 md:p-8 rounded-3xl shadow-sm border border-gray-50 gap-4">
          <div>
            <h1 className="text-xl md:text-3xl font-black text-gray-900">
              إدارة المستخدمين
            </h1>
            <p className="text-gray-500 text-sm md:text-base font-medium">
              عرض وإدارة كافة الحسابات المسجلة
            </p>
          </div>

          <div className="bg-blue-600 text-white px-4 py-2 rounded-xl font-bold text-sm">
            {allUsers?.length || 0} مستخدم
          </div>
        </header>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="font-bold">جاري تحميل البيانات...</p>
          </div>
        ) : (
          <>
            {/* Desktop Table */}
            <div className="hidden md:block bg-white rounded-3xl shadow-sm border border-gray-50 overflow-hidden">
              <table className="w-full text-right border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-400 text-sm uppercase font-bold">
                    <th className="p-6">المستخدم</th>
                    <th className="p-6">البريد الإلكتروني</th>
                    <th className="p-6 text-center">الدور</th>
                    <th className="p-6 text-center">الحالة</th>
                  </tr>
                </thead>

                <motion.tbody
                  className="divide-y divide-gray-50"
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                >
                  {allUsers.map((user) => {
                    const roleInfo = getRoleInfo(user.role);

                    return (
                      <motion.tr
                        key={user._id}
                        variants={itemVariants}
                        whileHover={{ backgroundColor: '#f9fafb' }}
                      >
                        <td className="p-6 flex items-center gap-3">
                          <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 font-bold">
                            {user.username?.charAt(0).toUpperCase()}
                          </div>
                          <span className="font-bold text-gray-800">
                            {user.username}
                          </span>
                        </td>

                        <td className="p-6 text-gray-500 text-sm">
                          {user.email}
                        </td>

                        <td className="p-6 text-center">
                          <span className={`px-3 py-1 rounded-lg text-xs font-bold ${roleInfo.class}`}>
                            {roleInfo.label}
                          </span>
                        </td>

                        <td className="p-6 text-center">
                          {user.role === 'expert' ? (
                            <span className="text-xs font-bold text-gray-500">
                              {user.isVerified ? 'موثق' : 'غير موثق'}
                            </span>
                          ) : (
                            '-'
                          )}
                        </td>
                      </motion.tr>
                    );
                  })}
                </motion.tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <motion.div
              className="md:hidden space-y-4"
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              {allUsers.map((user) => {
                const roleInfo = getRoleInfo(user.role);

                return (
                  <motion.div
                    key={user._id}
                    variants={itemVariants}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-4 rounded-2xl shadow-sm border border-gray-50"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 font-bold">
                        {user.username?.charAt(0).toUpperCase()}
                      </div>

                      <div>
                        <p className="font-bold text-gray-800">
                          {user.username}
                        </p>
                        <p className="text-xs text-gray-500 break-all">
                          {user.email}
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className={`px-3 py-1 rounded-lg text-xs font-bold ${roleInfo.class}`}>
                        {roleInfo.label}
                      </span>

                      {user.role === 'expert' && (
                        <span className="text-xs font-bold text-gray-500">
                          {user.isVerified ? 'موثق' : 'غير موثق'}
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </>
        )}
      </div>
    </div>
  );
};

export default UsersList;
