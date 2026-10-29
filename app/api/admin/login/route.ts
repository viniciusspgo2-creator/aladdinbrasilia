import {checkCredentials,setSession,sessionToken,isAdmin} from '../../../../lib/auth';
export async function GET(){return Response.json({authenticated:await isAdmin()});}
export async function POST(req:Request){const body=await req.json().catch(()=>({}));if(!checkCredentials(String(body.email||''),String(body.password||'')))return Response.json({error:'Credenciais inválidas ou variáveis de ambiente do admin não configuradas.'},{status:401});await setSession(sessionToken());return Response.json({ok:true});}
