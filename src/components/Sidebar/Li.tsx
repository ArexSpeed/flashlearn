import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  title: string;
  icon: React.ReactNode;
  iconActive: React.ReactNode;
  href: string;
}

export const Li = ({ title, icon, iconActive, href }: Props) => {
  const pathname = usePathname();

  return (
    <li className="flex justify-center w-full">
      <Link
        href={href}
        passHref
        className={`flex items-center px-2 py-2 w-full rounded-lg hover:bg-secondaryLight dark:hover:bg-secondaryDark`}
      >
        {href === pathname ? iconActive : icon}
        <span
          className={`pl-2 font-semibold text-md text-black dark:text-white`}
        >
          {title}
        </span>
      </Link>
    </li>
  );
};
