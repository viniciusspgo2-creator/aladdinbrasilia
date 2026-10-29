import { cookies } from 'next/headers';
import { createHmac, timingSafeEqual } from 'node:crypto';
const NAME='aladdin_admin';
function sign(payload:string){return createHmac('sha256',process.env.SESSION_SECRET||'INVALID_SECRET').update(payload).digest('hex');}
export function sessionToken(){const expiry=Date.now()+1000*60*60*12;const data=`${expiry}`;return `${data}.${sign(data)}`;}
export async function isAdmin(){
 if(!process.env.SESSION_SECRET||process.env.SESSION_SECRET.length<32)return false;
 const value=(await cookies()).get(NAME)?.value||'';const [data,sig]=value.split('.');
 if(!data||!sig||!/^\d+$/.test(data)||Number(data)<Date.now())return false;
 const expected=Buffer.from(sign(data),'hex');let given:Buffer;
 try{given=Buffer.from(sig,'hex')}catch{return false}
 return expected.length===given.length&&timingSafeEqual(expected,given);
}
export function checkCredentials(email:string,password:string){
 const correctEmail=process.env.ADMIN_EMAIL||'';const correctPassword=process.env.ADMIN_PASSWORD||'';
 if(!correctEmail||!correctPassword||!process.env.SESSION_SECRET||process.env.SESSION_SECRET.length<32)return false;
 const a=Buffer.from(createHmac('sha256',correctPassword).update('x').digest('hex'));
 const b=Buffer.from(createHmac('sha256',password).update('x').digest('hex'));
 return email.toLowerCase().trim()===correctEmail.toLowerCase().trim()&&timingSafeEqual(a,b);
}
export async function setSession(token:string){(await cookies()).set(NAME,token,{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'lax',path:'/',maxAge:43200});}
export async function clearSession(){(await cookies()).delete(NAME);}
export const unauthorized=()=>Response.json({error:'Acesso restrito ao administrador.'},{status:401});
