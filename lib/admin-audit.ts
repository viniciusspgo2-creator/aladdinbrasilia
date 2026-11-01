import type {Prisma} from '@prisma/client';
export async function audit(tx:Prisma.TransactionClient,label:string){await tx.metricEvent.create({data:{type:'admin_change',label:label.slice(0,150)}})}
