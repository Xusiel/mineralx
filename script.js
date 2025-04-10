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
        title: "MineralX",
        homeText: "Discover the fascinating world of minerals with MineralX!",
        homeSubText: "Unveil the beauty and science of Earth's mineral treasures.",
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
        menuAbout: "About Us"
    },
    fa: {
        title: "MineralX",
        homeText: "جهان شگفت‌انگیز کانی‌ها را با MineralX کشف کنید!",
        homeSubText: "زیبایی و علم گنجینه‌های کانی زمین را آشکار کنید.",
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
        menuAbout: "درباره ما"
    }
};

let currentLanguage = "en";

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

    colorFilter.innerHTML = filterOptions.colors[currentLanguage].map(color => 
        `<div data-value="${color}"><span class="checkmark">✔</span> ${color}</div>`).join('');
    locationFilter.innerHTML = filterOptions.locations[currentLanguage].map(location => 
        `<div data-value="${location}"><span class="checkmark">✔</span> ${location}</div>`).join('');

    document.querySelectorAll('.dropdown-content div').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('selected');
        });
    });
}

function displayRocks(containerId) {
    const rockList = document.getElementById(containerId);
    rockList.innerHTML = "";

    rocks.forEach(rock => {
        const rockDiv = document.createElement("div");
        rockDiv.className = "rock-card";
        rockDiv.innerHTML = `
            <img src="${rock.image}" alt="${rock.name[currentLanguage]}" onerror="this.src='https://via.placeholder.com/150?text=No+Image';">
            <div class="info">
                <h2>${rock.name[currentLanguage]}</h2>
                <p><strong>${translations[currentLanguage].formulaLabel}:</strong> ${rock.formula}</p>
                <p><strong>${translations[currentLanguage].hardnessLabel}:</strong> ${rock.hardness}</p>
                <p><strong>${translations[currentLanguage].colorLabel}:</strong> ${rock.color[currentLanguage]}</p>
                <p><strong>${translations[currentLanguage].locationLabel}:</strong> ${rock.location[currentLanguage]}</p>
                <p><strong>${translations[currentLanguage].usageLabel}:</strong> ${rock.usage[currentLanguage]}</p>
            </div>
        `;
        rockList.appendChild(rockDiv);
    });
}

function filterRocks() {
    const searchInput = normalizeString(document.getElementById("searchInput").value.toLowerCase());
    const hardnessMin = parseInt(document.getElementById("hardnessMin").value) || 1;
    const hardnessMax = parseInt(document.getElementById("hardnessMax").value) || 10;
    const colorFilter = Array.from(document.querySelectorAll('#colorFilter .dropdown-content .selected')).map(item => normalizeString(item.getAttribute('data-value')));
    const locationFilter = Array.from(document.querySelectorAll('#locationFilter .dropdown-content .selected')).map(item => normalizeString(item.getAttribute('data-value')));
    const filteredRockList = document.getElementById("filteredRockList");
    filteredRockList.innerHTML = "";

    console.log("Starting filterRocks...");

    const filtered = rocks.filter(rock => {
        const nameMatch = normalizeString(rock.name.en.toLowerCase()).includes(searchInput) || 
                          normalizeString(rock.name.fa.toLowerCase()).includes(searchInput);

        const hardnessMatch = rock.hardness >= hardnessMin && rock.hardness <= hardnessMax;

        const rawColors = rock.color[currentLanguage];
        const rockColors = splitColors(rawColors);
        console.log(`Rock: ${rock.name[currentLanguage]}, Raw: "${rawColors}", Split: ${JSON.stringify(rockColors)}, Filter: ${JSON.stringify(colorFilter)}`);
        const colorMatch = colorFilter.length === 0 || colorFilter.some(filterColor => {
            const match = rockColors.includes(filterColor);
            console.log(`  Comparing "${filterColor}" with ${JSON.stringify(rockColors)} -> ${match}`);
            return match;
        });

        const rockLocations = splitColors(rock.location[currentLanguage]);
        const locationMatch = locationFilter.length === 0 || locationFilter.some(filterLocation => 
            rockLocations.includes(filterLocation)
        );

        return nameMatch && hardnessMatch && colorMatch && locationMatch;
    });

    if (filtered.length === 0) {
        const noResults = document.createElement("p");
        noResults.textContent = translations[currentLanguage].noResults;
        noResults.style.textAlign = "center";
        noResults.style.color = currentLanguage === "fa" ? "#bdc3c7" : "#555";
        filteredRockList.appendChild(noResults);
    } else {
        filtered.forEach(rock => {
            const rockDiv = document.createElement("div");
            rockDiv.className = "rock-card";
            rockDiv.innerHTML = `
                <img src="${rock.image}" alt="${rock.name[currentLanguage]}" onerror="this.src='https://via.placeholder.com/150?text=No+Image';">
                <div class="info">
                    <h2>${rock.name[currentLanguage]}</h2>
                    <p><strong>${translations[currentLanguage].formulaLabel}:</strong> ${rock.formula}</p>
                    <p><strong>${translations[currentLanguage].hardnessLabel}:</strong> ${rock.hardness}</p>
                    <p><strong>${translations[currentLanguage].colorLabel}:</strong> ${rock.color[currentLanguage]}</p>
                    <p><strong>${translations[currentLanguage].locationLabel}:</strong> ${rock.location[currentLanguage]}</p>
                    <p><strong>${translations[currentLanguage].usageLabel}:</strong> ${rock.usage[currentLanguage]}</p>
                </div>
            `;
            filteredRockList.appendChild(rockDiv);
        });
    }
}

function showSuggestions() {
    const searchInput = normalizeString(document.getElementById("searchInput").value.toLowerCase());
    const suggestionsDiv = document.getElementById("suggestions");
    suggestionsDiv.innerHTML = "";

    if (searchInput === "") {
        suggestionsDiv.style.display = "none";
        return;
    }

    const suggestions = rocks
        .filter(rock => 
            normalizeString(rock.name.en.toLowerCase()).includes(searchInput) || 
            normalizeString(rock.name.fa.toLowerCase()).includes(searchInput)
        )
        .slice(0, 5);

    if (suggestions.length > 0) {
        suggestions.forEach(rock => {
            const suggestion = document.createElement("div");
            suggestion.textContent = rock.name[currentLanguage];
            suggestion.addEventListener("click", () => {
                document.getElementById("searchInput").value = rock.name[currentLanguage];
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
    document.getElementById("searchInput").value = "";
    document.getElementById("hardnessMin").value = "";
    document.getElementById("hardnessMax").value = "";
    document.querySelectorAll('.dropdown-content div').forEach(item => item.classList.remove('selected'));
    document.getElementById("filteredRockList").innerHTML = "";
    document.getElementById("suggestions").style.display = "none";
}

function showSection(sectionId) {
    document.querySelectorAll("section").forEach(section => {
        section.classList.remove("active");
    });
    document.getElementById(sectionId).classList.add("active");

    if (sectionId === "rocks") displayRocks("rockList");
    if (sectionId === "search") {
        document.getElementById("searchInput").focus();
        updateFilters();
    }
}

function toggleLanguageDropdown() {
    const languageList = document.getElementById("languageList");
    languageList.classList.toggle("active");
}

function setLanguage(lang) {
    currentLanguage = lang;
    document.getElementById("languageList").classList.remove("active");
    document.getElementById("title").textContent = translations[currentLanguage].title;
    document.getElementById("homeText").textContent = translations[currentLanguage].homeText;
    document.getElementById("homeSubText").textContent = translations[currentLanguage].homeSubText;
    document.getElementById("rocksTitle").textContent = translations[currentLanguage].rocksTitle;
    document.getElementById("searchTitle").textContent = translations[currentLanguage].searchTitle;
    document.getElementById("aboutTitle").textContent = translations[currentLanguage].aboutTitle;
    document.getElementById("aboutText").textContent = translations[currentLanguage].aboutText;
    document.getElementById("searchInput").placeholder = translations[currentLanguage].searchPlaceholder;
    document.getElementById("searchBtn").textContent = translations[currentLanguage].searchBtn;
    document.getElementById("resetBtn").textContent = translations[currentLanguage].resetBtn;
    document.getElementById("hardnessLabel").textContent = translations[currentLanguage].hardnessRange;
    document.getElementById("colorLabel").innerHTML = `${translations[currentLanguage].colorLabel} <span class="arrow">▼</span>`;
    document.getElementById("locationLabel").innerHTML = `${translations[currentLanguage].locationLabel} <span class="arrow">▼</span>`;
    document.getElementById("menuHome").innerHTML = `<span>🏠</span> ${translations[currentLanguage].menuHome}`;
    document.getElementById("menuRocks").innerHTML = `<span>🪨</span> ${translations[currentLanguage].menuRocks}`;
    document.getElementById("menuSearch").innerHTML = `<span>🔍</span> ${translations[currentLanguage].menuSearch}`;
    document.getElementById("menuAbout").innerHTML = `<span>ℹ️</span> ${translations[currentLanguage].menuAbout}`;
    document.body.classList.toggle("rtl", currentLanguage === "fa");

    if (document.getElementById("rocks").classList.contains("active")) displayRocks("rockList");
    if (document.getElementById("search").classList.contains("active")) {
        updateFilters();
    }
}

function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const menuToggle = document.querySelector(".menu-toggle");
    sidebar.classList.toggle("active");
    menuToggle.classList.toggle("active");
}

function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
}

function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle("active");

    document.querySelectorAll('.dropdown').forEach(otherDropdown => {
        if (otherDropdown.id !== dropdownId) {
            otherDropdown.classList.remove("active");
        }
    });
}

document.addEventListener('click', (event) => {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(event.target)) {
            dropdown.classList.remove('active');
        }
    });

    const suggestions = document.getElementById("suggestions");
    if (!document.getElementById("searchInput").contains(event.target) && !suggestions.contains(event.target)) {
        suggestions.style.display = "none";
    }

    const languageList = document.getElementById("languageList");
    if (!document.querySelector(".language-btn").contains(event.target) && !languageList.contains(event.target)) {
        languageList.classList.remove("active");
    }
});

document.getElementById('colorLabel').addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown('colorFilter');
});

document.getElementById('locationLabel').addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown('locationFilter');
});

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-theme");
    document.getElementById("themeSwitch").checked = true;
}

showSection("home");