//components
import Image from "next/image";

const PrimaryLayoutFooter = () => {
  return (
    <footer className="bg-[#f5f4f9]">
      <section className="flex pt-10 px-[3%] pb-0">
        <div className="w-1/4">
          <h3 className="text-[15px] mb-[15px] leading-[30px] font-medium	">
            دسترسی سریع
          </h3>
          <ul>
            <li className="text-[13px] leading-[26px]">
              <a href="#">درباره آگاه</a>
            </li>
            <li className="text-[13px] leading-[26px]">
              <a href="#">تماس با آگاه</a>
            </li>
            <li className="text-[13px] leading-[26px]">
              <a href="#">همکاری با آگاه</a>
            </li>
            <li className="text-[13px] leading-[26px]">
              <a href="#">شعب کارگزاری</a>
            </li>
            <li className="text-[13px] leading-[26px]">
              <a href="#">شماره حساب ها</a>
            </li>
          </ul>
        </div>
        <div className="w-1/4">
          <h3 className="text-[15px] mb-[15px] leading-[30px] font-medium	">
            گروه آگاه
          </h3>
          <ul>
            <li className="text-[13px] leading-[26px]">
              <a href="#">آگاه اکسپرس</a>
            </li>
            <li className="text-[13px] leading-[26px]">
              <a href="#">بآشگاه</a>
            </li>
            <li className="text-[13px] leading-[26px]">
              <a href="#">آوای آگاه</a>
            </li>
            <li className="text-[13px] leading-[26px]">
              <a href="#">مدیریت دارایی آگاه</a>
            </li>
            <li className="text-[13px] leading-[26px]">
              <a href="#">ویستا سامانه آسا</a>
            </li>
            <li className="text-[13px] leading-[26px]">
              <a href="#">تامین سرمایه</a>
            </li>
          </ul>
        </div>
        <div className="w-1/4">
          <h3 className="text-[15px] mb-[15px] leading-[30px] font-medium	">
            آدرس دفتر مرکزی
          </h3>
          <p className="text-[13px] leading-[26px] mb-4">
            تهران- خیابان نلسون ماندلا(آفریقا)- بالاتر از میرداماد- بن بست پیروز
            - پلاک 13
          </p>
          <h3 className="text-[15px] mb-[15px] leading-[30px] font-medium	mt-2">
            شماره تماس
          </h3>
          <a href="tel:02191004004" className="text-[13px] leading-[26px] mb-4">
            02191004004
          </a>
          <h3 className="text-[15px] mb-[15px] leading-[30px] font-medium	">
            پست الکترونیکی
          </h3>
          <a
            href="mailto:info@agah.com"
            className="text-[13px] leading-[26px] mb-4"
          >
            info@agah.com
          </a>
          <ul className="mb-[10px] flex">
            <li>
              <a
                href="#"
                className="p-2 border border-solid border-gray-200 rounded-full	bg-white m-4 block"
              >
                <Image
                  width={25}
                  height={25}
                  src="/assets/images/png/instagram.png"
                  alt="instagram"
                  className="max-w-max"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-2 border border-solid border-gray-200 rounded-full	bg-white m-4 block"
              >
                <Image
                  width={25}
                  height={25}
                  src="/assets/images/png/telegram.png"
                  alt="telegram"
                  className="max-w-max"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-2 border border-solid border-gray-200 rounded-full	bg-white m-4 block"
              >
                <Image
                  width={25}
                  height={25}
                  src="/assets/images/png/linkedin.png"
                  alt="linkedin"
                  className="max-w-max"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-2 border border-solid border-gray-200 rounded-full	bg-white m-4 block"
              >
                <Image
                  width={25}
                  height={25}
                  src="/assets/images/png/twitter.png"
                  alt="twitter"
                  className="max-w-max"
                />
              </a>
            </li>
            <li>
              <a
                href="#"
                className="p-2 border border-solid border-gray-200 rounded-full	bg-white m-4 block"
              >
                <Image
                  width={25}
                  height={25}
                  src="/assets/images/png/aparata.png"
                  alt="aparat"
                  className="max-w-max"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-1/4"></div>
      </section>
      <section className="bg-red-800 mx-[3%] mt-[20px] my-[10px] px-[20px] py-[1%] rounded-[15px] flex">
        <div className="max-w-[48%] relative basis-[48%] grow-0 shrink-0 mt-[45px] p-[10px]">
          <p className="text-sm text-white leading-7">اپلیکیشن آساتریدر</p>
          <div className="flex mt-[10px]">
            <button
              className="border-1 border-solid border-slate-500 rounded-lg p-1 ml-1 w-[75px] basis-[28%] grow-0 shrink-0"
              style={{
                backgroundImage:
                  "linear-gradient(180deg,#00234e 0%,rgba(69,64,86,.9) 100%)",
                boxShadow:
                  "0 0.25rem 0.75rem -0.375rem rgba(31,27,45,.2), 0 0.5rem 1rem rgba(31,27,45,.16)",
              }}
            >
              <img
                src="/assets/images/webp/sibche.webp"
                alt="sibche"
                className="w-[85px]"
              />
            </button>
            <button
              className="border-1 border-solid border-slate-500 rounded-lg p-1 ml-1 w-[75px] basis-[28%] grow-0 shrink-0"
              style={{
                backgroundImage:
                  "linear-gradient(180deg,#00234e 0%,rgba(69,64,86,.9) 100%)",
                boxShadow:
                  "0 0.25rem 0.75rem -0.375rem rgba(31,27,45,.2), 0 0.5rem 1rem rgba(31,27,45,.16)",
              }}
            >
              <img
                src="/assets/images/webp/sibapp.webp"
                alt="sibapp"
                className="w-[85px]"
              />
            </button>
            <button
              className="border-1 border-solid border-slate-500 rounded-lg p-1 ml-1 w-[75px] basis-[28%] grow-0 shrink-0"
              style={{
                backgroundImage:
                  "linear-gradient(180deg,#00234e 0%,rgba(69,64,86,.9) 100%)",
                boxShadow:
                  "0 0.25rem 0.75rem -0.375rem rgba(31,27,45,.2), 0 0.5rem 1rem rgba(31,27,45,.16)",
              }}
            >
              <img
                src="/assets/images/webp/Cafebazar.webp"
                alt="cafebazar"
                className="w-[85px]"
              />
            </button>
          </div>
        </div>
        <div className="max-w-[24%] relative basis-[24%] grow-0 shrink-0">
          <ul>
            <li>
              <a href="#" className="text-sm text-white leading-7">
                فست بورس
              </a>
            </li>
            <li>
              <a href="#" className="text-sm text-white leading-7">
                اپلیکیشن آموزش
              </a>
            </li>
          </ul>
        </div>
        <div className="max-w-[24%] relative basis-[24%] grow-0 shrink-0">
          <img
            src={"/assets/images/webp/90.webp"}
            alt="application"
            className="absolute left-0 right-0 bottom-0 scale-125	"
          />
        </div>
      </section>
      <section>
        <p className="text-center text-sm leading-7">
          کلیه حقوق وبسایت متعلق به کارگزاری آگاه است و استفاده از مطالب این
          سایت تنها با ذکر منبع بلامانع است
        </p>
      </section>
    </footer>
  );
};

export default PrimaryLayoutFooter;
