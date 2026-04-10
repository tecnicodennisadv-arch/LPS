# Product Requirements Document (PRD) - Estratégia de SEO
**Projeto:** Landing Page Dennis Ferreira (Direito do Consumidor)
**Foco:** Tráfego Orgânico (Busca Local) e Qualidade no Tráfego Pago (Google Ads)

## 1. Objetivo do PRD de SEO
O objetivo deste documento é estabelecer as diretrizes técnicas e de conteúdo para garantir que a landing page indexe adequadamente nos motores de busca (como o Google), aumente o Índice de Qualidade (Quality Score) nas campanhas de Google Ads (resultando em CPC mais barato) e consolide a autoridade local do escritório em Brasília e Goiás.

## 2. Palavras-chave Foco (Keywords Setup)
Baseado no briefing e demandas judiciais mapeadas:
- **Camada 1 (Principal - Alta Intenção):** "Advogado direito do consumidor DF", "Advogado causas contra bancos", "Advogado plano de saúde abusivo Brasília", "Especialista em defeitos na prestação de serviço".
- **Camada 2 (Cauda Longa - Problemas Específicos):** "Golpe do pix como recuperar dinheiro", "Plano de saúde cancelado unilateralmente o que fazer", "Atraso de voo indenização advogado".
- **Camada 3 (Marcas/Nomes):** "Dennis Ferreira Advocacia", "Dennis Ferreira Advogado".

## 3. SEO Técnico (On-Page) Implementado e Recomendado
A arquitetura Vanilla já resolve 80% do SEO Técnico pela sua velocidade, mas as seguintes metatags e marcações precisam ser mantidas:

### 3.1 Tags Fundamentais (Já implementadas na V1)
- `<title>`: "Dennis Ferreira | Advogado Especialista em Direito do Consumidor" (Contém as principais Palavras-chave e o Branding).
- `<meta name="description">`: Focada em chamar a atenção da dor (Bancos, Voos, Saúde) e em resolução.
- Estrutura de Headings (`<h1>`, `<h2>`, `<h3>`): Há apenas um `<h1>` (Focado no grande apelo), subdividido semanticamente.

### 3.2 Melhorias Programadas (Próxima Fase)
- **Atributos ALT nas Imagens:** Garantir que todas as fotos finais do Dennis contenham a tag `alt="Dennis Ferreira - Advogado de Direito do Consumidor"`.
- **Sitemap e Robots.txt:** Adicionar os arquivos `sitemap.xml` e `robots.txt` orientando os bots de busca após o site ir ao ar.
- **Linkagem Canônica:** Inserir a tag `<link rel="canonical" href="..."/>` para evitar conteúdo duplicado de campanhas com parâmetros UTM.

## 4. Marcação de Dados Estruturados (Schema Markup)
Para criar resultados ricos no Google (Rich Snippets), precisamos implementar no `index.html` via JSON-LD:
1. **Schema LocalBusiness (LegalService):** Informando Endereço, OAB, Telefone, e Horário de Funcionamento.
2. **Schema FAQPage:** Transformar dúvidas frequentes em Rich Snippets, capturando espaço no topo das buscas orgânicas.

## 5. Performance e Web Vitals
- **LCP (Largest Contentful Paint):** Adoção de CSS nativo sem bloqueadores de renderização; A imagem do herói (Hero) deve ser leve (WebP).
- **CLS (Cumulative Layout Shift):** Definir o aspect-ratio nas imagens de placeholder e definitivas para que a página não pule durante o carregamento no 3G/4G.

## 6. Integração com Tráfego e Tracking (Analytics)
Para medir o sucesso deste SEO e das Campanhas:
- **Google Tag Manager (GTM):** Instalar logo abaixo do `<head>`.
- Instalar **Google Analytics 4 (GA4)** via GTM para monitorar eventos de cliques no WhatsApp (Event: `click_whatsapp`).
- Conectar ao **Google Search Console** no dia zero da publicação.
