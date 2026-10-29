import {prisma,dbReady} from '../../../lib/db';
import {z} from 'zod';
const schema=z.object({type:z.enum(['view','product_view','add','order','pdf','whatsapp','search','search_empty']),productId:z.string().max(120).optional(),label:z.string().max(150).optional(),visitor:z.string().max(80).optional()});
export async function POST(req:Request){const result=schema.safeParse(await req.json().catch(()=>({})));if(!result.success)return Response.json({ok:false},{status:400});if(dbReady){try{await prisma.metricEvent.create({data:{type:result.data.type,productId:result.data.productId||'',label:result.data.label||'',visitor:result.data.visitor||''}})}catch(e){console.error(e)}}return Response.json({ok:true});}
