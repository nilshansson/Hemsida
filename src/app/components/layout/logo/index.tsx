import Image from "next/image";
import Link from "next/link";

const Logo = (props: { sticky: boolean }) => {
  const { sticky } = props;

  return (
    <Link href="/" className="flex items-center">
      {/* Signature logo – shown on larger screens */}
      <Image
        src={
          sticky
            ? "/images/logo/signatur-utan-bakgrund.png"
            : "/images/logo/signatur-black.png"
        }
        alt="logo"
        width={190}
        height={34}
        quality={100}
        priority={true}
        className="hidden xsm:block w-[100px] md:w-[140px] lg:w-[190px] h-auto"
      />

      {/* Favicon logo – shown on extra small screens */}
      <Image
        src={
          sticky ? "/images/logo/favicondark.svg" : "/images/logo/favicon.svg"
        }
        alt="logo"
        width={100}
        height={40}
        className="block xsm:hidden w-[40px] h-auto"
      />
    </Link>
  );
};

export default Logo;
