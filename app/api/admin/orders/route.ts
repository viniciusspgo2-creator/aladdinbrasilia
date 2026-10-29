import {prisma,dbReady} from '../../../../lib/db';
import {isAdmin,unauthorized} from '../../../../lib/auth';
export async function GET(req:Request){if(!await isAdmin())return unauthorized();if(!dbReady)return Response.json({orders:[],mode:'demo'});const orders=await prisma.purchaseOrder.findMany({take:100,orderBy:{createdAt:'desc'}});return Response.json({orders});}
