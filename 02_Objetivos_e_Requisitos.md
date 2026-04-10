# Objetivos e Requisitos: Landing Page de Direito do Consumidor

## 1. Objetivo Principal da Landing Page
**Conversão (Geração de Leads):** Transformar visitantes advindos de campanhas de tráfego pago (Google Ads / Meta Ads) em contatos qualificados no WhatsApp do escritório. A página deve ser uma "máquina de triagem e captação" para problemas consumeristas de alto valor processual.

## 2. Perfil do Cliente Ideal (Persona) e Tendências (Dados Atuais)
Quem procura um advogado de consumidor através de anúncios na internet geralmente está em uma destas situações, impulsionadas pelas principais tendências de judicialização no Brasil atual:

*   **Estado Emocional:** Frustrado, estressado, sentindo-se enganado ou impotente diante de uma grande corporação. Muitas vezes, encontra-se desesperado por causa de fraudes digitais ou negativas de saúde.
*   **Comportamento de Busca:** Busca soluções rápidas e específicas. Exemplo: "advogado para golpe do pix", "banco não quer devolver dinheiro fraude", "plano de saúde cancelou contrato", "cancelamento hurb".
*   **Desejo Principal:** Justiça, resolução rápida da dor de cabeça e, frequentemente, compensação financeira (indenização por danos morais/materiais).
*   **Objeções Comuns:** "Vai custar caro?", "Vai demorar muito?", "Será que esse advogado é de confiança?", "Compensa entrar na justiça judicialmente mesmo sendo uma causa de juizado especial (pequenas causas)?".

**Problemas com maior demanda judicial atualmente (Sua "Mina de Ouro"):**
1.  **Direito Bancário e Fraudes Digitais:** Vítimas do "Golpe do Pix", empréstimos consignados não solicitados (foco em idosos e pensionistas), clonagem de cartões e proteção baseada na Lei do Superendividamento.
2.  **Saúde Suplementar:** Consumidores enfrentando o cancelamento unilateral de seus planos de saúde pelas operadoras e recusas de cobertura para tratamentos e cirurgias de urgência.
3.  **Comércio Eletrônico e Turismo:** Clientes prejudicados por plataformas de viagens que não entregam pacotes (ex: crise das agências de turismo) e varejistas que atrasam exageradamente a entrega ou não estornam o valor.
4.  **Telecomunicações e Serviços:** Cobranças indevidas de TV/Internet e negativação (nome sujo no Serasa/SPC) indevida sem aviso prévio.

## 3. O Que é Atrativo para Esse Público?
Para garantir que a página ressoe com esse público, os seguintes elementos são cruciais:
*   **Identificação Imediata do Problema:** Ao abrir a página, o usuário deve pensar "é exatamente por isso que estou passando".
*   **Agilidade:** Promessa de análise rápida do caso (ex: "Fale com um especialista agora e saiba se você tem direito").
*   **Credibilidade/Prova Social:** Relatos rápidos de casos resolvidos ou avaliações sinceras que quebrem a desconfiança.
*   **Linguagem Simples:** Zero juridiquês. Falar a língua do cliente (ex: ao invés de "Ação Indenizatória por Danos Morais", usar "Receba uma indenização pelo transtorno que você passou").
*   **Risco Zero (Percepção):** Explicar de forma clara que a primeira consulta ou análise do caso pode ser feita de forma facilitada e transparente.

## 4. Requisitos Funcionais e Estruturais da Página
*   **Carregamento Ultrarrápido:** Essencial para usuários de celular vindo de anúncios.
*   **Mobile-First:** A esmagadora maioria dos acessos de tráfego pago para demandas emergenciais ocorre via smartphone.
*   **CTA (Call to Action) Fixo:** Um botão de WhatsApp sempre visível acompanhando a rolagem da tela.
*   **Rastreamento (Tracking):** Necessário prever a instalação de Pixel da Meta, Tag do Google Ads e Google Analytics para medir o sucesso da campanha.

## 5. Gatilhos Mentais a Serem Explorados
*   **Autoridade:** Destacar a experiência do Dennis Ferreira contra grandes empresas.
*   **Urgência:** "Não deixe seus direitos prescreverem", "O tempo corre contra você nesses casos".
*   **Inimigo Comum:** Posicionar o escritório ao lado do consumidor contra os abusos corporativos.

## 6. Planejamento DevOps (Deploy & Tracking)
De acordo com nosso Plano de Ação aprovado, a infraestrutura deve seguir:
*   **Hospedagem de Alta Performance (Edge CDN):** O site será hospedado obrigatoriamente na Vercel (arquitetura Vanilla Buildless) garantindo Nota 100/100 no Google PageSpeed Insights, barateando os custos de clique (CPC) em campanhas Ads. A conexão com o domínio oficial (`hostinger`) será feita via subdomínio isolado.
*   **Rastreamento Centralizado Avançado:** Implementação orientada por `Google Tag Manager (GTM)` apenas. Interações do site (clicar em botão do WhatsApp) disparam programaticamente pushes na `dataLayer` (Ex: `lead_whatsapp_click`), permitindo à Inteligência Artificial do Google Ads ou Meta Ads o rastreamento exato do funil em JS sem sujar o código do site.
