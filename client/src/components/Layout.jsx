import { useRouter } from "next/router";

import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  const router = useRouter();
  const showNav = router.pathname === "/register" ? false : true;

  return (
    <>
      {showNav && <Navbar />}
      {children}
      {showNav && <Footer />}
    </>
  )
}
