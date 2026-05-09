import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import Navbar from "../pages/Shared/navbar/Navbar";
import Footer from "../pages/Shared/footer/Footer";
import NavbarSkeleton from "../pages/Skeleton/NavbarSkeleton";

const RootLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 2 সেকেন্ড skeleton দেখাবে
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto rounded-2xl mt-4">
      {loading ? <NavbarSkeleton /> : <Navbar />}

      <Outlet />

      <Footer />
    </div>
  );
};

export default RootLayout;