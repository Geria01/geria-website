import Link from 'next/link';
import Image from 'next/image';

const Button = ({ label, href, classes, iconUrl, iconClasses, iconHeight, iconWidth }) => {
  return (
    <Link
      className={`py-4 px-10 rounded-2xl font-semibold font[clash_display] ${classes}`}
      href={href}>
      {iconUrl &&
        <Image
          className={iconClasses}
          src={iconUrl}
          height={iconHeight}
          width={iconWidth}
          alt={"Logo"}
        />}
      {label}
    </Link>
  )
}

export default Button;
