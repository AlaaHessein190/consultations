// src/data/profileData.js
import { ChatBubbleLeftRightIcon, PhoneIcon, VideoCameraIcon } from '@heroicons/react/24/outline'; // تأكد من تثبيت Heroicons: npm install @heroicons/react

export const profileData = {
    name: "بدي السيد",
    title: "استشارية قانونية معتمدة",
    rating: 4.9,
    reviewsCount: 320,
    experience: 15,
    imageUrl: "https://via.placeholder.com/150", // استبدل بصورة حقيقية
    bio: "استشاري قانوني معتمد بخبرة 15 عاماً في المجال القانوني التجاري والشركات، متخصص في صياغة ومراجعة العقود التجارية، والاستشارات القانونية للمؤسسات والشركات الناشئة.",
    education: [
      { id: 1, degree: "دكتوراه في القانون التجاري", university: "جامعة الملك سعود", year: 2008 },
      { id: 2, degree: "ماجستير في القانون الدولي", university: "جامعة القاهرة", year: 2005 },
      { id: 3, degree: "بكالوريوس في القانون", university: "جامعة دمشق", year: 2002 },
    ],
    certificates: [
      { id: 1, name: "محامي معتمد من وزارة العدل السعودية" },
      { id: 2, name: "الجمعية السعودية للمحامين" },
      { id: 3, name: "شهادة في التحكيم التجاري الدولي" },
    ],
     consultations: [
        { id: 1, type: "استشارة فورية", description: "مكالمة نصية", duration: "30 دقيقة", price: "300 ريال", icon: ChatBubbleLeftRightIcon },
        { id: 2, type: "استشارة صوتية", description: "مكالمة صوتية", duration: "45 دقيقة", price: "500 ريال", icon: PhoneIcon },
        { id: 3, type: "استشارة مرئية", description: "مكالمة فيديو", duration: "60 دقيقة", price: "800 ريال", icon: VideoCameraIcon },
     ],
    specializations: [
      { id: 1, name: "صياغة ومراجعة العقود التجارية" },
      { id: 2, name: "تأسيس الشركات والمؤسسات" },
      { id: 3, name: "حل النزاعات التجارية" },
      { id: 4, name: "الاستشارات القانونية للشركات الناشئة" },
      { id: 5, name: "قانون الاستثمار الأجنبي" },
      { id: 6, name: "حماية الملكية الفكرية" },
    ],
    reviews: [
      { id: 1, name: "محمد أحمد", date: "منذ أسبوعين", rating: 5, comment: "استشاري ممتاز وخبرة عالية، ساعدني في حل مشكلة قانونية معقدة بكل احترافية ووضوح." },
      { id: 2, name: "سارة علي", date: "منذ شهر", rating: 4, comment: "تجربة رائعة. الدكتورة أحمد معرفتها جيدة وتشرح الأمور بطريقة سهلة ومفهومة. أنصح بشدة." },
      { id: 3, name: "خالد حسن", date: "منذ شهرين", rating: 5, comment: "المستشار كفؤ ومتعاون، أعطاني نصائح قيمة جداً ساعدتني في اتخاذ القرار الصحيح." },
    ],
  };