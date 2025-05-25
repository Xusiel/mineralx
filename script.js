let rocks = [];
let dailyRocks = []; // آرایه برای ۱۰ کانی رندوم
let currentIndex = 0; // برای ردیابی کانی فعلی در اسلایدر

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
        exploreBtn: "Discover Rocks & Minerals",
        clearHistory: "Clear History",
        sliderTitle: "Daily Featured Minerals"
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
        exploreBtn: "کشف سنگ‌ها و کانی‌ها",
        clearHistory: "پاک کردن تاریخچه",
        sliderTitle: "کانی‌های ویژه روز"
    }
};

let currentLanguage = localStorage.getItem("language") || "en";
let lastActiveSection = localStorage.getItem("lastSection") || "home";

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
            console.log("Rocks loaded successfully:", rocks);
            initializePage();
        })
        .catch(error => {
            console.error('Error loading rocks:', error);
            const errorMessage = document.createElement("p");
            errorMessage.textContent = translations[currentLanguage].noResults || "Error loading data. Please try again.";
            errorMessage.style.textAlign = "center";
            errorMessage.style.color = "#e74c3c";
            document.getElementById("rockList")?.appendChild(errorMessage);
        });
}

function loadFeaturedSlider() {
    const sliderContainer = document.getElementById("sliderContainer");
    if (!sliderContainer || rocks.length === 0) {
        console.warn("Slider container or rocks data not available.");
        return;
    }

    // انتخاب ۱۰ کانی رندوم به صورت ایمن
    dailyRocks = [];
    const usedIndices = new Set();
    while (dailyRocks.length < Math.min(10, rocks.length) && usedIndices.size < rocks.length) {
        const randomIndex = Math.floor(Math.random() * rocks.length);
        if (!usedIndices.has(randomIndex)) {
            usedIndices.add(randomIndex);
            dailyRocks.push(rocks[randomIndex]);
        }
    }

    if (dailyRocks.length === 0) {
        console.error("No rocks available to load into the slider.");
        sliderContainer.innerHTML = `<p>${translations[currentLanguage].noResults || "No minerals available."}</p>`;
        return;
    }

    currentIndex = 0; // شروع از اولین کانی

    // پاکسازی اسلایدر قبل از بارگذاری اولیه
    sliderContainer.innerHTML = "";

    // ایجاد و اضافه کردن اسلایدها با انیمیشن اولیه
    const prevIndex = (currentIndex - 1 + dailyRocks.length) % dailyRocks.length;
    const nextIndex = (currentIndex + 1) % dailyRocks.length;

    const prevRock = dailyRocks[prevIndex];
    const currentRock = dailyRocks[currentIndex];
    const nextRock = dailyRocks[nextIndex];

    const prevSlide = createSlide(prevRock, "adjacent", "slide-in-right");
    const currentSlide = createSlide(currentRock, "active", "slide-in-right");
    const nextSlide = createSlide(nextRock, "adjacent", "slide-in-right");

    // اضافه کردن اسلایدها به DOM
    sliderContainer.appendChild(prevSlide);
    sliderContainer.appendChild(currentSlide);
    sliderContainer.appendChild(nextSlide);

    // حذف کلاس انیمیشن بعد از اتمام (برای جلوگیری از تکرار)
    setTimeout(() => {
        prevSlide.classList.remove("slide-in-right");
        currentSlide.classList.remove("slide-in-right");
        nextSlide.classList.remove("slide-in-right");
    }, 500); // مدت انیمیشن (0.5s)
}

function displayRocksInSlider(direction = "next") {
    const sliderContainer = document.getElementById("sliderContainer");
    if (!sliderContainer) return;

    // ذخیره اسلایدهای فعلی برای انیمیشن خروج
    const currentSlides = Array.from(sliderContainer.children);

    // انیمیشن خروج برای اسلایدهای فعلی
    currentSlides.forEach(slide => {
        slide.classList.add(direction === "next" ? "slide-out-left" : "slide-out-right");
    });

    // ایجاد اسلایدهای جدید برای همه ۱۰ کانی
    const newSlides = dailyRocks.map((rock, index) => {
        const isActive = index === currentIndex;
        const isAdjacent = index === (currentIndex - 1 + dailyRocks.length) % dailyRocks.length ||
                          index === (currentIndex + 1) % dailyRocks.length;
        const className = isActive ? "active" : (isAdjacent ? "adjacent" : "");
        return createSlide(rock, className, direction === "next" ? "slide-in-right" : "slide-in-left");
    });

    // اضافه کردن اسلایدهای جدید بعد از شروع انیمیشن خروج
    setTimeout(() => {
        sliderContainer.innerHTML = ""; // حذف اسلایدهای قبلی
        newSlides.forEach(slide => sliderContainer.appendChild(slide));
    }, 250); // نصف زمان انیمیشن (برای همپوشانی)
}

    // اضافه کردن اسلایدهای جدید بعد از شروع انیمیشن خروج
    setTimeout(() => {
        sliderContainer.innerHTML = ""; // حذف اسلایدهای قبلی
        sliderContainer.appendChild(prevSlide);
        sliderContainer.appendChild(currentSlide);
        sliderContainer.appendChild(nextSlide);
    }, 250); // نصف زمان انیمیشن (برای همپوشانی)
}

function createSlide(rock, className, animationClass) {
    const slide = document.createElement("div");
    slide.className = `slider-item ${className} ${animationClass || ""}`;
    const description = rock.description?.[currentLanguage]?.substring(0, 80) + (rock.description?.[currentLanguage]?.length > 80 ? "..." : "") || "";
    slide.innerHTML = `
        <img src="${rock.image}" alt="${rock.name[currentLanguage]}" onerror="this.src='https://via.placeholder.com/180?text=No+Image';">
        <h3>${rock.name[currentLanguage]}</h3>
        ${description ? `<p>${description}</p>` : ""}
    `;
    slide.addEventListener("click", () => {
        localStorage.setItem("lastSection", lastActiveSection);
        window.location.href = `rock.html?id=${rock.name.en.toLowerCase()}`;
    });
    return slide;
}

function setupSliderControls() {
    const prevBtn = document.getElementById("sliderPrev");
    const nextBtn = document.getElementById("sliderNext");
    if (!prevBtn || !nextBtn) return;

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + dailyRocks.length) % dailyRocks.length;
        displayRocksInSlider("prev");
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % dailyRocks.length;
        displayRocksInSlider("next");
    });
}

function initializePage() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
        document.getElementById("themeSwitch")?.setAttribute("checked", "checked");
    }

    const savedLanguage = localStorage.getItem("language") || "en";
    setLanguage(savedLanguage);

    loadFeaturedSlider();
    setupSliderControls();

    const hash = window.location.hash;
    const sectionId = hash ? hash.replace("#", "") : "home";
    showSection(sectionId);

    const exploreBtn = document.getElementById("exploreBtn");
    if (exploreBtn) {
        exploreBtn.addEventListener("click", () => {
            showSection("rocks");
            window.location.hash = "#rocks";
        });
    }

    const logo = document.querySelector(".logo");
    if (logo) {
        logo.addEventListener("click", () => {
            showSection("home");
            window.location.hash = "#home";
        });
    }

    const menuItems = document.querySelectorAll("#sidebar ul li a");
    menuItems.forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const sectionId = item.getAttribute("href").replace("#", "");
            showSection(sectionId);
            window.location.hash = `#${sectionId}`;
            toggleMenu();
        });
    });

    const languageBtn = document.querySelector(".language-btn");
    if (languageBtn) {
        languageBtn.addEventListener("click", toggleLanguageDropdown);
    }

    const languageOptions = document.querySelectorAll(".language-option");
    languageOptions.forEach(option => {
        option.addEventListener("click", () => {
            const lang = option.getAttribute("data-lang");
            setLanguage(lang);
        });
    });

    const menuToggle = document.querySelector(".menu-toggle");
    if (menuToggle) {
        menuToggle.addEventListener("click", toggleMenu);
    }

    const closeBtn = document.querySelector(".close-btn");
    if (closeBtn) {
        closeBtn.addEventListener("click", toggleMenu);
    }

    const themeSwitch = document.getElementById("themeSwitch");
    if (themeSwitch) {
        themeSwitch.addEventListener("change", toggleTheme);
    }
}

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

function saveSearchHistory(searchTerm) {
    if (!searchTerm || searchTerm.trim() === "") return;
    const normalizedTerm = normalizeString(searchTerm);
    let history = JSON.parse(localStorage.getItem("searchHistory") || "[]");
    history = history.filter(term => term !== normalizedTerm);
    history.unshift(normalizedTerm);
    history = history.slice(0, 8);
    localStorage.setItem("searchHistory", JSON.stringify(history));
}

function clearSearchHistory() {
    localStorage.removeItem("searchHistory");
    const historyDiv = document.getElementById("searchHistory");
    if (historyDiv) {
        historyDiv.innerHTML = "";
        historyDiv.style.display = "none";
    }
}

function showSearchHistory() {
    const searchInput = document.getElementById("searchInput");
    const historyDiv = document.getElementById("searchHistory");
    const suggestionsDiv = document.getElementById("suggestions");
    if (!searchInput || !historyDiv) return;

    const history = JSON.parse(localStorage.getItem("searchHistory") || "[]");
    historyDiv.innerHTML = "";

    if (history.length === 0 || searchInput.value.trim() !== "") {
        historyDiv.style.display = "none";
        return;
    }

    history.forEach(term => {
        const historyItem = document.createElement("div");
        historyItem.textContent = term;
        historyItem.addEventListener("click", () => {
            searchInput.value = term;
            historyDiv.style.display = "none";
            filterRocks();
        });
        historyDiv.appendChild(historyItem);
    });

    const clearItem = document.createElement("div");
    clearItem.className = "clear-history";
    clearItem.textContent = translations[currentLanguage].clearHistory;
    clearItem.addEventListener("click", () => {
        clearSearchHistory();
    });
    historyDiv.appendChild(clearItem);

    historyDiv.style.display = "block";
    suggestionsDiv.style.display = "none";
}

function displayActiveFilters() {
    const activeFiltersDiv = document.getElementById("activeFilters");
    if (!activeFiltersDiv) return;

    activeFiltersDiv.innerHTML = "";
    const savedFilters = JSON.parse(localStorage.getItem("searchFilters") || "{}");

    if (savedFilters.searchInput) {
        const tag = document.createElement("span");
        tag.className = "filter-tag";
        tag.innerHTML = `${savedFilters.searchInput} <span class="remove">×</span>`;
        tag.addEventListener("click", () => {
            document.getElementById("searchInput").value = "";
            saveFilterState();
            filterRocks();
            displayActiveFilters();
        });
        activeFiltersDiv.appendChild(tag);
    }

    if (savedFilters.hardnessMin || savedFilters.hardnessMax) {
        const tag = document.createElement("span");
        tag.className = "filter-tag";
        const min = savedFilters.hardnessMin || "1";
        const max = savedFilters.hardnessMax || "10";
        tag.innerHTML = `${translations[currentLanguage].hardnessLabel}: ${min}-${max} <span class="remove">×</span>`;
        tag.addEventListener("click", () => {
            document.getElementById("hardnessMin").value = "";
            document.getElementById("hardnessMax").value = "";
            saveFilterState();
            filterRocks();
            displayActiveFilters();
        });
        activeFiltersDiv.appendChild(tag);
    }

    savedFilters.colors?.forEach(color => {
        const tag = document.createElement("span");
        tag.className = "filter-tag";
        tag.innerHTML = `${color} <span class="remove">×</span>`;
        tag.addEventListener("click", () => {
            const item = document.querySelector(`#colorFilter .dropdown-content div[data-value="${color}"]`);
            if (item) item.classList.remove("selected");
            saveFilterState();
            filterRocks();
            displayActiveFilters();
        });
        activeFiltersDiv.appendChild(tag);
    });

    savedFilters.locations?.forEach(location => {
        const tag = document.createElement("span");
        tag.className = "filter-tag";
        tag.innerHTML = `${location} <span class="remove">×</span>`;
        tag.addEventListener("click", () => {
            const item = document.querySelector(`#locationFilter .dropdown-content div[data-value="${location}"]`);
            if (item) item.classList.remove("selected");
            saveFilterState();
            filterRocks();
            displayActiveFilters();
        });
        activeFiltersDiv.appendChild(tag);
    });

    activeFiltersDiv.style.display = activeFiltersDiv.children.length > 0 ? "flex" : "none";
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
    displayActiveFilters();
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
    displayActiveFilters();
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
    if (searchInput) saveSearchHistory(searchInput);
    displayActiveFilters();

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
    const historyDiv = document.getElementById("searchHistory");
    if (!searchInput || !suggestionsDiv) return;

    const inputValue = normalizeString(searchInput.value.toLowerCase());
    suggestionsDiv.innerHTML = "";

    if (inputValue === "") {
        suggestionsDiv.style.display = "none";
        showSearchHistory();
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
        historyDiv.style.display = "none";
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
    const history = document.getElementById("searchHistory");
    const activeFilters = document.getElementById("activeFilters");

    if (searchInput) searchInput.value = "";
    if (hardnessMin) hardnessMin.value = "";
    if (hardnessMax) hardnessMax.value = "";
    document.querySelectorAll('.dropdown-content div').forEach(item => item.classList.remove('selected'));
    if (filteredRockList) filteredRockList.innerHTML = "";
    if (suggestions) suggestions.style.display = "none";
    if (history) history.style.display = "none";
    if (activeFilters) activeFilters.style.display = "none";
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
    document.getElementById("sliderTitle").textContent = translations[lang].sliderTitle;

    document.body.classList.toggle("rtl", lang === "fa");

    if (document.getElementById("rocks").classList.contains("active")) displayRocks("rockList");
    if (document.getElementById("search").classList.contains("active")) {
        updateFilters();
        displayActiveFilters();
    }
    loadFeaturedSlider();
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
    const history = document.getElementById("searchHistory");
    const searchInput = document.getElementById("searchInput");
    if (suggestions && searchInput && !searchInput.contains(event.target) && !suggestions.contains(event.target)) {
        suggestions.style.display = "none";
    }
    if (history && searchInput && !searchInput.contains(event.target) && !history.contains(event.target)) {
        history.style.display = "none";
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

document.getElementById("searchInput")?.addEventListener("input", () => {
    saveFilterState();
    showSuggestions();
});

document.getElementById("searchInput")?.addEventListener("focus", showSearchHistory);

document.getElementById("searchInput")?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        filterRocks();
    }
});

document.getElementById("hardnessMin")?.addEventListener("input", () => {
    saveFilterState();
    displayActiveFilters();
});

document.getElementById("hardnessMax")?.addEventListener("input", () => {
    saveFilterState();
    displayActiveFilters();
});

document.getElementById("searchBtn")?.addEventListener("click", () => {
    filterRocks();
});

document.getElementById("resetBtn")?.addEventListener("click", () => {
    resetFilters();
});
