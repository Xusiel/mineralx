const rocks = [
    { name: { en: "Quartz", fa: "کوارتز" }, formula: "SiO₂", hardness: 7, color: { en: "Colorless, White, Pink", fa: "بی‌رنگ، سفید، صورتی" }, location: { en: "Brazil, Iran", fa: "برزیل، ایران" }, usage: { en: "Jewelry, Industry", fa: "جواهرسازی، صنعت" }, image: "images/quartz.jpg" },
    { name: { en: "Calcite", fa: "کلسیت" }, formula: "CaCO₃", hardness: 3, color: { en: "White, Yellow", fa: "سفید، زرد" }, location: { en: "Mexico, Iran", fa: "مکزیک، ایران" }, usage: { en: "Cement, Decoration", fa: "سیمان، تزئینات" }, image: "images/calcite.jpg" },
    { name: { en: "Amethyst", fa: "آمتیست" }, formula: "SiO₂", hardness: 7, color: { en: "Purple", fa: "بنفش" }, location: { en: "Brazil, USA", fa: "برزیل، آمریکا" }, usage: { en: "Jewelry", fa: "جواهرسازی" }, image: "images/amethyst.jpg" },
    { name: { en: "Fluorite", fa: "فلوریت" }, formula: "CaF₂", hardness: 4, color: { en: "Green, Blue, Purple", fa: "سبز، آبی، بنفش" }, location: { en: "China, Mexico", fa: "چین، مکزیک" }, usage: { en: "Industry, Decoration", fa: "صنعت، تزئینات" }, image: "images/fluorite.jpg" },
    { name: { en: "Garnet", fa: "گارنت" }, formula: "X₃Y₂(SiO₄)₃", hardness: 6.5, color: { en: "Red, Green", fa: "قرمز، سبز" }, location: { en: "India, USA", fa: "هند، آمریکا" }, usage: { en: "Jewelry, Abrasives", fa: "جواهرسازی، ساینده‌ها" }, image: "images/garnet.jpg" },
    { name: { en: "Topaz", fa: "توپاز" }, formula: "Al₂SiO₄(F,OH)₂", hardness: 8, color: { en: "Blue, Yellow", fa: "آبی، زرد" }, location: { en: "Brazil, Russia", fa: "برزیل، روسیه" }, usage: { en: "Jewelry", fa: "جواهرسازی" }, image: "images/topaz.jpg" },
    { name: { en: "Pyrite", fa: "پیریت" }, formula: "FeS₂", hardness: 6, color: { en: "Gold", fa: "طلایی" }, location: { en: "Spain, Peru", fa: "اسپانیا، پرو" }, usage: { en: "Ore, Decoration", fa: "سنگ معدن، تزئینات" }, image: "images/pyrite.jpg" },
    { name: { en: "Malachite", fa: "مالاکیت" }, formula: "Cu₂CO₃", hardness: 3.5, color: { en: "Green", fa: "سبز" }, location: { en: "Congo, Russia", fa: "کنگو، روسیه" }, usage: { en: "Decoration, Pigment", fa: "تزئینات، رنگ‌دانه" }, image: "images/malachite.jpg" },
    { name: { en: "Obsidian", fa: "ابسیدین" }, formula: "SiO₂ (volcanic glass)", hardness: 5, color: { en: "Black", fa: "سیاه" }, location: { en: "Mexico, USA", fa: "مکزیک، آمریکا" }, usage: { en: "Tools, Decoration", fa: "ابزار، تزئینات" }, image: "images/obsidian.jpg" },
    { name: { en: "Turquoise", fa: "فیروزه" }, formula: "CuAl₆(PO₄)₄(OH)₈·4H₂O", hardness: 6, color: { en: "Blue, Green", fa: "آبی، سبز" }, location: { en: "Iran, USA", fa: "ایران، آمریکا" }, usage: { en: "Jewelry", fa: "جواهرسازی" }, image: "images/turquoise.jpg" },
    { name: { en: "Diamond", fa: "الماس" }, formula: "C", hardness: 10, color: { en: "Colorless, Yellow", fa: "بی‌رنگ، زرد" }, location: { en: "South Africa, Russia", fa: "آفریقای جنوبی، روسیه" }, usage: { en: "Jewelry, Cutting", fa: "جواهرسازی، برش" }, image: "images/diamond.jpg" },
    { name: { en: "Emerald", fa: "زمرد" }, formula: "Be₃Al₂(SiO₃)₆", hardness: 7.5, color: { en: "Green", fa: "سبز" }, location: { en: "Colombia, Zambia", fa: "کلمبیا، زامبیا" }, usage: { en: "Jewelry", fa: "جواهرسازی" }, image: "images/emerald.jpg" },
    { name: { en: "Ruby", fa: "یاقوت سرخ" }, formula: "Al₂O₃", hardness: 9, color: { en: "Red", fa: "قرمز" }, location: { en: "Myanmar, Thailand", fa: "میانمار، تایلند" }, usage: { en: "Jewelry", fa: "جواهرسازی" }, image: "images/ruby.jpg" },
    { name: { en: "Sapphire", fa: "یاقوت کبود" }, formula: "Al₂O₃", hardness: 9, color: { en: "Blue, Pink", fa: "آبی، صورتی" }, location: { en: "Sri Lanka, Madagascar", fa: "سریلانکا، ماداگاسکار" }, usage: { en: "Jewelry", fa: "جواهرسازی" }, image: "images/sapphire.jpg" },
    { name: { en: "Opal", fa: "اوپال" }, formula: "SiO₂·nH₂O", hardness: 5.5, color: { en: "Multicolor", fa: "چندرنگ" }, location: { en: "Australia, Ethiopia", fa: "استرالیا، اتیوپی" }, usage: { en: "Jewelry", fa: "جواهرسازی" }, image: "images/opal.jpg" },
    { name: { en: "Hematite", fa: "هماتیت" }, formula: "Fe₂O₃", hardness: 5, color: { en: "Black, Red", fa: "سیاه، قرمز" }, location: { en: "Brazil, Australia", fa: "برزیل، استرالیا" }, usage: { en: "Ore, Jewelry", fa: "سنگ معدن، جواهرسازی" }, image: "images/hematite.jpg" },
    { name: { en: "Lapis Lazuli", fa: "لاجورد" }, formula: "(Na,Ca)₈(AlSiO₄)₆(S,SO₄)", hardness: 5.5, color: { en: "Blue", fa: "آبی" }, location: { en: "Afghanistan, Chile", fa: "افغانستان، شیلی" }, usage: { en: "Jewelry, Pigment", fa: "جواهرسازی، رنگ‌دانه" }, image: "images/lapis-lazuli.jpg" },
    { name: { en: "Agate", fa: "عقیق" }, formula: "SiO₂", hardness: 7, color: { en: "Multicolor", fa: "چندرنگ" }, location: { en: "Brazil, Uruguay", fa: "برزیل، اروگوئه" }, usage: { en: "Jewelry, Decoration", fa: "جواهرسازی، تزئینات" }, image: "images/agate.jpg" },
    { name: { en: "Jade", fa: "یشم" }, formula: "NaAlSi₂O₆ or Ca₂(Mg,Fe)₅Si₈O₂₂(OH)₂", hardness: 6, color: { en: "Green, White", fa: "سبز، سفید" }, location: { en: "China, Myanmar", fa: "چین، میانمار" }, usage: { en: "Jewelry, Art", fa: "جواهرسازی، هنر" }, image: "images/jade.jpg" },
    { name: { en: "Beryl", fa: "بریل" }, formula: "Be₃Al₂Si₆O₁₈", hardness: 7.5, color: { en: "Green, Blue, Pink", fa: "سبز، آبی، صورتی" }, location: { en: "Colombia, Brazil", fa: "کلمبیا، برزیل" }, usage: { en: "Jewelry", fa: "جواهرسازی" }, image: "images/beryl.jpg" }
];

const filterOptions = {
    colors: {
        en: ["Red", "Green", "Blue", "Yellow", "Purple", "White", "Pink", "Black", "Colorless", "Multicolor", "Gold"],
        fa: ["قرمز", "سبز", "آبی", "زرد", "بنفش", "سفید", "صورتی", "سیاه", "بی‌رنگ", "چندرنگ", "طلایی"]
    },
    locations: {
        en: ["Brazil", "Iran", "USA", "Mexico", "Russia", "China", "India", "Spain", "Peru", "Congo", "South Africa", "Myanmar", "Thailand", "Sri Lanka", "Madagascar", "Australia", "Ethiopia", "Afghanistan", "Chile", "Uruguay", "Colombia", "Zambia"],
        fa: ["برزیل", "ایران", "آمریکا", "مکزیک", "روسیه", "چین", "هند", "اسپانیا", "پرو", "کنگو", "آفریقای جنوبی", "میانمار", "تایلند", "سریلانکا", "ماداگاسکار", "استرالیا", "اتیوپی", "افغانستان", "شیلی", "اروگوئه", "کلمبیا", "زامبیا"]
    }
};

const translations = {
    en: {
        title: "Welcome to MineralX",
        homeText: "Explore the wonders of Earth's minerals with us!",
        rocksTitle: "Rocks & Minerals",
        searchTitle: "Search & Filter",
        aboutTitle: "About Us",
        aboutText: "This site is dedicated to providing detailed information about rocks and minerals for enthusiasts, students, and professionals.",
        formulaLabel: "Chemical Formula",
        hardnessLabel: "Hardness",
        colorLabel: "Color",
        locationLabel: "Location",
        usageLabel: "Usage",
        searchPlaceholder: "Search by name...",
        searchBtn: "Search",
        resetBtn: "Reset Filters",
        noResults: "No results found.",
        hardnessRange: "Hardness Range:",
        menuHome: "Home",
        menuRocks: "Rocks & Minerals",
        menuSearch: "Search & Filter",
        menuAbout: "About Us",
        exploreBtn: "Discover Rocks & Minerals"
    },
    fa: {
        title: "به MineralX خوش آمدید",
        homeText: "شگفتی‌های کانی‌های زمین را با ما کاوش کنید!",
        rocksTitle: "سنگ‌ها و کانی‌ها",
        searchTitle: "جستجو و فیلتر",
        aboutTitle: "درباره ما",
        aboutText: "این سایت برای ارائه اطلاعات دقیق درباره سنگ‌ها و کانی‌ها برای علاقه‌مندان، دانشجویان و حرفه‌ای‌ها طراحی شده است.",
        formulaLabel: "فرمول شیمیایی",
        hardnessLabel: "سختی",
        colorLabel: "رنگ",
        locationLabel: "محل استخراج",
        usageLabel: "کاربرد",
        searchPlaceholder: "جستجو بر اساس نام...",
        searchBtn: "جستجو",
        resetBtn: "حذف فیلترها",
        noResults: "نمونه مورد نظر یافت نشد.",
        hardnessRange: "بازه سختی:",
        menuHome: "خانه",
        menuRocks: "سنگ‌ها و کانی‌ها",
        menuSearch: "جستجو و فیلتر",
        menuAbout: "درباره ما",
        exploreBtn: "کشف سنگ‌ها و کانی‌ها"
    }
};

let currentLanguage = localStorage.getItem("language") || "en";
let lastActiveSection = localStorage.getItem("lastSection") || "home";

function normalizeString(str) {
    return str.replace(/[\s\u200C]+/g, " ").trim();
}

function splitColors(str) {
    const normalized = str.replace(/[,،]/g, ",").trim();
    return normalizeString(normalized).split(",").map(color => normalizeString(color));
}

function updateFilters() {
    const colorFilter = document.querySelector('#colorFilter .dropdown-content');
    const locationFilter = document.querySelector('#locationFilter .dropdown-content');

    if (colorFilter) {
        colorFilter.innerHTML = filterOptions.colors[currentLanguage].map(color => 
            `<div data-value="${color}"><span class="checkmark">✔</span> ${color}</div>`).join('');
    }
    if (locationFilter) {
        locationFilter.innerHTML = filterOptions.locations[currentLanguage].map(location => 
            `<div data-value="${location}"><span class="checkmark">✔</span> ${location}</div>`).join('');
    }

    document.querySelectorAll('.dropdown-content div').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('selected');
            saveFilterState(); // ذخیره حالت فیلترها بعد از تغییر
        });
    });

    // بازسازی فیلترهای ذخیره‌شده
    const savedFilters = JSON.parse(localStorage.getItem("searchFilters") || "{}");
    if (savedFilters.colors) {
        savedFilters.colors.forEach(color => {
            const item = document.querySelector(`#colorFilter .dropdown-content div[data-value="${color}"]`);
            if (item) item.classList.add("selected");
        });
    }
    if (savedFilters.locations) {
        savedFilters.locations.forEach(location => {
            const item = document.querySelector(`#locationFilter .dropdown-content div[data-value="${location}"]`);
            if (item) item.classList.add("selected");
        });
    }
}

function saveFilterState() {
    const searchInput = document.getElementById("searchInput")?.value || "";
    const hardnessMin = document.getElementById("hardnessMin")?.value || "";
    const hardnessMax = document.getElementById("hardnessMax")?.value || "";
    const colorFilter = Array.from(document.querySelectorAll('#colorFilter .dropdown-content .selected')).map(item => normalizeString(item.getAttribute('data-value')));
    const locationFilter = Array.from(document.querySelectorAll('#locationFilter .dropdown-content .selected')).map(item => normalizeString(item.getAttribute('data-value')));

    const filterState = {
        searchInput,
        hardnessMin,
        hardnessMax,
        colors: colorFilter,
        locations: locationFilter
    };
    localStorage.setItem("searchFilters", JSON.stringify(filterState));
}

function displayRocks(containerId) {
    const rockList = document.getElementById(containerId);
    if (!rockList) return;

    rockList.innerHTML = "";
    rocks.forEach(rock => {
        const rockDiv = document.createElement("div");
        rockDiv.className = "rock-card-mini";
        rockDiv.innerHTML = `
            <img src="${rock.image}" alt="${rock.name[currentLanguage]}" onerror="this.src='https://via.placeholder.com/100?text=No+Image';">
            <h3>${rock.name[currentLanguage]}</h3>
        `;
        rockDiv.addEventListener("click", () => {
            localStorage.setItem("lastSection", lastActiveSection);
            saveFilterState(); // ذخیره فیلترها قبل از رفتن
            window.location.href = `rock.html?id=${rock.name.en.toLowerCase()}`;
        });
        rockList.appendChild(rockDiv);
    });
}

function filterRocks() {
    const searchInput = normalizeString(document.getElementById("searchInput")?.value.toLowerCase() || "");
    const hardnessMin = parseInt(document.getElementById("hardnessMin")?.value) || 1;
    const hardnessMax = parseInt(document.getElementById("hardnessMax")?.value) || 10;
    const colorFilter = Array.from(document.querySelectorAll('#colorFilter .dropdown-content .selected')).map(item => normalizeString(item.getAttribute('data-value')));
    const locationFilter = Array.from(document.querySelectorAll('#locationFilter .dropdown-content .selected')).map(item => normalizeString(item.getAttribute('data-value')));
    const filteredRockList = document.getElementById("filteredRockList");
    if (!filteredRockList) return;

    filteredRockList.innerHTML = "";

    const filtered = rocks.filter(rock => {
        const nameMatch = normalizeString(rock.name.en.toLowerCase()).includes(searchInput) || 
                          normalizeString(rock.name.fa.toLowerCase()).includes(searchInput);
        const hardnessMatch = rock.hardness >= hardnessMin && rock.hardness <= hardnessMax;
        const rockColors = splitColors(rock.color[currentLanguage]);
        const colorMatch = colorFilter.length === 0 || colorFilter.some(filterColor => rockColors.includes(filterColor));
        const rockLocations = splitColors(rock.location[currentLanguage]);
        const locationMatch = locationFilter.length === 0 || locationFilter.some(filterLocation => rockLocations.includes(filterLocation));

        return nameMatch && hardnessMatch && colorMatch && locationMatch;
    });

    saveFilterState(); // ذخیره فیلترها بعد از اعمال

    if (filtered.length === 0) {
        const noResults = document.createElement("p");
        noResults.textContent = translations[currentLanguage].noResults;
        noResults.style.textAlign = "center";
        noResults.style.color = currentLanguage === "fa" ? "#bdc3c7" : "#555";
        filteredRockList.appendChild(noResults);
    } else {
        filtered.forEach(rock => {
            const rockDiv = document.createElement("div");
            rockDiv.className = "rock-card-mini";
            rockDiv.innerHTML = `
                <img src="${rock.image}" alt="${rock.name[currentLanguage]}" onerror="this.src='https://via.placeholder.com/100?text=No+Image';">
                <h3>${rock.name[currentLanguage]}</h3>
            `;
            rockDiv.addEventListener("click", () => {
                localStorage.setItem("lastSection", lastActiveSection);
                saveFilterState(); // ذخیره فیلترها قبل از رفتن
                window.location.href = `rock.html?id=${rock.name.en.toLowerCase()}`;
            });
            filteredRockList.appendChild(rockDiv);
        });
    }
}

function showSuggestions() {
    const searchInput = document.getElementById("searchInput");
    const suggestionsDiv = document.getElementById("suggestions");
    if (!searchInput || !suggestionsDiv) return;

    const inputValue = normalizeString(searchInput.value.toLowerCase());
    suggestionsDiv.innerHTML = "";

    if (inputValue === "") {
        suggestionsDiv.style.display = "none";
        return;
    }

    const suggestions = rocks
        .filter(rock => 
            normalizeString(rock.name.en.toLowerCase()).includes(inputValue) || 
            normalizeString(rock.name.fa.toLowerCase()).includes(inputValue)
        )
        .slice(0, 5);

    if (suggestions.length > 0) {
        suggestions.forEach(rock => {
            const suggestion = document.createElement("div");
            suggestion.textContent = rock.name[currentLanguage];
            suggestion.addEventListener("click", () => {
                searchInput.value = rock.name[currentLanguage];
                suggestionsDiv.style.display = "none";
                filterRocks();
            });
            suggestionsDiv.appendChild(suggestion);
        });
        suggestionsDiv.style.display = "block";
    } else {
        suggestionsDiv.style.display = "none";
    }
}

function resetFilters() {
    const searchInput = document.getElementById("searchInput");
    const hardnessMin = document.getElementById("hardnessMin");
    const hardnessMax = document.getElementById("hardnessMax");
    const filteredRockList = document.getElementById("filteredRockList");
    const suggestions = document.getElementById("suggestions");

    if (searchInput) searchInput.value = "";
    if (hardnessMin) hardnessMin.value = "";
    if (hardnessMax) hardnessMax.value = "";
    document.querySelectorAll('.dropdown-content div').forEach(item => item.classList.remove('selected'));
    if (filteredRockList) filteredRockList.innerHTML = "";
    if (suggestions) suggestions.style.display = "none";
    localStorage.removeItem("searchFilters"); // حذف فیلترهای ذخیره‌شده
}

function showSection(sectionId) {
    document.querySelectorAll("section").forEach(section => {
        section.classList.remove("active");
    });
    const section = document.getElementById(sectionId);
    if (section) {
        section.classList.add("active");
        lastActiveSection = sectionId;
        localStorage.setItem("lastSection", sectionId);
    }

    if (sectionId === "rocks") displayRocks("rockList");
    if (sectionId === "search") {
        const searchInput = document.getElementById("searchInput");
        if (searchInput) searchInput.focus();
        updateFilters();

        // بازسازی فیلترهای ذخیره‌شده
        const savedFilters = JSON.parse(localStorage.getItem("searchFilters") || "{}");
        if (savedFilters.searchInput) document.getElementById("searchInput").value = savedFilters.searchInput;
        if (savedFilters.hardnessMin) document.getElementById("hardnessMin").value = savedFilters.hardnessMin;
        if (savedFilters.hardnessMax) document.getElementById("hardnessMax").value = savedFilters.hardnessMax;

        if (Object.keys(savedFilters).length > 0) filterRocks(); // اعمال فیلترها اگه چیزی ذخیره شده
    }
}

function toggleLanguageDropdown() {
    const languageList = document.getElementById("languageList");
    if (languageList) languageList.classList.toggle("active");
}

function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem("language", lang);
    const languageList = document.getElementById("languageList");
    if (languageList) languageList.classList.remove("active");

    document.getElementById("title").textContent = translations[lang].title;
    document.getElementById("homeText").textContent = translations[lang].homeText;
    document.getElementById("rocksTitle").textContent = translations[lang].rocksTitle;
    document.getElementById("searchTitle").textContent = translations[lang].searchTitle;
    document.getElementById("aboutTitle").textContent = translations[lang].aboutTitle;
    document.getElementById("aboutText").textContent = translations[lang].aboutText;
    document.getElementById("searchInput").placeholder = translations[lang].searchPlaceholder;
    document.getElementById("searchBtn").textContent = translations[lang].searchBtn;
    document.getElementById("resetBtn").textContent = translations[lang].resetBtn;
    document.getElementById("hardnessLabel").textContent = translations[lang].hardnessRange;
    document.getElementById("colorLabel").innerHTML = `${translations[lang].colorLabel} <span class="arrow">▼</span>`;
    document.getElementById("locationLabel").innerHTML = `${translations[lang].locationLabel} <span class="arrow">▼</span>`;
    document.getElementById("menuHome").innerHTML = `<span>🏠</span> ${translations[lang].menuHome}`;
    document.getElementById("menuRocks").innerHTML = `<span>🪨</span> ${translations[lang].menuRocks}`;
    document.getElementById("menuSearch").innerHTML = `<span>🔍</span> ${translations[lang].menuSearch}`;
    document.getElementById("menuAbout").innerHTML = `<span>ℹ️</span> ${translations[lang].menuAbout}`;
    document.querySelector(".explore-btn").textContent = translations[lang].exploreBtn;

    document.body.classList.toggle("rtl", lang === "fa");

    if (document.getElementById("rocks").classList.contains("active")) displayRocks("rockList");
    if (document.getElementById("search").classList.contains("active")) updateFilters();
}

function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.querySelector(".menu-toggle");
    if (sidebar && menuToggle) {
        sidebar.classList.toggle("active");
        menuToggle.classList.toggle("active");
    }
}

function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
}

function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    if (dropdown) {
        dropdown.classList.toggle("active");
        document.querySelectorAll('.dropdown').forEach(otherDropdown => {
            if (otherDropdown.id !== dropdownId) otherDropdown.classList.remove("active");
        });
    }
}

document.addEventListener('click', (event) => {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target)) dropdown.classList.remove('active');
    });
    const suggestions = document.getElementById("suggestions");
    const searchInput = document.getElementById("searchInput");
    if (suggestions && searchInput && !searchInput.contains(event.target) && !suggestions.contains(event.target)) {
        suggestions.style.display = "none";
    }
    const languageList = document.getElementById("languageList");
    const languageBtn = document.querySelector(".language-btn");
    if (languageList && languageBtn && !languageBtn.contains(event.target) && !languageList.contains(event.target)) {
        languageList.classList.remove("active");
    }

    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.querySelector(".menu-toggle");
    if (sidebar && menuToggle) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnMenuToggle = menuToggle.contains(event.target);
        if (!isClickInsideSidebar && !isClickOnMenuToggle && sidebar.classList.contains("active")) {
            sidebar.classList.remove("active");
            menuToggle.classList.remove("active");
        }
    }
});

document.getElementById('colorLabel')?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown('colorFilter');
});

document.getElementById('locationLabel')?.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown('locationFilter');
});

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
        document.getElementById("themeSwitch").checked = true;
    }

    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);

    const hash = window.location.hash || `#${lastActiveSection}`;
    const sectionId = hash.replace("#", "");
    showSection(sectionId);
});

// اضافه کردن ذخیره‌سازی موقع تغییر ورودی‌ها
document.getElementById("searchInput")?.addEventListener("input", saveFilterState);
document.getElementById("hardnessMin")?.addEventListener("input", saveFilterState);
document.getElementById("hardnessMax")?.addEventListener("input", saveFilterState);
