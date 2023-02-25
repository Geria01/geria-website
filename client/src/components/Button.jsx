import Link from 'next/link';
import Image from 'next/image';

const Button = (
  {
    label,
    href,
    classes,
    iconUrl,
    iconClasses,
    iconHeight,
    iconWidth
  }) => {
  return (
    <Link
      className={`font-semibold font[clash_display] ${classes}`}
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
