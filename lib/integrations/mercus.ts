export type MercusSync={configured:boolean;connected:boolean;mode:'pending-documentation';required:string[]};
export function mercusStatus():MercusSync{return {configured:Boolean(process.env.MERCUS_API_URL&&process.env.MERCUS_API_KEY),connected:false,mode:'pending-documentation',required:['Documentação oficial dos endpoints de produtos e pedidos','Credenciais válidas e permissões','Schema para SKU, estoque, preços e pedidos','Ambiente de homologação ou base de testes']};}
// Deliberately no undocumented external endpoint calls. CSV export/import is the fallback.
