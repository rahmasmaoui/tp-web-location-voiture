
/* Fonction pour calculer le prix de location */
function calculerPrix() {
    var voiture = document.getElementById("voiture").value;
    var dateDebut = document.getElementById("dateDebut").value;
    var dateFin = document.getElementById("dateFin").value;
    var prixTotal = document.getElementById("prixTotal");
    var message = document.getElementById("message");

    message.textContent = "";
    prixTotal.value = "";

    // Vérifier les informations nécessaires
    if (voiture === "" || dateDebut === "" || dateFin === "") {
        message.textContent =
            "Veuillez sélectionner une voiture et les deux dates.";
        return false;
    }

    // Convertir les dates en nombres de jours
    var debut = new Date(dateDebut + "T00:00:00");
    var fin = new Date(dateFin + "T00:00:00");

    // Vérifier l'ordre des dates
    if (fin < debut) {
        message.textContent =
            "La date de fin doit être postérieure ou égale à la date de début.";
        return false;
    }

    var difference = fin - debut;
    var nombreJours = difference / (1000 * 60 * 60 * 24);

    // Une location sur la même date compte comme une journée
    if (nombreJours === 0) {
        nombreJours = 1;
    }

    var prixJournalier = Number(voiture);
    var total = nombreJours * prixJournalier;

    prixTotal.value = total + " DT";

    return true;
}

/* Bouton de calcul */
document.getElementById("btnCalculer").addEventListener("click", function () {
    calculerPrix();
});

/* Validation du formulaire */
document.getElementById("reservationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var nom = document.getElementById("nom").value.trim();
    var email = document.getElementById("email").value.trim();
    var telephone = document.getElementById("telephone").value.trim();
    var categorie = document.getElementById("categorie").value;
    var voiture = document.getElementById("voiture").value;
    var dateDebut = document.getElementById("dateDebut").value;
    var dateFin = document.getElementById("dateFin").value;
    var message = document.getElementById("message");

    message.textContent = "";

    // Vérifier le nom
    if (nom.length < 3) {
        message.textContent =
            "Le nom et prénom doivent contenir au moins 3 caractères.";
        return;
    }

    // Vérifier l'email
    if (email === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        message.textContent = "Veuillez saisir une adresse e-mail valide.";
        return;
    }

    // Vérifier le téléphone
    if (telephone === "") {
        message.textContent = "Veuillez saisir votre téléphone.";
        return;
    }

    // Vérifier la catégorie
    if (categorie === "") {
        message.textContent = "Veuillez sélectionner une catégorie.";
        return;
    }

    // Vérifier le véhicule
    if (voiture === "") {
        message.textContent = "Veuillez sélectionner une voiture.";
        return;
    }

    // Vérifier les dates
    if (dateDebut === "" || dateFin === "") {
        message.textContent = "Veuillez sélectionner les dates de location.";
        return;
    }

    if (new Date(dateFin) < new Date(dateDebut)) {
        message.textContent =
            "La date de fin doit être postérieure ou égale à la date de début.";
        return;
    }

    // Calculer le prix avant de confirmer
    if (!calculerPrix()) {
        return;
    }

    message.textContent =
        "Réservation validée avec succès ! Prix estimé : " +
        document.getElementById("prixTotal").value;
});
