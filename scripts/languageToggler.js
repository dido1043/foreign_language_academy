document.addEventListener('DOMContentLoaded', () => {
    const languageSelector = document.getElementById('language-selector');
    const elementsToTranslate = document.querySelectorAll('[data-translate-key]');

    const translations = {
        en: {
            welcome: "Welcome",
            // Add more translations here
        },
        bg: {
            welcome: "Добре дошли",
            // Add more translations here
        },
        en: {
            welcome: "Welcome",
            about: "About Us",
            contact: "Contact",
            services: "Services",
            // Add more translations here
        },
        bg: {
            welcome: "Добре дошли",
            about: "За нас",
            contact: "Контакт",
            services: "Услуги",
            home: "Начало",
            about: "За нас",
            group_training: "Групово обучение",
            individual_training: "Индивидуално обучение",
            gallery: "Галерия",
            contacts: "Контакти",
            welcome_message: "Добре дошли на нашия уебсайт",
            success_message: "Вашият успех започва тук.",
            discover_message: "Открийте нови хоризонти",
            join_message: "Присъединете се към нас на пътешествие на растеж.",
            innovate_message: "Иновирайте с увереност",
            empower_message: "Укрепване на идеите за по-добро бъдеще.",
            more_about_center: "Повече за центъра",
            ask_question: "Задайте вашия въпрос",
            name: "Име",
            email: "Електронна поща",
            your_message: "Вашето съобщение",
            send: "Изпрати",
            social_media: "Социални медии",
            address: "Адрес",
            phone: "Телефон",
            facebook: "Фейсбук",
            instagram: "Инстаграм"
        },
    };

    function translatePage(language) {
        elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate-key');
            if (translations[language] && translations[language][key]) {
                element.textContent = translations[language][key];
            }
        });
    }

    languageSelector.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        translatePage(selectedLanguage);
    });

    // Set default language
    const defaultLanguage = 'en';
    languageSelector.value = defaultLanguage;
    translatePage(defaultLanguage);
});