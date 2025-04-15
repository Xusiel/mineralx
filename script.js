let rocks = []; // آرایه خالی که با fetch پر می‌شه

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

// لود دیتا از rocks.json
function loadRocksData() {
    fetch('rocks.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            rocks = data;
            console.log("Rocks loaded successfully:", rocks); // برای دیباگ
            initializePage();
        })
        .catch(error => {
            console.error('Error loading rocks:', error);
            // نمایش پیغام خطا تو صفحه
            const errorMessage = document.createElement("p");
            errorMessage.textContent = translations[currentLanguage].noResults || "Error loading data. Please try again.";
            errorMessage.style.textAlign = "center";
            errorMessage.style.color = "#e74c3c";
            document.getElementById("rockList")?.appendChild(errorMessage);
        });
}

function initializePage() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
        document.getElementById("themeSwitch")?.setAttribute("checked", "checked");
    }

    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);

    const hash = window.location.hash;
    const sectionId = hash ? hash.replace("#", "") : "home";
    showSection(sectionId);
}

// موقع لود صفحه، دیتا رو بخون
document.addEventListener("DOMContentLoaded", () => {
    loadRocksData();
});

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
            saveFilterState();
        });
    });

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
            saveFilterState();
            window.location.href = `rock.html?id=${rock.name.en.toLowerCase()}`;
        });
        rockList.appendChild(rockDiv);
    });
}

function filterRocks() {
    const searchInput = normalizeString(document.getElementById("searchInput")?.value.toLowerCase() || "");
    const hardnessMin = document.getElementById("hardnessMin")?.value ? parseInt(document.getElementById("hardnessMin").value) : "";
    const hardnessMax = document.getElementById("hardnessMax")?.value ? parseInt(document.getElementById("hardnessMax").value) : "";
    const colorFilter = Array.from(document.querySelectorAll('#colorFilter .dropdown-content .selected')).map(item => normalizeString(item.getAttribute('data-value')));
    const locationFilter = Array.from(document.querySelectorAll('#locationFilter .dropdown-content .selected')).map(item => normalizeString(item.getAttribute('data-value')));
    const filteredRockList = document.getElementById("filteredRockList");
    if (!filteredRockList) return;

    filteredRockList.innerHTML = "";

    const isFilterActive = searchInput !== "" || hardnessMin !== "" || hardnessMax !== "" || colorFilter.length > 0 || locationFilter.length > 0;

    if (!isFilterActive) {
        const noResults = document.createElement("p");
        noResults.textContent = translations[currentLanguage].noResults;
        noResults.style.textAlign = "center";
        noResults.style.color = currentLanguage === "fa" ? "#bdc3c7" : "#555";
        filteredRockList.appendChild(noResults);
        return;
    }

    const filtered = rocks.filter(rock => {
        const nameMatch = normalizeString(rock.name.en.toLowerCase()).includes(searchInput) || 
                          normalizeString(rock.name.fa.toLowerCase()).includes(searchInput);
        const hardnessMatch = (!hardnessMin || rock.hardness >= hardnessMin) && (!hardnessMax || rock.hardness <= hardnessMax);
        const rockColors = splitColors(rock.color[currentLanguage]);
        const colorMatch = colorFilter.length === 0 || colorFilter.some(filterColor => rockColors.includes(filterColor));
        const rockLocations = splitColors(rock.location[currentLanguage]);
        const locationMatch = locationFilter.length === 0 || locationFilter.some(filterLocation => rockLocations.includes(filterLocation));

        return nameMatch && hardnessMatch && colorMatch && locationMatch;
    });

    saveFilterState();

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
                saveFilterState();
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
    localStorage.removeItem("searchFilters");
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

        const savedFilters = JSON.parse(localStorage.getItem("searchFilters") || "{}");
        if (savedFilters.searchInput) document.getElementById("searchInput").value = savedFilters.searchInput;
        if (savedFilters.hardnessMin) document.getElementById("hardnessMin").value = savedFilters.hardnessMin;
        if (savedFilters.hardnessMax) document.getElementById("hardnessMax").value = savedFilters.hardnessMax;

        if (savedFilters.searchInput || savedFilters.hardnessMin || savedFilters.hardnessMax || savedFilters.colors?.length || savedFilters.locations?.length) {
            filterRocks();
        } else {
            document.getElementById("filteredRockList").innerHTML = "";
        }
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

document.getElementById("searchInput")?.addEventListener("input", saveFilterState);
document.getElementById("hardnessMin")?.addEventListener("input", saveFilterState);
document.getElementById("hardnessMax")?.addEventListener("input", saveFilterState);