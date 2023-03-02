import { useRouter } from "next/router";

import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  const router = useRouter();
  const showNav = ['/register', '/signin', '/dashboard', '/complete-profile'].includes(router.pathname) ? false : true;

  return (
    <>
      {showNav && <Navbar />}
      {children}
      {showNav && <Footer />}
    </>
  )
}
