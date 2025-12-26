import React from 'react';
import ProfileHeader from "../../components/Profilepage/ProfileHeader";
import SectionHeader from '../../components/Profilepage/SectionHeader';
import EducationItem from '../../components/Profilepage/EducationItem';
import CertificateItem from '../../components/Profilepage/CertificateItem';
import ConsultationCard from '../../components/Profilepage/ConsultationCard';
import SpecializationItem from '../../components/Profilepage/SpecializationItem';
import CustomerReview from '../../components/Profilepage/CustomerReview';
import { profileData } from '../../data/profileData/profileData';
import { AcademicCapIcon, BriefcaseIcon, StarIcon as StarSolid, ChatBubbleLeftRightIcon, PhoneIcon, VideoCameraIcon } from '@heroicons/react/24/outline';
const ProfilePage = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6 rtl">
      <div className="max-w-4xl mx-auto">
        <ProfileHeader
          name={profileData.name}
          title={profileData.title}
          rating={profileData.rating}
          reviewsCount={profileData.reviewsCount}
          experience={profileData.experience}
          imageUrl={profileData.imageUrl}
        />

        <SectionHeader title="المؤهلات العلمية" icon={AcademicCapIcon} />
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          {profileData.education.map((item) => (
            <EducationItem key={item.id} {...item} />
          ))}
        </div>

        <SectionHeader title="الشهادات والاعتمادات" icon={BriefcaseIcon} />
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          {profileData.certificates.map((item) => (
            <CertificateItem key={item.id} {...item} />
          ))}
        </div>

        <SectionHeader title="الخدمات" icon={ChatBubbleLeftRightIcon} />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {profileData.consultations.map((item) => (
            <ConsultationCard key={item.id} {...item} />
          ))}
        </div>

        <SectionHeader title="مجالات التخصص" icon={AcademicCapIcon} />
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6 grid grid-cols-1 md:grid-cols-2 gap-x-6">
          {profileData.specializations.map((item) => (
            <SpecializationItem key={item.id} {...item} />
          ))}
        </div>

        <SectionHeader title="تقييمات العملاء" icon={StarSolid} />
        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
          <div className="flex items-center mb-4">
            <span className="text-4xl font-bold text-yellow-500">{profileData.rating}</span>
            <div className="ml-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarSolid
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(profileData.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">من {profileData.reviewsCount} تقييم</p>
            </div>
          </div>
          {profileData.reviews.map((review) => (
            <CustomerReview key={review.id} {...review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;