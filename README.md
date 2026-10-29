# Aladdin Distribuidora — Catálogo digital Dailus

Projeto do catálogo digital da **Aladdin Distribuidora (Brasília/DF)**. **Não é a loja oficial da Dailus**: Dailus é a marca dos produtos apresentados. Os produtos e as peças promocionais devem ser usados com autorização dos respectivos titulares.

## Destaque da entrega: carrossel dos banners originais

Os cinco arquivos enviados pelo cliente aparecem como slides na seção “Em destaque” da página inicial. Não há artes recriadas e não há embalagens inventadas.

1. `DESK-SWEET-SKIN-CANDY.webp`
2. `DESK-SWEET-SKIN-NOVOS-SABORES.webp`
3. `DESK-TOP-CHROME.webp`
4. `DESKTOP-PO-TRANSLUCIDO.webp`
5. `DESK-LAPIS-LABIAL-NOVAS-CORES.webp`

Slides com navegação por setas, bolinhas de posição, troca automática de 6,5 segundos, pausa durante hover/foco, teclado e swipe em telas de toque. O carrossel mantém os arquivos originais, inclusive imagens/textos das embalagens. No painel administrativo em **Banners / slides**, é possível alterar a ordem, adicionar ou remover slides, depois salvar no banco.

## Stack

- Next.js (App Router), TypeScript e React, CSS responsivo
- PostgreSQL Neon com Prisma 6
- Storage compatível com S3 / Cloudflare R2, sharp para WebP + miniatura
- pdf-lib para pedidos em PDF, WhatsApp via link/share quando telefone comercial configurado
- Painel administrativo com sessão assinada em cookie httpOnly

## Instalação (Windows / Vercel)

1. Extraia o ZIP inteiro para uma pasta de projeto nova. **Não substitua os arquivos da sua `.env` sem conferir os valores.**
2. Instale **Node.js 22+**.
3. Abra um terminal nessa pasta e execute `npm install`.
4. Copie `.env.example` para `.env.local` (para desenvolvimento). Na Vercel, informe as mesmas variáveis em **Settings → Environment Variables**.
5. Crie uma base PostgreSQL no Neon e configure `DATABASE_URL` conforme a string de conexão do Neon.
6. Configure `SESSION_SECRET` com uma chave aleatória longa (mínimo de 32 caracteres), `ADMIN_EMAIL` e uma senha forte em `ADMIN_PASSWORD`.
7. Execute `npx prisma generate`, `npx prisma db push` e depois `npm run db:seed`.
8. Execute `npm run dev` e abra `http://localhost:3000`. O admin fica em `/admin`.
9. Antes de publicar, execute `npm run build`. No Vercel, configure `Build Command: npm run build`, framework **Next.js**, node 22, e faça o deploy.
10. Defina `NEXT_PUBLIC_SITE_URL` para o domínio final HTTPS; e `NEXT_PUBLIC_WHATSAPP` com DDI+DDD+número (apenas números, exemplo de formato: `5561999999999`).

### Cloudflare R2 — uploads persistentes

Configure `R2_ACCOUNT_ID`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_BUCKET`, `R2_PUBLIC_URL`. Configure o bucket para leitura pública via domínio de mídia e CORS para a origem do seu site. Imagens enviadas via admin são validadas (tipo e tamanho, até 15 MB), convertidas para WebP e têm uma miniatura gerada. Ao importar uma URL, o sistema baixa **somente** de hosts autorizados Dailus/Shopify; outras fontes podem ser adicionadas via upload local. Sem R2, os uploads retornam mensagem clara de configuração pendente.

### Versão demonstrativa sem banco

Sem a configuração Neon, `/api/products` mostra os **10 produtos de exemplo reais** a partir de `public/seed-products.json`, mas o painel não consegue salvar alterações. A sacola é local ao navegador e continua funcionando. O gerador de PDF tem fallback instantâneo em `/api/orders/preview/pdf` para funcionar mesmo sem o Neon, mas esse PDF **não cria histórico persistente de pedido**. Para pedidos com número, histórico e arquivos baixáveis depois, configure o Neon.

### Dicas de operação

- **Catálogo**: filtre por categoria, linha, lançamentos, destaques, ordenação e busca por nome ou código. Clique em produto para detalhes ou adicione direto à sacola.
- **Sacola**: informe cliente, empresa, contato, vendedor e observações, ajuste quantidades e gere PDF. Com `NEXT_PUBLIC_WHATSAPP` configurado, o compartilhamento abre a conversa comercial; sem número, usa compartilhamento nativo ou cópia da mensagem.
- **Admin**: gerencie produtos, até cinco imagens por produto, ordem, visibilidade de preço, lançamentos, banners, histórico e métricas (quando banco configurado). Importação/exportação CSV com separador `;`.
- **Mercus**: o adaptador `/lib/integrations/mercus` está preparado como ponto de integração. Por segurança, **não existe sincronização real** até receber os endpoints oficiais, credenciais e esquema de API. A alternativa funcional é importação e exportação CSV.

## Testes e limitações da entrega

- Checagem de sintaxe realizada nos arquivos TypeScript/TSX e JS; nenhum erro de sintaxe identificado.
- Os cinco banners e logos estão fisicamente incluídos em `/public/assets`; não dependem de geração de imagem.
- **Não foi possível executar `npm install` nem o build do Next.js neste ambiente:** o domínio `registry.npmjs.org` não resolve aqui. É necessário executar `npm install && npm run build` com internet na máquina/Vercel antes de considerar o deploy validado.
- As imagens dos produtos do catálogo foram vinculadas às URLs de referência da Dailus e incluem fallbacks visuais extraídos dos banners originais. Essas URLs externas podem mudar; para produção durável, importe as fotos autorizadas para o R2.
- Login administrativo usa credenciais de ambiente, não cadastro multiusuário. A proteção contra tentativas abusivas deve ser reforçada com rate limiting persistente (ex.: Cloudflare/WAF/Redis) antes de exposição pública em escala.
- Ainda há itens do briefing original para concluir: métricas detalhadas de funil e segmentos, gestão administrativa completa de categorias, upload em massa, sincronização real com Mercus e automação de estoque.

## Estrutura

`app/`: telas, estilos e endpoints. `app/admin`: administração. `app/api`: catálogo, banners, pedidos, PDF, métricas, acesso admin e imagens. `lib/`: autenticação, Prisma, storage, Mercus. `prisma/schema.prisma`: entidades. `scripts/seed.mjs`: dados reais de exemplo. `public/assets`: peças originais e fotos recortadas dos banners para apoio visual.
