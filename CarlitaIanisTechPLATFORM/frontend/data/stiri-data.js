/* ==========================================================
LISTA DE ȘTIRI  —  singurul fișier pe care îl editezi
==========================================================
Pentru fiecare știre completezi:
id = codul video de pe YouTube (din link, după "watch?v="
data = data în cifre, AAAA-LL-ZZ  (ex: 2026-08-12)
categorii = etichete din bara de filtre, separate prin spațiu
titlu = cum apare pe card (îl poți schimba oricând)

Taguri disponibile:
inovatii · ai · securitate · scandaluri · apple · samsung
meta · nvidia · chatgpt · claude · elon · roboti · romania

    ⚠️ Numărul folderului NU contează. Ordinea pe site = data.
    Ca să adaugi o știre nouă: copiezi o linie și o completezi.
   ========================================================== */

const STIRI = [
    { id: "", data: "", categorii: "meta chatgpt ai",       titlu: "Meta și ChatGPT" },
    { id: "", data: "", categorii: "inovatii",              titlu: "Japonia și internetul pe fibră" },
    { id: "", data: "", categorii: "ai inovatii",           titlu: "De ce AI?" },
    { id: "", data: "", categorii: "inovatii securitate",   titlu: "Bitchat" },
    { id: "sQBygd3AzTk?si=O0cVJoYBLDEEON0u", data: "2025-08-16", categorii: "elon inovatii",         titlu: "Elon Musk și Mars" },
    { id: "", data: "", categorii: "ai securitate",         titlu: "Chatboturile și copiii" },
    { id: "", data: "", categorii: "ai inovatii",           titlu: "Antibioticul și AI" },
    { id: "", data: "", categorii: "chatgpt ai",            titlu: "GPT-5 și superinteligența" },
    { id: "", data: "", categorii: "chatgpt ai",            titlu: "GPT-4o vs GPT-5" },
    { id: "", data: "", categorii: "meta inovatii",         titlu: "Ochelarii Meta" },
    { id: "", data: "", categorii: "chatgpt scandaluri",    titlu: "Cazul ChatGPT" },
    { id: "", data: "", categorii: "ai inovatii",           titlu: "Regulile Sora" },
    { id: "", data: "", categorii: "ai inovatii",           titlu: "Investiții în AI" },
    { id: "", data: "", categorii: "inovatii",              titlu: "Noul antibiotic" },
    { id: "", data: "", categorii: "chatgpt ai",            titlu: "OpenAI Atlas" },
    { id: "", data: "", categorii: "ai inovatii",           titlu: "Companiile cu noile cipuri" },
    { id: "", data: "", categorii: "ai inovatii",           titlu: "Centrele de AI" },
    { id: "", data: "", categorii: "ai inovatii",           titlu: "Developerii de astăzi" },
    { id: "", data: "", categorii: "ai scandaluri",         titlu: "Bula IA" },
    { id: "", data: "", categorii: "claude ai",             titlu: "Anthropic Mythos" },
    { id: "", data: "", categorii: "ai securitate",         titlu: "CAISI" },
    { id: "", data: "", categorii: "inovatii apple",        titlu: "Căștile wireless" },
    { id: "", data: "", categorii: "inovatii meta",         titlu: "Lumea virtuală" },
    { id: "", data: "", categorii: "inovatii meta",         titlu: "Lumea virtuală (mix)" },
    { id: "", data: "", categorii: "meta scandaluri",       titlu: "Scandal la Meta" },
    { id: "", data: "", categorii: "ai inovatii",           titlu: "IA e scumpă" },
    { id: "", data: "", categorii: "nvidia inovatii",       titlu: "Nvidia, cea mai valoroasă companie" },
    { id: "", data: "", categorii: "claude ai",             titlu: "Claude Fable" },
    { id: "", data: "", categorii: "elon inovatii",         titlu: "Space-X" },
    { id: "", data: "", categorii: "claude ai",             titlu: "Anthropic depășește OpenAI" },
    { id: "", data: "", categorii: "inovatii",              titlu: "Cupa Mondială 2026" },
    { id: "", data: "", categorii: "nvidia ai",             titlu: "Nvidia și cipul AI" },
    { id: "", data: "", categorii: "claude ai",             titlu: "Modele Claude retrase" },
    { id: "", data: "", categorii: "apple ai",              titlu: "Noul SIRI cu AI" },
    { id: "", data: "", categorii: "apple",                 titlu: "iPhone se scumpește" },
    { id: "", data: "", categorii: "inovatii scandaluri",   titlu: "Aplicația care „te declară mort”" },
    { id: "", data: "", categorii: "ai scandaluri",         titlu: "Raportul: AI te manipulează" },
    { id: "", data: "", categorii: "roboti inovatii",       titlu: "Robotul din Dubai" },
    { id: "", data: "", categorii: "ai scandaluri",         titlu: "Actrița AI" },
    { id: "", data: "", categorii: "ai inovatii",           titlu: "Anglia și AI" },
    { id: "", data: "", categorii: "securitate scandaluri", titlu: "Google și hackerii" },
    { id: "", data: "", categorii: "securitate scandaluri", titlu: "Atacuri cibernetice în 2026" },
    { id: "", data: "", categorii: "meta inovatii",         titlu: "Meta și cipurile" },
    { id: "", data: "", categorii: "inovatii",              titlu: "Assassin's Creed" },
    { id: "", data: "", categorii: "roboti inovatii",       titlu: "UBTECH — robotul umanoid" },
    { id: "", data: "", categorii: "romania inovatii",      titlu: "Satelit românesc" },
    { id: "", data: "", categorii: "roboti inovatii",       titlu: "Cursa umanoizilor" },
    { id: "", data: "", categorii: "apple chatgpt ai",      titlu: "Apple și OpenAI" },
    { id: "", data: "", categorii: "scandaluri",            titlu: "Cultura 996" },
    { id: "", data: "", categorii: "romania securitate scandaluri", titlu: "Hack românesc la ANCPI" }
];