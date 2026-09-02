/*--FORMULARUL DE EMAIL PENTRU GHID GRATIS--*/

// Endpoint subscribe: /jsonp/{account_id}/forms/{form_id}/subscribe
const MAILERLITE_URL = "https://assets.mailerlite.com/jsonp/2498132/forms/192445333647656138/subscribe";

const ghidForm = document.getElementById("ghid-form");

if (ghidForm) {
    ghidForm.addEventListener("submit", async function (event) {
        event.preventDefault(); // oprește refresh-ul paginii

        // 🍯 Honeypot: dacă e completat, e bot → ne prefacem că a mers
        if (document.getElementById("honeypot").value !== "") {
            ghidForm.reset();
            showFormMessage("Mulțumesc! ✉️ Verifică-ți emailul.", "succes");
            return;
        }

        const emailInput = ghidForm.querySelector("input[type='email']");
        const submitBtn = ghidForm.querySelector("button");
        const originalText = submitBtn.textContent;
        const email = emailInput.value.trim();

        // Validare simplă
        if (!email || !email.includes("@")) {
            showFormMessage("Te rog scrie o adresă de email validă. 😊", "eroare");
            return;
        }

        // Buton în stare de „se trimite..."
        submitBtn.disabled = true;
        submitBtn.textContent = "Se trimite...";

        try {
            // Trimitem la MailerLite
            const formData = new FormData();
            formData.append("fields[email]", email);
            formData.append("ml-submit", "1");
            formData.append("anticsrf", "true");

            await fetch(MAILERLITE_URL, {
                method: "POST",
                body: formData,
                mode: "no-cors" // MailerLite nu trimite răspuns CORS
            });

            // Succes
            ghidForm.reset();
            showFormMessage("Aproape gata! Intră în emailul tău și apasă pe butonul verde de confirmare.", "succes");

        } catch (error) {
            showFormMessage("Ceva nu a mers. Încearcă din nou, te rog.", "eroare");
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
}

/* ------------------------------
2. MESAJ DE CONFIRMARE (apare sub formular)
   ------------------------------ */

function showFormMessage(text, tip) {
    // Ștergem mesajul vechi, dacă există
    const vechi = document.querySelector(".form-mesaj");
    if (vechi) vechi.remove();

    const mesaj = document.createElement("p");
    mesaj.className = "form-mesaj " + (tip === "succes" ? "form-mesaj--succes" : "form-mesaj--eroare");
    mesaj.textContent = text;

    ghidForm.insertAdjacentElement("afterend", mesaj);

    // Mesajul de eroare dispare singur după 5 secunde
    if (tip === "eroare") {
        setTimeout(() => mesaj.remove(), 5000);
    }
}


/* ==========================================================
ȘTIRI — construite automat din lista STIRI (stiri-data.js)
Nu modifici nimic aici. Tu editezi doar stiri-data.js.
   ========================================================== */

// Transformă "2026-08-12" în "12 august 2026"
function formatData(iso) {
    if (!iso) return "";
    const luni = ["ianuarie", "februarie", "martie", "aprilie", "mai", "iunie",
        "iulie", "august", "septembrie", "octombrie", "noiembrie", "decembrie"];
    const p = iso.split("-"); // AAAA-LL-ZZ
    if (p.length !== 3) return iso;
    const zi = parseInt(p[2], 10);
    const luna = luni[parseInt(p[1], 10) - 1] || "";
    return zi + " " + luna + " " + p[0];
}

const gridStiri = document.querySelector(".stiri-grid");
const dialogStire = document.getElementById("stire-dialog");

// Deschide dialogul partajat cu datele știrii apăsate
function deschideStire(stire) {
    if (!dialogStire) return;
    dialogStire.querySelector("iframe").src = "https://www.youtube.com/embed/" + stire.id;
    dialogStire.querySelector(".stire-dialog-titlu").textContent = stire.titlu;
    dialogStire.querySelector(".stire-dialog-data").textContent = formatData(stire.data);
    dialogStire.querySelector(".stire-dialog-link").href = "https://youtu.be/" + stire.id;
    dialogStire.showModal();
}

// Construiește cardurile (doar dacă suntem pe pagina de știri)
if (gridStiri && dialogStire && typeof STIRI !== "undefined") {

    // Sortăm: cele noi primele (după dată, descrescător)
    const listaSortata = [...STIRI].sort((a, b) => (b.data || "").localeCompare(a.data || ""));

    listaSortata.forEach(function (stire) {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "stire-card";
        card.dataset.categorii = stire.categorii || "";
        card.innerHTML =
            '<img class="stire-coperta" src="https://img.youtube.com/vi/' + stire.id + '/hq720.jpg" alt="">' +
            '<div class="stire-info">' +
            '<h3 class="stire-titlu">' + stire.titlu + '</h3>' +
            '<p class="stire-data">' + formatData(stire.data) + '</p>' +
            '</div>';
        card.addEventListener("click", function () { deschideStire(stire); });
        gridStiri.appendChild(card);
    });
}

/*--FILTRE ȘTIRI--*/
const filtreStiri = document.querySelectorAll(".stiri-filtru");

filtreStiri.forEach(function (btn) {
    btn.addEventListener("click", function () {
        // scoate „activ" de pe toate, pune-l pe cel apăsat
        filtreStiri.forEach(b => b.classList.remove("activ"));
        btn.classList.add("activ");

        const filtru = btn.dataset.filtru;

        document.querySelectorAll(".stire-card").forEach(function (card) {
            const categorii = (card.dataset.categorii || "").split(" ");
            if (filtru === "toate" || categorii.includes(filtru)) {
                card.style.display = "";       // arată
            } else {
                card.style.display = "none";   // ascunde
            }
        });
    });
});

/* ==========================================================
   ACASĂ — cele mai noi 3 știri, pe pagina principală
   Se umple singur din STIRI. Nu editezi aici — doar stiri-data.js.
   ========================================================== */
const gridAcasa = document.getElementById("acasa-noutati");

if (gridAcasa && typeof STIRI !== "undefined") {

    const ETICHETE = {
        ai: "AI", inovatii: "INOVAȚIE", securitate: "SECURITATE",
        scandaluri: "SCANDAL", apple: "APPLE", samsung: "SAMSUNG",
        meta: "META", nvidia: "NVIDIA", chatgpt: "CHATGPT",
        claude: "CLAUDE", openai: "OPENAI", elon: "ELON MUSK",
        roboti: "ROBOȚI", romania: "ROMÂNIA", google: "SECURITATE"
    };
    const CULORI = ["badge--salvie", "badge--bordo", "badge--aramiu"];

    const celeMaiNoi = [...STIRI]
        .sort((a, b) => (b.data || "").localeCompare(a.data || ""))
        .slice(0, 3);

        celeMaiNoi.forEach(function (stire, i) {
        const primaCat = (stire.categorii || "").split(" ")[0];
        const eticheta = ETICHETE[primaCat] || "ȘTIRE NOUĂ";

        const card = document.createElement("article");
        card.className = "card card--clic";              // ← clasă nouă pt. hover/cursor
        card.innerHTML =
            '<span class="badge ' + CULORI[i % 3] + '">' + eticheta + '</span>' +
            '<h3>' + stire.titlu + '</h3>' +
            '<p>' + (stire.descriere || formatData(stire.data)) + '</p>';

        // 👇 ASTA lipsea — click pe card deschide videoul
        card.addEventListener("click", function () { deschideStire(stire); });

        gridAcasa.appendChild(card);
    });
}