  const btn = document.getElementById("mobile-menu-button");
        const menu = document.getElementById("mobile-menu");

        const iconMenu = document.getElementById("icon-menu");
        const iconClose = document.getElementById("icon-close");

        btn.addEventListener("click", () => {
            const isOpen = !menu.classList.contains("hidden");

            if (isOpen) {
                // FECHAR MENU
                menu.classList.add("hidden");
                iconMenu.classList.remove("hidden");
                iconClose.classList.add("hidden");
            } else {
                // ABRIR MENU
                menu.classList.remove("hidden");
                iconMenu.classList.add("hidden");
                iconClose.classList.remove("hidden");
            }
        });


        document.addEventListener('DOMContentLoaded', function () {
            const faqToggles = document.querySelectorAll('.faq-toggle');

            faqToggles.forEach(toggle => {
                toggle.addEventListener('click', function () {
                    const content = this.parentElement.querySelector('.faq-content');
                    const icon = this.querySelector('svg');

                    content.classList.toggle('active');

                    icon.classList.toggle('rotate-180');

                    if (content.classList.contains('active')) {
                        content.style.maxHeight = content.querySelector('div').scrollHeight + 'px';
                    } else {
                        content.style.maxHeight = '0';
                    }
                });
            });
        });   