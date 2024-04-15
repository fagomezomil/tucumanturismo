
"use client";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import { FaMapLocationDot, FaRegFilePdf } from "react-icons/fa6";
import { NavBarData, NavBarDataType } from "./NavBarData";

export interface ArticleDataType extends NavBarDataType {
    imgHeader: string,
    texto: string,
}

export default function Articulo({ articleData }: { articleData: ArticleDataType }) {
    if (!articleData) {
        return <p>No se seleccionó ningún artículo.</p>;
    }

    const navbarData = NavBarData.find((item) => item.subMenu === articleData.subMenu)!;

    // Usa `articleData` para mostrar el contenido del artículo
    return (
        <>
            <div
                className="bg-cover bg-center bg-no-repeat grid content-end"
                style={{ backgroundImage: `url(${articleData.imgHeader})`, height: "750px" }}
            >
                <div id="titulo-articulo" className="max-w-7xl w-full pl-6 mb-6 mx-auto text-4xl font-bold text-white text-left">
                    {articleData.titulo}
                </div>
            </div>

            <div className="max-w-7xl w-full mx-auto mt-6 pl-6">
                {/* Breadcrumb */}
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/" onClick={() => handleClick("/")}>Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href={`/${navbarData.url}`} onClick={() => handleClick(navbarData.url)}>
                                {navbarData.mainMenu}
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>{articleData.titulo}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            {/* Contenido del artículo */}
            <div className="max-w-7xl w-full mx-auto grid grid-cols-3 gap-12 pl-6">
                <div className="text-14 text-gray-800 mt-5 col-span-2">
                    <h2 className="text-2xl">{articleData.titulo}</h2>
                    <p>{articleData.texto}</p>

