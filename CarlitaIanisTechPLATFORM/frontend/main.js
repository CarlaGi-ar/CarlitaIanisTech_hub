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
            submitBtn.textContent = "Trimite-mi ghidul";
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