# Design System: Paleta de Cores (Referência do Site Original)

Baseado na extração da imagem de referência original (`referencias/*.png`), compilamos abaixo a paleta de cores original que deve ser usada como referência para a interface (UI) e para os tokens CSS (como definido no *Briefing*), transmitindo seriedade, sobriedade e sofisticação ("Boutique").

## 1. Cores Institucionais e Sóbrias (Brand & Neutrals)
Cores utilizadas para criar a estrutura e a base de confiança da página, ideais para topbars, rodapés e fundos de seções de autoridade.

- **Primary Dark Teal (Verde-azulado Escuro):** `#436a70`
  - *Uso:* Cor principal para botões primários não-urgentes, fundos de cards e barras de destaque.
- **Secondary Light Teal (Verde-azulado Médio):** `#52767c`
  - *Uso:* Estados de *hover* e elementos secundários derivados da cor primária.
- **Deep Dark Context (Quase Preto):** `#090506`
  - *Uso:* Textos principais de alta legibilidade (títulos e títulos de seção).
- **Charcoal Gray (Cinza Escuro):** `#373639`
  - *Uso:* Textos corridos (body text) e subtítulos que precisam de contraste suavizado.

## 2. Cores de Superfície e Fundo (Backgrounds)
Tons claros que trazem respiro ("whitespace") característico de designs sofisticados (evitando o branco puro excessivo e cansativo).

- **Ice White / Light Cyan (Fundo Principal):** `#e8f2f3`
  - *Uso:* Cor predominante de fundo do site para áreas de respiro, trazendo uma leveza premium diferente do branco tradicional.
- **Lighter Cyan Contrast:** `#f2f9f9`
  - *Uso:* Fundo alternativo sutil para separar blocos e seções estruturais.

## 3. Cores de Ação, Contraste e Autoridade (Accents)
Conforme o Briefing, devem contrastar ativamente com as cores sóbrias para chamar atenção e dar "peso" aos detalhes.

- **Bronze/Gold Accent:** `#deb49d` e `#eaccbe`
  - *Uso:* Detalhes em elementos de autoridade, linhas separadoras, ícones ou hover effects que remetem ao visual "boutique".
- **Action Green / WhatsApp (Sugerido via Briefing):** `#25D366` *(Verde Padrão)*
  - *Uso:* Exclusivo para o Botão Principal de Ação (CTA) do WhatsApp, forçando clique e indicando resposta rápida.

---

## 🛠️ Como utilizar nos arquivos CSS
Recomendamos incorporar estas referências em variáveis globais. Exemplo de mapeamento para seu `variables.css`:

```css
:root {
  /* Marca e Estrutura */
  --color-primary: #436a70;
  --color-primary-hover: #52767c;
  
  /* Fundos */
  --color-background-main: #e8f2f3;
  --color-background-alt: #f2f9f9;
  
  /* Tipografia */
  --color-text-title: #090506;
  --color-text-body: #373639;
  
  /* Acentos */
  --color-accent-gold: #deb49d;
  --color-action-whatsapp: #25D366;
}
```

*Nota: As cores em hexa acima foram fisicamente extraídas do print oficial do site anterior encontrado na pasta `referencias` e validadas conforme as diretrizes do documento de briefing.*
