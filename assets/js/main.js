const startTyping = () => {
    const target = document.querySelector("#hero-typing-text");
    // Definido apenas o final da frase para não repetir o que já está fixo no HTML
    const text = "o padrão moderno."; 
    let index = 0;

    if (target) {
        target.innerHTML = ""; 
        
        function type() {
            if (index < text.length) {
                target.innerHTML += text.charAt(index);
                index++;
                setTimeout(type, 100); // Velocidade um pouco mais lenta para elegância
            }
        }
        
        // Pequeno delay para começar após o load da página
        setTimeout(type, 500); 
    }
};

if (document.readyState === "complete" || document.readyState === "interactive") {
    startTyping();
} else {
    document.addEventListener("DOMContentLoaded", startTyping);
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        const toast = document.getElementById('copy-toast');
        
        // Mostra o "Copiado!"
        toast.classList.remove('opacity-0');
        toast.classList.add('opacity-100');

        // Esconde após 2 segundos
        setTimeout(() => {
            toast.classList.remove('opacity-100');
            toast.classList.add('opacity-0');
        }, 2000);
    }).catch(err => {
        console.error('Erro ao copiar: ', err);
    });
}
