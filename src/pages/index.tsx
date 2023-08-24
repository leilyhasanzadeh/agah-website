//components
import Image from "next/image";

//components
import Carousel from "react-elastic-carousel";

//json
import { items } from "../../public/json/home-carousel.json";

//consts
const breakPoints = [
  { width: 1, itemsToShow: 4, itemsToScroll: 1 },
  { width: 550, itemsToShow: 4, itemsToScroll: 1 },
  { width: 768, itemsToShow: 4, itemsToScroll: 1 },
  { width: 1200, itemsToShow: 4, itemsToScroll: 1 },
];

export default function Home() {
  //renderer
  return (
    <main>
      <section className="w-100 h-[607px]">
        <Image
          src={"/assets/images/webp/Landing-banner.webp"}
          alt="first page banner"
          height={0}
          width={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </section>
      <section className="pt-[5%] pb-[1%] flex flex-col justify-center">
        <header className="flex items-center justify-center mb-[20px]">
          <div className="w-[122px] h-px bg-gray-300 ml-[20px]"></div>
          <span className="main-title d-inline text-2xl">
            آگاه، انتخاب نخست سرمایه‌گذاران
          </span>
          <div className="w-[122px] h-px bg-gray-300 mr-[20px]"></div>
        </header>
        <div
          className="py-12 bg-no-repeat w-[1170px] mx-auto"
          style={{ backgroundImage: "url(/assets/images/svg/about-bg.svg)" }}
        >
          <p className="w-[1170px] p-20 text-sm leading-7	">
            سرمایه‌گذاری، کوتاه‌ترین مسیر رسیدن به آسایش مالی است. ما در مجموعه
            آگاه شما را برای تجربه لذت‌بخش این آسودگی، قدم به قدم همراهی خواهیم
            کرد. شما می‌توانید همراه با آگاه، بورس را شروع کنید، آموزش ببینید،
            با مبانی سرمایه‌گذاری موفق در این بازار آشنا شوید، دارایی‌هایتان را
            به تجربه و تخصص بالای تحلیلگران ما بسپارید و در نهایت بورس را به
            منبعی برای کسب ثروت تبدیل کنید.
          </p>
        </div>
      </section>
      <section className="py-[4%] flex flex-col justify-center w-[1170px] m-auto">
        <header className="flex items-center justify-center mb-[20px]">
          <div className="w-[122px] h-px bg-gray-300 ml-[20px]"></div>
          <span className="main-title d-inline text-2xl">
            بلاگ بآشگاه مشتریان کارگزاری آگاه
          </span>
          <div className="w-[122px] h-px bg-gray-300 mr-[20px]"></div>
        </header>
        <div className="w-full" dir="ltr">
          <Carousel {...{ isRTL: true, breakPoints: breakPoints }}>
            {items?.elastic?.map((item) => (
              <div className="ml-[20px] shadow border border-solid border-neutral-200	rounded-xl">
                <div>
                  <img src={item.imageUrl} className="m-1 rounded-xl" />
                  <p className="p-2 text-[15px] leading-7 text-blue-900 font-medium	">
                    {item.title}{" "}
                  </p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      <section
        className="pt-[2%] px-[13%] pb-[4%] bg-center bg-fixed"
        style={{ backgroundImage: "url('/assets/images/jpg/about-bg.jpg')" }}
      >
        <ul className="flex">
          <li className="w-1/5">
            <Image
              width={140}
              height={150}
              src="/assets/images/svg/about-01.svg"
              alt="about 1"
              className={"mt-[25px] mb-[10px] mx-auto"}
            />
            <div className="text-[13px] leading-7 text-white font-light	text-center">
              <strong className="text-[13px] leading-7 text-white font-light block">
                بیش از <em className="text-[19px] font-medium	">70000</em>میلیارد
                ریال
              </strong>
              دارایی تحت مدیریت
            </div>
          </li>
          <li className="w-1/5">
            <Image
              width={140}
              height={150}
              src="/assets/images/svg/about-02.svg"
              alt="about 1"
              className={"mt-[25px] mb-[10px] mx-auto"}
            />
            <div className="text-[13px] leading-7 text-white font-light	text-center">
              <strong className="text-[13px] leading-7 text-white font-light block">
                بیش از <em className="text-[19px] font-medium	">34000</em> درصد
              </strong>
              بازدهی در 13 سال
            </div>
          </li>
          <li className="w-1/5">
            <Image
              width={140}
              height={150}
              src="/assets/images/svg/about-03.svg"
              alt="about 1"
              className={"mt-[25px] mb-[10px] mx-auto"}
            />
            <div className="text-[13px] leading-7 text-white font-light	text-center">
              <strong className="text-[13px] leading-7 text-white font-light block">
                بیش از <em className="text-[19px] font-medium	">100</em> شعبه
              </strong>
              در سراسر کشور
            </div>
          </li>
          <li className="w-1/5">
            <Image
              width={140}
              height={150}
              src="/assets/images/svg/about-04.svg"
              alt="about 1"
              className={"mt-[25px] mb-[10px] mx-auto"}
            />
            <div className="text-[13px] leading-7 text-white font-light	text-center">
              <strong className="text-[13px] leading-7 text-white font-light block">
                بیش از <em className="text-[19px] font-medium	">5000000</em> نفر
              </strong>
              تعداد مشتریان
            </div>
          </li>
          <li className="w-1/5">
            <Image
              width={140}
              height={150}
              src="/assets/images/svg/about-05.svg"
              alt="about 1"
              className={"mt-[25px] mb-[10px] mx-auto"}
            />
            <div className="text-[13px] leading-7 text-white font-light	text-center">
              <strong className="text-[13px] leading-7 text-white font-light block">
                بیش از <em className="text-[19px] font-medium	">1300</em> نفر
              </strong>
              تعداد کارکنان
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}
