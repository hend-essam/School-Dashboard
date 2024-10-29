import Image from "next/image";

const Logo = () => {
  return (
    <>
      <Image
        src="/Logo.png"
        alt="Logo"
        width={200}
        height={50}
        className="hidden lg:block"
        priority={true}
      />
      <Image
        src="/MiniLogo.png"
        alt="Mini Logo"
        width={200}
        height={50}
        className="lg:hidden p-4 pb-3"
        priority={true}
      />
    </>
  );
};

export default Logo;
