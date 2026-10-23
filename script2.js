
$(document).ready(function () {

    // ==========================================
    // 1. CATALOGUE : recherche, tri et pagination
    // ==========================================

    if ($("#vehiclesTable").length && $.fn.DataTable) {
        $("#vehiclesTable").DataTable({
            language: {
                search: "Rechercher :",
                lengthMenu: "Afficher _MENU_ voitures",
                info: "Affichage de _START_ à _END_ sur _TOTAL_ voitures",
                infoEmpty: "Aucune voiture disponible",
                infoFiltered: "(filtrées parmi _MAX_ voitures)",
                zeroRecords: "Aucun résultat trouvé",
                emptyTable: "Aucune voiture disponible",
                paginate: {
                    first: "Premier",
                    last: "Dernier",
                    next: "Suivant",
                    previous: "Précédent"
                }
            },
            pageLength: 5,
            ordering: true,
            responsive: true
        });
    }

    // ==========================================
    // 2. SELECT2 : sélection des voitures
    // ==========================================

    if ($(".select2").length && $.fn.select2) {
        $(".select2").select2({
            placeholder: "Sélectionnez une voiture",
            allowClear: true,
            width: "100%"
        });
    }

    // ==========================================
    // 3. DEVIS : calcul du prix de location
    // ==========================================

    $("#quoteForm").on("submit", function (event) {
        event.preventDefault();

        const name = $("#customerName").val().trim();
        const email = $("#customerEmail").val().trim();
        const price = Number($("#vehicle").val());
        const startDate = $("#startDate").val();
        const days = Number($("#days").val());
        const result = $("#quoteResult");

        result.removeClass("success error").text("");

        // Vérification des champs
        if (!name || !email || !startDate || !$("#vehicle").val()) {
            result.text("Veuillez remplir tous les champs.")
                  .addClass("error");
            return;
        }

        // Vérification de l'adresse e-mail
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            result.text("Veuillez saisir une adresse e-mail valide.")
                  .addClass("error");
            return;
        }

        // Vérification de la date
        const selectedDate = new Date(startDate + "T00:00:00");
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (Number.isNaN(selectedDate.getTime()) || selectedDate < today) {
            result.text("Choisissez une date de début valide.")
                  .addClass("error");
            return;
        }

        // Vérification de la durée
        if (!Number.isInteger(days) || days < 1 || days > 365) {
            result.text("La durée doit être comprise entre 1 et 365 jours.")
                  .addClass("error");
            return;
        }

        // Calcul du montant
        if (!Number.isFinite(price) || price <= 0) {
            result.text("Veuillez sélectionner une voiture valide.")
                  .addClass("error");
            return;
        }

        const total = price * days;

        result.text(
            "Devis estimatif pour " + name + " : " +
            total.toLocaleString("fr-FR") +
            " DT pour " + days + " jour(s)."
        ).addClass("success");
    });

    // ==========================================
    // 4. CONTACT : validation du formulaire
    // ==========================================

    $("#contactForm").on("submit", function (event) {
        event.preventDefault();

        const name = $("#name").val().trim();
        const email = $("#email").val().trim();
        const subject = $("#subject").val().trim();
        const message = $("#message").val().trim();
        const result = $("#contactResult");

        result.removeClass("success error").text("");

        // Vérification des champs obligatoires
        if (!name || !email || !subject || !message) {
            result.text("Veuillez remplir tous les champs.")
                  .addClass("error");
            return;
        }

        // Vérification du format de l'e-mail
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            result.text("Veuillez saisir une adresse e-mail valide.")
                  .addClass("error");
            return;
        }

        // Confirmation de validation
        result.text(
            "Merci " + name +
            " ! Votre formulaire a été validé avec succès."
        ).addClass("success");

        // Réinitialiser le formulaire
        this.reset();
    });

});
