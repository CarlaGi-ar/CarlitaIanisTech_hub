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
    { id: "mmrU7x5Et60", data: "2025-07-26", categorii: "meta chatgpt ai",       titlu: "Meta și ChatGPT" },
    { id: "F-iWgFzXqJk", data: "2025-08-03", categorii: "inovatii",              titlu: "Japonia și internetul pe fibră" },
    { id: "kLIVamu50io", data: "2025-08-27", categorii: "ai inovatii",           titlu: "De ce AI?" },
    { id: "-8I513ueOLI", data: "2025-08-17", categorii: "inovatii securitate",   titlu: "Bitchat" },
    { id: "sQBygd3AzTk", data: "2025-08-16", categorii: "elon inovatii",         titlu: "Elon Musk și Mars" },
    { id: "aFI28zuSa_I", data: "2025-08-23", categorii: "ai securitate",         titlu: "Chatboturile și copiii" },
    { id: "1hxWiuLXnLA", data: "2025-08-22", categorii: "ai inovatii",           titlu: "Antibioticul și AI" },
    { id: "518TgF1SsBQ", data: "2025-09-06", categorii: "chatgpt ai",            titlu: "GPT-5 și superinteligența" },
    { id: "Pciv7omvCgY", data: "2025-09-12", categorii: "chatgpt ai",            titlu: "GPT-4o vs GPT-5" },
    { id: "vm1YcNbHVzE", data: "2025-09-19", categorii: "meta inovatii",         titlu: "Ochelarii Meta" },
    { id: "LHpumOQ24DY", data: "2025.09.29", categorii: "chatgpt scandaluri",    titlu: "Cazul ChatGPT" },
    { id: "kUlRMF1o26A", data: "2025-12-05", categorii: "ai meta scandaluri",           titlu: "UE invesitigheaza WhatsAPP" },
    { id: "H2ldJNr_3yA", data: "2025-10-19", categorii: "ai inovatii",           titlu: "Investiții în AI" },
    { id: "Sk2EdDeS--4", data: "2025-11-16", categorii: "ai inovatii",              titlu: "Unde se construiesc?" },
    { id: "9W4qphroIM4", data: "2025-11-209", categorii: "romania ai",            titlu: "Scolile si viitorul copiilor" },
    { id: "uT9wsUhEvTo", data: "2025-11-08", categorii: "ai romania inovatii",           titlu: "Companiile cu noile cipuri" },
    { id: "n-H6w4vSL4s", data: "2025-11-07", categorii: "ai romania inovatii",           titlu: "Centrele de AI" },
    { id: "wUE5S75Zv-g", data: "2025-11-22", categorii: "ai romania inovatii",           titlu: "De ce sa inevti Python?" },
    { id: "NlqpUa62fYo", data: "2025-12-13", categorii: "ai romania inovatii",           titlu: "Se mai merita sa mai faci facultate?" },
    { id: "5RehTWfxIC4", data: "2025-12-20", categorii: "ai romania inovatii",           titlu: "Robotica industriala" },
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