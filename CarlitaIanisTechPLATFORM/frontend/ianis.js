/* ==========================================================
   IANIS — botul de pe pagina principală
   Răspunde din data/ianis.json.
   Ca să adaugi întrebări noi, editezi DOAR ianis.json.
   ========================================================== */

let IANIS = null;

// 1. Încărcăm creierul botului (ianis.json)
fetch("data/ianis.json")
    .then(function (r) { return r.json(); })
    .then(function (date) {
        IANIS = date;
        // dacă botul e deja deschis, arătăm salutul acum
        if (botPanou && !botPanou.hidden && botMesaje.children.length === 0) {
            adaugaMesaj(IANIS.salut, "bot");
            arataSugestii();
        }
    })
    .catch(function () { console.error("Nu am putut încărca ianis.json"); });

// 2. Elementele din pagină
const botButon = document.getElementById("ianis-buton");
const botPanou = document.getElementById("ianis-panou");
const botInchide = document.getElementById("ianis-inchide");
const botMesaje = document.getElementById("ianis-mesaje");
const botSugestii = document.getElementById("ianis-sugestii");
const botForm = document.getElementById("ianis-form");
const botInput = document.getElementById("ianis-input");

// 3. Curățăm textul: litere mici, fără diacritice, fără semne
function normalizeaza(text) {
    return text.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s]/g, " ")
        .replace(/\s+/g, " ").trim();
}

// 4. Adăugăm o bulă de mesaj (cu link opțional)
function adaugaMesaj(text, cine, link) {
    const bula = document.createElement("div");
    bula.className = "ianis-bula ianis-bula--" + cine; // "bot" sau "user"
    bula.textContent = text;

    // dacă răspunsul are un link, punem un buton sub text
    if (link && link.url) {
        const a = document.createElement("a");
        a.className = "ianis-link";
        a.href = link.url;
        a.textContent = link.text || "Vezi mai mult";
        if (link.url.indexOf("http") === 0) {   // link extern → tab nou
            a.target = "_blank";
            a.rel = "noopener noreferrer";
        }
        bula.appendChild(document.createElement("br"));
        bula.appendChild(a);
    }

    botMesaje.appendChild(bula);
    botMesaje.scrollTop = botMesaje.scrollHeight;
}

// 5. Găsim cel mai bun răspuns din ianis.json
function gasesteRaspuns(intrebare) {
    if (!IANIS) return { raspuns: "O secundă, încă mă trezesc... 😴 Mai încearcă odată." };
    const text = normalizeaza(intrebare);
    const cuvinteScrise = text.split(" ");

    // ÎNTÂI: limbaj nepotrivit? (cuvânt întreg, ca să nu blocheze din greșeală)
    if (IANIS.injuraturi && IANIS.injuraturi.some(function (rau) {
        return cuvinteScrise.indexOf(normalizeaza(rau)) !== -1;
    })) {
        return { raspuns: IANIS.mesaj_injuraturi };
    }

    // APOI: căutăm răspunsul normal
    let celMaiBun = null, scorMax = 0;
    IANIS.raspunsuri.forEach(function (item) {
        let scor = 0;
        item.cuvinte.forEach(function (cuvant) {
            if (text.includes(normalizeaza(cuvant))) scor++;
        });
        if (scor > scorMax) { scorMax = scor; celMaiBun = item; }
    });

    return scorMax > 0 ? celMaiBun : { raspuns: IANIS.necunoscut };
}

// 6. Când userul trimite o întrebare
function trimiteIntrebare(intrebare) {
    adaugaMesaj(intrebare, "user");
    const item = gasesteRaspuns(intrebare);
    setTimeout(function () { adaugaMesaj(item.raspuns, "bot", item.link); }, 350);
}

// 7. Butoanele de sugestii
function arataSugestii() {
    if (!IANIS || !botSugestii) return;
    botSugestii.innerHTML = "";
    IANIS.sugestii.forEach(function (intrebare) {
        const chip = document.createElement("button");
        chip.type = "button";
        chip.className = "ianis-chip";
        chip.textContent = intrebare;
        chip.addEventListener("click", function () { trimiteIntrebare(intrebare); });
        botSugestii.appendChild(chip);
    });
}

// 8. Deschidem / închidem panoul
function deschideBot() {
    botPanou.hidden = false;
    if (botMesaje.children.length === 0 && IANIS) {
        adaugaMesaj(IANIS.salut, "bot");
        arataSugestii();
    }
    botInput.focus();
}
function inchideBot() { botPanou.hidden = true; }

// 9. Legăm butoanele
if (botButon) botButon.addEventListener("click", deschideBot);
if (botInchide) botInchide.addEventListener("click", inchideBot);
if (botForm) {
    botForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const intrebare = botInput.value.trim();
        if (!intrebare) return;
        trimiteIntrebare(intrebare);
        botInput.value = "";
    });
}