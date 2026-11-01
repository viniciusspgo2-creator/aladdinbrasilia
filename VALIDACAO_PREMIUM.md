# Validação da atualização Premium

Validação executada em 1 de novembro de 2026, sobre a versão de produção local.

## Compilação

- `npm run build`: aprovado, incluindo geração do Prisma Client, compilação Next.js, checagem de tipos e geração das páginas.
- Next.js resolvido pelo lockfile: 15.5.28. Prisma mantido na versão 6.19.3. Sem migração para versões de pré-lançamento.
- Dependências de testes e navegador não foram adicionados às dependências de produção.

## Testes reais no navegador

- Carregamento dos dez produtos de demonstração.
- Favoritos, filtro e persistência após recarregar.
- Comparação, adição ao pedido e limite de quatro produtos.
- Visualização rápida, histórico e fechamento com Escape.
- Busca com debounce, sugestões, buscas recentes e estado sem resultados.
- Quantidades, subtotais por categoria, dados do comprador e persistência da sacola.
- Download real de PDF pelo endpoint de prévia; arquivo com assinatura PDF válida.
- Tema escuro persistente após recarregar.
- Menu mobile, fechamento ao navegar e ausência de rolagem horizontal em 390 px.
- Rejeição real com HTTP 401 de tentativa não autenticada de escrita no novo endpoint administrativo.
- Nenhuma exceção JavaScript de página no fluxo testado.

## Acessibilidade

Análise automatizada axe-core, regras WCAG 2 A/AA e WCAG 2.1 A/AA:

| Estado testado | Violações detectadas |
|---|---:|
| Catálogo em tema claro | 0 |
| Catálogo em tema escuro | 0 |
| Sacola em tema escuro | 0 |

Os resultados são verificações automáticas dos estados testados; não equivalem a uma certificação completa de acessibilidade. Foram acrescentados foco visível, contenção de foco nos diálogos, retorno de foco, suporte a teclado e respeito a movimento reduzido.

## Lighthouse local

Auditoria mobile com os critérios padrão da ferramenta, sem substituir os dados públicos por respostas simuladas:

| Categoria | Pontuação |
|---|---:|
| Desempenho | 100 |
| Acessibilidade | 100 |
| Boas práticas | 96 |
| SEO | 100 |

A pontuação é uma medição local e pode variar no domínio publicado. O ambiente de testes retornou falhas de rede ao solicitar algumas imagens externas da Dailus; os fallbacks locais foram mantidos. Esse carregamento externo foi apontado em Boas práticas. A avaliação em produção depende da conectividade real, dos produtos cadastrados e da infraestrutura de hospedagem.

## Interface administrativa com API simulada

Testes de navegador com respostas administrativas simuladas verificaram os estados da interface e os dados enviados:

- seleção, revisão e aplicação de categoria em lote;
- reordenação de produtos por setas e envio da ordem;
- atualização do histórico e ativação do teste A/B;
- prévia ao vivo e envio de edição de produto;
- espera de três segundos e cancelamento da exclusão;
- arrastar slides e salvar a nova ordem.

A simulação não valida gravação real no Neon. A autenticação e a rejeição de escrita sem sessão foram verificadas contra o backend real. A gravação autenticada no banco, o upload no R2 e o envio para o WhatsApp comercial precisam ser conferidos no ambiente que possui as credenciais. Nenhuma credencial de produção foi fornecida ou incluída nesta entrega.

## Escopo técnico preservado

O projeto continua usando seu frontend HTML/JavaScript dentro do Next.js, com painel React e backend Prisma. Não houve substituição da arquitetura, remoção de ativos originais nem alteração do schema de dados. Os novos registros administrativos e configurações utilizam os modelos MetricEvent e SiteSetting já existentes.
