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

  // جلب البيانات من ريدكس (التي أصبحت تُستعاد الآن عند الريفريش)
  const { token, user } = useSelector((state) => state.auth);
  const isLoggedIn = !!token;

  // التحقق من نوع الحساب (مستشار/خبير)
  const isConsultant = isLoggedIn && (
    user?.role === "expert" || 
    user?.accountType === "expert"
  );

  const userInitial = user?.username
    ? user.username.charAt(0).toUpperCase()
    : "م";

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
            <p className="text-gray-500 text-sm">مرحباً بك د. {user?.username}</p>
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
            
            {/* زر تسجيل الخروج للمستشار أيضاً */}
            <button onClick={handleLogout} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-all" title="تسجيل الخروج">
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
              <form onSubmit={(e) => { e.preventDefault(); console.log(search); }} className={`flex items-center gap-2 border rounded-xl p-1 transition-all duration-300 overflow-hidden ${searchOpen ? "w-64 opacity-100" : "w-0 opacity-0"}`}>
                <input type="text" placeholder="ابحث هنا..." className="outline-none px-2 py-1 w-full" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button type="submit" className="p-2"><FaSearch /></button>
              </form>
              <button onClick={() => setSearchOpen(!searchOpen)} className="p-3 bg-secondColor rounded-2xl text-white hover:bg-white hover:text-black hover:border duration-200">
                <FaSearch />
              </button>
            </div>
          )}

          {isLoggedIn && (
            <>
              <Link to="/notifications" className="relative p-3 rounded-2xl bg-gray-200 text-gray-700 hover:bg-gray-300 duration-200">
                <FaBell size={20} />
                <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">2</span>
              </Link>
              <Link to="/messages" className="relative p-3 rounded-2xl bg-gray-200 text-gray-700 hover:bg-gray-300 duration-200">
                <FaComment size={20} />
                <span className="absolute top-1 right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
              </Link>

              <div className="relative" ref={profileMenuRef}>
                <button onClick={() => setProfileMenuOpen(!profileMenuOpen)} className="flex items-center gap-2 p-2 rounded-2xl hover:bg-gray-100 duration-200">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-lg font-bold overflow-hidden">
                    {user?.profilePicture ? <img src={user.profilePicture} alt="profile" className="w-full h-full object-cover" /> : userInitial}
                  </div>
                  <span className="font-semibold text-gray-800">
                    {user?.username || "مستخدم"}
                    <span className="block text-xs font-normal text-gray-500">عميل</span>
                  </span>
                  <FaChevronDown className={`transition-transform ${profileMenuOpen ? "rotate-180" : ""}`} />
                </button>

                {profileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                    <Link to="/dashboardclient" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setProfileMenuOpen(false)}>
                      <FaUserCircle className="inline-block ml-2" /> الملف الشخصي
                    </Link>
                    <button onClick={handleLogout} className="flex items-center w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
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

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-2">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">{menuOpen ? <FaTimes /> : <FaBars />}</button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t p-4 flex flex-col gap-3">
            {isLoggedIn ? (
                <>
                    <Link to="/profilePage" onClick={() => setMenuOpen(false)}>الملف الشخصي</Link>
                    <button onClick={handleLogout} className="text-right text-red-500">تسجيل الخروج</button>
                </>
            ) : (
                <>
                    <Link to="/login" onClick={() => setMenuOpen(false)}>تسجيل الدخول</Link>
                    <Link to="/regster" onClick={() => setMenuOpen(false)}>إنشاء حساب</Link>
                </>
            )}
        </div>
      )}
    </nav>
  );
}

export default Navbar;