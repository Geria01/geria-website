import Link from 'next/link';

const Button = ({ bg, color, border, label, href }) => {
  return (
    <Link
      style={{ backgroundColor: bg, color: color, fontFamily: 'Clash Display' }}
      className='text-[18px] inline-block py-4 px-10 rounded-2xl font-semibold'
      href={href}>
      {label}
    </Link>
  )
}

export default Button;
