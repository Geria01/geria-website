import Link from 'next/link';
import Image from 'next/image';

const Button = (
  {
    children,
    label,
    href,
    classes,
    iconUrl,
    iconClasses,
    iconHeight,
    iconWidth,
  }) => {
  return (
    <Link
      className={`font-semibold whitespace-nowrap font-["Clash_Display"] ${classes}`}
      href={href}>
      {iconUrl &&
        <Image
          className={iconClasses}
          src={iconUrl}
          height={iconHeight}
          width={iconWidth}
          alt={"Logo"}
        />}
      {children ? children : label}
    </Link>
  )
}

export default Button;
