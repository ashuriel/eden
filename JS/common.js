// ========== 通用JavaScript函数 ==========

// 西班牙语切换功能
function toggleSpanish() {
    const div = document.getElementById("spanish-version");
    const link = document.querySelector(".toggle-link");
    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";
        link.textContent = "Ocultar versión en español";
    } else {
        div.style.display = "none";
        link.textContent = "Versión en español";
    }
}

// ========== 主页星空动画 ==========
function createStars() {
    const starsChars = ['✦', '✧', '·', '*', '.','✶', '✷'];
    const numStars = 400; // 星星数量
    
    // 创建不同层次的星星
    for (let i = 0; i < numStars; i++) {
        const stars = document.createElement("div");
        stars.className = "stars";
        stars.textContent = starsChars[Math.floor(Math.random() * starsChars.length)];
        
        // 随机位置
        stars.style.left = Math.random() * 100 + "vw";
        stars.style.top = Math.random() * 100 + "vh";
        
        // 随机大小
        const size = Math.random() * 12 + 8;
        stars.style.fontSize = size + "px";
        
        // 随机透明度
        stars.style.opacity = Math.random() * 0.7 + 0.3;
        
        // 随机闪烁速度
        const twinkleDuration = (Math.random() * 4 + 2) + "s";
        stars.style.animationDuration = twinkleDuration + ", " + (Math.random() * 500 + 100) + "s";
        
        // 随机漂移方向和距离
        const driftX = (Math.random() * 200 - 100) + "px";
        const driftY = (Math.random() * 200 - 100) + "px";
        stars.style.setProperty('--drift-x', driftX);
        stars.style.setProperty('--drift-y', driftY);
        
        // 随机延迟
        stars.style.animationDelay = Math.random() * 5 + "s";
        
        document.body.appendChild(stars);
    }
}

// ========== 花园页面动画 ==========
function createGardenElements() {
    // 花园元素字符 - 只保留花和星星相关符号
    const gardenChars = ['✿', '❀', '❁', '❂', '❃', '❄', '❅', '❆', '❇', '❈', '❉', '❊', '❋', '✢', '✣', '✤', '✥', '✦', '✧', '✩', '✪', '✫', '✬', '✭', '✮', '✯', '✰', '✱', '✲', '✳', '✴', '✵', '✶', '✷', '✸', '✹', '✺', '✻', '✼', '✽', '✾', '✿', '❀', '❁', '❂', '❃', '❄', '❅', '❆', '❇', '❈', '❉', '❊', '❋'];
    const petalChars = ['✿', '❀', '❁', '❂', '❃', '❄', '❅', '❆', '❇', '❈', '❉', '❊', '❋', '✢', '✣', '✤', '✥', '✦', '✧', '✩', '✪', '✫', '✬', '✭', '✮', '✯', '✰', '✱', '✲', '✳', '✴', '✵', '✶', '✷', '✸', '✹', '✺', '✻', '✼', '✽', '✾'];
    const numGardenElements = 200; // 花园元素数量
    const numPetals = 50; // 花瓣数量
    
    // 创建花园元素
    for (let i = 0; i < numGardenElements; i++) {
        const element = document.createElement("div");
        element.className = "garden-elements";
        element.textContent = gardenChars[Math.floor(Math.random() * gardenChars.length)];
        
        // 随机位置
        element.style.left = Math.random() * 100 + "vw";
        element.style.top = Math.random() * 100 + "vh";
        
        // 随机大小
        const size = Math.random() * 16 + 12;
        element.style.fontSize = size + "px";
        
        // 随机颜色 - 灰色和白色深浅不一
        const colors = ['#ffffff', '#f0f0f0', '#e0e0e0', '#d0d0d0', '#c0c0c0', '#b0b0b0', '#a0a0a0', '#909090', '#808080', '#707070', '#606060', '#505050', '#404040', '#303030', '#202020', '#101010'];
        element.style.color = colors[Math.floor(Math.random() * colors.length)];
        
        // 随机透明度
        element.style.opacity = Math.random() * 0.6 + 0.3;
        
        // 随机动画持续时间
        const floatDuration = (Math.random() * 3 + 2) + "s";
        const swayDuration = (Math.random() * 20 + 10) + "s";
        element.style.animationDuration = floatDuration + ", " + swayDuration;
        
        // 随机摇摆方向和距离
        const swayX = (Math.random() * 40 - 20) + "px";
        const swayY = (Math.random() * 30 - 15) + "px";
        element.style.setProperty('--sway-x', swayX);
        element.style.setProperty('--sway-y', swayY);
        
        // 随机延迟
        element.style.animationDelay = Math.random() * 5 + "s";
        
        document.body.appendChild(element);
    }
    
    // 创建飘落的花瓣
    for (let i = 0; i < numPetals; i++) {
        const petal = document.createElement("div");
        petal.className = "petals";
        petal.textContent = petalChars[Math.floor(Math.random() * petalChars.length)];
        
        // 随机水平位置
        petal.style.left = Math.random() * 100 + "vw";
        
        // 随机大小
        const size = Math.random() * 12 + 8;
        petal.style.fontSize = size + "px";
        
        // 随机颜色 - 灰色和白色深浅不一
        const colors = ['#ffffff', '#f0f0f0', '#e0e0e0', '#d0d0d0', '#c0c0c0', '#b0b0b0', '#a0a0a0', '#909090', '#808080', '#707070', '#606060', '#505050', '#404040', '#303030', '#202020', '#101010'];
        petal.style.color = colors[Math.floor(Math.random() * colors.length)];
        
        // 随机下落速度
        const fallDuration = (Math.random() * 6 + 4) + "s";
        const twirlDuration = (Math.random() * 4 + 2) + "s";
        petal.style.animationDuration = fallDuration + ", " + twirlDuration;
        
        // 随机延迟
        petal.style.animationDelay = Math.random() * 8 + "s";
        
        document.body.appendChild(petal);
    }
}

// ========== 页面初始化函数 ==========
function initializePage() {
    // 检查当前页面类型并初始化相应的动画
    const pathname = window.location.pathname;
    const currentPage = pathname.includes('Another/page3.html') ? 'Another/page3.html' : pathname.split('/').pop();
    
    // 为body添加页面特定的类名
    if (currentPage === 'index.html' || currentPage === '') {
        // 主页 - 创建星空动画
        document.body.classList.add('home-page');
        createStars();
    } else if (currentPage === 'garden.html') {
        // 花园页面 - 创建花园元素动画
        document.body.classList.add('garden-page');
        createGardenElements();
    } else if (currentPage === 'door.html') {
        // 门页面 - 添加门页面类
        document.body.classList.add('door-page');
    } else if (currentPage === 'page2.html') {
        // 坠页面 - 添加坠页面类
        document.body.classList.add('fall-page');
    } else if (currentPage === 'Another/page3.html') {
        // 梦页面 - 添加梦页面类并创建星空
        document.body.classList.add('dream-page');
        createDreamStars();
    } else if (currentPage === 'garden2.html') {
        // 花园2页面 - 添加花园2页面类
        document.body.classList.add('garden2-page');
    } else if (currentPage === 'ruin.html') {
        // 废墟页面 - 添加废墟页面类并创建漂浮字符
        document.body.classList.add('ruin-page');
        createRuinFloatingChars();
    } else if (currentPage === 'paper.html') {
        // 纸条页面 - 添加纸条页面类
        document.body.classList.add('paper-page');
    } else if (currentPage === 'ocean.html') {
        // 海页面 - 添加海页面类并创建漂浮字符
        document.body.classList.add('ocean-page');
        createOceanFloatingChars();
    } else if (currentPage === 'ruin2.html') {
        // 废墟2页面 - 添加废墟2页面类
        document.body.classList.add('ruin2-page');
    }
    // 其他页面不需要特殊动画
}

// 创建梦页面星空
function createDreamStars() {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'dream-stars';
    document.body.appendChild(starsContainer);
    
    // 星空符号数组
    const starSymbols = ['✦', '✧', '✩', '✪', '✫', '✬', '✭', '✮', '✯', '✰', '★', '☆', '⋆', '✸', '✹', '✺', '✻', '✼', '✽', '✾', '✿', '❀', '❁', '❂', '❃', '❄', '❅', '❆', '❇', '❈', '❉', '❊', '❋'];
    
    // 创建不同亮度的星星 - 增加数量
    const starCounts = {
        bright: 30,    // 明亮星星
        normal: 80,    // 普通星星
        dim: 120       // 暗淡星星
    };
    
    // 创建明亮星星
    for (let i = 0; i < starCounts.bright; i++) {
        createStar(starsContainer, starSymbols, 'bright');
    }
    
    // 创建普通星星
    for (let i = 0; i < starCounts.normal; i++) {
        createStar(starsContainer, starSymbols, 'normal');
    }
    
    // 创建暗淡星星
    for (let i = 0; i < starCounts.dim; i++) {
        createStar(starsContainer, starSymbols, 'dim');
    }
}

// 创建单个星星
function createStar(container, symbols, brightness) {
    const star = document.createElement('div');
    star.className = `dream-star ${brightness}`;
    
    // 随机选择星星符号
    const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
    star.textContent = randomSymbol;
    
    // 随机位置 - 只在上半部分
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 50 + '%';  // 只在上半部分 (0-50%)
    
    // 随机动画延迟
    const delay = Math.random() * 3;
    star.style.animationDelay = delay + 's';
    
    container.appendChild(star);
}

// ========== 废墟页面漂浮字符 ==========
function createRuinFloatingChars() {
    const charsContainer = document.createElement('div');
    charsContainer.className = 'ruin-floating-chars';
    document.body.appendChild(charsContainer);
    
    // 字符数组 - 只使用"。"和"。"的不同大小
    const chars = ['。', '。'];
    
    // 创建不同大小的字符
    const charCounts = {
        large: 30,    // 大字符
        medium: 50,   // 中等字符
        small: 80     // 小字符
    };
    
    // 创建大字符
    for (let i = 0; i < charCounts.large; i++) {
        createRuinChar(charsContainer, chars, 'large');
    }
    
    // 创建中等字符
    for (let i = 0; i < charCounts.medium; i++) {
        createRuinChar(charsContainer, chars, 'medium');
    }
    
    // 创建小字符
    for (let i = 0; i < charCounts.small; i++) {
        createRuinChar(charsContainer, chars, 'small');
    }
}

// 创建单个废墟字符
function createRuinChar(container, chars, size) {
    const char = document.createElement('div');
    char.className = `ruin-char ${size}`;
    
    // 随机选择字符
    const randomChar = chars[Math.floor(Math.random() * chars.length)];
    char.textContent = randomChar;
    
    // 随机水平位置
    char.style.left = Math.random() * 100 + '%';
    
    // 随机动画延迟
    const delay = Math.random() * 8;
    char.style.animationDelay = delay + 's';
    
    // 随机水平漂移
    const driftX = (Math.random() * 100 - 50) + 'px';
    char.style.setProperty('--drift-x', driftX);
    
    container.appendChild(char);
}

// ========== 海页面漂浮字符 ==========
function createOceanFloatingChars() {
    const charsContainer = document.createElement('div');
    charsContainer.className = 'ocean-floating-chars';
    document.body.appendChild(charsContainer);
    
    // 字符数组 - 只使用"。"字符
    const chars = ['。'];
    
    // 创建不同大小的字符
    const charCounts = {
        large: 25,    // 大字符
        medium: 40,   // 中等字符
        small: 60     // 小字符
    };
    
    // 创建大字符
    for (let i = 0; i < charCounts.large; i++) {
        createOceanChar(charsContainer, chars, 'large');
    }
    
    // 创建中等字符
    for (let i = 0; i < charCounts.medium; i++) {
        createOceanChar(charsContainer, chars, 'medium');
    }
    
    // 创建小字符
    for (let i = 0; i < charCounts.small; i++) {
        createOceanChar(charsContainer, chars, 'small');
    }
}

// 创建单个海字符
function createOceanChar(container, chars, size) {
    const char = document.createElement('div');
    char.className = `ocean-char ${size}`;
    
    // 随机选择字符
    const randomChar = chars[Math.floor(Math.random() * chars.length)];
    char.textContent = randomChar;
    
    // 随机水平位置
    char.style.left = Math.random() * 100 + '%';
    
    // 随机动画延迟
    const delay = Math.random() * 10;
    char.style.animationDelay = delay + 's';
    
    // 随机水平漂移
    const driftX = (Math.random() * 100 - 50) + 'px';
    char.style.setProperty('--drift-x', driftX);
    
    container.appendChild(char);
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', initializePage);
