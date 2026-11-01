import {prisma,dbReady} from '../../../lib/db';
export const dynamic='force-dynamic';
export async function GET(){if(!dbReady)return Response.json({copyExperiment:false,categories:[]});try{const rows=await prisma.siteSetting.findMany({where:{key:{in:['copy_experiment','category_order']}}});return Response.json({copyExperiment:rows.find(x=>x.key==='copy_experiment')?.value===true,categories:rows.find(x=>x.key==='category_order')?.value||[]});}catch{return Response.json({copyExperiment:false,categories:[]})}}
