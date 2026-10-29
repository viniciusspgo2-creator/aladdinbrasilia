import {PrismaClient} from '@prisma/client';import fs from 'node:fs';import path from 'node:path';
const prisma=new PrismaClient();const file=path.join(process.cwd(),'public','seed-products.json');const products=JSON.parse(fs.readFileSync(file,'utf8'));
try{for(const p of products){const {id,...data}=p;await prisma.product.upsert({where:{id},update:{},create:{id,...data}});console.log('✓',p.name)}console.log('Seed concluído:',products.length,'produtos reais cadastrados.');}finally{await prisma.$disconnect()}
