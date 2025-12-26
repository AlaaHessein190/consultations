import "aos/dist/aos.css";

import Hero from '../../components/Home/Hero'
import Main from '../../components/Home/Main/Main'
import Choose from '../../components/Home/Choose'
import Work from '../../components/Home/Work'
import Specialization from '../../components/Home/Specialization'
import BestConsultants from '../../components/Home/BestConsultants'
import Advisor from '../../components/Home/Advisor'
import Testmolins from '../../components/Home/Testmolins'

function Home() {


  return (
    <>
      {/* القسم الرئيسي */}
      <div className="w-full h-full bg-mainColor py-10 overflow-hidden" data-aos="fade-up">
        <div className="container overflow-hidden">
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div data-aos="fade-right overflow-hidden">
              <Main />
            </div>
            <div data-aos="fade-left overflow-hidden">
              <Hero />
            </div>
          </div>
        </div>
      </div>

      {/* الأقسام التالية */}
      <div data-aos="zoom-in ">
        <Choose />
      </div>

      <div data-aos="fade-up">
        <Work />
      </div>

      <div data-aos="fade-up ">
        <Specialization />
      </div>

      <div data-aos="zoom-in ">
        <BestConsultants />
      </div>

      <div data-aos="fade-up">
        <Testmolins />
      </div>

      <div data-aos="fade-up">
        <Advisor />
      </div>
    </>
  )
}

export default Home
