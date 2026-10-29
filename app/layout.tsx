import type { Metadata } from 'next';
import './styles.css';
export const metadata:Metadata={title:'Catálogo | Aladdin Distribuidora · Dailus',description:'Conheça os lançamentos e a seleção Dailus no catálogo da Aladdin Distribuidora em Brasília. Monte sua sacola, gere seu pedido e compartilhe.',icons:{icon:'/assets/unnamed-Photoroom.png'},openGraph:{title:'Aladdin Distribuidora · Catálogo Dailus',description:'Lançamentos em beleza e pedidos facilitados.',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body>{children}</body></html>}
