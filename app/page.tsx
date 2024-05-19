"use client";

import Banner from "../components/Banner";
import Planifica from "../components/home/Planifica";
import Imperdibles from "../components/home/Imperdibles";
import Eventos from "../components/home/Eventos";
import BannerGastronomia from "../components/home/BannerGastronomia";
import BannerProductos from "../components/home/BannerProductos";

export default function Home() {
  return (
    <>
      <main>
        <div className=" hidden lg:flex xl:flex w-full">
          <video width="2440" height="1500" autoPlay loop muted content="fit" className="w-full">
            <source src="/video/video.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
          </video>
        </div>
        <div className="flex sm:block md:flex lg:hidden xl:hidden w-full">
          <video width="2000" height="1500" autoPlay loop muted className="w-full">
            <source src="/video/video-mobile.mp4" type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
          </video>
        </div>
        <Planifica />
      </main>
      <section>
        <BannerGastronomia />
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
      <section>
        <BannerProductos />
      </section>
      <section className="mt-11 mb-20 flex sm:flex md:hidden lg:hidden xl:hidden">
        <div className="bg-sky-700 w-full text-white font-semibold text-3xl text-center h-52 pt-24">
          banner
        </div>
      </section>
      <section>
        <Eventos />
      </section>
      <section className="mt-11 mb-20 hidden md:flex lg:flex xl:flex">
        <Banner bannerSrc="/images/banner.gif" />
      </section>
    </>
  );
}
