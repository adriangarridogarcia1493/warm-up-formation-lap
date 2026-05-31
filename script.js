// CONTROLADOR DE NAVEGACIÓN SPA
function changeContent(page) {
    const contentDiv = document.getElementById('content');
    
    // Quitar la clase activa de todos los enlaces de navegación
    document.querySelectorAll('nav a').forEach(el => el.classList.remove('active'));
    
    // Marcar el enlace seleccionado como activo si existe
    const activeNav = document.getElementById(`nav-${page}`);
    if (activeNav) activeNav.classList.add('active');

    // Reiniciar animación fade-in
    contentDiv.classList.remove('fade-in');
    void contentDiv.offsetWidth; // Truco CSS para resetear animación
    contentDiv.classList.add('fade-in');

    switch (page) {
        case 'home':
            contentDiv.innerHTML = `
                <img class="main-hero-img" src="https://img.asmedia.epimg.net/resizer/v2/QXMVEDL5VRCOXB3BLALLFM5V6I.png?auth=aed1dc4918c9def119ad7c66ddbe88f7e65ce2a8a1ab5f326de095d3928ce8c0&width=1472&height=1104&smart=true" alt="Grid de salida">
                <h2>La mejor web sobre F1 y MotoGP</h2>
                <p>Quiero darte la bienvenida a <strong>Warm Up & Formation Lap</strong>. Aquí podrás aprender sobre estas 2 maravillosas competiciones, las más prestigiosas del mundo del motor. Esperemos que disfrutes en nuestro sitio web y que puedas adentrarte en este increíble mundo de las 2 y 4 ruedas!!!</p>
                
                <div class="external-links">
                    <a href="https://www.formula1.com/" target="_blank" class="btn-link btn-f1">Visitar Fórmula 1 Oficial</a>
                    <a href="https://www.motogp.com/es" target="_blank" class="btn-link btn-motogp">Visitar MotoGP Oficial</a>
                </div>
            `;
            break;

        case 'pilotos':
            contentDiv.innerHTML = `
                <h2>Parrilla de Pilotos Destacados</h2>
                <p>Conoce los perfiles y estadísticas clave de las mayores estrellas de las 2 y 4 ruedas de la actualidad.</p>
                
                <div class="pilotos-grid">
                    <div class="piloto-card">
                        <img src=https://hips.hearstapps.com/hmg-prod/images/batch-gettyimages-1475298097-67cffecab3a0c.jpg?crop=0.679xw:0.771xh;0.195xw,0.229xh&resize=980:* alt="F. Alonso">
                        <div class="piloto-info">
                            <span class="piloto-cat f1">F1 / Aston Martin</span>
                            <h3>Fernando Alonso</h3>
                            <p class="piloto-desc">Doble campeón del mundo (2005, 2006) y leyenda viva del automovilismo español. Su incansable búsqueda de la victoria número 33 inspira a millones.</p>
                        </div>
                    </div>

                    <div class="piloto-card">
                        <img src=https://pieldeasfalto.com/wp-content/uploads/2025/09/98-1069x1069.webp alt="C. Sainz">
                        <div class="piloto-info">
                            <span class="piloto-cat f1">F1 / Williams</span>
                            <h3>Carlos Sainz Jr</h3>
                            <p class="piloto-desc">Conocido como "Smooth Operator". Un piloto extremadamente inteligente, calculador y con múltiples victorias magistrales en su palmarés en escuderías top.</p>
                        </div>
                    </div>

                    <div class="piloto-card">
                        <img src=https://d3cm515ijfiu6w.cloudfront.net/wp-content/uploads/2023/07/04134158/max-verstappen-red-bull-austrian-grand-prix-win.jpg alt="M. Verstappen">
                        <div class="piloto-info">
                            <span class="piloto-cat f1">F1 / Red Bull</span>
                            <h3>Max Verstappen</h3>
                            <p class="piloto-desc">El neerlandés volador que ha dominado la era moderna de la Fórmula 1 con una agresividad, precisión y velocidad puras que asustan a la parrilla.</p>
                        </div>
                    </div>

                    <div class="piloto-card">
                        <img src=https://cdn.amxinfra.com/clarosports/images/2026/05/kimi-1-155226.jpg alt="K. Antonelli">
                        <div class="piloto-info">
                            <span class="piloto-cat f1">F1 / Mercedes</span>
                            <h3>Kimi Antonelli</h3>
                            <p class="piloto-desc">La nueva gran promesa del automovilismo mundial, llamado a heredar los mandos de los legendarios flechas de plata tras un meteórico paso por categorías inferiores.</p>
                        </div>
                    </div>

                    <div class="piloto-card">
                        <img src=https://cadenaser.com/resizer/v2/C6U6JADQ25EDJO2ADI7QUCYWEM.jpg?auth=c2a3473cad7a33c908198f41d2b909555a49123c99c11cc6aa98fe92fec05129&quality=70&width=1200&height=900&smart=true alt="M. Márquez">
                        <div class="piloto-info">
                            <span class="piloto-cat mgp">MotoGP / Ducati</span>
                            <h3>Marc Márquez</h3>
                            <p class="piloto-desc">8 veces campeón del mundo. El rey de las salvadas imposibles que ha resurgido de graves lesiones para volver a dominar las pistas sobre su moto.</p>
                        </div>
                    </div>

                    <div class="piloto-card">
                        <img src=https://album.mediaset.es/eimg/2025/11/11/europapress-6640404-martin-jorge-spa-aprilia-racing-team-gresini-aprilia-rs-gp-2025-po-jpg-16-9-aspe_da39.jpg?w=1200&h=900 alt="J. Martín">
                        <div class="piloto-info">
                            <span class="piloto-cat mgp">MotoGP / Aprilia</span>
                            <h3>Jorge Martín</h3>
                            <p class="piloto-desc">Apodado "Martinator". Campeón mundial de MotoGP con un estilo de pilotaje explosivo e imbatible en las carreras al sprint de los sábados.</p>
                        </div>
                    </div>

                    <div class="piloto-card">
                        <img src=https://r.testifier.nl/Acbs8526SDKI/resizing_type:fit/watermark:Foto%3A%20Rob%20Gray%20(Polarity%20Photo%2FKTM%20Images)/width:3840/height:2560/plain/https://s3-newsifier.ams3.digitaloceanspaces.com/corsedimoto.com/images/2026-01/pedro-acosta-ktm-motogp-test-valencia.jpg@webp alt="P. Acosta">
                        <div class="piloto-info">
                            <span class="piloto-cat mgp">MotoGP / KTM</span>
                            <h3>Pedro Acosta</h3>
                            <p class="piloto-desc">El "Tiburón de Mazarrón". Un talento generacional único que rompió todos los récords de precocidad en Moto3 y Moto2 para asaltar la categoría reina.</p>
                        </div>
                    </div>

                    <div class="piloto-card">
                        <img src=https://s.yimg.com/ny/api/res/1.2/sgS67FyzvKyrQM_8xTFj.g--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNjtjZj13ZWJw/https://media.zenfs.com/en/motorsport_articles_445/21ba2e46444b6bc2335f5e191450b568 alt="A. Márquez">
                        <div class="piloto-info">
                            <span class="piloto-cat mgp">MotoGP / Gresini</span>
                            <h3>Alex Márquez</h3>
                            <p class="piloto-desc">Doble campeón del mundo (Moto3 y Moto2), un piloto de ritmo constante y letal que demuestra su gran valía y podios en la élite del motociclismo.</p>
                        </div>
                    </div>
                </div>
            `;
            break;

        case 'espana':
            contentDiv.innerHTML = `
                <h2>Poder del Motor Español 🇪🇸</h2>
                <p>España se ha convertido en una auténtica superpotencia del motor, dominando tanto los circuitos de Fórmula 1 como el mundial de motociclismo de MotoGP.</p>
                <p>Desde los pioneros hasta las leyendas de hoy en día, las banderas españolas no han dejado de ondear en lo más alto del podio mundial gracias al talento, infraestructuras y afición única.</p>
                
                <div class="gallery">
                    <img src=https://www.autopista.es/uploads/s1/57/79/35/8/article-fernando-alonso-palmares-biografia-triunfos-gana-24-horas-le-mans-5b23ac9ddd845.jpeg>
                    <img src=https://estaticos-cdn.prensaiberica.es/clip/dd46203c-74f1-4ef0-8b5e-6392065b5671_alta-libre-aspect-ratio_default_0.jpg>
                    <img src=https://medios.uchceu.es/elrotativo/wp-content/uploads/sites/3/2025/10/MARQUEZ-03.jpg alt="Pitlane">
                    <img src=https://bxrepsol.s3.eu-west-1.amazonaws.com/static/2022/08/05070045/00_montaje_mundiales_marc_marquez_motogp-1.jpg>
                    <img src=https://img.redbull.com/images/q_auto,f_auto/redbullcom/2024/2/8/xnsquqe7vgfkrcqr2uyk/marc-marquez-gresini-racing-nueva-moto>
                </div>
            `;
            break;

        case 'about':
            contentDiv.innerHTML = `
                <h2>Sobre la web 🛠️</h2>
                <p>Soy Adrián Garrido García, estudiante del <strong>Instituto Vinyes Velles</strong>. Desarrollé este espacio web dentro de la optativa de programación para unir dos de mis grandes pasiones: la ingeniería web y el rugido de los motores de F1 y MotoGP.</p>
                <p>¡¡A darle gasss a los códigos y a los circuitos!! 🏁</p>
            `;
            break;

        case 'contact':
            contentDiv.innerHTML = `
                <h2>Contacte</h2>
                <p>¿Tienes alguna sugerencia de aerodinámica para la web o dudas sobre los pilotos? Escríbenos.</p>
                <form onsubmit="handleSubmit(event)">
                    <div class="form-group">
                        <label for="name">Nombre:</label>
                        <input type="text" id="name" placeholder="Tu nombre" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Correo electrónico:</label>
                        <input type="email" id="email" placeholder="Tu email" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Mensaje:</label>
                        <textarea id="message" rows="4" placeholder="Escribe aquí tu feedback..." required></textarea>
                    </div>
                    <button type="submit">Enviar al Box</button>
                </form>
            `;
            break;

        default:
            contentDiv.innerHTML = '<h2>¡Bandera Roja: Página no encontrada!</h2>';
    }
}

function handleSubmit(e) {
    e.preventDefault();
    alert('¡Mensaje enviado con éxito al pitlane de simulación!');
}

// LÓGICA E INTELIGENCIA DEL CHATBOT
function toggleChatbot() {
    const win = document.getElementById('chatbot-window');
    win.style.display = (win.style.display === 'none') ? 'flex' : 'none';
}

function handleChatKey(e) {
    if (e.key === 'Enter') sendChatMessage();
}

function sendChatMessage() {
    const input = document.getElementById('chatbot-input');
    const msgText = input.value.trim();
    if (!msgText) return;

    // Mensaje del usuario
    appendMessage(msgText, 'user');
    input.value = '';

    // Respuesta automatizada del Ingeniero de Pista
    setTimeout(() => {
        const reply = getEngineersReply(msgText.toLowerCase());
        appendMessage(reply, 'bot');
    }, 600);
}

function appendMessage(text, sender) {
    const box = document.getElementById('chatbot-messages');
    const msg = document.createElement('div');
    msg.className = `msg ${sender}`;
    msg.innerText = text;
    box.appendChild(msg);
    box.scrollTop = box.scrollHeight; // Auto-scroll abajo
}

function getEngineersReply(input) {
    if (input.includes('alonso') || input.includes('33')) {
        return "Fernando Alonso está afinando el Aston Martin. ¡La misión de la 33 sigue más viva que nunca!";
    }
    if (input.includes('marquez') || input.includes('marc')) {
        return "Marc Márquez está volando con la Ducati oficial del equipo Gresini. ¡Sus salvadas siguen desafiando la física!";
    }
    if (input.includes('verstappen') || input.includes('max')) {
        return "Max Verstappen mantiene un ritmo de carrera demoledor con su Red Bull. ¡Es una máquina perfecta!";
    }
    if (input.includes('sainz')) {
        return "Carlos Sainz aporta una telemetría excelente. Su paso a Williams marca un capítulo apasionante.";
    }
    if (input.includes('martin') || input.includes('jorge')) {
        return "Jorge Martín, 'Martinator', está demostrando un ritmo explosivo con la Aprilia en clasificación.";
    }
    if (input.includes('acosta') || input.includes('pedro')) {
        return "Pedro Acosta está destrozando los tiempos con la KTM de fábrica. ¡El tiburón de Mazarrón tiene hambre de podios!";
    }
    if (input.includes('hola') || input.includes('buenas')) {
        return "¡Buenas! Los neumáticos están en temperatura óptima. ¿De qué piloto o escudería quieres revisar la telemetría?";
    }
    return "Entendido, recibiendo datos de telemetría. Box, box. Pregúntame sobre Alonso, Márquez, Acosta o el mundial.";
}

// CARGAR PÁGINA DE INICIO POR DEFECTO AL ENTRAR
window.onload = () => {
    changeContent('home');
};
