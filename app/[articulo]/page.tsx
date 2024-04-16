import { useRouter } from "next/navigation";
import { NavBarData } from "../../components/NavBarData";

// ...

const Article = () => {
  const router = useRouter();
  const { article } = router.query;

  const navBarItem = NavBarData.find((item) => item.subMenu.toLowerCase().replace(/ /g, '-').replace(/á|é|í|ó|ú/g, 'a') === article);

  if (!navBarItem) {
    return <div>Artículo no encontrado</div>;
  }

  return (
    <div>
      <h1>{navBarItem.title}</h1>
      <img src={navBarItem.imgHeader} alt={navBarItem.title} />
      <p>{navBarItem.text}</p>
    </div>
  );
};

// "use client";
// import Image from "next/image";
// import { GetServerSideProps } from "next";
// import { NavBarDataType } from "../../components/NavBarData";
// import { getArticulo } from "../../lib/articulo";

// interface ArticuloProps {
//   articulo: NavBarDataType;
// }

// export const getServerSideProps: GetServerSideProps<ArticuloProps> = async (context) => {
//   const slug = context.params?.slug;
//   const articulo = await getArticulo(slug as string);

//   return {
//     props: {
//       articulo
//     }
//   }
// }

// const Articulo = ({ articulo }: ArticuloProps) => {
//   const { imgHeader, titulo, texto } = articulo;

//   return (
//     <div>
//       <Image src={imgHeader} alt={titulo} width={2000} height={500} />
//       <h1>{titulo}</h1>
//       <p>{texto}</p>
//     </div>
//   );
// }

// export default Articulo;


