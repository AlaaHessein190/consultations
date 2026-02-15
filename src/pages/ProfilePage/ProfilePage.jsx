import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchExpertById, clearSelectedExpert } from '../../redux/slices/expertsSlice';

// استيراد جميع المكونات من الفولدر
import ProfileHeader from "../../components/Profilepage/ProfileHeader";
import SectionHeader from '../../components/Profilepage/SectionHeader';
import EducationItem from '../../components/Profilepage/EducationItem';
import CustomerReview from '../../components/Profilepage/CustomerReview';
import CertificateItem from '../../components/Profilepage/CertificateItem';
import ConsultationCard from '../../components/Profilepage/ConsultationCard';
import SpecializationItem from '../../components/Profilepage/SpecializationItem';

// استيراد الأيقونات المناسبة لكل قسم
import { 
  AcademicCapIcon, 
  BriefcaseIcon, 
  StarIcon as StarSolid, 
  DocumentCheckIcon, 
  TagIcon, 
  ChatBubbleLeftRightIcon 
} from '@heroicons/react/24/outline';

const ProfilePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const { selectedExpert, loading, error } = useSelector((state) => state.experts);

  useEffect(() => {
    if (id) {
      dispatch(fetchExpertById(id));
    }
    return () => { dispatch(clearSelectedExpert()); };
  }, [id, dispatch]);

  if (loading) return <div className="p-20 text-center font-bold text-blue-600 animate-pulse">جاري تحميل الملف الشخصي...</div>;
  if (error) return <div className="p-20 text-center text-red-500 font-bold">{error}</div>;
  if (!selectedExpert) return <div className="p-20 text-center font-bold text-gray-400">لم يتم العثور على المستشار</div>;

  // استخراج البيانات من الكائن القادم من السيرفر
  const expertProfile = selectedExpert.hasExpertProfile || {};
  const imageUrl = selectedExpert.avatar?.url || `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedExpert.username)}&background=DBEAFE&color=3B82F6&bold=true`;

  return (
    <div className="bg-[#F8FAFC] min-h-screen p-6 pb-20" dir="rtl">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* 1. رأس الصفحة */}
        <ProfileHeader
          name={`د. ${selectedExpert.username}`}
          title={expertProfile.specialty || "مستشار متخصص"}
          rating={expertProfile.rating || 5}
          reviewsCount={expertProfile.numReviews || 0}
          experience={expertProfile.yearsOfExperience || 0}
          imageUrl={imageUrl}
        />

        {/* 2. النبذة التعريفية */}
        <section>
          <SectionHeader title="النبذة التعريفية" icon={BriefcaseIcon} />
          <div className="bg-white p-6 rounded-[24px] shadow-sm leading-relaxed text-gray-700 border border-gray-50">
             {expertProfile.aboutYou || "لا توجد نبذة تعريفية متاحة حالياً."}
          </div>
        </section>

        {/* 3. التخصصات (Specializations) */}
        <section>
          <SectionHeader title="التخصصات" icon={TagIcon} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {expertProfile.specializations?.length > 0 ? (
              expertProfile.specializations.map((spec, index) => (
                <SpecializationItem key={index} title={spec} />
              ))
            ) : (
              <p className="text-gray-400 text-sm italic pr-4 text-right">لم يتم تحديد تخصصات دقيقة.</p>
            )}
          </div>
        </section>

        {/* 4. المؤهلات العلمية (Education) */}
        <section>
          <SectionHeader title="المؤهلات العلمية" icon={AcademicCapIcon} />
          <div className="bg-white p-6 rounded-[24px] shadow-sm border border-gray-50 space-y-4">
            {expertProfile.qualifications?.length > 0 ? (
              expertProfile.qualifications.map((item, index) => (
                <EducationItem 
                  key={index}
                  degree={item.degree} 
                  university={item.university} 
                  year={item.year} 
                />
              ))
            ) : (
              <p className="text-gray-400 text-sm italic">لا توجد مؤهلات مسجلة.</p>
            )}
          </div>
        </section>

        {/* 5. الشهادات (Certificates) */}
        <section>
          <SectionHeader title="الشهادات والاعتمادات" icon={DocumentCheckIcon} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {expertProfile.certificates?.length > 0 ? (
              expertProfile.certificates.map((cert, index) => (
                <CertificateItem key={index} title={cert.title} issuer={cert.issuer} />
              ))
            ) : (
              <p className="text-gray-400 text-sm italic pr-4">لا توجد شهادات مضافة.</p>
            )}
          </div>
        </section>

        {/* 6. الجلسات المتاحة (Consultation Cards) */}
        <section>
          <SectionHeader title="خدمات الاستشارة" icon={ChatBubbleLeftRightIcon} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             {/* هنا نمرر سعر الجلسة من البروفايل */}
             <ConsultationCard 
                title="استشارة خاصة" 
                duration="60 دقيقة" 
                price={expertProfile.sessionPrice || 0} 
             />
             <ConsultationCard 
                title="متابعة سريعة" 
                duration="30 دقيقة" 
                price={(expertProfile.sessionPrice / 2) || 0} 
             />
          </div>
        </section>

        {/* 7. تقييمات العملاء */}
        <section>
          <SectionHeader title="ماذا يقول العملاء" icon={StarSolid} />
          <div className="space-y-4">
            {selectedExpert.reviews?.length > 0 ? (
              selectedExpert.reviews.map((review) => (
                <CustomerReview 
                  key={review._id}
                  name={review.username} 
                  rating={review.rating} 
                  comment={review.comment} 
                  date={new Date(review.createdAt).toLocaleDateString('ar-EG')}
                />
              ))
            ) : (
              <div className="bg-white p-8 rounded-[24px] text-center text-gray-400 border border-dashed border-gray-200">
                 لا توجد تقييمات من العملاء بعد.
              </div>
            )}
          </div>
        </section>

      </div>
    </div>
  );
};

export default ProfilePage;