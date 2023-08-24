//components
import Image from "next/image";

const PrimaryLayoutHeader = () => {
  return (
    <header className="flex items-center p-0 pr-[11%] h-20">
      <Image
        src={"/assets/images/svg/agah-logo.svg"}
        width={115}
        height={57}
        alt="agal logo"
        className="ml-4 mt-2"
      />
      <ul className="navbar flex pt-2 pr-2">
        <li className="border-l border-solid border-gray-300">
          <a className="px-2 text-sm text-blue-950">خانه</a>
        </li>
        <li className="border-l border-solid border-gray-300">
          <a className="px-2 text-sm text-blue-950">راهنمای معاملات</a>
        </li>
        <li className="border-l border-solid border-gray-300">
          <a className="px-2 text-sm text-blue-950">مدیریت دارایی</a>
        </li>
        <li className="border-l border-solid border-gray-300">
          <a className="px-2 text-sm text-blue-950">آموزش</a>
        </li>
        <li className="border-l border-solid border-gray-300">
          <a className="px-2 text-sm text-blue-950">همکاری با آگاه</a>
        </li>
        <li className="">
          <a className="px-2 text-sm text-blue-950">درباره آگاه</a>
        </li>
      </ul>
      <div className="button-container mr-auto">
        <button className="ml-2 bg-blue-950 text-white text-xs p-1 rounded-lg leading-6">
          افتتاح حساب
        </button>
        <button className="ml-2 bg-blue-950 text-white text-xs p-1 rounded-lg leading-6">
          شعب آگاه
        </button>
      </div>
    </header>
  );
};

export default PrimaryLayoutHeader;
