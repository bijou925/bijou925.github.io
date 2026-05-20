/* ============================================
   PLATA 925 — Catálogo 2026
   Cart + WhatsApp Integration
   ============================================ */

const WA_NUMBER = '5491127510506';

// ============================================================
// PRODUCT DATA
// ============================================================

const PRODUCTS = [

  // ── ARITOS: ARGOLLAS FINAS ──────────────────────────────
  {
    id: 'argollas-finas',
    category: 'aritos',
    subcategory: 'Argollas Finas',
    name: 'Argollas Finas',
    image: 'media/argollas-finas-par.png',
    description: 'Plata 925 — múltiples diámetros disponibles',
    variants: [
      { label: '7 mm',  price: 7000 },
      { label: '7.5 mm', price: 7500 },
      { label: '8 mm',  price: 8000 },
      { label: '8.5 mm', price: 8500 },
      { label: '9 mm',  price: 9000 },
      { label: '9.5 mm', price: 9500 },
      { label: '12 mm', price: 12000 },
      { label: '14 mm', price: 14000 },
      { label: '16 mm', price: 16000 },
      { label: '20 mm', price: 20000 },
      { label: '24 mm', price: 24000 },
      { label: '26 mm', price: 26000 },
      { label: '30 mm', price: 30000 },
      { label: '34 mm', price: 34000 },
      { label: '40 mm', price: 40000 },
    ]
  },

  // ── ARITOS: ARGOLLAS GRUESAS ────────────────────────────
  {
    id: 'argollas-gruesas',
    category: 'aritos',
    subcategory: 'Argollas Gruesas',
    name: 'Argollas Gruesas',
    image: 'media/argollas-gruesas-par-grande.png',
    description: 'Plata 925 — estilo bold, múltiples diámetros',
    variants: [
      { label: '32 mm', price: 32000 },
      { label: '36 mm', price: 36000 },
      { label: '40 mm', price: 40000 },
      { label: '52 mm', price: 52000 },
      { label: '60 mm', price: 60000 },
      { label: '80 mm', price: 80000 },
      { label: '86 mm', price: 86000 },
      { label: '100 mm', price: 100000 },
    ]
  },

  // ── ARITOS: BOLITAS DE PLATA ────────────────────────────
  {
    id: 'bolitas-plata',
    category: 'aritos',
    subcategory: 'Bolitas de Plata',
    name: 'Bolitas de Plata',
    image: 'media/aritos-bolita-plata-par.png',
    description: 'Plata 925 — clásico atemporal en múltiples tamaños',
    variants: [
      { label: '3 mm',  price: 8000 },
      { label: '4 mm',  price: 9000 },
      { label: '5 mm',  price: 10000 },
      { label: '6 mm',  price: 11000 },
      { label: '7 mm',  price: 12000 },
      { label: '8 mm',  price: 14000 },
      { label: '10 mm', price: 18000 },
      { label: '12 mm', price: 24000 },
      { label: '14 mm', price: 32000 },
    ]
  },

  // ── ARITOS: CRIOLLOS ────────────────────────────────────
  {
    id: 'criollos',
    category: 'aritos',
    subcategory: 'Criollos',
    name: 'Criollos',
    image: 'media/aritos-criollos-pares.png',
    description: 'Plata 925 — diseño clásico criollo',
    variants: [
      { label: '25 mm', price: 44000 },
      { label: '30 mm', price: 48000 },
      { label: '35 mm', price: 54000 },
      { label: '40 mm', price: 58000 },
      { label: '45 mm', price: 62000 },
      { label: '50 mm', price: 68000 },
    ]
  },

  // ── ARITOS: PERLAS PEGADAS ──────────────────────────────
  {
    id: 'perlas-pegadas',
    category: 'aritos',
    subcategory: 'Perlas Pegadas',
    name: 'Perlas Pegadas',
    image: 'media/aritos-perlas-pegadas-par.png',
    description: 'Plata 925 — perla adherida, elegancia delicada',
    variants: [
      { label: '3 mm',  price: 6600 },
      { label: '4 mm',  price: 6800 },
      { label: '5 mm',  price: 7400 },
      { label: '6 mm',  price: 8000 },
      { label: '7 mm',  price: 8600 },
      { label: '8 mm',  price: 9200 },
      { label: '9 mm',  price: 9600 },
      { label: '10 mm', price: 10600 },
    ]
  },

  // ── ARITOS: SUSANOS ─────────────────────────────────────
  {
    id: 'susanos',
    category: 'aritos',
    subcategory: 'Susanos',
    name: 'Susanos',
    image: 'media/aritos-susano-par-1.png',
    description: 'Plata 925',
    naturalAspect: true,
    variants: [
      { label: '5 mm',  price: 7500 },
      { label: '8 mm',  price: 12000 },
    ]
  },

  // ── ARITOS: VARIADOS (todos $15.000) ────────────────────
  { id: 'arito-alitas',       category: 'aritos', subcategory: 'Variados', name: 'Alitas',                 image: 'media/aritos-alitas-AR0817.png',                  price: 15000, code: 'AR0817' },
  { id: 'arito-ancla',        category: 'aritos', subcategory: 'Variados', name: 'Ancla',                  image: 'media/aritos-ancla-AR0297.png',                   price: 15000, code: 'AR0297' },
  { id: 'arito-bicha',        category: 'aritos', subcategory: 'Variados', name: 'Bicha',                  image: 'media/aritos-bicha-AR0296.png',                   price: 15000, code: 'AR0296' },
  { id: 'arito-bicha-ondeada',category: 'aritos', subcategory: 'Variados', name: 'Bicha Ondeada',          image: 'media/aritos-bicha-ondeada.png',                  price: 15000 },
  { id: 'arito-sirena',       category: 'aritos', subcategory: 'Variados', name: 'Cola de Sirena',         image: 'media/aritos-cola-de-sirena-AR0329.png',          price: 15000, code: 'AR0329' },
  { id: 'arito-colibri',      category: 'aritos', subcategory: 'Variados', name: 'Colibrí',                image: 'media/aritos-colibri-AR0823.png',                 price: 15000, code: 'AR0823' },
  { id: 'arito-corazon-inc',  category: 'aritos', subcategory: 'Variados', name: 'Corazón Incompleto',     image: 'media/aritos-corazon-incompleto-AR0345.png',      price: 15000, code: 'AR0345' },
  { id: 'arito-corazon-trep', category: 'aritos', subcategory: 'Variados', name: 'Corazón Trepador',       image: 'media/aritos-corazon-trepador.png',               price: 15000 },
  { id: 'arito-cruz',         category: 'aritos', subcategory: 'Variados', name: 'Cruz',                   image: 'media/aritos-cruz-AR0290.png',                    price: 15000, code: 'AR0290' },
  { id: 'arito-cruz-trab',    category: 'aritos', subcategory: 'Variados', name: 'Cruz Trabajada',         image: 'media/aritos-cruz-trabajada-AR0815.png',          price: 15000, code: 'AR0815' },
  { id: 'arito-delfin',       category: 'aritos', subcategory: 'Variados', name: 'Delfín',                 image: 'media/aritos-delfin-AR0824.png',                  price: 15000, code: 'AR0824' },
  { id: 'arito-doble-cor',    category: 'aritos', subcategory: 'Variados', name: 'Doble Corazón',          image: 'media/aritos-doble-corazon-AR0348.png',           price: 15000, code: 'AR0348' },
  { id: 'arito-estrella-cal', category: 'aritos', subcategory: 'Variados', name: 'Estrella Calada',        image: 'media/aritos-estrella-calada-AR0339.png',         price: 15000, code: 'AR0339' },
  { id: 'arito-estrella-var', category: 'aritos', subcategory: 'Variados', name: 'Estrellas c/Calados',    image: 'media/aritos-estrella-c-calados-varios-AR0332.png',price: 15000, code: 'AR0332' },
  { id: 'arito-estrella-mini',category: 'aritos', subcategory: 'Variados', name: 'Estrella Mini Trepador', image: 'media/aritos-estrella-mini-trepador-AR0327.png',  price: 15000, code: 'AR0327' },
  { id: 'arito-estrella-trep',category: 'aritos', subcategory: 'Variados', name: 'Estrella Trepador',      image: 'media/aritos-estrella-trepador-AR0813.png',       price: 15000, code: 'AR0813' },
  { id: 'arito-flor-5',       category: 'aritos', subcategory: 'Variados', name: 'Flor 5 Pétalos',         image: 'media/aritos-flor-5-petalos.png',                 price: 15000 },
  { id: 'arito-flor',         category: 'aritos', subcategory: 'Variados', name: 'Flor',                   image: 'media/aritos-flor-AR0282.png',                    price: 15000, code: 'AR0282' },
  { id: 'arito-flor-ap',      category: 'aritos', subcategory: 'Variados', name: 'Flor Aparente',          image: 'media/aritos-flor-aparente-AR0822.png',           price: 15000, code: 'AR0822' },
  { id: 'arito-flor-lis',     category: 'aritos', subcategory: 'Variados', name: 'Flor de Lis',            image: 'media/aritos-flor-de-lis-AR0324.png',             price: 15000, code: 'AR0324' },
  { id: 'arito-infinito',     category: 'aritos', subcategory: 'Variados', name: 'Infinito Mini',          image: 'media/aritos-infinito-mini-AR0351.png',           price: 15000, code: 'AR0351' },
  { id: 'arito-luna',         category: 'aritos', subcategory: 'Variados', name: 'Luna Calada',            image: 'media/aritos-luna-calada-AR0334.png',             price: 15000, code: 'AR0334' },
  { id: 'arito-luna-est',     category: 'aritos', subcategory: 'Variados', name: 'Luna c/Estrellas',       image: 'media/aritos-luna-calada-con-estrellas-AR0828.png',price: 15000, code: 'AR0828' },
  { id: 'arito-luna-y-est',   category: 'aritos', subcategory: 'Variados', name: 'Luna y Estrella',        image: 'media/aritos-luna-y-estrella-AR0346.png',         price: 15000, code: 'AR0346' },
  { id: 'arito-mariposa',     category: 'aritos', subcategory: 'Variados', name: 'Mariposa',               image: 'media/aritos-mariposa-AR0814.png',                price: 15000, code: 'AR0814' },
  { id: 'arito-medio-sinfin', category: 'aritos', subcategory: 'Variados', name: 'Medio Sin Fin Trabajado',image: 'media/aritos-medio-sin-fin-trabajado-AR0295.png', price: 15000, code: 'AR0295' },
  { id: 'arito-nudito',       category: 'aritos', subcategory: 'Variados', name: 'Nudito',                 image: 'media/aritos-nudito-AR0338.png',                  price: 15000, code: 'AR0338' },
  { id: 'arito-nudito-bruja', category: 'aritos', subcategory: 'Variados', name: 'Nudito de Bruja',        image: 'media/aritos-nudito-de-bruja-AR0288.png',         price: 15000, code: 'AR0288' },
  { id: 'arito-nudo-bruja',   category: 'aritos', subcategory: 'Variados', name: 'Nudo de Bruja',          image: 'media/aritos-nudo-de-bruja.png',                  price: 15000 },
  { id: 'arito-ojo-turco',    category: 'aritos', subcategory: 'Variados', name: 'Ojo Turco',              image: 'media/aritos-ojo-turco-AR0287.png',               price: 15000, code: 'AR0287' },
  { id: 'arito-om',           category: 'aritos', subcategory: 'Variados', name: 'Om',                     image: 'media/aritos-om-AR0281.png',                      price: 15000, code: 'AR0281' },
  { id: 'arito-pluma',        category: 'aritos', subcategory: 'Variados', name: 'Pluma',                  image: 'media/aritos-pluma.png',                          price: 15000 },
  { id: 'arito-rama',         category: 'aritos', subcategory: 'Variados', name: 'Rama',                   image: 'media/aritos-rama-AR0816.png',                    price: 15000, code: 'AR0816' },
  { id: 'arito-ramita',       category: 'aritos', subcategory: 'Variados', name: 'Ramita',                 image: 'media/aritos-ramita-AR0818.png',                  price: 15000, code: 'AR0818' },
  { id: 'arito-saturno',      category: 'aritos', subcategory: 'Variados', name: 'Saturno',                image: 'media/aritos-saturno-AR0292.png',                 price: 15000, code: 'AR0292' },
  { id: 'arito-sol',          category: 'aritos', subcategory: 'Variados', name: 'Sol',                    image: 'media/aritos-sol-AR0326.png',                     price: 15000, code: 'AR0326' },
  { id: 'arito-trebol',       category: 'aritos', subcategory: 'Variados', name: 'Trébol',                 image: 'media/aritos-trebol-AR0330.png',                  price: 15000, code: 'AR0330' },
  { id: 'arito-trep-cor',     category: 'aritos', subcategory: 'Variados', name: 'Trepador Corazones',     image: 'media/aritos-trepador-corazones-AR0820.png',      price: 15000, code: 'AR0820' },
  { id: 'arito-trep-tri',     category: 'aritos', subcategory: 'Variados', name: 'Trepador Triángulo',     image: 'media/aritos-trepador-de-triangulo-AR0300.png',   price: 15000, code: 'AR0300' },
  { id: 'arito-triangulo',    category: 'aritos', subcategory: 'Variados', name: 'Triángulo',              image: 'media/aritos-triangulo-AR0293.png',               price: 15000, code: 'AR0293' },
  { id: 'arito-vaquita',      category: 'aritos', subcategory: 'Variados', name: 'Vaquita de San Antonio', image: 'media/aritos-vaquita-de-san-antonio.png',         price: 15000 },

  // ── PULSERAS: COLECCIÓN CORAZONES ──────────────────────
  { id: 'pul-cor-plp0028',  category: 'pulseras', subcategory: 'Colección Corazones', name: 'Pulsera Corazones',        image: 'media/pulsera-corazones-PLP0028.png',        price: 54000, code: 'PLP0028' },
  { id: 'pul-cor-plp0029',  category: 'pulseras', subcategory: 'Colección Corazones', name: 'Pulsera Corazones',        image: 'media/pulsera-corazones-PLP0029.png',        price: 50000, code: 'PLP0029' },
  { id: 'pul-cor-plp0125',  category: 'pulseras', subcategory: 'Colección Corazones', name: 'Pulsera Corazones Chica',  image: 'media/pulsera-corazones-PLP0125-chico.png',  price: 46000, code: 'PLP0125' },
  { id: 'pul-cor-plp0126',  category: 'pulseras', subcategory: 'Colección Corazones', name: 'Pulsera Corazones Chica',  image: 'media/pulsera-corazones-PLP0126-chico.png',  price: 42000, code: 'PLP0126' },
  { id: 'pul-cor-plp0127',  category: 'pulseras', subcategory: 'Colección Corazones', name: 'Pulsera Corazones Chica',  image: 'media/pulsera-corazones-PLP0127-chico.png',  price: 48000, code: 'PLP0127' },
  { id: 'pul-cor-plp0142',  category: 'pulseras', subcategory: 'Colección Corazones', name: 'Pulsera Corazones Grande', image: 'media/pulsera-corazones-PLP0142-grande.png', price: 60000, code: 'PLP0142' },
  { id: 'pul-cor-plp0146',  category: 'pulseras', subcategory: 'Colección Corazones', name: 'Pulsera Corazones',        image: 'media/pulsera-corazones-PLP0146.png',        price: 48000, code: 'PLP0146' },

  // ── PULSERAS: ESCLAVAS ──────────────────────────────────
  { id: 'pul-eva-fina',     category: 'pulseras', subcategory: 'Esclavas', name: 'Esclava Fina',   image: 'media/pulsera-EVA0010-EVA0011-fina.png',    price: 48000, code: 'EVA0010/11' },
  { id: 'pul-eva-0013',     category: 'pulseras', subcategory: 'Esclavas', name: 'Esclava',        image: 'media/pulsera-EVA0013-EVA0014.png',         price: 48000, code: 'EVA0013/14' },
  { id: 'pul-eva-gruesa',   category: 'pulseras', subcategory: 'Esclavas', name: 'Esclava Gruesa', image: 'media/pulsera-EVA0015-EVA0016-gruesa.png',  price: 60000, code: 'EVA0015/16' },
  { id: 'pul-eva-0018',     category: 'pulseras', subcategory: 'Esclavas', name: 'Esclava',        image: 'media/pulsera-EVA0018.png',                 price: 44000, code: 'EVA0018' },
  { id: 'pul-eva-0019',     category: 'pulseras', subcategory: 'Esclavas', name: 'Esclava',        image: 'media/pulsera-EVA0019.png',                 price: 36000, code: 'EVA0019' },
  { id: 'pul-eva-0020',     category: 'pulseras', subcategory: 'Esclavas', name: 'Esclava',        image: 'media/pulsera-EVA0020.png',                 price: 76000, code: 'EVA0020' },
  { id: 'pul-eva-0021',     category: 'pulseras', subcategory: 'Esclavas', name: 'Esclava',        image: 'media/pulsera-EVA0021.png',                 price: 80000, code: 'EVA0021' },
  { id: 'pul-eva-0022',     category: 'pulseras', subcategory: 'Esclavas', name: 'Esclava',        image: 'media/pulsera-EVA0022.png',                 price: 76000, code: 'EVA0022' },
  { id: 'pul-php-fina',     category: 'pulseras', subcategory: 'Esclavas', name: 'Esclava Fina',   image: 'media/pulsera-PHP0003-PHP0002-fina.png',    price: 56000, code: 'PHP0002/3' },

  // ── PULSERAS: RÍGIDAS / VARIAS ──────────────────────────
  { id: 'pul-plp0020',      category: 'pulseras', subcategory: 'Pulseras Plata 925', name: 'Pulsera',              image: 'media/pulsera-PLP0020-a.png',          price: 80000,  code: 'PLP0020' },
  { id: 'pul-plp0033',      category: 'pulseras', subcategory: 'Pulseras Plata 925', name: 'Pulsera',              image: 'media/pulsera-PLP0033.png',            price: 76000,  code: 'PLP0033' },
  { id: 'pul-plp0059',      category: 'pulseras', subcategory: 'Pulseras Plata 925', name: 'Pulsera',              image: 'media/pulsera-PLP0059.png',            price: 88000,  code: 'PLP0059' },
  { id: 'pul-plp0061',      category: 'pulseras', subcategory: 'Pulseras Plata 925', name: 'Pulsera',              image: 'media/pulsera-PLP0061-x19.png',        price: 76000,  code: 'PLP0061' },
  { id: 'pul-plp0062-doble',category: 'pulseras', subcategory: 'Pulseras Plata 925', name: 'Pulsera Doble',        image: 'media/pulsera-PLP0061-PLP0062-doble.png',price:88000, code: 'PLP0061/62' },
  { id: 'pul-plp0119',      category: 'pulseras', subcategory: 'Pulseras Plata 925', name: 'Pulsera',              image: 'media/pulsera-PLP0119.png',            price: 72000,  code: 'PLP0119' },
  { id: 'pul-plp0148-pand', category: 'pulseras', subcategory: 'Pulseras Plata 925', name: 'Pandora',              image: 'media/pulsera-PLP0148-pandora.png',    price: 58000,  code: 'PLP0148' },
  { id: 'pul-plp0170',      category: 'pulseras', subcategory: 'Pulseras Plata 925', name: 'Pulsera',              image: 'media/pulsera-PLP0170.png',            price: 64000,  code: 'PLP0170' },

  // ── PULSERAS: ELASTIZADAS ───────────────────────────────
  { id: 'pul-plp0152-el',   category: 'pulseras', subcategory: 'Elastizadas', name: 'Pulsera Elastizada', image: 'media/pulsera-PLP0152-elastizada.png',  price: 38000, code: 'PLP0152' },
  { id: 'pul-plp0159-el',   category: 'pulseras', subcategory: 'Elastizadas', name: 'Pulsera Elastizada', image: 'media/pulsera-PLP0159-elastizada.png',  price: 46000, code: 'PLP0159' },
  { id: 'pul-plp0162-el',   category: 'pulseras', subcategory: 'Elastizadas', name: 'Pulsera Elastizada', image: 'media/pulsera-PLP0162-elastizada.png',  price: 30000, code: 'PLP0162' },
  { id: 'pul-plp0163-el',   category: 'pulseras', subcategory: 'Elastizadas', name: 'Pulsera Elastizada', image: 'media/pulsera-PLP0163-elastizada.png',  price: 30000, code: 'PLP0163' },
  { id: 'pul-plp0163-fin',  category: 'pulseras', subcategory: 'Elastizadas', name: 'Pulsera Elastizada Fina', image: 'media/pulsera-PLP0163-finita.png', price: 26000, code: 'PLP0163F' },
  { id: 'pul-plp0216-el',   category: 'pulseras', subcategory: 'Elastizadas', name: 'Pulsera Elastizada', image: 'media/pulsera-PLP0216-elastizada.png',  price: 40000, code: 'PLP0216' },

  // ── PULSERAS: BOLITAS ───────────────────────────────────
  { id: 'pul-plp0155-bol',  category: 'pulseras', subcategory: 'Bolitas', name: 'Pulsera Bolitas', image: 'media/pulsera-PLP0155-bolitas.png',  price: 30000, code: 'PLP0155' },
  { id: 'pul-plp0211-bol',  category: 'pulseras', subcategory: 'Bolitas', name: 'Pulsera Bolitas', image: 'media/pulsera-PLP0211-bolitas.png',  price: 38000, code: 'PLP0211' },
  { id: 'pul-plp0212-bol',  category: 'pulseras', subcategory: 'Bolitas', name: 'Pulsera Bolitas', image: 'media/pulsera-PLP0212-bolitas.png',  price: 40000, code: 'PLP0212' },
  { id: 'pul-plp0213-bol',  category: 'pulseras', subcategory: 'Bolitas', name: 'Pulsera Bolitas', image: 'media/pulsera-PLP0213-bolitas.png',  price: 40000, code: 'PLP0213' },
  { id: 'pul-plp0214-bol',  category: 'pulseras', subcategory: 'Bolitas', name: 'Pulsera Bolitas', image: 'media/pulsera-PLP0214-bolitas.png',  price: 40000, code: 'PLP0214' },
  { id: 'pul-plp0215-bol',  category: 'pulseras', subcategory: 'Bolitas', name: 'Pulsera Bolitas', image: 'media/pulsera-PLP0215-bolitas.png',  price: 40000, code: 'PLP0215' },
  { id: 'pul-plp0217-bol',  category: 'pulseras', subcategory: 'Bolitas', name: 'Pulsera Bolitas', image: 'media/pulsera-PLP0217-bolitas.png',  price: 52000, code: 'PLP0217' },
  { id: 'pul-plp0220-bol',  category: 'pulseras', subcategory: 'Bolitas', name: 'Pulsera Bolitas', image: 'media/pulsera-PLP0220-bolitas.png',  price: 72000, code: 'PLP0220' },
  { id: 'pul-plp0221-bol',  category: 'pulseras', subcategory: 'Bolitas', name: 'Pulsera Bolitas', image: 'media/pulsera-PLP0221-bolitas.png',  price: 88000, code: 'PLP0221' },
  { id: 'pul-plp0236-bol',  category: 'pulseras', subcategory: 'Bolitas', name: 'Pulsera Bolitas', image: 'media/pulsera-PLP0236-bolitas.png',  price: 100000, code: 'PLP0236' },
  { id: 'pul-plp0237-perla',category: 'pulseras', subcategory: 'Bolitas', name: 'Pulsera Perla',   image: 'media/pulsera-PLP0237-perla.png',    price: 120000, code: 'PLP0237' },

  // ── PULSERAS: ESCLAVAS (set de tamaños) ─────────────────
  {
    id: 'pul-esclava-set',
    category: 'pulseras',
    subcategory: 'Esclavas',
    name: 'Esclava — Set Tamaños',
    image: 'media/pulseras-esclavas-set-tamanos.png',
    description: 'Plata 925 — esclavas rígidas en distintos anchos',
    variants: [
      { label: '2 mm', price: 58000 },
      { label: '3 mm', price: 64000 },
      { label: '4 mm', price: 72000 },
      { label: '5 mm', price: 72000 },
    ]
  },

  // ── PULSERAS: CORAZONES (con detalle) ───────────────────
  { id: 'pul-cor-plp0028b', category: 'pulseras', subcategory: 'Colección Corazones', name: 'Detalle de Cierre', image: 'media/pulsera-corazones-detalle-cierre.png', price: 0, isDecorativa: true },
];

// ============================================================
// CART STATE
// ============================================================

let cart = [];
let cartOpen = false;

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

function cartItemKey(productId, variantLabel) {
  return variantLabel ? `${productId}__${variantLabel}` : productId;
}

function addToCart(productId, variantLabel, variantPrice) {
  const product = getProductById(productId);
  if (!product) return;

  const price = variantPrice !== undefined ? variantPrice : product.price;
  const key   = cartItemKey(productId, variantLabel);
  const existing = cart.find(i => i.key === key);

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      key,
      productId,
      name:    product.name,
      image:   product.image,
      variant: variantLabel || null,
      price,
      qty: 1,
    });
  }

  updateCartUI();
  showToast(`${product.name}${variantLabel ? ' (' + variantLabel + ')' : ''} añadido`);
}

function removeFromCart(key) {
  cart = cart.filter(i => i.key !== key);
  updateCartUI();
}

function changeQty(key, delta) {
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty = Math.max(0, item.qty + delta);
  if (item.qty === 0) removeFromCart(key);
  else updateCartUI();
}

function cartTotal() {
  return cart.reduce((sum, i) => sum + i.price * i.qty, 0);
}

function cartCount() {
  return cart.reduce((sum, i) => sum + i.qty, 0);
}

// ============================================================
// FORMAT PRICE
// ============================================================

function formatPrice(n) {
  return '$' + n.toLocaleString('es-AR');
}

// ============================================================
// RENDER CART UI
// ============================================================

function updateCartUI() {
  // Header count
  document.querySelectorAll('.cart-count').forEach(el => {
    const n = cartCount();
    el.textContent = n;
    el.style.display = n > 0 ? 'inline-flex' : 'none';
  });

  const itemsEl = document.getElementById('cart-items');
  const totalEl = document.getElementById('cart-total');
  const sendBtn = document.getElementById('send-wa-btn');

  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = `
      <div class="cart-empty">
        <div class="cart-empty-icon">🛍</div>
        <p>Tu carrito está vacío.<br>Agregá piezas para hacer tu pedido.</p>
      </div>`;
    totalEl.textContent = '$0';
    sendBtn.disabled = true;
    return;
  }

  sendBtn.disabled = false;

  itemsEl.innerHTML = cart.map(item => `
    <div class="cart-item" data-key="${escHtml(item.key)}">
      <img class="cart-item-img" src="${escHtml(item.image)}" alt="${escHtml(item.name)}" onerror="this.src='media/contenido-decorativo.png'">
      <div class="cart-item-info">
        <div class="cart-item-name">${escHtml(item.name)}</div>
        ${item.variant ? `<div class="cart-item-variant">${escHtml(item.variant)}</div>` : ''}
        <div class="cart-item-price">${formatPrice(item.price)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeQty('${escHtml(item.key)}', -1)">−</button>
          <span class="qty-display">${item.qty}</span>
          <button class="qty-btn" onclick="changeQty('${escHtml(item.key)}', 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart('${escHtml(item.key)}')" title="Eliminar">×</button>
    </div>
  `).join('');

  totalEl.textContent = formatPrice(cartTotal());
}

function escHtml(str) {
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

// ============================================================
// CART OPEN / CLOSE
// ============================================================

function openCart() {
  cartOpen = true;
  document.getElementById('cart-sidebar').classList.add('open');
  document.getElementById('cart-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  cartOpen = false;
  document.getElementById('cart-sidebar').classList.remove('open');
  document.getElementById('cart-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

// ============================================================
// WHATSAPP
// ============================================================

function sendToWhatsApp() {
  if (cart.length === 0) return;

  let msg = '¡Hola! Me gustaría hacer el siguiente pedido:\n\n';

  cart.forEach(item => {
    const variantStr = item.variant ? ` (${item.variant})` : '';
    msg += `• ${item.name}${variantStr} x${item.qty} — ${formatPrice(item.price * item.qty)}\n`;
  });

  msg += `\n*Total: ${formatPrice(cartTotal())}*`;
  msg += '\n\nQuedo a la espera de su respuesta. ¡Gracias!';

  const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// ============================================================
// TOAST
// ============================================================

let toastTimeout;
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => t.classList.remove('show'), 2200);
}

// ============================================================
// BUILD PRODUCT CARD HTML
// ============================================================

function buildCard(product) {
  if (product.isDecorativa) return '';  // skip decorative images

  const hasVariants = product.variants && product.variants.length > 0;
  const minPrice = hasVariants ? Math.min(...product.variants.map(v => v.price)) : null;
  const codeHtml = product.code ? `<div class="card-code">${escHtml(product.code)}</div>` : '';

  const variantSelectId = `sel-${product.id}`;

  const variantsHtml = hasVariants ? `
    <div class="card-variants">
      <label for="${variantSelectId}">Tamaño / Medida</label>
      <select id="${variantSelectId}" onchange="syncCardPrice(this, '${escHtml(product.id)}')">
        ${product.variants.map((v, i) =>
          `<option value="${i}">${escHtml(v.label)} — ${formatPrice(v.price)}</option>`
        ).join('')}
      </select>
    </div>` : '';

  const priceHtml = hasVariants
    ? `<div class="card-price" id="price-${product.id}">Desde ${formatPrice(minPrice)}</div>`
    : `<div class="card-price">${formatPrice(product.price)}</div>`;

  const addBtnHtml = hasVariants
    ? `<button class="card-add-btn" onclick="addVariantToCart('${escHtml(product.id)}', '${variantSelectId}')">Añadir al carrito</button>`
    : `<button class="card-add-btn" onclick="addToCart('${escHtml(product.id)}')">Añadir al carrito</button>`;

  const imgWrapClass = product.naturalAspect
    ? 'card-image-wrap card-image-wrap--natural'
    : 'card-image-wrap';

  return `
    <div class="product-card" id="card-${escHtml(product.id)}">
      <div class="${imgWrapClass}">
        <img src="${escHtml(product.image)}" alt="${escHtml(product.name)}" loading="lazy" onerror="this.parentElement.style.background='#2a4e5b'">
      </div>
      <div class="card-body">
        <div class="card-name">${escHtml(product.name)}</div>
        ${codeHtml}
        ${priceHtml}
        ${variantsHtml}
        ${addBtnHtml}
      </div>
    </div>`;
}

function syncCardPrice(selectEl, productId) {
  const product = getProductById(productId);
  if (!product || !product.variants) return;
  const idx = parseInt(selectEl.value, 10);
  const variant = product.variants[idx];
  const priceEl = document.getElementById(`price-${productId}`);
  if (priceEl && variant) priceEl.textContent = formatPrice(variant.price);
}

function addVariantToCart(productId, selectId) {
  const product = getProductById(productId);
  if (!product || !product.variants) return;
  const sel = document.getElementById(selectId);
  const idx = parseInt(sel.value, 10);
  const variant = product.variants[idx];
  addToCart(productId, variant.label, variant.price);

  // brief visual feedback
  const btn = sel.closest('.product-card')?.querySelector('.card-add-btn');
  if (btn) {
    btn.classList.add('added');
    btn.textContent = '¡Añadido!';
    setTimeout(() => {
      btn.classList.remove('added');
      btn.textContent = 'Añadir al carrito';
    }, 1400);
  }
}

// ============================================================
// CATEGORY SELECTORS — standalone dropdown for Group A
// (Argollas Gruesas, Bolitas de Plata, Criollos, Perlas Pegadas)
// ============================================================

function renderCategorySelector(containerId, productId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const product = getProductById(productId);
  if (!product || !product.variants) return;

  const selectId  = `cat-sel-${productId}`;
  const priceId   = `cat-price-${productId}`;
  const btnId     = `cat-btn-${productId}`;
  const firstPrice = product.variants[0].price;

  el.innerHTML = `
    <div class="cat-selector">
      <label class="cat-selector-label" for="${selectId}">Seleccioná un tamaño</label>
      <select class="cat-selector-select" id="${selectId}"
              onchange="updateCatSelectorPrice('${escHtml(productId)}','${selectId}','${priceId}')">
        ${product.variants.map((v, i) =>
          `<option value="${i}">${escHtml(v.label)} — ${formatPrice(v.price)}</option>`
        ).join('')}
      </select>
      <div class="cat-selector-price" id="${priceId}">${formatPrice(firstPrice)}</div>
      <button class="cat-selector-btn" id="${btnId}"
              onclick="addCatSelectorToCart('${escHtml(productId)}','${selectId}','${btnId}')">
        Añadir al carrito
      </button>
    </div>`;
}

function updateCatSelectorPrice(productId, selectId, priceId) {
  const product = getProductById(productId);
  if (!product) return;
  const idx = parseInt(document.getElementById(selectId).value, 10);
  const variant = product.variants[idx];
  if (variant) document.getElementById(priceId).textContent = formatPrice(variant.price);
}

function addCatSelectorToCart(productId, selectId, btnId) {
  const product = getProductById(productId);
  if (!product) return;
  const idx = parseInt(document.getElementById(selectId).value, 10);
  const variant = product.variants[idx];
  if (!variant) return;
  addToCart(productId, variant.label, variant.price);

  const btn = document.getElementById(btnId);
  if (btn) {
    btn.classList.add('added');
    btn.textContent = '¡Añadido!';
    setTimeout(() => {
      btn.classList.remove('added');
      btn.textContent = 'Añadir al carrito';
    }, 1400);
  }
}

// ============================================================
// RENDER ALL SECTIONS
// ============================================================

function renderSection(containerId, category, subcategory) {
  const el = document.getElementById(containerId);
  if (!el) return;

  const items = PRODUCTS.filter(p =>
    p.category === category &&
    p.subcategory === subcategory &&
    !p.isDecorativa
  );

  el.innerHTML = items.map(buildCard).join('');
}

// ============================================================
// INIT
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // Render all product grids
  const sections = [
    // Aritos (all Group A + Finas handled via renderCategorySelector below)
    ['grid-susanos',          'aritos',    'Susanos'],
    ['grid-variados',         'aritos',    'Variados'],
    // Pulseras
    ['grid-pul-corazones',    'pulseras',  'Colección Corazones'],
    ['grid-pul-esclavas',     'pulseras',  'Esclavas'],
    ['grid-pul-plata',        'pulseras',  'Pulseras Plata 925'],
    ['grid-pul-elastizadas',  'pulseras',  'Elastizadas'],
    ['grid-pul-bolitas',      'pulseras',  'Bolitas'],
  ];
  sections.forEach(([id, cat, sub]) => renderSection(id, cat, sub));

  // Standalone category selectors (Argollas Finas + Group A)
  renderCategorySelector('selector-argollas-finas',   'argollas-finas');
  renderCategorySelector('selector-argollas-gruesas', 'argollas-gruesas');
  renderCategorySelector('selector-bolitas',          'bolitas-plata');
  renderCategorySelector('selector-criollos',         'criollos');
  renderCategorySelector('selector-perlas',           'perlas-pegadas');

  // Initial cart UI
  updateCartUI();

  // Cart toggle
  document.querySelectorAll('.cart-btn').forEach(btn =>
    btn.addEventListener('click', openCart)
  );
  document.getElementById('cart-overlay')?.addEventListener('click', closeCart);
  document.getElementById('cart-close-btn')?.addEventListener('click', closeCart);
  document.getElementById('send-wa-btn')?.addEventListener('click', sendToWhatsApp);

  // Keyboard
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && cartOpen) closeCart();
  });

  // Sticky header shadow
  window.addEventListener('scroll', () => {
    const h = document.querySelector('header');
    if (h) h.style.boxShadow = window.scrollY > 10 ? '0 2px 20px rgba(0,0,0,0.5)' : '';
  });
});
