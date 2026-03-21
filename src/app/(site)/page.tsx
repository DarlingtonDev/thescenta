import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  HeadphonesIcon,
  Search,
  TruckElectric,
  Undo,
  WalletMinimal,
} from "lucide-react";
import Image from "next/image";
import Offers from "./components/homecomponent/Offerfirst";
import OffersSecond from "./components/homecomponent/OfferSecond";
import OfferThird from "./components/homecomponent/OfferThird";
import ProductCard from "./components/homecomponent/product";
import CollectionCard from "./components/homecomponent/collection";
import Carouselsbtn from "./components/homecomponent/carouselsbtn";
import Roundnav from "./components/homecomponent/roundnav";
import Link from "next/link";
import Collectionbtn from "./components/homecomponent/collectionbtn";
import TestimonialCards from "./components/general/testimonialCards";
import Testimonialbtn from "./components/homecomponent/testimonialbtn";
import Blogbtn from "./components/homecomponent/blogbtn";

export default function Home() {
  const testimonials = [
    {
      name: "Adebayo Okoro",
      location: "Lagos, Nigeria",
      initials: "AO",
      text: "I recently purchased a fragrance from Thescenta Store, and it smells heavenly! The packaging is elegant, and the scent lasts all day.",
      bgColor: "bg-purple-200",
      translateZ: "-translate-z-40",
    },
    {
      name: "Kemi Eze",
      location: "Abuja, Nigeria",
      initials: "KE",
      text: "Thescenta Store never disappoints! The perfume I bought has become my signature scent. Delivery was fast and customer service was top-notch.",
      bgColor: "bg-pink-200",
      translateZ: "translate-z-14",
    },
    {
      name: "Tobi Oladipo",
      location: "Port Harcourt, Nigeria",
      initials: "TO",
      text: "Absolutely love the variety of perfumes at Thescenta Store. I got the perfect gift for my sister, and she was thrilled. Highly recommend!",
      bgColor: "bg-yellow-200",
      translateZ: "-translate-z-40",
    },
  ];

  const Blog = () => {
    return (
      <div className="w-full shrink-0 lg:shrink lg:w-[35%] min-h-80 border border-gray-300 pb-4 snap-start">
        <div className="w-full aspect-[16/9] relative">
          <Image
            src="/ministry-of-gourmand.webp"
            alt="ministry of gourmand"
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="mt-4 flex items-center px-3 gap-4 font-bold text-[11px] font-inter">
          <div className="flex items-center gap-2">
            <Calendar className="w-3 h-3" aria-hidden="true" />
            <p className="font-bold">2025-08-27</p>
          </div>

          <p>Thescenta Admin</p>
        </div>

        <div className="px-4 mt-2">
          <h2 className="font-inter font-bold text-[13px] capitalize">
            best perfumes to buy in 2025
          </h2>

          <p className="mt-2 font-inter text-xs leading-4 font-medium line-clamp-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam facilis
            voluptates ipsa, suscipit natus cupiditate! Consequatur sapiente
            quia dolores voluptatum!
          </p>

          <button className="text-snow bg-black capitalize font-inter font-medium text-xs px-3 py-2 lg:py-1 mt-3 cursor-pointer">
            read more
          </button>
        </div>
      </div>
    );
  };

  return (
    <main className="pb-4">
      <form action="" className="md:hidden w-full mt-4 px-5 flex">
        <input
          type="text"
          className="outline-0 border border-gray-300 h-10 px-3 w-[80%] font-inter text-xs font-medium"
          placeholder="Search Products"
        />
        <button className="w-[20%] bg-primary/80 flex justify-center items-center text-white">
          <Search className="w-4 h-4" />
        </button>
      </form>
      <section className="w-full lg:px-10 min-h-[400px] mt-5 flex justify-center px-3">
        <div className="w-full lg:w-[95%] rounded-none lg:rounded-xl relative ">
          <div className="lg:text-9xl absolute lg:-translate-x-0 left-1/2 -translate-x-1/2 text-4xl top-1/2 -translate-y-1/2  flex lg:left-20 text-primary/10 font-bold lg:right-20 lg:justify-evenly font-poppins">
            <h1 className="tracking-[1.1rem] lg:tracking-[1.3rem]">
              THESCENTA
            </h1>
          </div>

          <div className="absolute w-full h-full bg-[url('/hero1.png')] lg:bg-[url('/hero2.png')] bg-bottom bg-no-repeat"></div>
          <div className="w-full h-full absolute bg-primary/10 rounded-md lg:rounded-xl"></div>
          <div className="absolute top-8 lg:top-6 left-1/2 -translate-x-1/2 text-center font-poppins w-full">
            <p className="font-semibold tracking-wider text-xs lg:text-[10px]">
              SHOP AUTHENTIC <br />{" "}
              <span className="font-black text-xl lg:text-2xl tracking-wider">
                PERFUMES IN NIGERIA
              </span>
            </p>

            <p className="tracking-wider font-semibold text-xs lg:text-[10px] ">
              MEN&apos;S, WOMEN&apos;S & UNISEX FRAGRANCES
            </p>
            <button
              className="text-white bg-black mt-4 lg:mt-2 px-5 lg:py-1 py-2 text-[10px] font-medium cursor-pointer"
              aria-label="Shop perfumes online in Nigeria"
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </section>

      <section className="mt-2 flex w-full min-h-12 lg:hidden justify-center relative overflow-hidden">
        <div className="absolute bg-gradient-to-r from-white z-40 to-transparent h-full w-32 left-0"></div>
        <div className="absolute bg-gradient-to-l from-white z-40 to-transparent h-full w-32 right-0"></div>

        <div className="w-full">
          <div className="w-full overflow-hidden">
            <div
              className="flex gap-x-8 w-max automate"
              style={{ animation: "AutomatedResponsive 10s linear infinite" }}
            >
              {/* Original logos */}
              <div className="w-24 h-20 flex justify-center items-center shrink-0 relative lg:hidden">
                <Image
                  src="/brands/gucci-logo.png"
                  alt="gucci logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-24 h-20 flex justify-center items-center shrink-0 relative lg:hidden">
                <Image
                  src="/brands/givenchy-logo.png"
                  alt="givenchy logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-24 h-20 flex justify-center items-center shrink-0 relative lg:hidden">
                <Image
                  src="/brands/channel.png"
                  alt="channel logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-24 h-20 flex justify-center items-center shrink-0 relative lg:hidden">
                <Image
                  src="/brands/tomford.png"
                  alt="tomford logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-24 h-20 flex justify-center items-center shrink-0 relative lg:hidden">
                <Image
                  src="/brands/hermes-logo.png"
                  alt="hermes logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-24 h-20 flex justify-center items-center shrink-0 relative lg:hidden">
                <Image
                  src="/brands/armani.png"
                  alt="armani logo"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Duplicated logos for seamless infinite scroll */}
              <div className="w-24 h-20 flex justify-center items-center shrink-0 relative lg:hidden">
                <Image
                  src="/brands/gucci-logo.png"
                  alt="gucci logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-24 h-20 flex justify-center items-center shrink-0 relative lg:hidden">
                <Image
                  src="/brands/givenchy-logo.png"
                  alt="givenchy logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-24 h-20 flex justify-center items-center shrink-0 relative lg:hidden">
                <Image
                  src="/brands/channel.png"
                  alt="channel logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-24 h-20 flex justify-center items-center shrink-0 relative lg:hidden">
                <Image
                  src="/brands/tomford.png"
                  alt="tomford logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-24 h-20 flex justify-center items-center shrink-0 relative lg:hidden">
                <Image
                  src="/brands/hermes-logo.png"
                  alt="hermes logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="w-24 h-20 flex justify-center items-center shrink-0 relative lg:hidden">
                <Image
                  src="/brands/armani.png"
                  alt="armani logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-2 hidden lg:flex w-full min-h-12  justify-center relative overflow-x-hidden">
        <div className="absolute bg-linear-to-r from-white z-40 to-transparent h-full w-52 left-0"></div>
        <div className="absolute bg-linear-to-l z-40 from-white to-transparent h-full w-52 right-0"></div>
        <div className="w-full lg:w-[80%] ">
          <div
            className="gap-x-8 flex items-center overflow-hidden scroll-hidden w-max "
            style={{ animation: "AutomatedSlide 20s linear infinite" }}
          >
            <div className="w-[30%] min-w-[150px] h-20  lg:flex justify-center items-center hidden ">
              <Image
                src="/brands/gucci-logo.png"
                alt="gucci logo"
                width={100}
                height={10}
              />
            </div>
            <div className="w-[30%] min-w-[150px] h-20 lg:flex hidden justify-center items-center">
              <Image
                src="/brands/givenchy-logo.png"
                alt="givenchy logo"
                width={120}
                height={10}
              />
            </div>
            <div className="w-[30%] min-w-[150px] h-20  lg:flex justify-center items-center hidden">
              <Image
                src="/brands/channel.png"
                alt="channel logo"
                width={100}
                height={10}
              />
            </div>
            <div className="w-[30%] min-w-[150px] h-20 lg:flex hidden justify-center items-center">
              <Image
                src="/brands/tomford.png"
                alt="tomford logo"
                width={130}
                height={10}
              />
            </div>
            <div className="w-[30%] min-w-[150px] h-20 lg:flex hidden justify-center items-center">
              <Image
                src="/brands/hermes-logo.png"
                alt="hermes logo"
                width={210}
                height={10}
              />
            </div>
            <div className="w-[30%] min-w-[150px] h-20 lg:flex hidden justify-center items-center">
              <Image
                src="/brands/armani.png"
                alt="armani logo"
                width={200}
                height={10}
              />
            </div>

            <div className="w-[30%] min-w-[150px] h-20  lg:flex justify-center items-center hidden ">
              <Image
                src="/brands/gucci-logo.png"
                alt="gucci logo"
                width={100}
                height={10}
              />
            </div>
            <div className="w-[30%] min-w-[150px] h-20 lg:flex hidden justify-center items-center">
              <Image
                src="/brands/givenchy-logo.png"
                alt="givenchy logo"
                width={120}
                height={10}
              />
            </div>
            <div className="w-[30%] min-w-[150px] h-20  lg:flex justify-center items-center hidden">
              <Image
                src="/brands/channel.png"
                alt="channel logo"
                width={100}
                height={10}
              />
            </div>
            <div className="w-[30%] min-w-[150px] h-20 lg:flex hidden justify-center items-center">
              <Image
                src="/brands/tomford.png"
                alt="tomford logo"
                width={130}
                height={10}
              />
            </div>
            <div className="w-[30%] min-w-[150px] h-20 lg:flex hidden justify-center items-center">
              <Image
                src="/brands/hermes-logo.png"
                alt="hermes logo"
                width={210}
                height={10}
              />
            </div>
            <div className="w-[30%] min-w-[150px] h-20 lg:flex hidden justify-center items-center">
              <Image
                src="/brands/armani.png"
                alt="armani logo"
                width={200}
                height={10}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12 lg:mt-8 md:px-20 px-2 flex flex-col">
        <div className="w-full flex items-center justify-between px-2">
          <div>
            <h2 className="text-[18px] lg:text-xl tracking-wide font-semibold font-poppins">
              NEW ARRIVALS
            </h2>

            <p className="font-inter text-[13px] lg:max-w-[70%] mt-1 font-medium hidden lg:block">
              Discover our latest perfumes online in Nigeria, featuring new
              men&apos;s, women&apos;s and unisex fragrance just added to our
              store
            </p>
          </div>

          <Carouselsbtn />
        </div>

        <div className="flex w-full overflow-x-hidden snap-mandatory scroll-smooth  new-arrivals">
          <div className="flex gap-x-2 gap-y-4 flex-wrap items-center mt-3 w-full shrink-0 justify-center product-card snap-start">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>

          <div className="flex gap-x-2 gap-y-4 flex-wrap items-center mt-3 w-full shrink-0 justify-center snap-start">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>

        <Roundnav />
      </section>

      <section className="px-5 lg:px-20 mt-14 w-full">
        <div className="text-center">
          <h2 className="font-bold font-inter tracking-wide text-[18px] lg:text-xl">
            CURRENT OFFERS
          </h2>
          <p className="font-inter font-medium text-[13px] mt-1">
            Browse exclusive perfume deals in Nigeria <br /> including discounts
            on men&apos;s perfumes, women&apos;s fragrance, and luxury gift sets
          </p>
        </div>

        <div className="w-full flex mt-7 gap-3 px-5 scroll-hidden scroll-smooth snap-mandatory snap-x lg:px-28 lg:justify-center overflow-x-auto">
          <Offers />
          <OffersSecond />
          <OfferThird />
        </div>

        <Link href="/offers" className="w-full justify-center mt-5  flex">
          <button className="font-inter font-semibold text-snow py-2 bg-black px-3 text-[11px] cursor-pointer">
            VIEW ALL OFFERS
          </button>
        </Link>
      </section>

      <section className="mt-24 px-3 lg:mt-20 flex flex-col items-center">
        <h2 className="text-center font-inter text-xl font-semibold">
          For Women
        </h2>
        <p className="font-inter font-medium text-[13px] leading-5 mt-2 lg:mt-1 text-center">
          Shop women’s perfumes in Nigeria, from timeless classics to modern
          bestsellers. <br className="lg:block hidden" /> Explore floral, fruity
          and oriental fragrances designed to leave a lasting impression.
        </p>

        <div className="collection-parent flex gap-x-4 mt-8 overflow-x-auto snap-x snap-mandatory scroll-smooth px-2 scroll-hidden w-full">
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
        </div>

        <Collectionbtn domclass="collection-parent" />

        <button className="font-inter font-semibold text-snow py-2.5 bg-black px-3 text-[11px] mt-6 cursor-pointer">
          SHOP COLLECTION
        </button>
      </section>

      <section className="mt-24 px-3 lg:mt-20 flex flex-col items-center">
        <h2 className="text-center font-inter text-xl font-semibold">
          For Men
        </h2>

        <p className="font-inter font-medium text-[13px] leading-5 mt-2 lg:mt-1 text-center">
          Buy men’s perfumes in Nigeria. From fresh citrus cologne to deep woody
          fragrances. Our men’s collection combines <br /> strength, confidence,
          and timeless style exclusive perfumes for men.
        </p>

        <div className="men-collection flex space-x-4 mt-8 overflow-x-auto snap-x snap-mandatory scroll-smooth px-2 scroll-hidden w-full">
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard />
        </div>

        <Collectionbtn domclass="men-collection" />

        <button className="font-inter font-semibold text-snow py-2.5 bg-black px-3 text-[11px] mt-6 cursor-pointer">
          SHOP COLLECTION
        </button>
      </section>

      <section className="mt-20 lg:mt-14 w-full flex lg:flex-row flex-col px-6 lg:px-24 gap-x-10">
        <Image
          src="/ministry-of-gourmand.webp"
          alt="ministry of gourmand"
          width={400}
          height={400}
        />

        <div className="mt-10">
          <h2 className="text-xl font-bold font-inter">
            Mango Jugoso By Paris Corner
          </h2>
          <div className="w-20 h-0.5 bg-black rounded-2xl mt-2"></div>

          <p className="mt-5 font-inter text-[13px] font-medium">
            Mango Jugosu is a captivating fragrance that combines the sweetness
            of ripe tropical mangoes with a smooth, modern twist that lingers
            beautifully on the skin. Crafted for men and women who love to stand
            out, this scent opens with a burst of juicy freshness that
            immediately draws attention, while its warm undertones create a
            sophisticated balance that feels both youthful and elegant. Whether
            worn casually during the day or reserved for evening outings, Mango
            Jugosu is designed to leave a lasting impression everywhere you go.
          </p>

          <p className="mt-3 font-inter text-[13px] font-medium">
            More than just a perfume, Mango Jugosu embodies confidence, energy,
            and individuality. Its long-lasting formula ensures you stay fresh
            from morning to night, making it the perfect companion for work,
            events, and special occasions. With its unique blend that captures
            the essence of tropical luxury, this fragrance is a must-have for
            anyone looking to add a bold yet refined signature scent to their
            collection. Experience Mango Jugosu today and elevate your fragrance
            game with a perfume that speaks elegance and style.
          </p>

          <button className="mt-6 bg-primary text-snow text-[13px] font-medium lg:py-1.5 lg:px-4 py-2.5 px-6 cursor-pointer">
            Buy Now
          </button>
        </div>
      </section>

      <section className="mt-24 lg:mt-20 flex flex-col">
        <h2 className="text-center font-semibold font-inter text-xl">
          What Customers Say About Us
        </h2>
        <p className="font-inter font-medium text-[13px] mt-1 text-center">
          Trusted by perfume lovers across Nigeria for fast delivery, secure
          checkout, and authentic fragrances.
        </p>

        <div className="testimonial-card px-4 scroll-hidden lg:overflow-x-hidden lg:justify-center overflow-x-auto lg:snap-none snap-x snap-mandatory lg:px-16 flex gap-3 lg:gap-8 mt-10 lg:mt-8 py-2">
          {testimonials.map((testimonial, index) => (
            <TestimonialCards key={index} {...testimonial} />
          ))}
        </div>

        <Testimonialbtn domclass="testimonial-card" />
      </section>

      <section className="mt-20 w-full flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-16 py-10 lg:bg-snow px-5 lg:px-0">
        <div className="flex flex-col items-center gap-1 lg:border-0  border border-gray-300 lg:w-fit w-full py-6 rounded-md">
          <HeadphonesIcon className="text-primary w-8 h-8" aria-hidden="true" />
          <h2 className="font-inter font-semibold text-[13px]">24/7 Support</h2>
        </div>
        <div className="flex flex-col items-center gap-1 lg:border-0  border border-gray-300 lg:w-fit w-full py-6 rounded-md">
          <Undo className="text-primary  w-8 h-8" aria-hidden="true" />
          <h2 className="font-inter font-semibold text-[13px]">Easy Returns</h2>
        </div>
        <div className="flex flex-col items-center gap-1 lg:border-0  border border-gray-300 lg:w-fit w-full py-6 rounded-md">
          <TruckElectric className="text-primary  w-8 h-8" aria-hidden="true" />
          <h2 className="font-inter font-semibold text-[13px]">
            Fast Delivery
          </h2>
        </div>
        <div className="flex flex-col items-center gap-1 lg:border-0  border border-gray-300 lg:w-fit w-full py-6 rounded-md">
          <WalletMinimal className="text-primary  w-8 h-8" aria-hidden="true" />
          <h2 className="font-inter font-semibold text-[13px]">
            Secure Checkout
          </h2>
        </div>
      </section>

      <section className="mt-20 px-5 gap-y-10 lg:px-20 flex flex-col lg:flex-row lg:justify-between lg:static relative">
        <div className="w-full lg:max-w-[32%] ">
          <h2 className="font-bold text-xl font-inter">From Our Blog</h2>
          <div className="w-14 h-0.5 bg-gray-700 rounded-2xl mt-1"></div>
          <p className="mt-3 font-inter text-[13px] font-medium leading-relaxed ">
            Read our blog for reviews of the best perfumes in Nigeria, fragrance
            guides, and expert tips on choosing your signature scent. From
            seasonal recommendations to timeless classics, we share insights
            that make discovering your next signature fragrance easier and more
            enjoyable
          </p>
          <button className="mt-4 bg-black lg:px-3.5 lg:py-1.5 px-6 py-3 text-xs font-inter font-medium text-snow cursor-pointer">
            View All
          </button>
        </div>

        <div className=" w-full lg:w-[65%] flex items-center gap-x-3 lg:py-2 overflow-x-auto snap-x snap-mandatory scroll-hidden">
          <Blogbtn
            direction="left"
            position="left-0 top-[60%]"
            domclass="blog-parent"
          />
          <div className="scroll-hidden w-full blog-parent flex lg:gap-x-4 overflow-x-auto snap-mandatory snap-x scroll-smooth">
            <Blog />
            <Blog />
          </div>

          <Blogbtn
            direction="right"
            position="right-0 top-[60%]"
            domclass="blog-parent"
          />
        </div>
      </section>

      {/* <section className="mt-20">
        <h2 className="text-center font-inter font-bold text-xl ">
          Sign Up For Newsletter
        </h2>
        <p className="text-center font-inter font-medium text-[13px] text-gray-700">
          Subscribe to our newsletter to receive latest update
        </p>

        <h2 className="font-bold tracking-wider text-7xl text-gray-100 text-center -mt-2">
          NEWSLETTER
        </h2>

        <div className="w-full relative min-h-64 bg-no-repeat bg-center bg-cover bg-[url('/hero2.png')] ">
          <div className="absolute w-full h-full bg-primary/30 flex justify-center items-center">
            <form action="">
              <input
                type="email"
                className=" py-2.5 px-3 w-80 bg-white font-inter font-semibold text-[13px] outline-0"
                placeholder="Enter Your Email Address"
              />
              <button className="py-2.5 px-8 bg-black text-snow font-inter font-medium text-[13px]">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section> */}
    </main>
  );
}
