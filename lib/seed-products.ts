import fs from 'node:fs';
import path from 'node:path';
export type ProductData={id:string;name:string;brand:string;sku:string;mercusCode:string;category:string;subcategory:string;line:string;description:string;price:number|null;showPrice:boolean;unit:string;featured:boolean;isNew:boolean;active:boolean;order:number;images:string[];fallback:string;source:string};
export const seedProducts:ProductData[]=JSON.parse(fs.readFileSync(path.join(process.cwd(),'public/seed-products.json'),'utf8'));
export const defaultBanners=[
 '/assets/DESK-SWEET-SKIN-CANDY.webp',
 '/assets/DESK-SWEET-SKIN-NOVOS-SABORES.webp',
 '/assets/DESK-TOP-CHROME.webp',
 '/assets/DESKTOP-PO-TRANSLUCIDO.webp',
 '/assets/DESK-LAPIS-LABIAL-NOVAS-CORES.webp'
];
