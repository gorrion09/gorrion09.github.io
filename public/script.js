document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    const floatingCard = document.getElementById("floating-card");
    const cardTitle = document.getElementById("card-title");
    const cardContent = document.getElementById("card-content");

    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });

                // Actualizar contenido de la tarjeta flotante
                cardTitle.textContent = targetSection.querySelector("h2").textContent;
                cardContent.textContent = targetSection.querySelector("p").textContent;

                // Mover la tarjeta con la sección
                floatingCard.style.top = `${targetSection.offsetTop + 50}px`;
            }
        });
    });
});
