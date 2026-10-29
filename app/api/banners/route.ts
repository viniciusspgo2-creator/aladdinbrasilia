import {prisma,dbReady} from '../../../lib/db';
import {defaultBanners} from '../../../lib/seed-products';
export async function GET(){try{if(dbReady){const row=await prisma.siteSetting.findUnique({where:{key:'banners'}});if(row&&Array.isArray(row.value))return Response.json({banners:row.value});}}catch(e){console.error(e)}return Response.json({banners:defaultBanners});}
