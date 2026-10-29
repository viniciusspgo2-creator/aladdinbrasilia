import {prisma,dbReady} from '../../../lib/db';
import {seedProducts} from '../../../lib/seed-products';
export async function GET(){try{if(dbReady){const products=await prisma.product.findMany({where:{active:true},orderBy:{order:'asc'}});return Response.json({products,mode:'database'});}}catch(e){console.error('products DB error',e)}return Response.json({products:seedProducts.filter(p=>p.active),mode:'demo',note:'Configure Neon e execute o seed para persistência.'});}
