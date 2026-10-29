import {mercusStatus} from '../../../../lib/integrations/mercus';
import {isAdmin,unauthorized} from '../../../../lib/auth';
export async function GET(){if(!await isAdmin())return unauthorized();return Response.json(mercusStatus());}
export async function POST(){if(!await isAdmin())return unauthorized();return Response.json({error:'Sincronização desabilitada até receber a documentação oficial da API Mercus. Use importação/exportação CSV.'},{status:501});}
