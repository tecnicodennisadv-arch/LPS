/**
 * ============================================================================
 * INTERAÇÕES E TRACKING (GTM)
 * Núcleo Javascript Vanilla - Sem dependências externas
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Instanciar dataLayer globalmente caso ainda não exista
    window.dataLayer = window.dataLayer || [];

    // 2. Mapeamento de cliques em CTAs de Conversão
    const conversionLinks = document.querySelectorAll('a[data-conversion]');
    
    conversionLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const conversionType = link.getAttribute('data-conversion');
            
            // Disparo programático pro Google Tag Manager
            window.dataLayer.push({
                event: 'lead_whatsapp_click',
                button_location: conversionType,
                page_url: window.location.href
            });

            // Log de desenvolvimento para auditoria
            console.log(`[Tracking Ativo] Evento disparado: lead_whatsapp_click via ${conversionType}`);
        });
    });

    // 3. (Opcional Futuro) - Micro-interação: Esconder o CTA Fixo ao chegar no footer
    /*
    const fixedCta = document.querySelector('.fixed-cta');
    const footer = document.querySelector('.site-footer');
    
    if (fixedCta && footer) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    fixedCta.style.transform = 'scale(0)';
                } else {
                    fixedCta.style.transform = 'scale(1)';
                }
            });
        });
        observer.observe(footer);
    }
    */
});
