
const DISCORD_LINK = "https://discord.gg/BscPBFK97M";
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