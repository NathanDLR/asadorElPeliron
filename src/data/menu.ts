export type Menu = {
  name: string;
  description: string;
  price: number;
};

export type Article = {
  name: string;
};

export const menus: Menu[] = [
  {
    name: "Menú del Día",
    description:
      "Primer plato, segundo plato y postre con bebida incluida. Disponible de lunes a viernes al mediodía.",
    price: 14.5,
  },
  {
    name: "Menú Asador",
    description:
      "La experiencia completa del asador: entrante de la casa, carne a la brasa a elegir y postre casero.",
    price: 28.0,
  },
  {
    name: "Menú Degustación",
    description:
      "Una selección de seis pases elaborados con productos de temporada para descubrir toda nuestra cocina.",
    price: 38.0,
  },
  {
    name: "Menú Infantil",
    description:
      "Pensado para los más pequeños: primer plato, segundo y postre con refresco incluido.",
    price: 12.0,
  },
];

export const articles: Article[] = [
  { name: "Pan artesano" },
  { name: "Agua mineral" },
  { name: "Vino de la casa" },
  { name: "Cerveza artesana" },
  { name: "Refresco" },
  { name: "Café solo" },
  { name: "Cortado" },
  { name: "Postre del día" },
];
