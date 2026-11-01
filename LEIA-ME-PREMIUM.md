# Aladdin Brasília Catálogo Premium

Esta entrega atualiza o projeto completo enviado em BRASILIA.zip. A navegação, as fotos originais Dailus, o fluxo de pedidos, a geração de PDF, as integrações existentes e o painel administrativo foram preservados e ampliados.

## Como atualizar

1. Faça backup da versão atual.
2. Extraia a pasta `aladdinbrasilia-main` deste ZIP e substitua os arquivos do projeto. Preserve seus arquivos `.env`, `.env.local` e a pasta `.git`.
3. Execute `npm ci` e `npm run build`.
4. Faça o deploy usando seu fluxo habitual. Os arquivos `.next` e `node_modules` são gerados durante a instalação e não fazem parte do ZIP.

O schema Prisma foi mantido. Esta atualização não exige migração destrutiva nem recriação do banco. Se o projeto já estiver conectado ao Neon, mantenha a configuração existente. Para instalação nova, siga o README original para configurar o banco e executar o seed.

## O que mudou

- Paleta warm, terracota, contraste revisado, fontes Inter e Fraunces hospedadas no projeto, cards e espaçamentos consistentes.
- Confirmação animada ao adicionar, ripple, notificações, foco visível, skeletons, estados vazios e respeito à preferência de movimento reduzido.
- Carrossel editorial com barra de progresso, pausa explícita, swipe e teclado; banners originais preservados.
- Favoritos persistentes, filtro de favoritos, comparação de até quatro produtos, histórico com data e hora e limpeza do histórico.
- Busca com debounce de 300 ms, sugestões de produtos, buscas recentes e atalho Ctrl/Cmd+K.
- Ordenação por preço usa somente preços autorizados para exibição. Produtos sem preço ficam no final e não recebem valores fictícios.
- Sacola com prévia por hover em desktop, salvamento de itens e dados do comprador, feedback de salvamento, miniaturas, subtotais por categoria e produtos relacionados.
- Quando houver itens sem preço, os totais indicam valores sob consulta; a confirmação comercial continua com o atendimento.
- Menu mobile em drawer com categorias expandíveis, breadcrumb, tema escuro persistente e navegação de diálogos por teclado.
- Admin com prévia do produto, seleção em lote, revisão de categoria/desconto antes de aplicar, reordenação por arrastar ou setas, categorias ordenáveis e prévia dos slides.
- Exclusão de produto com confirmação e espera de três segundos; a ação é irreversível depois de confirmada.
- Histórico persistente para criação, edição, exclusão, reordenação, alterações em lote e atualização dos slides. O histórico começa nas alterações feitas após esta atualização.
- Métricas de favoritos, comparação, buscas e buscas sem resultados. Teste A/B opcional do título da home, desativado inicialmente, com visualizações e cliques por variante.
- PDF com acento terracota; contratos de API e conteúdo dos pedidos preservados.

## Painel administrativo

Em **Produtos**, abra **Organização e edição em lote** para selecionar produtos, reordenar, revisar alterações e salvar. O desconto em lote altera o preço cadastrado permanentemente; produtos com preço nulo continuam sem preço. A ordem padrão do catálogo continua priorizando destaques, respeitando a ordem manual dentro dos grupos.

A ordem das categorias é salva separadamente e aplicada aos filtros públicos. Para categorizar produtos, use a edição individual ou em lote.

Em **Banners / slides**, arraste os slides ou use as setas, confira a prévia e clique em **Salvar slides**. Arrastar sozinho não publica a alteração.

O teste A/B está em **Produtos**; seus resultados aparecem em **Visão geral**. As variantes são mantidas por navegador. As contagens representam eventos e não constituem validação de significância estatística.

## Configuração e limites de validação

- Neon, credenciais do admin, R2 e WhatsApp continuam sendo configurações do seu ambiente, conforme `.env.example`.
- Sem Neon, o catálogo exibe os produtos de demonstração e gera PDF pelo fluxo de prévia, sem salvar histórico de pedidos no banco.
- A integração Mercus continua dependente da documentação e das credenciais oficiais já previstas no projeto original.
- Favoritos, buscas recentes, produtos vistos, tema e rascunho do comprador ficam neste navegador; não são sincronizados entre dispositivos. O salvamento pode ser bloqueado nas configurações de privacidade do navegador.
- Produtos em destaque usam o rótulo Seleção Aladdin. Não foram inventados números de vendas, avaliações ou prova social.

Veja `VALIDACAO_PREMIUM.md` para os testes e os limites da validação.
