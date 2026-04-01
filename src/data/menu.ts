export type Menu = {
  name: string;
  description: string;
  price: number;
};

export type Article = {
  name: string;
  price?: number;
  category: string;
};

export const menus: Menu[] = [
  {
    name: "Ofertas Nº1 A",
    description: "Pollo Asado + Tarrina de patatas grande",
    price: 17,
  },
  {
    name: "Ofertas Nº1 B",
    description: "Pollo Asado + Tarrina de patatas mediana + 1/4 Croquetas de jamón",
    price: 18,
  },
  {
    name: "Oferta Nº2",
    description: "Pollo Asado + Elegir entre: Tortilla de patatas ó Aliño ó 1/4 Empanados + Elegir entre: 1/4 Croquetas de jamón ó Tarrina de patatas mediana + Aceitunas, pan o picos.",
    price: 19.5,
  },
  {
    name: "Oferta Nº3 - Menú Familiar",
    description: "Pollo Asado + Tarrina de patatas grande + Elegir entre: 1/4 Empanados ó Aliño ó Tortilla + 1/4 Croquetas de jamón + Refresco 2L o Cerveza 1L",
    price: 23.5,
  },
  {
    name: "Oferta 2 Pollos",
    description: "2 Pollos Asados",
    price: 23.5,
  },
  {
    name: "Oferta Medio Pollo",
    description: "1/2 Pollo Asado con patatas dentro + Lata de refresco 33cl + Elegir entre: Aceitunas ó Pan ó Picos",
    price: 10.5,
  },
  {
    name: "Oferta Sin Pollo",
    description: "Tortilla + Aliño + 1/4 Empanados + Elegir entre: Aceitunas ó Pan ó Picos",
    price: 14.0,
  },
  {
    name: "Super Oferta",
    description: "2 Pollos Asados + Tarrina de patatas grande + 1/4 de empanados + Aliño + Tortilla + Refresco 2L ó Cerveza 1L",
    price: 39.50,
  },
  {
    name: "Oferta Anetos",
    description: "4 Anetos + Tarrina de patatas grande",
    price: 17.0,
  },
  {
    name: "Oferta Campera",
    description: "Pollo Asado + 1/4 Empanados + 1 Tortilla + Refresco 2L ó Cerveza 1L",
    price: 21.5,
  },
];

export const articles: Article[] = [
  // Pollo
  { name: "Pollo asado", price: 13.20, category: "POLLO" },
  { name: "Pollo asado al limón", price: 13.20, category: "POLLO" },
  { name: "1/2 Pollo asado", price: 8, category: "POLLO" },
  { name: "1/2 Pollo asado con patatas", price: 9, category: "POLLO" },


  // Patatas
  { name: "Tarrina de patatas grande", price: 4.0, category: "PATATAS" },
  { name: "Tarrina de patatas mediana", price: 3, category: "PATATAS" },
  { name: "Tarrina de patatas pequeña", price: 1, category: "PATATAS" },

  // Tortillas
  { name: "Tortilla Normal", price: 5.5, category: "TORTILLAS" },
  { name: "Tortilla Pimiento y cebolla", price: 6.0, category: "TORTILLAS" },
  { name: "Tortilla Chistorra", price: 6.0, category: "TORTILLAS" },
  { name: "Tortilla Campera", price: 6.5, category: "TORTILLAS" },

  // Empanados
  { name: "1/4 Croquetas caseras", price: 4.5, category: "EMPANADOS" },
  { name: "1/4 Croquetas de jamón", price: 3.0, category: "EMPANADOS" },
  { name: "1/4 Filetes de pollo", price: 4.5, category: "EMPANADOS" },
  { name: "1/4 Lagrimitas", price: 4.5, category: "EMPANADOS" },
  { name: "1/4 Langostinos bechamel", price: 4.5, category: "EMPANADOS" },
  { name: "1/4 Pechuguitas bechamel", price: 4.5, category: "EMPANADOS" },
  { name: "6 Huevos bechamel", price: 4.5, category: "EMPANADOS" },
  { name: "Aneto", price: 4.5, category: "EMPANADOS" },
  { name: "Aneto con patatas", price: 5.5, category: "EMPANADOS" },

  // Aliños
  { name: "Huevas aliñadas", price: 5, category: "ALIÑOS" },
  { name: "Salpicón de marisco", price: 5, category: "ALIÑOS" },
  { name: "Patatas Alioli", price: 4, category: "ALIÑOS" },
  { name: "Pimientos asados", price: 4, category: "ALIÑOS" },
  { name: "Ensaladilla", price: 5, category: "ALIÑOS" },
  { name: "Zanahorias aliñadas", price: 3, category: "ALIÑOS" },

  // Bebidas
  { name: "Lata de refresco 33cl", price: 1.2, category: "BEBIDAS" },
  { name: "Lata de cerveza 33cl", price: 1.2, category: "BEBIDAS" },
  { name: "Botella de refresco 2L", price: 2.5, category: "BEBIDAS" },
  { name: "Botella de agua 1.5L", price: 1.2, category: "BEBIDAS" },
  { name: "Botella de agua 0.5L", price: 0.5, category: "BEBIDAS" },
  { name: "Cerveza 1L", price: 2.2, category: "BEBIDAS" },

  // Complementos
  { name: "Aceitunas", price: 1.2, category: "COMPLEMENTOS" },
  { name: "Pan", price: 0.7, category: "COMPLEMENTOS" },
  { name: "Picos", price: 1.2, category: "COMPLEMENTOS" },

];
