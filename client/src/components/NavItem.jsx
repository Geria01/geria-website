import Link from "next/link";

const NavItem = ({ text, href, active }) => {
  return (
    <Link className={`${active ? "active font-['Clash_Display']" : "font-['Clash_Display']"}`} href={href}>
      {text}
    </Link>
  );
};

export default NavItem;
