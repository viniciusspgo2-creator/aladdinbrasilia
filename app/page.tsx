import fs from 'node:fs';
import path from 'node:path';
import Script from 'next/script';
export const dynamic='force-static';
export default function Home(){const html=fs.readFileSync(path.join(process.cwd(),'public','catalogo.html'),'utf-8');const body=html.split('<body>')[1]?.split('</body>')[0]?.replace(/<script[^>]+><\/script>/g,'')||'';return <><meta name="aladdin-whatsapp" content={process.env.NEXT_PUBLIC_WHATSAPP||''}/><div dangerouslySetInnerHTML={{__html:body}}/><Script src="/app.js" strategy="afterInteractive"/></>}
