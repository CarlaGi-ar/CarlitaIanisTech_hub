/* ==========================================================
   LISTA DE ȘTIRI  —  singurul fișier pe care îl editezi
   ==========================================================
   Pentru fiecare știre completezi:
   id        = codul video de pe YouTube (din link, după "watch?v=")
   data      = data în cifre, AAAA-LL-ZZ  (ex: 2026-08-12)
   categorii = etichete din bara de filtre, separate prin spațiu
   titlu     = cum apare pe card

   Taguri disponibile:
   inovatii · ai · securitate · scandaluri · apple · samsung
   meta · nvidia · chatgpt · claude · elon · roboti · romania
   ========================================================== */

const STIRI = [
    { id: "mmrU7x5Et60", data: "2025-07-26", categorii: "meta chatgpt ai", titlu: "Meta și ChatGPT" },
    { id: "F-iWgFzXqJk", data: "2025-08-03", categorii: "inovatii", titlu: "Japonia și internetul pe fibră" },
    { id: "kLIVamu50io", data: "2025-08-27", categorii: "ai inovatii", titlu: "De ce AI?" },
    { id: "-8I513ueOLI", data: "2025-08-17", categorii: "inovatii securitate", titlu: "Bitchat" },
    { id: "sQBygd3AzTk", data: "2025-08-16", categorii: "elon inovatii", titlu: "Elon Musk și Mars" },
    { id: "aFI28zuSa_I", data: "2025-08-23", categorii: "ai securitate", titlu: "Chatboturile și copiii" },
    { id: "1hxWiuLXnLA", data: "2025-08-22", categorii: "ai inovatii", titlu: "Antibioticul și AI" },
    { id: "518TgF1SsBQ", data: "2025-09-06", categorii: "chatgpt ai", titlu: "GPT-5 și superinteligența" },
    { id: "Pciv7omvCgY", data: "2025-09-12", categorii: "chatgpt ai", titlu: "GPT-4o vs GPT-5" },
    { id: "vm1YcNbHVzE", data: "2025-09-19", categorii: "meta inovatii", titlu: "Ochelarii Meta" },
    { id: "LHpumOQ24DY", data: "2025-09-29", categorii: "chatgpt scandaluri", titlu: "Cazul ChatGPT" },
    { id: "kUlRMF1o26A", data: "2025-12-05", categorii: "ai meta scandaluri", titlu: "UE investighează WhatsApp" },
    { id: "H2ldJNr_3yA", data: "2025-10-19", categorii: "ai inovatii", titlu: "Investiții în AI" },
    { id: "Sk2EdDeS--4", data: "2025-11-16", categorii: "ai inovatii", titlu: "Unde se construiesc?" },
    { id: "9W4qphroIM4", data: "2025-11-29", categorii: "romania ai", titlu: "Școlile și viitorul copiilor" },
    { id: "uT9wsUhEvTo", data: "2025-11-08", categorii: "ai romania inovatii", titlu: "Companiile cu noile cipuri" },
    { id: "n-H6w4vSL4s", data: "2025-11-07", categorii: "ai romania inovatii", titlu: "Centrele de AI" },
    { id: "wUE5S75Zv-g", data: "2025-11-22", categorii: "ai romania inovatii", titlu: "De ce să înveți Python?" },
    { id: "NlqpUa62fYo", data: "2025-12-13", categorii: "ai romania inovatii", titlu: "Se mai merită să faci facultate?" },
    { id: "5RehTWfxIC4", data: "2025-12-20", categorii: "ai romania inovatii", titlu: "Robotică industrială" },
    { id: "2BIBaS5VrJE", data: "2026-01-09", categorii: "ai apple inovatii", titlu: "Apple anulează iPhone-ul din 2026" },
    { id: "8XNHB7uBY-c", data: "2026-01-26", categorii: "ai romania scandaluri", titlu: "Avantajele și dezavantajele AI" },
    { id: "kF7abNlNrQQ", data: "2026-01-27", categorii: "ai romania scandaluri", titlu: "Notele mari nu garantează viitorul copilului tău" },
    { id: "QQ-1l7fVKe8", data: "2026-01-30", categorii: "ai romania scandaluri", titlu: "Comunicarea — mai importantă decât programarea!" },
    { id: "PlZDEiYdpuw", data: "2026-02-13", categorii: "ai romania scandaluri", titlu: "Atenție — datele tale nu sunt ale tale" },
    { id: "vMpxQVm6WgY", data: "2026-02-14", categorii: "samsung ai scandaluri", titlu: "Cazul șocant Samsung" },
    { id: "TV6xsjW_uKU", data: "2026-02-15", categorii: "claude openai scandaluri ai", titlu: "Interzicerea AI" },
    { id: "wIhzxEvhNRc", data: "2026-05-08", categorii: "scandaluri ai", titlu: "Guvernul SUA verifică modelele AI" },
    { id: "mgM6QzXtLg8", data: "2026-05-09", categorii: "claude ai", titlu: "Anthropic Mythos" },
    { id: "sN7Z3YI10A4", data: "2026-05-11", categorii: "scandaluri ai", titlu: "Bula AI se sparge" },
    { id: "V9maOPiBB8o", data: "2026-05-19", categorii: "ai securitate", titlu: "Routerul folosit de hackeri" },
    { id: "fh3phNB3rkg", data: "2026-05-23", categorii: "inovatii scandaluri", titlu: "Căștile wireless" },
    { id: "EHVaG3gvRAo", data: "2026-05-15", categorii: "inovatii ai scandaluri chatgpt claude meta", titlu: "Lumea virtuală" },
    { id: "W59Kz5XWGhU", data: "2026-05-16", categorii: "inovatii ai scandaluri chatgpt claude meta", titlu: "Lumea virtuală (mix)" },
    { id: "e5lTDOvcYqc", data: "2026-05-20", categorii: "meta scandaluri", titlu: "Scandal la Meta" },
    { id: "EXPWtPNbNc0", data: "2026-05-14", categorii: "ai scandaluri inovatii", titlu: "IA e scumpă" },
    { id: "5NdzYQ1aPPM", data: "2026-06-01", categorii: "nvidia romania scandaluri inovatii", titlu: "Nvidia, cea mai valoroasă companie" },
    { id: "28vmAOXeFi4", data: "2026-06-21", categorii: "elon inovatii scandaluri", titlu: "Space-X" },
    { id: "HE05LMs0v7Y", data: "2026-06-26", categorii: "claude ai", titlu: "Claude depășește ChatGPT" },
    { id: "RoBrOiGES_w", data: "2026-06-20", categorii: "inovatii scandaluri", titlu: "Roboți la Cupa Mondială 2026" },
    { id: "gZklwZWtdps", data: "2026-06-27", categorii: "inovatii nvidia ai", titlu: "Nvidia și cipul AI" },
    { id: "0zdiwXhwH7Q", data: "2026-07-02", categorii: "claude scandaluri ai", titlu: "Casa Albă vs Anthropic, Claude" },
    { id: "KkxYFE194Jo", data: "2026-06-28", categorii: "apple ai", titlu: "Noul Siri cu AI" },
    { id: "YMZLy0OiTcU", data: "2026-07-04", categorii: "apple scandaluri inovatii", titlu: "iPhone se scumpește — iPhone Pro 18 și iPhone Fold" },
    { id: "TAzoWsVtraE", data: "2026-07-05", categorii: "inovatii scandaluri", titlu: "Aplicația care „te declară mort”" },
    { id: "oRMe96dhL1Q", data: "2026-07-15", categorii: "ai scandaluri", titlu: "Raportul: AI te manipulează" },
    { id: "wI4joJadzuE", data: "2026-07-07", categorii: "roboti inovatii", titlu: "Robotul din Dubai" },
    { id: "fG4WMpg_0-g", data: "2026-07-17", categorii: "ai scandaluri", titlu: "Actrița AI" },
    { id: "2uZBt00EYPA", data: "2026-07-19", categorii: "ai romania inovatii", titlu: "Anglia și AI" },
    { id: "4PL2xESbqsY", data: "2026-07-24", categorii: "securitate google scandaluri", titlu: "Google dă în judecată hackerii" },
    { id: "TSsBJkBhbUg", data: "2026-07-26", categorii: "securitate scandaluri", titlu: "Atacuri cibernetice în 2026" },
    { id: "-HpmzcgETWw", data: "2026-08-22", categorii: "meta inovatii", titlu: "Meta și cipurile" },
    { id: "UE3Xp1Suq_M", data: "2026-07-22", categorii: "inovatii", titlu: "Assassin's Creed" },
    { id: "9DzZrx62Fq4", data: "2026-08-24", categorii: "roboti inovatii", titlu: "Cursa umanoizilor" },
    { id: "KxFk2XKmsvM", data: "2026-08-26", categorii: "apple chatgpt ai scandaluri", titlu: "Scandalul Apple și OpenAI" },
    { id: "YHE89_wiPuU", data: "2026-08-28", categorii: "scandaluri", titlu: "Cultura 996" },
];