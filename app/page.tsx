"use client";

import Banner from "../components/Banner";
import Planifica from "../components/home/Planifica";
import Imperdibles from "../components/home/Imperdibles";
import Eventos from "../components/home/Eventos";

export default function Home() {
  return (
    <>
      <main>
        <div className=" hidden md:flex lg:flex xl:flex">
          <video width="auto"  height="860" autoPlay loop muted>
            <source src="/video/video.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
          </video>
        </div>
        <div className="video-container-mobile flex sm:block md:hidden lg:hidden xl:hidden object-cover">
          <video width="auto" height="700" autoPlay loop muted className="h-700 w-fit">
            <source src="/video/video-mobile.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
          </video>
        </div>
        <Planifica />
      </main>
      <section className="mt-11 mb-20 hidden md:flex lg:flex xl:flex">
        <Banner bannerSrc="/images/banner.gif" />
      </section>
      <section className="mt-11 mb-20 flex sm:flex md:hidden lg:hidden xl:hidden">
        <div className="bg-lime-700 w-full text-white font-semibold text-3xl text-center h-52 pt-24">
          Banner
        </div>
      </section>
      <section>
        <Imperdibles />
      </section>
      <section className="mt-11 mb-20 hidden md:flex lg:flex xl:flex">
        <Banner bannerSrc="/images/banner2.jpg" />
      </section>
      <section className="mt-11 mb-20 flex sm:flex md:hidden lg:hidden xl:hidden">
        <div className="bg-sky-700 w-full text-white font-semibold text-3xl text-center h-52 pt-24">
          banner
        </div>
      </section>
      <section>
        <Eventos />
      </section>
    </>
  );
}
