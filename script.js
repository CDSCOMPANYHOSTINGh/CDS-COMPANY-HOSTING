
const DISCORD_LINK = "https://discord.gg/ny2JkxT4dP";
const WHATSAPP_LINK = "https://wa.me/573000000000";
const facebook_LINK = "https://wa.me/573000000000";

document.getElementById("discordLink").href = DISCORD_LINK;
document.getElementById("whatsappLink").href = WHATSAPP_LINK;
document.getElementById("facebookLink").href = facebook_LINK;

function showTab(tab){
    document.querySelectorAll('.tab-section').forEach(s => s.style.display="none");
    document.getElementById(tab).style.display="block";
}

function openModal(){
    document.getElementById("compraModal").style.display="flex";
}

function closeModal(){
    document.getElementById("compraModal").style.display="none";
}

function goDiscord(){
    window.open(DISCORD_LINK, "_blank");
}
function goWhatsApp(){
    window.open(WHATSAPP_LINK, "_blank");
}
function facebook(){
   facebook.open(facebook_LINK, "_blank");
}    

// ==== MÚSICA NAVIDEÑA ==== //

const musica = document.getElementById("musicaNavidad");
const btnMusica = document.getElementById("btnMusica");
const controlVolumen = document.getElementById("controlVolumen");
const sliderVolumen = document.getElementById("volumen");

// Cargar estado guardado
let estadoMusica = localStorage.getItem("musica_navidad") || "off";
let volumenGuardado = localStorage.getItem("volumen_navidad") || 0.5;

musica.volume = volumenGuardado;
sliderVolumen.value = volumenGuardado;

// Si estaba encendida antes → se vuelve a activar
if (estadoMusica === "on") {
    musica.play();
    btnMusica.classList.add("activo");
    controlVolumen.style.display = "block";
}

// Botón ON/OFF
btnMusica.addEventListener("click", () => {
    if (musica.paused) {
        musica.play();
        btnMusica.classList.add("activo");
        localStorage.setItem("musica_navidad", "on");
        controlVolumen.style.display = "block";
    } else {
        musica.pause();
        btnMusica.classList.remove("activo");
        localStorage.setItem("musica_navidad", "off");
        controlVolumen.style.display = "none";
    }
});

// Control de volumen
sliderVolumen.addEventListener("input", () => {
    musica.volume = sliderVolumen.value;
    localStorage.setItem("volumen_navidad", sliderVolumen.value);
});

// Desbloquear audio en el primer toque
document.addEventListener("click", () => {
    const musica = document.getElementById("musicaNavidad");

    if (localStorage.getItem("musica_navidad") === "on") {
        musica.play().catch(() => {});
    }
}, { once: true });




// ==== EFECTO DE CHISPAS / FUEGO ARTIFICIAL ====

function activarChispas() {
    const cont = document.querySelector(".chispas-container");
    const chispas = document.querySelectorAll(".chispa");
    
    setInterval(() => {
        chispas.forEach(chispa => {
            const x = Math.random() * window.innerWidth;
            const delay = Math.random() * 1.5;

            chispa.style.left = `${x}px`;
            chispa.style.animationDelay = `${delay}s`;
        });
    }, 1500);
}

activarChispas();
// ==== FIN EFECTO DE CHISPAS / FUEGO ARTIFICIAL ====


// === RGB REALISTA ALEATORIO PARA LOS BORDES ===

