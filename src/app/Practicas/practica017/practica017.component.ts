import { Component, Input } from '@angular/core';
import { Producto } from './modelos/Producto';

@Component({
  selector: 'app-practica017',
  templateUrl: './practica017.component.html',
  styleUrls: ['./practica017.component.css']
})
export class Practica017Component {

  categoriaSeleccionada:string='Todas';

  categorias:string[]=["Electrónicos","Ropa","Juguetes","Alimentos","Bebidas","Todas"];

  listaProductos:Producto[]=[
  {id:1, nombre:'Macbook Pro 15"', descripcion:'Este producto reacondicionado certificado está probado y certificado para verse y funcionar como nuevo. El proceso de renovación incluye pruebas de funcionalidad, limpieza básica, inspección y reembalaje.', precio:45000, marca:'Mac', categoria:'Electrónicos'},
  {id: 2,nombre: "Camiseta",descripcion: "Camiseta de Nike Men's La tela ligera es suave Ajuste regular ",precio: 19.99,marca: "Nike",categoria: "Ropa"},
  {id: 3,nombre: "Set de LEGO",descripcion: "1 minifigura: Este modelo del auto deportivo callejero viene con una minifigura de Brian O’Conner que los peques pueden colocar al volante para recrear las emocionantes escenas de la famosa franquicia cinematográfica",precio: 49.99,marca: "LEGO",categoria: "Juguetes"  },
  {id: 4,nombre: "Arroz",descripcion: "Arroz importado grano largo",precio: 2.99,marca: "Uncle Ben's",categoria: "Alimentos"  },
  {id: 5,nombre: "Refresco de cola",descripcion: "Refrescante y con el inconfundible sabor tradicional de siempre, ahora con menos calorías",precio: 1.99,marca: "Coca-Cola",categoria: "Bebidas"},
  {id: 6,nombre: "TV",descripcion: "Disfruta tus contenidos favoritos en calidad 4K, con más detalles y texturas más realistas, gracias a 4K X-REALITY PRO y 4K PROCESSOR X1.",precio: 799.99,marca: "Sony",categoria: "Electrónicos"},
  {id: 7,nombre: "Smartwatch",descripcion: "El reloj inteligente admite la monitorización de la frecuencia cardíaca, la presión arterial y el oxígeno en sangre durante todo el día. El reloj tiene un sensor de alta sensibilidad incorporado. Relojs inteligentes rastrea y analiza automáticamente su tiempo y calidad de sueño, registra el sueño profundo, el sueño ligero y el tiempo total de sueño,para ayudarlo a crear un estilo de vida más saludable.",precio: 149.99,marca: "Huawei",categoria: "Electrónicos"},
  {id: 8,nombre: "Vestido de fiesta",descripcion: "De alta calidad: fabricado con tela suave de alta calidad que te hace ver preciosa. La tela ligeramente elástica hace que este vestido se ajuste perfectamente, y sea muy cómodo de llevar y favorecedor. ",precio: 79.99,marca: "Zara",categoria: "Ropa"},
  {id: 9,nombre: "Muñeca Barbie",descripcion: "MUÑECA BARBIE con su cabello rubio peinado en una divertida cola de caballo alta. Con aretes dorados y sandalias de goma con plataformas, el estilo de su atuendo de muñeca tiene muchos detalles que hacen que su personalidad resalte.",precio: 24.99,marca: "Mattel",categoria: "Juguetes"},
  {id: 10,nombre: "Aceite de oliva",descripcion: "Sabor delicado y refinado El postgusto es armonioso, elegante y persistente Producto sometido a estrictos controles de calidad",precio: 6.99,marca: "Bertolli",categoria: "Alimentos"},
  {id: 11,nombre: "Agua con gas",descripcion: "Agua carbonatada; agua con burbujas Disfruta de sus burbujas al máximo hasta 3 minutos después de abrir la lata Envase 100% reciclable Este pack incluye 12 latas de 355 ml cada una",precio: 2.49,marca: "Ciel",categoria: "Bebidas"},
  {id: 12,nombre: "Celular",descripcion: "Los productos con baterías superarán el 80 % de capacidad en comparación con uno nuevo. Es posible que los accesorios no sean originales, pero serán compatibles y totalmente operativos. Es posible que el producto venga en una caja genérica.",precio: 899.99,marca: "LG",categoria: "Electrónicos"},
  {id: 13,nombre: "Tablet",descripcion: "EL ENTRETENIMIENTO VA A DONDE VAYAS: Con su pantalla compacta de 8,7”, diseño delgado y marco de metal resistente, Galaxy Tab A7 Lite tiene el tamaño perfecto para entretenimiento mientras viajas.",precio: 249.99,marca: "Samsung",categoria: "Electrónicos"},
  {id: 14,nombre: "Camisa",descripcion: "Corte: Regular fit Escote: Cuello redondo Ocasiones: Día Largura de la manga: Manga corta Ocasiones: Fin de semana",precio: 39.99,marca: "Hugo Boss",categoria: "Ropa"},
  {id: 15,nombre: "Rompecabezas",descripcion: "Adecuado para adultos o niños mayores de 12 años, Contiene 1000 piezas de rompecabezas, el tamaño del producto terminado: 27,56 x 19,69/70*50cm, utilizando una técnica de corte de precisión que asegura que cada pieza encajará perfectamente. Corte completo, cada pieza es del tamaño de una moneda.",precio: 14.99,marca: "Ravensburger",categoria: "Juguetes"},
  {id: 16,nombre: "Cereal de desayuno",descripcion: "En Abarrotes y Mercería CARMENSUÁ puedes comprar el producto ORIGINAL, otros vendedores lo pueden tener de forma genérica y, por eso le bajan el precio",precio: 3.49,marca: "Kellogg's",categoria: "Alimentos"},
  {id: 17,nombre: "Agua mineral",descripcion: "Agua 100% pura de manantial",precio: 0.99,marca: "Dasani",categoria: "Bebidas"},
  {id: 18,nombre: "Computadora",descripcion: "Procesador: Intel Celeron N4120 (hasta 2.6 GHz de frecuencia de ráfaga, 4 MB de caché L2, 4 núcleos, 4 hilos). Plataforma de voltaje ultrabajo que proporciona la máxima eficiencia energética para un rendimiento óptimo.",precio: 699.99,marca: "HP",categoria: "Electrónicos"},
  {id: 19,nombre: "Reproductor de música",descripcion: "Radio FM, Bass Boost Carga rápida Conexión USB directa",precio: 99.99,marca: "Sony",categoria: "Electrónicos"},
  {id: 20,nombre: "Zapatos deportivos",descripcion: "Tacto acolchado Entresuela de EVA Importado",precio: 69.99,marca: "Adidas",categoria: "Ropa"},
  {id: 21,nombre: "Figura de acción",descripcion: "TRANSFORMERS STUDIO SERIES CLASE DE LUJO: Estas figuras coleccionables clase de lujo de 11 cm están inspiradas en escenas icónicas de las películas y diseñadas con una combinación de detalles y decoraciones que reflejan el universo cinematográfico de Transformers",precio: 14.99,marca: "Hasbro",categoria: "Juguetes"},
  {id: 22,nombre: "Mantequilla de maní",descripcion: "Crema de Cacahuate",precio: 4.99,marca: "Jif",categoria: "Alimentos"},
  {id: 23,nombre: "Refresco de naranja",descripcion: "Refresco frutal sabor naranja, intenso y divertido Tómala bien fría Ideal para una tarde con amigos o para acompañar tus snacks favoritos Empaque con 6 latas",precio: 1.99,marca: "Fanta",categoria: "Bebidas"},
  {id: 24,nombre: "Laptop",descripcion: "(RAM HP premium)Experimenta una multitarea mejorada con mayor ancho de banda gracias a HP 16 GB RAM (Modelo: 7EH99AA ABB)",precio: 1099.99,marca: "Dell",categoria: "Electrónicos"},
  {id:25, nombre: "Vestido Elegante", precio: 90, descripcion:'El vestido elegante de H&M es una prenda sofisticada para eventos especiales. Con un diseño elegante y materiales de calidad, es ideal para ocasiones formales y celebraciones.', marca: "H&M", categoria: "Ropa"},
  {id:26, nombre: "Lámpara Inteligente Regulable", precio: 55.99, descripcion:'La lámpara inteligente regulable de Philips Hue es una iluminación versátil y moderna. Permite ajustar la intensidad y tonalidad de la luz a través de dispositivos inteligentes para crear ambientes personalizados.', marca: "Philips Hue", categoria: "Electrónicos"},
  {id:27, nombre: "Set de Figuras de Acción", precio: 25.99, descripcion:'El set de figuras de acción de Hasbro ofrece un conjunto de figuras detalladas y emocionantes, ideal para coleccionistas y amantes del entretenimiento. Proporciona horas de diversión creativa.', marca: "Hasbro", categoria: "Juguetes"},
  {id:28, nombre: "Paquete de Té", precio: 12.99, descripcion:'El paquete de té verde orgánico de Celestial Seasonings es una mezcla de té refrescante y saludable. Con ingredientes naturales, ofrece una experiencia de sabor revitalizante.', marca: "Celestial Seasonings", categoria: "Bebidas"},
  {id:29, nombre: "Chamarra Cortavientos Unisex", precio: 70.99, descripcion:'La chamarra cortavientos unisex de The North Face es resistente y funcional. Diseñada para proteger contra el viento y brindar comodidad en climas cambiantes, es una prenda ideal para actividades al aire libre.', marca: "The North Face", categoria: "Ropa"},
  {id:30, nombre: "Reloj Inteligente con Monitor de Actividad", precio: 100.99, descripcion:'El reloj inteligente de Fitbit con monitor de actividad es un dispositivo versátil que registra el ejercicio, monitorea la salud y proporciona notificaciones inteligentes. Ideal para un estilo de vida activo.', marca: "Fitbit", categoria: "Electrónicos"},
  {id:31, nombre: "Juego de Mesa Estratégico", precio: 40.99, descripcion:'El juego de mesa estratégico Catan es un clásico juego de estrategia y negociación. Con mecánicas desafiantes, es ideal para pasar tiempo con amigos o la familia.', marca: "Catan", categoria: "Juguetes"},
  {id:32, nombre: "Cerveza Artesanal IPA", precio: 8.99, descripcion:'La cerveza artesanal IPA de Stone Brewing es una cerveza de estilo intenso y aromático. Con notas frutales y amargor equilibrado, es perfecta para los amantes de las cervezas de calidad.', marca: "Stone Brewing", categoria: "Bebidas"},
  {id:33, nombre: "Blusa Formal para Mujer", precio: 50.99, descripcion:'La blusa formal para mujer de Mango es una prenda elegante y versátil. Perfecta para eventos formales o para lucir sofisticada en el día a día.', marca: "Mango", categoria: "Ropa"},
  {id:34, nombre: "Teclado Inalámbrico Retroiluminado", precio: 60.99, descripcion:'El teclado inalámbrico retroiluminado de Logitech ofrece comodidad y estilo. Con iluminación ajustable, es ideal para trabajos en ambientes con poca luz.', marca: "Logitech", categoria: "Electrónicos"},
  {id:35, nombre: "Puzzle de 500 Piezas de Paisaje", precio: 20.99, descripcion:'El puzzle de 500 piezas de Educa es un desafiante rompecabezas con una hermosa imagen de paisaje. Perfecto para entretenerse y disfrutar la resolución de un bonito escenario.', "marca": "Educa", categoria: "Juguetes"},
  {id:36, nombre: "Whisky Escocés de Malta", precio: 75.99, descripcion:'El whisky escocés de malta de Glenfiddich es una bebida premium con sabores complejos y suaves. Perfecto para disfrutar solo o acompañado en momentos especiales.', marca: "Glenfiddich", categoria: "Bebidas"},
  {id:37, nombre: "Bufanda de Lana Tejida a Mano", precio: 45.99, descripcion:'La bufanda de lana tejida a mano de Artisan Wool es una prenda cálida y artesanal. Confeccionada con cuidado y detalle, es perfecta para abrigarse con estilo en épocas frías.', marca: "Artisan Wool", categoria: "Ropa"},
  {id:38, nombre: "Aspiradora Robot Inteligente", precio: 250.99, descripcion:'La aspiradora robot inteligente de iRobot Roomba es un dispositivo innovador que limpia de manera autónoma. Equipada con tecnología avanzada, mapea y limpia eficientemente tu hogar.', marca: "iRobot Roomba", categoria: "Electrónicos"},
  {id:39, nombre: "Juguete de Construcción para Niños", precio: 30.99, descripcion:'El juguete de construcción de LEGO ofrece diversión y creatividad para niños. Con piezas coloridas y posibilidades ilimitadas, promueve el juego y el desarrollo cognitivo.', marca: "LEGO", categoria: "Juguetes"},
  {id:40, nombre: "Soda Artesanal de Naranja y Jengibre", precio: 15.99, descripcion:'La soda artesanal de naranja y jengibre de Fentimans es una bebida refrescante y con sabor único. Elaborada con ingredientes orgánicos', marca: "Fentimans", categoria: "Bebidas"},
  {id:41, nombre: "Abrigo de Invierno Unisex", precio: 120.99, descripcion:'El abrigo de invierno unisex de Columbia es una prenda resistente y cálida. Diseñado para proteger del frío, es ideal para actividades al aire libre en climas fríos.', marca: "Columbia", categoria: "Ropa"},
  {id:42, nombre: "Lámpara de Escritorio LED", precio: 35.99, descripcion:'La lámpara de escritorio LED de TaoTronics ofrece iluminación ajustable para mayor comodidad. Con un diseño moderno y eficiente, es ideal para espacios de estudio o trabajo.', marca: "TaoTronics", categoria: "Electrónicos"},
  {id:43, nombre: "Juego de Teñido de Camisetas DIY", precio: 25.99, descripcion:'El juego de teñido de camisetas DIY de Tulip es perfecto para crear camisetas únicas. Incluye todo lo necesario para personalizar y dar un toque creativo a la ropa.', marca: "Tulip", categoria: "Juguetes"},
{id: 44,nombre: "Vestido de verano",descripcion: "Material: hecho de 65% algodón y 35% poliéster, ligero y elástico, suave y cómodo de llevar. Los vestidos de mujer fluirán cuando camines y se sienten cómodos en tu piel suave.",precio: 29.99,marca: "H&M",categoria: "Ropa"},
  {id: 45,nombre: "Juguete de peluche",descripcion: "Diseño único:</b>Formas lindas, imágenes vívidas, excelente mano de obra, buenas técnicas de costura y artesanía exquisita, este juguete de peluche es duradero y adecuado para abrazar.",precio: 12.99,marca: "Gund",categoria: "Juguetes"},
  {id: 46,nombre: "Pasta",descripcion: "Pasta Fusilli de 500 gramos. Hecha a base de Sémola de Trigo.Al dente de 14 a 16 minutos. Enriquecido con hierro y vitamina B.Gran fuente de energía.",precio: 1.99,marca: "Barilla",categoria: "Alimentos"},
  {id: 47,nombre: "Agua con gas",descripcion: "La-CROY. rima con 'disfrutar'. Averigüe qué pasa con esta alternativa saludable a las gaseosas. LaCroix 100% Natural Sparkling Water es última intervensión de calorías, edulcorante y última intervensión de sodio. Los sabores se derivan de los aceites esenciales naturales extraídos de la fruta llamada utilizada en cada uno de los sabores LaCroix",precio: 2.49,marca: "LaCroix",categoria: "Bebidas"},
  {id: 48,nombre: "Pantalon",descripcion: "Pasta Fusilli de 500 gramos. Hecha a base de Sémola de Trigo.Al dente de 14 a 16 minutos.Enriquecido con hierro y vitamina B. Gran fuente de energía.",precio: 1099.99,marca: "CPP",categoria: "Ropa"},
  {id: 49,nombre: "Afeitadora eléctrica",descripcion: "Rasuradora Philips para cualquier longuitud de vello. Recorta, Perfila y Afeita además de crear líneas y bordes precisos, sin importar la longitud del vello.",precio: 39.99,marca: "Braun",categoria: "Electrónicos"},
  {id: 50,nombre: "Camisa de mezclilla",descripcion: "MARCA: En Palassi te ofrecemos increíbles prendas para todo tipo de ocasión, con diseños originales, una excelente calidad e inmejorables precios además de ser una empresa 100% mexicana.",precio: 34.99,marca: "Levi's",categoria: "Ropa"}
  ];


  calcularTotalProductos():number{
    console.log(`El total de productos es de: ${this.listaProductos.length}`);
    return this.listaProductos.length;
  }
  
  calcularTotalCategorias(nombreCategoria:string=''){
    console.log(`Se van a calcular el total de la categoria: ${nombreCategoria}`);
    return this.listaProductos.filter(list => list.categoria===nombreCategoria).length;
  }

  escuchaCambiaCategoria(categoriaNueva:string):void{
    this.categoriaSeleccionada=categoriaNueva;
}


}