const NavbarSkeleton = () => {
    
  return (
    <div className="navbar bg-base-100 shadow-md px-4 md:px-8 animate-pulse">
      {/* Left Side */}
      <div className="navbar-start">
        {/* Mobile menu button */}
        <div className="w-10 h-10 rounded-lg bg-base-300 lg:hidden"></div>

        {/* Logo + Title */}
        <div className="flex items-center gap-2 ml-2">
          <div className="w-10 h-10 rounded-full bg-base-300"></div>
          <div className="hidden sm:block w-28 h-6 rounded bg-base-300"></div>
        </div>
      </div>

      {/* Center Menu */}
      <div className="navbar-center hidden lg:flex">
        <div className="flex gap-4">
          <div className="w-16 h-5 rounded bg-base-300"></div>
          <div className="w-16 h-5 rounded bg-base-300"></div>
          <div className="w-20 h-5 rounded bg-base-300"></div>
          <div className="w-20 h-5 rounded bg-base-300"></div>
          <div className="w-24 h-5 rounded bg-base-300"></div>
        </div>
      </div>

      {/* Right Side */}
      <div className="navbar-end gap-2">
        {/* Theme Toggle */}
        <div className="w-10 h-10 rounded-full bg-base-300"></div>

        {/* Login Button */}
        <div className="w-20 h-10 rounded-lg bg-base-300"></div>

        {/* Register Button */}
        <div className="w-24 h-10 rounded-lg bg-base-300"></div>
      </div>
    </div>
  );
};

export default NavbarSkeleton;