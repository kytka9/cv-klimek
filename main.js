import './style.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap';
import 'devicon/devicon.min.css';


// Kopirovanie v kontaktoch
function setupClickToCopy(cardId, textId) {
    const card = document.getElementById(cardId);
    if (!card) return;

    card.addEventListener('click', () => {
        const text = document.getElementById(textId).innerText;
        const isEn = document.documentElement.lang === 'en' || window.location.pathname.includes('/en/');
        
        navigator.clipboard.writeText(text).then(() => {
            const p = card.querySelector('p');
            const oldText = p.innerText;
            p.innerText = isEn ? "Copied ☑️" : "Skopírované ☑️";
            
            setTimeout(() => { p.innerText = oldText; }, 2000);
        });
    });
}

// Volanie kopírovanie
setupClickToCopy('copy-email', 'email-text');
setupClickToCopy('copy-discord', 'discord-text');