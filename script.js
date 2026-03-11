/* script.js */

// 1. 渲染函数：根据 data.js 动态生成页面和目录项
/* script.js */

// script.js 核心渲染逻辑更新

function renderContent() {
    const container = document.getElementById('dynamic-chapters');
    const nav = document.getElementById('auto-nav');

    if (typeof CHAPTER_DATA === 'undefined') return;

    // 1. 初始化导航（首页链接）
    nav.innerHTML = `
        <a href="#home" onclick="setActive(this, 'blue')" class="nav-link flex items-center gap-2 p-2 rounded-xl font-bold text-[12px] active-blue">
            首页愿景
        </a>`;

    // 2. 清空并开始渲染动态内容
    container.innerHTML = ""; 

    CHAPTER_DATA.forEach(data => {
        // --- 第一部分：渲染页面 Section ---
        const section = document.createElement('section');
        section.id = data.id;
        
        if (data.type === 'divider') {
            section.className = 'ppt-page items-center justify-center text-center bg-gray-50/50';
            section.innerHTML = `
                <div class="space-y-6">
                    <h3 class="text-${data.theme}-500 font-bold text-xs uppercase tracking-[0.4em] opacity-80">${data.chapter}</h3>
                    <div class="h-1 w-12 bg-${data.theme}-500 mx-auto rounded-full opacity-30"></div>
                    <h2 class="text-5xl font-extrabold text-gray-800 leading-tight">${data.title}</h2>
                    <p class="text-xl font-bold text-gray-300 mt-4 max-w-2xl mx-auto">${data.subtitle}</p>
                </div>
            `;
        } /* --- 逻辑分发：如果是标准内容页 (提取出的 else 逻辑) --- */
        else {
            section.className = 'ppt-page';
            
            // 1. 生成卡片 HTML
            const cardsHtml = data.cards ? data.cards.map(card => {
                const linkIcon = card.link 
                    ? `<a href="${card.link}" target="_blank" class="card-link no-print ml-1 text-xs opacity-50 hover:opacity-100">🔗</a>` 
                    : "";

                // 定义颜色映射表
                const colorMap = {
                    blue: { bg: 'blue-50/50', border: 'blue-100', text: 'blue-600' },
                    green: { bg: 'green-50/50', border: 'green-100', text: 'green-600' },
                    gray: { bg: 'gray-50/50', border: 'gray-100', text: 'gray-500' },
                    orange: { bg: 'orange-50/50', border: 'orange-100', text: 'orange-600' },
                };

                const style = colorMap[card.type] || colorMap.gray;

                return `
                    <div class="card-container bg-${style.bg} p-4 rounded-xl border-2 border-${style.border} w-full transition-all">
                        <div class="flex justify-between items-start">
                            <p class="font-bold text-${style.text} mb-1 text-sm">${card.title}</p>
                            ${linkIcon}
                        </div>
                        <div class="text-[12px] font-bold text-gray-600 leading-relaxed">${card.desc}</div>
                    </div>
                `;
            }).join('') : "";

            // 2. 表格逻辑
            let tableHtml = "";
            if (data.hasTable) {
                const titleBarHtml = data.tableTitle ? `
                    <div class="mt-0 mb-0 flex items-center gap-2 px-1">
                        <div class="w-1.5 h-4 bg-${data.theme || 'blue'}-500 rounded-full"></div>
                        <h4 class="text-sm font-black text-gray-700">${data.tableTitle}</h4>
                    </div>
                ` : "";

                const hHtml = data.tableHeaders ? data.tableHeaders.map(h => `
                    <th class="py-2 px-2 text-center border-r border-blue-100 last:border-0 font-extrabold text-blue-600">
                        ${h}
                    </th>
                `).join('') : "";

                const rHtml = data.tableRows ? data.tableRows.map(row => {
                    const cells = Object.values(row).map((value) => `
                        <td class="py-1.5 px-2 text-center font-bold text-gray-600 border-r border-gray-50 last:border-0">
                            ${value}
                        </td>`).join('');
                    return `<tr class="text-[12px] border-b border-gray-100 last:border-0">${cells}</tr>`;
                }).join('') : "";

                tableHtml = `
                    ${titleBarHtml}
                    <div class="overflow-hidden border-2 border-blue-100 rounded-xl bg-white">
                        <table class="w-full border-collapse table-auto">
                            <thead>
                                <tr class="bg-blue-50/80 text-[12px] border-b-2 border-blue-100">
                                    ${hHtml}
                                </tr>
                            </thead>
                            <tbody>${rHtml}</tbody>
                        </table>
                    </div>
                    ${data.tableNote ? `<p class=" text-[9px] text-gray-300 italic font-bold text-right">${data.tableNote}</p>` : ""}
                `;
            }

            // 3. 图片组件
            let imageHtml = "";
            if (data.hasImage) {
                // 1. 获取自定义比例，如果没设置，默认 16:9
                // 建议在 data.js 中传入如 "16/9", "4/3", "1/1" 或 "auto"
                const ratio = data.imgAspectRatio || "16/9"; 
                
                imageHtml = `
                    <div class="flex flex-col items-center gap-2 w-full"> 
                        <div class="image-component-container cursor-zoom-in rounded-xl overflow-hidden border border-gray-100 shadow-sm" 
                            style="width: 100%; aspect-ratio: ${ratio};" 
                            onclick="openOverlay('${data.imgUrl}')">
                            <img src="${data.imgUrl}" 
                                alt="page-img" 
                                class="w-full h-full ${ratio === 'auto' ? 'object-contain' : 'object-cover'} hover:scale-105 transition-transform duration-500">
                        </div>
                        ${data.imgDesc ? `<p class="text-[11px] text-gray-400 font-bold italic text-center">${data.imgDesc}</p>` : ""}
                    </div>
                `;
            }

            // --- 6. 数据指标组件逻辑 ---
            let statsHtml = "";
            if (data.hasStats) {
                const cols = data.statsCols || 4;
                const gridItems = data.stats.map(s => `
                    <div class="flex flex-col items-center justify-center text-center py-10 px-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                        <div class="flex items-baseline gap-1 mb-2">
                            <span class="text-5xl font-black text-${data.theme}-600 tracking-tight">${s.value}</span>
                            <span class="text-xl font-bold text-${data.theme}-500">${s.unit}</span>
                        </div>
                        <div class="text-[16px] font-black text-gray-800 mb-2">${s.label}</div>
                        <div class="text-[12px] font-bold text-gray-400 leading-tight">${s.desc}</div>
                    </div>
                `).join('');

                statsHtml = `
                    <div class="grid grid-cols-${cols} gap-4 w-full my-6">
                        ${gridItems}
                    </div>
                `;
            }

            // --- 7. 特性网格组件逻辑 (图标+标题+描述) ---
            let featuresHtml = "";
            if (data.hasFeatures && data.features) {
                const cols = data.featureCols || 3; // 默认 3 列
                
                const gridItems = data.features.map(f => `
                    <div class="flex flex-col items-center text-center p-6 bg-white rounded-3xl border border-gray-100 shadow-sm transition-all">
                        <div class="w-16 h-16 rounded-full bg-${data.theme}-50 text-${data.theme}-500 flex items-center justify-center text-3xl mb-5 border-2 border-${data.theme}-100">
                            ${f.icon}
                        </div>
                        
                        <h4 class="text-[16px] font-black text-gray-900 mb-2 leading-tight">${f.title}</h4>
                        
                        <p class="text-[12px] font-bold text-gray-500 leading-relaxed px-2">${f.desc}</p>
                    </div>
                `).join('');

                featuresHtml = `
                    <div class="grid grid-cols-1 md:grid-cols-${cols} gap-6 w-full mt-4">
                        ${gridItems}
                    </div>
                `;
            }

            // 4. 布局渲染
            let contentBody = "";
            
            // 预先组装好顶部组件（如果有的话）
            const topComponents = `
                ${statsHtml}
                ${featuresHtml}
            `;

            if (data.layout === 'split') {
                contentBody = `
                    <div class="flex flex-col gap-6 w-full">
                        ${topComponents} <div class="flex flex-row items-start gap-6">
                            <div class="flex-1 flex flex-col gap-3">
                                ${cardsHtml}
                            </div>
                            <div style="width: ${data.imgWidth || 40}%; flex-shrink: 0;" class="flex flex-col gap-4">
                                ${imageHtml}
                                ${tableHtml}
                            </div>
                        </div>
                    </div>
                `;
            } else {
                contentBody = `
                    <div class="flex flex-col gap-4 w-full">
                        ${topComponents} <div class="flex flex-col gap-3">
                            ${cardsHtml}
                        </div>
                        ${tableHtml}
                        <div class="w-full flex justify-center mt-2">
                            <div style="width: ${data.imgWidth || 80}%;">
                                ${imageHtml}
                            </div>
                        </div>
                    </div>
                `;
            }

            // 最后填充到 section (保持不变)
            section.innerHTML = `
                <div class="mb-6">
                    <h3 class="text-${data.theme}-500 font-bold text-[12px] uppercase tracking-[0.2em] mb-1">${data.chapter}</h3>
                    <h2 class="text-3xl font-extrabold text-gray-800">${data.title}</h2>
                </div>
                <div class="content-body-wrapper">
                    ${contentBody}
                </div>
            `;

            // 最后填充到 section
            section.innerHTML = `
                <div class="mb-6">
                    <h3 class="text-${data.theme}-500 font-bold text-[12px] uppercase tracking-[0.2em] mb-1">${data.chapter}</h3>
                    <h2 class="text-3xl font-extrabold text-gray-800">${data.title}</h2>
                </div>
                <div class="content-body-wrapper">
                    ${contentBody}
                </div>
            `;
        }
        container.appendChild(section);

        // --- 第二部分：生成导航链接（仅限 divider） ---
        if (data.type === 'divider') {
            const link = document.createElement('a');
            link.href = `#${data.id}`;
            link.className = `nav-link flex items-center gap-2 p-2 rounded-xl font-bold text-gray-400 text-[12px]`;
            
            const shortTitle = data.title.length > 10 ? data.title.substring(0, 9) + '...' : data.title;
            link.innerText = shortTitle;

            link.onclick = (e) => {
                e.preventDefault();
                const target = document.getElementById(data.id);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    setActive(link, data.theme);
                }
            };
            nav.appendChild(link);
        }
    });

    // 3. 手动加上结尾页链接
    const endLink = document.createElement('a');
    endLink.href = "#end";
    endLink.className = `nav-link flex items-center gap-2 p-2 rounded-xl font-bold text-gray-400 text-[12px]`;
    endLink.innerText = "合作启动";
    endLink.onclick = (e) => {
        e.preventDefault();
        document.getElementById('end').scrollIntoView({ behavior: 'smooth' });
        setActive(endLink, 'green');
    };
    nav.appendChild(endLink);
}

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