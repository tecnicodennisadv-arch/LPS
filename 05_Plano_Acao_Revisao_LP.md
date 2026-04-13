# Plano de Ação: Revisão e Otimização da Landing Page 🚀

Com base na análise técnica recebida, dividimos as correções em três pilares (Design, Copy/Persuasão e Experiência do Usuário) para maximizar a taxa de conversão e manter a coesão com a estratégia geral de Direito do Consumidor focada em tráfego pago.

## 1. Identidade Visual e Primeira Impressão
**Problema Identificado:** Poluição visual na dobra principal. O card flutuante de "Resultados" estava competindo com o título principal e gerando ruído sobre a imagem de autoridade. Além disso, havia um potencial problema de contraste no subtítulo em dispositivos móveis.

**Ações a Tomar:**
- [x] Remover o card de métricas/resultados flutuante (`hero-metric-card`) da área Hero, garantindo foco total no advogado (Dennis Ferreira) e na Headline.
- [x] Revisar o espaçamento e entrelinhas do subtítulo na visualização mobile para evitar blocos densos de texto.

## 2. Copy e Persuasão (Prova Social)
**Problema Identificado:** ERRO CRÍTICO DE CONGRUÊNCIA. A página foca em ações de Direito do Consumidor (bancos, planos de saúde, companhias aéreas), mas os depoimentos falavam de "horas extras não pagas" e "demitida injustamente" (ações trabalhistas). Além de isso quebrar a autoridade direcional, o uso de "Cliente Satisfeito" genérico soa falso.

**Ações a Tomar:**
- [x] Substituir todos os depoimentos trabalhistas por casos plausíveis de defesa do consumidor (ex: fraude no cartão, problemas de voos, reajuste abusivo em plano de saúde).
- [x] Humanizar os depoimentos substituindo o rótulo "Cliente Satisfeito" por nomes e iniciais de pessoas reais e os problemas resolvidos.

## 3. Conversão e UX (Experiência do Usuário)
**Problema Identificado:** Falta de respiro visual logo após a hero section e a ausência de um FAQ, o que faz com que leads não qualificados gerem cliques para tirar dúvidas básicas que poderiam ser respondidas na própria página.

**Ações a Tomar:**
- [x] Melhorar o respiro limpando elementos concorrentes no início do scroll.
- [x] Adicionar uma nova seção de Perguntas Frequentes (FAQ) próxima ao rodapé (logo após os depoimentos / "Como funciona") com as dúvidas clássicas: "Quanto tempo demora o processo?" e "Como funciona a consulta?". Isso vai prender a atenção do lead até o final, além de filtrar o contato pelo WhatsApp.

### Resumo Executivo para Codificação Automática (Executado):
- `index.html`: Remoção do nó `.hero-metric-card`.
- `index.html`: Refatoração dos 3 nós dentro de `.testimonials-grid` para textos orientados ao Direito Consumidor.
- `index.html`: Inserção da seção `<section class="section-faq">` pouco antes do Footer.
