"use client";

import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";
import { Card, CardContent, CardTitle } from "../ui/card";
import Link from "next/link";

export default function Imperdibles() {

    const dataSlider = [
        { id: 1, title: "Aventura por Tierra", img: "/images/slide/slide1.jpg", href: "/naturaleza/aventuraportierra" },
        { id: 2, title: "Aventura por Agua", img: "/images/slide/slide2.jpg", href: "/naturaleza/aventuraporagua" },
        { id: 3, title: "Aventura por Aire", img: "/images/slide/slide3.jpg", href: "/naturaleza/aventuraporaire" },
        { id: 4, title: "Áreas Protegidas", img: "/images/slide/slide4.jpg", href: "/naturaleza/areasprotegidas" },
        { id: 5, title: "Espacios Verdes", img: "/images/slide/slide5.jpg", href: "/naturaleza/espaciosverdes" },
    ];
    return (
        <>
            <div className="text-center my-9">
                <p className="uppercase text-3xl font-normal text-neutral-400">
                    Imperdibles del día
                </p>
            </div>
            <Carousel className="max-w-7xl mx-auto w-full" opts={{ loop: true }}>
                <CarouselContent className="-ml-1">
                    {dataSlider.map((item, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-3/4 sm:basis-3/4 md:basis-1/3 lg:basis-1/4"
                        >
                            <div className="">
                                <Link href={item.href} className="block">
                                    <Card className="relative">
                                        <CardContent className="flex aspect-square items-center justify-center">
                                            <Image
                                                src={item.img}
                                                alt={item.title}
                                                width={1000}
                                                height={1000}
                                            />
                                        </CardContent>
                                        <CardTitle className="absolute pl-5 top-8 uppercase font-bold text-white w-44">
                                            {item.title}
                                        </CardTitle>
                                    </Card>
                                </Link>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </>
    );
}
