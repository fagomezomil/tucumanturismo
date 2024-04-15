// Tipo para los elementos del menú principal
export interface MainMenu {
    mainMenu: string;
    tipo: string;
}

// Tipo para los elementos de los submenús (subMenu)
export interface SubMenu {
    nombre: string;
    tipo: string;
    imgHeader?: string;
    titulo?: string;
    texto?: string;
    articulos?: SubMenu[];
    preguntas?: string;
}

// Tipo para cada grupo de datos en NavBarData
export interface NavBarGroup {
    mainMenu: MainMenu;
    subMenu?: SubMenu[];
}

// Tipo para NavBarData
export type NavBarDataType = NavBarGroup[];

// Data para el NavBar
export const NavBarData: NavBarDataType = [
    {
        mainMenu: {
            mainMenu: "Tucumán",
            tipo: "seccion",
        },
        subMenu: [
            {
                nombre: "Ubicación",
                tipo: "articulo",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Ubicación",
                texto: "El corazón de Argentina se encuentra en el Norte y se llama Tucumán. Es la provincia que le dió el soplo de vida al país con la independencia, por lo que es reconocida como la cuna donde nació. Rodeada al norte por Salta, al sureste por Santiago del Estero y al suroeste por Catamarca, es la provincia más pequeña, lo que ofrece a sus visitantes la posibilidad de recorrerla de punta a punta en poco tiempo. Con naturaleza exuberante y paisajes paradisíacos que van desde densas selvas hasta áridos valles que se pierden en el infinito, Tucumán es una verdadera tierra de contrastes. La parsimonia de los pueblos de su interior se contrapone con la vibración de su capital, que se enciende mucho más por las noches bajo la 'lunita tucumana'. "
            },
            {
                nombre: "Destinos y Circuitos",
                tipo: "subseccion",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Ubicación",
                articulos: [
                    {
                        nombre: "Circuito Las Yungas",
                        tipo: "articulo",
                        imgHeader: "/images/planifica/ubicacion.jpg",
                        titulo: "Circuito Las Yungas",
                        texto: "Se caracteriza por destinos paradisíacos de visita obligada, entre los que destacan San Javier, con sus espectaculares vistas panorámicas desde el magnífico Cristo Bendicente; Villa Nougués que permite pasar una jornada tranquila en una verdadera campiña europea; Yerba Buena que combina la calma de la naturaleza y el ritmo vertiginoso de sus noches; y El Cadillal, ideal para relajarse frente al imponente dique Celestino Gelsi o emprender una aventura en sus aguas. Tafí Viejo permite conocer en profundidad la historia ferroviaria de la provincia, en tanto que San Pablo encierra los vestigios de lo que fue uno de los ingenios azucareros más importantes. Raco, por su parte, te espera con sus tupidos bosques perfectos para una apacible cabalgata, mientras que El Siambón es un destino ideal para conectar con tu fe. Anfama, por último, es un paraje mágico ubicado a 2.000 metros de altura que podrás explorar en grupo, acompañado siempre por un guía",
                    },
                    {
                        nombre: "Circuito Sur ",
                        tipo: "articulo",
                        imgHeader: "/images/planifica/ubicacion.jpg",
                        titulo: "Circuito Sur",
                        texto: "El sur tucumano es extenso, con centros urbanísticos de gran trascendencia y un enorme potencial en el que conviven grandes atractivos paisajísticos con productos de gran interés cultural. Recorrer este circuito requiere de la visita obligada a Concepción, reconocida por el rugir de los motores de Nasif Estéfano; de vivir la naturaleza en su máximo esplendor en el Parque Nacional Aconquija; de asombrarse con las Ruinas de La Ciudacita, con un valor cultural incalculable; y de visitar uno de los enclaves más importantes de la tradición tucumana, la Feria de Simoca, donde es posible degustar chacinados y pastel de novia y dar un paseo en sulky.Visitar el sur permite disfrutar de una velada musical en Monteros, la Fortaleza del Folklore, y llevarse de recuerdo una randa, patrimonio cultural de la provincia; celebrar los carnavales en el colorido corsódromo de Aguilares; recorrer las Ruinas de San José de Lules, testimonio de la época de la conquista española; aventurarse en el imponente Dique Escaba y surcar sus aguas; visitar los antiguos túneles de Rumi Punco y refrescarse en la cascada Los Pizarro, un verdadero tesoro oculto del sur tucumano, en La Cocha.",
                    },
                    {
                        nombre: "Circuito Valle Calchaquí",
                        tipo: "articulo",
                        imgHeader: "/images/planifica/ubicacion.jpg",
                        titulo: "Circuito Valle Calchaquí",
                        texto: "El Valle Calchaquí tucumano ofrece paisajes áridos y extensos que hipnotizan a cualquiera, con los cardones como protagonistas del camino. Combina panorámicas asombrosas y todo el acervo histórico, cultural, arqueológico y mitológico de los pueblos originarios. Este circuito integra destinos de visita obligada como Tafí del Valle, con paisajes de ensueño, fiestas populares y turismo de estancias; Amaicha con su profundo legado arqueológico y cultural, su Fiesta de la Pachamama y sus costumbres ancestrales; El Mollar con la calma que ofrece el dique La Angostura y los vestigios de los pueblos originarios que se materializan en sus menhires; y Colalao del Valle, que permite conocer nuestras bodegas, templos para degustar vinos y varietales de altura. También te esperan El Pichao para probar sus dulces artesanales a base de membrillo y cayote; la Ciudad Sagrada de Quilmes, uno de los principales enclaves arqueológicos del país; el Observatorio Astronómico de Ampimpa, una mágica ventana al Universo donde se puede aprender sobre nuestros cielos; y Abra del Infiernillo, un imponente mirador con una belleza paisajística que enamora a todo aquel que lo visita. Finalmente, el circuito encierra todo el encanto de Talapazo, que te invita a vivir una increíble experiencia de turismo rural comunitario y la autenticidad de Famaillá, la famosa Capital Nacional de la Empanada, que te espera con ansias para que pruebes esta exquisitez que nos identifica en todo el mundo.",
                    },
                    {
                        nombre: "Circuito Valle de Choromoro",
                        tipo: "articulo",
                        imgHeader: "/images/planifica/ubicacion.jpg",
                        titulo: "Circuito Valle de Choromoro",
                        texto: "Este circuito te invita a descubrir una mixtura perfecta entre yacimientos arqueológicos y monumentos coloniales enclavados en una de las principales zonas productivas, caracterizada por la fabricación de riquísimos quesos, quesillos y dulces artesanales. Una visita obligada es la ciudad de Trancas, de gran peso histórico y religioso por el famoso Pozo de San Francisco Solano cuyas aguas poseen propiedades curativas y la iglesia del Sagrado Corazón, testigo del fusilamiento del primer gobernador de Tucumán, Bernabé Aráoz. Otro de sus principales enclaves es San Pedro de Colalao, conocido como la Sucursal del Cielo por su réplica de la Gruta de Lourdes, donde cientos de fieles acuden a orar, y afamado por su naturaleza privilegiada y sus exquisitas humitas.",
                    }
                ]
            },
            {
                nombre: "Preguntas Frecuentes",
                tipo: "preguntas",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Preguntas Frecuentes",
                preguntas: "¿Cómo llego a Tucumán? Si venís por aire vas a llegar al Aeropuerto Internacional Teniente Benjamín Matienzo, punto de conexión de vuelos desde y hacia Buenos Aires (Aeroparque y Ezeiza), Córdoba, Puerto Iguazú, Bariloche y Salta. Si venís por tierra desde Buenos Aires, la principal vía de acceso a Tucumán es la Ruta Nacional N° 157, que llega por el sudeste desde las provincias de Córdoba y Santiago del Estero. Si venís desde Capital Federal tenés otra opción: viajar vía Rosario por la Ruta Nacional N° 9 (Panamericana ramal Escobar), acortar camino por Ruta Nacional N° 34 hasta Santiago del Estero y desde allí retomar la Ruta Nacional N° 9 hasta arribar a San Miguel de Tucumán.Desde el norte del país, la vía de ingreso a Tucumán es la Ruta Nacional N° 9, en tanto que por el sur el acceso se realiza por la Ruta Nacional N° 38.Otra alternativa para llegar a la provincia desde Capital Federal es el tren, que arriba a Tucumán previa parada en las localidades de Rosario y La Banda.También hay diferentes empresas de ómnibus de larga distancia que llegan a la Estación Central de San Miguel de Tucumán desde todo el país."
            },
            {
                nombre: "Oficinas de Informes",
                tipo: "articulo",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Oficinas de Informes",
                texto: "El corazón de Argentina se encuentra en el Norte y se llama Tucumán. Es la provincia que le dió el soplo de vida al país con la independencia, por lo que es reconocida como la cuna donde nació. Rodeada al norte por Salta, al sureste por Santiago del Estero y al suroeste por Catamarca, es la provincia más pequeña, lo que ofrece a sus visitantes la posibilidad de recorrerla de punta a punta en poco tiempo. Con naturaleza exuberante y paisajes paradisíacos que van desde densas selvas hasta áridos valles que se pierden en el infinito, Tucumán es una verdadera tierra de contrastes. La parsimonia de los pueblos de su interior se contrapone con la vibración de su capital, que se enciende mucho más por las noches bajo la 'lunita tucumana'. "
            },
        ]
    },
    {
        mainMenu: {
            mainMenu: "Planificá",
            tipo: "seccion",
        },
        subMenu: [
            {
                nombre: "Alojamiento",
                tipo: "listaCardsSM",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Alojamiento",
                texto: "El corazón de Argentina se encuentra en el Norte y se llama Tucumán. Es la provincia que le dió el soplo de vida al país con la independencia, por lo que es reconocida como la cuna donde nació. Rodeada al norte por Salta, al sureste por Santiago del Estero y al suroeste por Catamarca,"
            },
            {
                nombre: "Transporte Urbano",
                tipo: "articulo",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Transporte Urbano",
                texto: "El corazón de Argentina se encuentra en el Norte y se llama Tucumán. Es la provincia que le dió el soplo de vida al país con la independencia, por lo que es reconocida como la cuna donde nació. Rodeada al norte por Salta, al sureste por Santiago del Estero y al suroeste por Catamarca,"
            },
            {
                nombre: "Alquiler de Autos",
                tipo: "articulo",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Alquiler de Autos",
                texto: "El corazón de Argentina se encuentra en el Norte y se llama Tucumán. Es la provincia que le dió el soplo de vida al país con la independencia, por lo que es reconocida como la cuna donde nació. Rodeada al norte por Salta, al sureste por Santiago del Estero y al suroeste por Catamarca,"
            },
            {
                nombre: "Prestadores Activos",
                tipo: "articulo",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Prestadores Activos",
                texto: "El corazón de Argentina se encuentra en el Norte y se llama Tucumán. Es la provincia que le dió el soplo de vida al país con la independencia, por lo que es reconocida como la cuna donde nació. Rodeada al norte por Salta, al sureste por Santiago del Estero y al suroeste por Catamarca,"
            },
            {
                nombre: "Agencias",
                tipo: "articulo",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Agencias",
                texto: "El corazón de Argentina se encuentra en el Norte y se llama Tucumán. Es la provincia que le dió el soplo de vida al país con la independencia, por lo que es reconocida como la cuna donde nació. Rodeada al norte por Salta, al sureste por Santiago del Estero y al suroeste por Catamarca,"
            },
            {
                nombre: "Guías de Turismo Activo",
                tipo: "articulo",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Guías de Turismo Activo",
                texto: "El corazón de Argentina se encuentra en el Norte y se llama Tucumán. Es la provincia que le dió el soplo de vida al país con la independencia, por lo que es reconocida como la cuna donde nació. Rodeada al norte por Salta, al sureste por Santiago del Estero y al suroeste por Catamarca,"
            },
            {
                nombre: "Itinerarios",
                tipo: "articulo",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Itinerarios",
                texto: "El corazón de Argentina se encuentra en el Norte y se llama Tucumán. Es la provincia que le dió el soplo de vida al país con la independencia, por lo que es reconocida como la cuna donde nació. Rodeada al norte por Salta, al sureste por Santiago del Estero y al suroeste por Catamarca,"
            }
        ]
    },
    {
        mainMenu: {
            mainMenu: "Imperdibles",
            tipo: "seccion",
        },
        subMenu: [
            {
                nombre: "Destinos",
                tipo: "articulo",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Destinos",
                texto: "El corazón de Argentina se encuentra en el Norte y se llama Tucumán. Es la provincia que le dió el soplo de vida al país con la independencia, por lo que es reconocida como la cuna donde nació. Rodeada al norte por Salta, al sureste por Santiago del Estero y al suroeste por Catamarca,"
            },
            {
                nombre: "Espectáculos permanentes",
                tipo: "articulo",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Espectáculos permanentes",
                texto: "El corazón de Argentina se encuentra en el Norte y se llama Tucumán. Es la provincia que le dió el soplo de vida al país con la independencia, por lo que es reconocida como la cuna donde nació. Rodeada al norte por Salta, al sureste por Santiago del Estero y al suroeste por Catamarca,"
            },
            {
                nombre: "Eventos Destacados",
                tipo: "articulo",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Eventos Destacados",
                texto: "El corazón de Argentina se encuentra en el Norte y se llama Tucumán. Es la provincia que le dió el soplo de vida al país con la independencia, por lo que es reconocida como la cuna donde nació. Rodeada al norte por Salta, al sureste por Santiago del Estero y al suroeste por Catamarca,"
            },
            {
                nombre: "Productos Turísticos",
                tipo: "articulo",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Productos Turísticos",
                texto: "El corazón de Argentina se encuentra en el Norte y se llama Tucumán. Es la provincia que le dió el soplo de vida al país con la independencia, por lo que es reconocida como la cuna donde nació. Rodeada al norte por Salta, al sureste por Santiago del Estero y al suroeste por Catamarca,"
            }
        ],
    },
    {
        mainMenu: {
            mainMenu: "Naturaleza",
            tipo: "seccion",
        },
        subMenu: [
            {
                nombre: "Áreas Protegidas",
                tipo: "articulo",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Áreas Protegidas",
                texto: "El corazón de Argentina se encuentra en el Norte y se llama Tucumán. Es la provincia que le dió el soplo de vida al país con la independencia, por lo que es reconocida como la cuna donde nació. Rodeada al norte por Salta, al sureste por Santiago del Estero y al suroeste por Catamarca,"
            },
            {
                nombre: "Aventura por Aire",
                tipo: "articulo",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Aventura por Aire",
                texto: "El corazón de Argentina se encuentra en el Norte y se llama Tucumán. Es la provincia que le dió el soplo de vida al país con la independencia, por lo que es reconocida como la cuna donde nació. Rodeada al norte por Salta, al sureste por Santiago del Estero y al suroeste por Catamarca,"
            },
            {
                nombre: "Aventura por Tierra",
                tipo: "articulo",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Aventura por Tierra",
                texto: "El corazón de Argentina se encuentra en el Norte y se llama Tucumán. Es la provincia que le dió el soplo de vida al país con la independencia, por lo que es reconocida como la cuna donde nació. Rodeada al norte por Salta, al sureste por Santiago del Estero y al suroeste por Catamarca,"
            },
            {
                nombre: "Aventura por Agua",
                tipo: "articulo",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Aventura por Agua",
                texto: "El corazón de Argentina se encuentra en el Norte y se llama Tucumán. Es la provincia que le dió el soplo de vida al país con la independencia, por lo que es reconocida como la cuna donde nació. Rodeada al norte por Salta, al sureste por Santiago del Estero y al suroeste por Catamarca,"
            },
            {
                nombre: "Aire Libre",
                tipo: "articulo",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Aire Libre",
                texto: "El corazón de Argentina se encuentra en el Norte y se llama Tucumán. Es la provincia que le dió el soplo de vida al país con la independencia, por lo que es reconocida como la cuna donde nació. Rodeada al norte por Salta, al sureste por Santiago del Estero y al suroeste por Catamarca,"
            }
        ],
    },
    {
        mainMenu: {
            mainMenu: "Historia y Cultura",
            tipo: "seccion",
        },
        subMenu: [
            {
                nombre: "Ciudad Histórica",
                tipo: "articulo",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Ciudad Histórica",
                texto: "El corazón de Argentina se encuentra en el Norte y se llama Tucumán. Es la provincia que le dió el soplo de vida al país con la independencia, por lo que es reconocida como la cuna donde nació. Rodeada al norte por Salta, al sureste por Santiago del Estero y al suroeste por Catamarca,"
            },
            {
                nombre: "Museos y Salas Culturales",
                tipo: "articulo",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Productos Turísticos",
                texto: "El corazón de Argentina se encuentra en el Norte y se llama Tucumán. Es la provincia que le dió el soplo de vida al país con la independencia, por lo que es reconocida como la cuna donde nació. Rodeada al norte por Salta, al sureste por Santiago del Estero y al suroeste por Catamarca,"
            },
            {
                nombre: "Arqueología",
                tipo: "articulo",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Arqueología",
                texto: "El corazón de Argentina se encuentra en el Norte y se llama Tucumán. Es la provincia que le dió el soplo de vida al país con la independencia, por lo que es reconocida como la cuna donde nació. Rodeada al norte por Salta, al sureste por Santiago del Estero y al suroeste por Catamarca,"
            },
            {
                nombre: "Fiestas y Festivales",
                tipo: "articulo",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Fiestas y Festivales",
                texto: "El corazón de Argentina se encuentra en el Norte y se llama Tucumán. Es la provincia que le dió el soplo de vida al país con la independencia, por lo que es reconocida como la cuna donde nació. Rodeada al norte por Salta, al sureste por Santiago del Estero y al suroeste por Catamarca,"
            }
        ],
    },
    {
        mainMenu: {
            mainMenu: "Entretenimiento",
            tipo: "seccion",
        },
        subMenu: [
            {
                nombre: "Con Niños",
                tipo: "articulo",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Con Niños",
                texto: "El corazón de Argentina se encuentra en el Norte y se llama Tucumán. Es la provincia que le dió el soplo de vida al país con la independencia, por lo que es reconocida como la cuna donde nació. Rodeada al norte por Salta, al sureste por Santiago del Estero y al suroeste por Catamarca,"
            },
            {
                nombre: "Ferias",
                tipo: "articulo",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Ferias",
                texto: "El corazón de Argentina se encuentra en el Norte y se llama Tucumán. Es la provincia que le dió el soplo de vida al país con la independencia, por lo que es reconocida como la cuna donde nació. Rodeada al norte por Salta, al sureste por Santiago del Estero y al suroeste por Catamarca,"
            },
            {
                nombre: "Privados",
                tipo: "articulo",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Privados",
                texto: "El corazón de Argentina se encuentra en el Norte y se llama Tucumán. Es la provincia que le dió el soplo de vida al país con la independencia, por lo que es reconocida como la cuna donde nació. Rodeada al norte por Salta, al sureste por Santiago del Estero y al suroeste por Catamarca,"
            },
            {
                nombre: "Shopings",
                tipo: "articulo",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Shoppings",
                texto: "El corazón de Argentina se encuentra en el Norte y se llama Tucumán. Es la provincia que le dió el soplo de vida al país con la independencia, por lo que es reconocida como la cuna donde nació. Rodeada al norte por Salta, al sureste por Santiago del Estero y al suroeste por Catamarca,"
            },
            {
                nombre: "Gastronomía",
                tipo: "articulo",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Gastronomía",
                texto: "El corazón de Argentina se encuentra en el Norte y se llama Tucumán. Es la provincia que le dió el soplo de vida al país con la independencia, por lo que es reconocida como la cuna donde nació. Rodeada al norte por Salta, al sureste por Santiago del Estero y al suroeste por Catamarca,"
            },
            {
                nombre: "Peñas",
                tipo: "articulo",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Peñas",
                texto: "El corazón de Argentina se encuentra en el Norte y se llama Tucumán. Es la provincia que le dió el soplo de vida al país con la independencia, por lo que es reconocida como la cuna donde nació. Rodeada al norte por Salta, al sureste por Santiago del Estero y al suroeste por Catamarca,"
            },
            {
                nombre: "Cines y Teatros",
                tipo: "articulo",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Cines y Teatros",
                texto: "El corazón de Argentina se encuentra en el Norte y se llama Tucumán. Es la provincia que le dió el soplo de vida al país con la independencia, por lo que es reconocida como la cuna donde nació. Rodeada al norte por Salta, al sureste por Santiago del Estero y al suroeste por Catamarca,"
            },
            {
                nombre: "Agenda",
                tipo: "articulo",
                imgHeader: "/images/planifica/ubicacion.jpg",
                titulo: "Agenda",
                texto: "El corazón de Argentina se encuentra en el Norte y se llama Tucumán. Es la provincia que le dió el soplo de vida al país con la independencia, por lo que es reconocida como la cuna donde nació. Rodeada al norte por Salta, al sureste por Santiago del Estero y al suroeste por Catamarca,"
            }
        ],
    },
    {
        mainMenu: {
            mainMenu: "Para Privados",
            tipo: "seccion"
        }
    },
];
export default NavBarData;
