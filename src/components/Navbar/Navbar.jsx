import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/slices/authSlice";
import logo from "../../assets/mo.png";
import {
  FaSearch,
  FaBars,
  FaTimes,
  FaBell,
  FaComment,
  FaSignOutAlt,
  FaUserCircle,
  FaChevronDown,
  FaArrowRight,
  FaDollarSign,
  FaCog,
  FaMapMarkedAlt
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const searchRef = useRef(null);
  const menuRef = useRef(null);
  const profileMenuRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 1. جلب البيانات من الـ Auth والـ User Slice (البيانات الحقيقية)
  const { token, user: authUser } = useSelector((state) => state.auth);
  const { profileData } = useSelector((state) => state.user); 
  
  const isLoggedIn = !!token;

  // 2. توحيد البيانات (الأولوية لبيانات السيرفر profileData)
  const displayName = profileData?.username || authUser?.username || "مستخدم";
  const displayRole = profileData?.role === "expert" ? "خبير" : "عميل";
  const avatarUrl = profileData?.avatar?.url;
  const userInitial = displayName.charAt(0).toUpperCase();

  const isConsultant = isLoggedIn && (
    profileData?.role === "expert" || authUser?.role === "expert"
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) setSearchOpen(false);
      if (menuRef.current && !menuRef.current.contains(event.target)) setMenuOpen(false);
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) setProfileMenuOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
    setProfileMenuOpen(false);
    setMenuOpen(false);
  };

  // =========================================================
  // 1. تصميم نافبار المستشار (لوحة التحكم)
  // =========================================================
  if (isConsultant) {
    return (
      <nav className="w-full bg-white border-b border-gray-200 px-4 md:px-8 py-4 sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between gap-4">
          <div className="text-right">
            <h2 className="text-2xl font-bold text-gray-800 leading-tight">لوحة التحكم</h2>
            <p className="text-gray-500 text-sm">مرحباً بك د. {displayName}</p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <Link to="/consultant-journey" className="flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-lg text-blue-600 hover:bg-blue-100 transition-all font-medium text-sm">
              <FaMapMarkedAlt /> <span>رحلة المستشار</span>
            </Link>

            <Link to="/profile-settings" className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-all font-medium text-sm">
              <FaCog className="text-gray-500" /> <span>تعديل الملف</span>
            </Link>
            
            <Link to="/payments" className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-all font-medium text-sm">
              <FaDollarSign className="text-gray-500" /> <span>المدفوعات</span>
            </Link>

            <Link to="/registrationportal" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium transition-colors">
              <FaArrowRight className="text-sm" /> <span>العودة</span>
            </Link>
            
            <button onClick={handleLogout} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all cursor-pointer" title="تسجيل الخروج">
                <FaSignOutAlt />
            </button>
          </div>
        </div>
      </nav>
    );
  }

  // =========================================================
  // 2. التصميم الأصلي (للعملاء والزوار)
  // =========================================================
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="logo" className="w-12 h-12" />
            <div>
              <h1 className="text-xl font-bold">استشاراتي</h1>
              <p className="text-sm text-gray-500">منصة الاستشارات الاحترافية</p>
            </div>
          </Link>

          {isLoggedIn && (
            <div className="hidden md:flex items-center gap-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium">الرئيسية</Link>
              <Link to="/consultants" className="text-gray-700 hover:text-blue-600 font-medium">المستشارون</Link>
              <Link to="/aboutPage" className="text-gray-700 hover:text-blue-600 font-medium">من نحن</Link>
              <Link to="/faq" className="text-gray-700 hover:text-blue-600 font-medium">الأسئلة الشائعة</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium">اتصل بنا</Link>
            </div>
          )}
        </div>

        <div className="hidden md:flex items-center gap-4">
          {!isLoggedIn && (
            <div className="flex items-center gap-2 relative" ref={searchRef}>
              <form onSubmit={(e) => { e.preventDefault(); }} className={`flex items-center gap-2 border rounded-xl p-1 transition-all duration-300 overflow-hidden ${searchOpen ? "w-64 opacity-100" : "w-0 opacity-0"}`}>
                <input type="text" placeholder="ابحث هنا..." className="outline-none px-2 py-1 w-full" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button type="submit" className="p-2"><FaSearch /></button>
              </form>
              <button onClick={() => setSearchOpen(!searchOpen)} className="p-3 bg-secondColor rounded-2xl text-white hover:bg-white hover:text-black hover:border duration-200 cursor-pointer">
                <FaSearch />
              </button>
            </div>
          )}

          {isLoggedIn && (
            <>
              <Link to="/notifications" className="relative p-3 rounded-2xl bg-gray-200 text-gray-700 hover:bg-gray-300 duration-200">
                <FaBell size={20} />
                <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center border border-white">2</span>
              </Link>
              <Link to="/messages" className="relative p-3 rounded-2xl bg-gray-200 text-gray-700 hover:bg-gray-300 duration-200">
                <FaComment size={20} />
                <span className="absolute top-1 right-1 bg-red-500 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center border border-white">3</span>
              </Link>

              <div className="relative" ref={profileMenuRef}>
                <button onClick={() => setProfileMenuOpen(!profileMenuOpen)} className="flex items-center gap-2 p-2 rounded-2xl hover:bg-gray-100 duration-200 cursor-pointer">
                  {/* عرض الصورة الحقيقية أو الحرف */}
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold overflow-hidden shadow-sm">
                    {avatarUrl && !avatarUrl.includes('default') ? (
                      <img src={avatarUrl} alt="profile" className="w-full h-full object-cover" />
                    ) : (
                      userInitial
                    )}
                  </div>
                  <span className="font-semibold text-gray-800 text-right">
                    {displayName}
                    <span className="block text-[10px] font-normal text-gray-500">{displayRole}</span>
                  </span>
                  <FaChevronDown className={`text-xs transition-transform ${profileMenuOpen ? "rotate-180" : ""}`} />
                </button>

                {profileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 text-right overflow-hidden">
                    <Link to="/dashboardclient" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-medium" onClick={() => setProfileMenuOpen(false)}>
                      <FaUserCircle className="inline-block ml-2" /> الملف الشخصي
                    </Link>
                    {/* التعديل: جعل زر تسجيل الخروج في اليمين (justify-end في RTL) */}
                    <button onClick={handleLogout} className="flex items-center justify-end w-full px-4 py-2 text-sm text-red-500 hover:bg-gray-100 font-medium cursor-pointer">
                      <FaSignOutAlt className="inline-block ml-2" /> تسجيل الخروج
                    </button>
                  </div>
                )}
              </div>
            </>
          )}

          {!isLoggedIn && (
            <div className="flex gap-2">
              <Link to="/regster" className="p-3 bg-secondColor rounded-2xl text-white hover:bg-white hover:text-black hover:border duration-200">إنشاء حساب</Link>
              <Link to="/login" className="p-3 border rounded-2xl hover:bg-secondColor hover:text-white duration-200">تسجيل الدخول</Link>
            </div>
          )}
        </div>

        <div className="md:hidden flex items-center gap-2">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl text-gray-700 cursor-pointer">
                {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col gap-3 text-right">
            {isLoggedIn ? (
                <>
                    <Link className="py-2 border-b" to="/" onClick={() => setMenuOpen(false)}>الرئيسية</Link>
                    <Link className="py-2 border-b" to="/consultants" onClick={() => setMenuOpen(false)}>المستشارون</Link>
                    <Link className="py-2 border-b" to="/aboutPage" onClick={() => setMenuOpen(false)}>من نحن</Link>
                    <Link className="py-2 border-b" to="/faq" onClick={() => setMenuOpen(false)}>الأسئلة الشائعة</Link>
                    <Link className="py-2 border-b" to="/contact" onClick={() => setMenuOpen(false)}>اتصل بنا</Link>
                    <Link className="py-2 border-b text-blue-600" to="/dashboardclient" onClick={() => setMenuOpen(false)}>الملف الشخصي</Link>
                    <button onClick={handleLogout} className="text-right text-red-500 py-2 cursor-pointer font-medium">تسجيل الخروج</button>
                </>
            ) : (
                <>
                    <Link className="py-2 border-b" to="/login" onClick={() => setMenuOpen(false)}>تسجيل الدخول</Link>
                    <Link className="py-2 border-b" to="/regster" onClick={() => setMenuOpen(false)}>إنشاء حساب</Link>
                </>
            )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;