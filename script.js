/* script.js */

// 1. 渲染函数：根据 data.js 动态生成页面和目录项
/* script.js */

// script.js 核心渲染逻辑更新

/* script.js */

/* script.js */

/* script.js */

function renderContent() {
    const container = document.getElementById('dynamic-chapters');
    const nav = document.getElementById('auto-nav');

    if (typeof CHAPTER_DATA === 'undefined') return;

    // 1. 初始化导航（首页链接）
    nav.innerHTML = `
        <a href="#home" onclick="setActive(this, 'blue')" class="nav-link flex items-center gap-2 p-2 rounded-xl font-bold text-[12px] active-blue">
            首页愿景
        </a>`;

    // 2. 清空容器
    container.innerHTML = "";

    CHAPTER_DATA.forEach((data, index) => {
        // --- 第一部分：渲染页面 Section 容器 ---
        const section = document.createElement('section');
        // 确保 ID 唯一，防止多个相同 ID 的对象导divider致跳转错误
        section.id = `${data.id}_${index}`;

        // --- 【新增：背景图片处理逻辑】 ---
        if (data.bgUrl) {
            // 设置背景图片基本样式
            section.style.backgroundImage = `url('${data.bgUrl}')`;
            section.style.backgroundSize = 'cover';
            section.style.backgroundPosition = 'center';
            section.style.backgroundRepeat = 'no-repeat';
            
            // 如果设置了 bgOpacity (0-1)，我们利用线性渐变做一个“半透明遮罩”
            // 这样可以确保背景图不会干扰上面文字的阅读
            if (data.bgOpacity !== undefined) {
                const maskAlpha = 1 - data.bgOpacity; // 计算遮罩深度
                section.style.backgroundImage = `linear-gradient(rgba(255, 255, 255, ${maskAlpha}), rgba(255, 255, 255, ${maskAlpha})), url('${data.bgUrl}')`;
            }
        }
        // -------------------------------

        if (data.type === 'divider') {
            section.className = 'ppt-page items-center justify-center text-center bg-gray-50/50';
            section.innerHTML = `
                <div class="space-y-6">
                    <h3 class="text-${data.theme}-500 font-bold text-xs uppercase tracking-[0.4em] opacity-80">${data.chapter}</h3>
                    <div class="h-1 w-12 bg-${data.theme}-500 mx-auto rounded-full opacity-30"></div>
                    <h2 class="text-5xl font-extrabold text-gray-800 leading-tight">${data.title}</h2>
                    <p class="text-xl font-bold text-gray-300 mt-4 max-w-2xl mx-auto">${data.subtitle}</p>
                </div>`;
        } else {
            section.className = 'ppt-page';
            section.innerHTML = `
                <div class="mb-4 page-header">
                    <h3 class="text-${data.theme}-500 font-bold text-[12px] uppercase tracking-[0.2em] mb-1">${data.chapter}</h3>
                    <h2 class="text-3xl font-extrabold text-gray-800">${data.title}</h2>
                </div>
                <div class="content-wrapper flex flex-col gap-3 w-full"></div>`;
        }
        container.appendChild(section);

        const wrapper = section.querySelector('.content-wrapper');
        if (!wrapper && data.type !== 'divider') return;

        // --- 第二部分：核心逻辑 - 根据 data 字段的书写顺序动态渲染 ---
        
        // 遍历当前对象的所有 Key，确保渲染顺序与 data.js 中的书写顺序一致
        Object.keys(data).forEach(key => {

            // 1. 处理 Tips 组件
            if (key === 'tips' && data.tips) {
                const alignClass = data.tipsAlign === 'center' ? 'justify-center' : (data.tipsAlign === 'right' ? 'justify-end' : 'justify-start');
                const colorTheme = data.tipsColor || data.theme || 'blue';
                wrapper.insertAdjacentHTML('beforeend', `
                    <div class="flex ${alignClass} w-full my-0.5 no-print">
                        <div class="duo-tips duo-${colorTheme}" style="padding: 6px 16px; font-size: 13px;">${data.tips}</div>
                    </div>`);
            }

            // 2. 处理 Cards 组件
            if (key === 'cards' && data.cards) {
                const colorMap = {
                    blue: { bg: 'blue-50/50', border: 'blue-100', text: 'blue-600' },
                    green: { bg: 'green-50/50', border: 'green-100', text: 'green-600' },
                    gray: { bg: 'gray-50/50', border: 'gray-100', text: 'gray-500' },
                    orange: { bg: 'orange-50/50', border: 'orange-100', text: 'orange-600' },
                    purple: { bg: 'purple-50/50', border: 'purple-100', text: 'purple-600' }
                };
                const cardsHtml = data.cards.map(card => {
                    const style = colorMap[card.type] || colorMap.gray;
                    return `
                        <div class="card-container bg-${style.bg} p-4 rounded-xl border-2 border-${style.border} w-full transition-all">
                            <p class="font-bold text-${style.text} mb-1 text-sm">${card.title}</p>
                            <div class="text-[12px] font-bold text-gray-600 leading-relaxed">${card.desc}</div>
                        </div>`;
                }).join('');
                wrapper.insertAdjacentHTML('beforeend', `<div class="flex flex-col gap-2 w-full">${cardsHtml}</div>`);
            }

            // 3. 处理 Stats (数据指标) 组件
            // 处理 Features (功能矩阵) - 全居中版
            if (key === 'hasFeatures' && data.hasFeatures && data.features) {
                const gridItems = data.features.map(f => {
                    let iconHtml = '';
                    if (f.icon) {
                        if (f.icon.includes('/') || f.icon.includes('.')) {
                            iconHtml = `<img src="${f.icon}" class="h-12 w-12 object-contain">`;
                        } else {
                            iconHtml = `<span class="text-4xl">${f.icon}</span>`;
                        }
                    }

                    return `
                    <div class="group flex flex-col items-center text-center p-8 bg-white rounded-3xl border border-gray-100 shadow-sm ">
                        
                        <div class="h-10 w-10 flex items-center justify-center rounded-2xl bg-${data.theme}-50 mb-6">
                            ${iconHtml}
                        </div>
                        
                        <h4 class="text-xl font-bold text-gray-800 mb-3">${f.title}</h4>
                        
                        <p class="text-sm text-gray-500 leading-relaxed">
                            ${f.desc}
                        </p>
                    </div>`;
                }).join('');
                
                const cols = data.features.length % 3 === 0 ? 'grid-cols-3' : 'grid-cols-2';
                wrapper.insertAdjacentHTML('beforeend', `<div class="grid ${cols} gap-8 w-full my-8">${gridItems}</div>`);
            }

            // 4. 处理 Table 组件
            if (key === 'hasTable' && data.hasTable) {
                const hHtml = data.tableHeaders.map(h => `<th class="py-2 px-2 text-center border-r border-blue-100 last:border-0 font-extrabold text-blue-600">${h}</th>`).join('');
                const rHtml = data.tableRows.map(row => {
                    const cells = Object.values(row).map(v => `<td class="py-1.5 px-2 text-center font-bold text-gray-600 border-r border-gray-50 last:border-0">${v}</td>`).join('');
                    return `<tr class="text-[12px] border-b border-gray-100 last:border-0">${cells}</tr>`;
                }).join('');
                wrapper.insertAdjacentHTML('beforeend', `
                    <div class="w-full mt-1">
                        <div class="overflow-hidden border-2 border-blue-100 rounded-xl bg-white">
                            <table class="w-full border-collapse">
                                <thead><tr class="bg-blue-50/80 text-[12px] border-b-2 border-blue-100">${hHtml}</tr></thead>
                                <tbody>${rHtml}</tbody>
                            </table>
                        </div>
                    </div>`);
            }

            // 5. 处理 Image 组件
            if (key === 'hasImage' && data.hasImage) {
                // 判断是否有链接，如果有则准备包裹标签
                const hasLink = !!data.imgLink;
                const tagOpen = hasLink ? `<a href="${data.imgLink}" target="_blank" class="block w-full transition-transform hover:scale-[1.01] active:scale-95">` : `<div class="w-full">`;
                const tagClose = hasLink ? `</a>` : `</div>`;

                wrapper.insertAdjacentHTML('beforeend', `
                    <div class="flex flex-col items-center gap-1 w-full mt-1">
                        ${tagOpen}
                            <div class="rounded-xl overflow-hidden border border-gray-100 shadow-sm" 
                                style="width: ${data.imgWidth || 100}%; aspect-ratio: ${data.imgAspectRatio || '16/9'}; margin: 0 auto;">
                                <img src="${data.imgUrl}" class="w-full h-full object-cover" alt="${data.imgDesc || ''}">
                            </div>
                        ${tagClose}
                        ${data.imgDesc ? `<p class="text-[11px] text-gray-400 font-bold italic text-center">${data.imgDesc}</p>` : ""}
                    </div>`);
            }
        });

        // --- 第三部分：导航链接生成 ---
        if (data.type === 'divider') {
            const link = document.createElement('a');
            link.href = `#${section.id}`;
            link.className = `nav-link flex items-center gap-2 p-2 rounded-xl font-bold text-gray-400 text-[12px]`;
            link.innerText = data.title;
            link.onclick = (e) => {
                e.preventDefault();
                document.getElementById(section.id).scrollIntoView({ behavior: 'smooth' });
                setActive(link, data.theme);
            };
            nav.appendChild(link);
        }
    });
}

function setActive(element, colorClass) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.className = 'nav-link flex items-center gap-2 p-2 rounded-xl font-bold text-gray-400 text-[12px]';
    });
    element.classList.add(`active-${colorClass}`);
}

window.onload = renderContent;

function setActive(element, colorClass) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.className = 'nav-link flex items-center gap-2 p-2 rounded-xl font-bold text-gray-400 text-[12px]';
    });
    element.classList.add(`active-${colorClass}`);
}

window.onload = renderContent;

// 侧边栏高亮切换
function setActive(element, colorClass) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.className = 'nav-link flex items-center gap-2 p-2 rounded-xl font-bold text-gray-400 text-[12px]';
    });
    element.classList.add(`active-${colorClass}`);
}

window.onload = renderContent;

// 侧边栏折叠/展开
function toggleSidebar() {
    const card = document.getElementById('menu-card');
    const btn = document.getElementById('expand-btn');
    card.classList.toggle('hidden');
    btn.classList.toggle('hidden');
}

// 侧边栏高亮切换
function setActive(element, colorClass) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.className = 'nav-link flex items-center gap-2 p-2 rounded-xl font-bold text-gray-400 text-[12px]';
    });
    element.className = `nav-link flex items-center gap-2 p-2 rounded-xl font-bold text-[12px] active-${colorClass}`;
}

window.onload = renderContent;

// 2. 侧边栏折叠
function toggleSidebar() {
    document.getElementById('menu-card').classList.toggle('hidden');
    document.getElementById('expand-btn').classList.toggle('hidden');
}

// 3. 侧边栏高亮切换
function setActive(element, colorClass) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.className = 'nav-link flex items-center gap-2 p-2 rounded-xl font-bold text-gray-400 text-[12px]';
    });
    element.classList.add(`active-${colorClass}`);
}

// 4. 初始化
window.onload = renderContent;

// script.js

// 打开放大蒙层
function openOverlay(src) {
    const overlay = document.getElementById('image-overlay');
    const overlayImg = document.getElementById('overlay-img');
    
    overlayImg.src = src;
    overlay.classList.remove('hidden');
    // 禁止页面滚动（可选）
    document.body.style.overflow = 'hidden';
}

// 关闭蒙层
function closeOverlay() {
    const overlay = document.getElementById('image-overlay');
    overlay.classList.add('hidden');
    // 恢复页面滚动
    document.body.style.overflow = 'auto';
}