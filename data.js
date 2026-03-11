// data.js
const CHAPTER_DATA = [
    // --- 1. 过渡页 ---
    {
        id: "ch1-divider",
        type: "divider", 
        chapter: "Chapter 01",
        title: "一、CSCA标准解析",
        subtitle: "深度拆解 2026 CSCA 准入机制的核心变动",
        theme: "blue"
    },
    // 1.1 什么是CSCA?
    {
        id: "ch1",
        type: "content",
        chapter: "Chapter 01",
        title: "CSCA基本介绍",
        theme: "blue",
        cards: [
            { 
                type: "blue", 
                title: "什么是 CSCA？", 
                desc: "来华留学<span class='highlight-purple'>本科</span>入学学业水平测试。由国家留学基金委（CSC）组织，是招生及奖学金评审的重要依据。",
                link: "https://csca.cn/about/examintro" // 这里填链接，不填则传空字符串 ""
            },
            { 
                type: "blue", 
                title: "近三年实施计划 (2026-2028)", 
                desc: "2025年12月21日，举行首次全球CSCA考试。2026年起奖学金生必须参加；<span class='wavy-orange'>2028年起实现全覆盖</span>，所有国际学生均须参加该考试。",
                link: "https://csca.cn/about/examintro" 
            },
            { 
                type: "blue", 
                title: "院校认可：306+所大学", 
                desc: "目前已关联 <span class='highlight-blue'>306 所</span>中国高校，包含了绝大多数接受<span class='highlight-blue'>中国政府奖学金（CSC）</span>的顶尖及重点大学。",
                link: "https://mp.weixin.qq.com/s/JgzUJW5_dIZrnHM5YzZQ7A"
            }
        ]
    },
    //1.2 CSCA考试科目和时间
    {
    id: "ch1-exam-detail",
    type: "content", 
    chapter: "Chapter 01",
    title: "CSCA考试科目和时间",
    theme: "blue",
    cards: [
        { 
            type: "blue", 
            title: "考试时间", 
            desc: "2026年，CSCA将组织5次考试。考试时间预计为 1 月、3 月、4 月、6 月及 12 月。最近考试：（北京时间）2026年3月15日。" 
        }
    ],
    tableTitle: "考试科目",
    hasTable: true,
    tableHeaders: ["类型", "科目名称", "考试语言", "时长", "试题数量", "分值"],
    tableRows: [
            { 
                group: "<span class='highlight-purple'>必考</span>", 
                name: "专业中文", 
                lang: "中文", 
                time: "90分钟", 
                count: "80个客观选择题", 
                score: "0-100" 
            },
            { 
                group: "<span class='highlight-purple'>必考</span>", 
                name: "数学", 
                lang: "中/英", 
                time: "60分钟", 
                count: "48个客观选择题", 
                score: "0-100" 
            },
            { 
                group: "<span class='highlight-blue'>选考</span>", 
                name: "物理", 
                lang: "中/英", 
                time: "60分钟", 
                count: "48个客观选择题", 
                score: "0-100" 
            },
            { 
                group: "<span class='highlight-blue'>选考</span>", 
                name: "化学", 
                lang: "中/英", 
                time: "60分钟", 
                count: "48个客观选择题", 
                score: "0-100" 
            }
        ],
    },
    // 1.3 CSCA海外考试地点
    {
        id: "ch1",
        type: "content",
        chapter: "Chapter 01",
        title: "CSCA考点",
        theme: "blue",
        cards: [
        { 
            type: "blue", 
            title: "考试地点", 
            desc: "CSCA 考试目前采用“全球线上居家网考”与“东南亚重点生源国（如越南、泰国）线下机考”相结合的考点布局。" 
        },
        ],
        // --- 新增图片组件配置 ---
        hasImage: true,
        imgUrl: "https://coco-default.oss-cn-shanghai.aliyuncs.com/%E5%8C%97%E4%BA%AC%E8%AF%AD%E8%A8%80%E5%A4%A7%E5%AD%A6%E6%9B%BC%E8%B0%B7%E5%AD%A6%E9%99%A2.png",
        imgWidth: 40, // 百分比宽度
        imgDesc: "曼谷考点：北京语言大学曼谷学院(BLCU Bangkok College)<br><span class='wavy-orange'>【待证实】</span>"
    },
    // 1.4 用户痛点
    {
        id: "ch1",
        type: "content",
        chapter: "Chapter 01",
        title: "相关产品/服务",
        theme: "green",
        // --- 新增图片组件配置 ---
        imgAspectRatio: "2/1", // 自定义比例
        hasImage: true,
        imgUrl: "https://coco-default.oss-cn-shanghai.aliyuncs.com/%E4%BA%A7%E5%93%81%E7%9F%A9%E9%98%B5.png",
        imgWidth: 80, // 百分比宽度
        imgDesc: ""
    },
    // --- 2.1 过渡页 ---
    {
        id: "ch2-divider",
        type: "divider", 
        chapter: "Chapter 02",
        title: "二、传统预科的“断层”分析",
        subtitle: "统考新政下的预科现状与挑战",
        theme: "orange"
    },
    // 2.1 预科基本介绍?
    {
        id: "ch1",
        type: "content",
        chapter: "Chapter 02",
        title: "预科基本介绍",
        theme: "orange",
        layout: "split", // 【核心】：标记这一页使用左右分栏
        cards: [
            { 
                type: "blue", 
                title: "什么是留学生预科？", 
                desc: "为国际学生进入中国大学<span class='highlight-purple'>本科</span>前设立的过渡性教育，学习时间为一年。",
                link: "http://www.moe.gov.cn/srcsite/A20/moe_850/200903/t20090313_89013.html" // 这里填链接，不填则传空字符串 ""
            },
            { 
                type: "blue", 
                title: "哪些学校开了预科？", 
                desc: "<span class='wavy-orange'>国家队（17所基地校）</span>：包括天津大学、南京大学、山东大学等，受国家留学基金委（CSC）委托，结业考试<span class='highlight-blue'>合格可免考 CSCA</span>。<br><br><span class='wavy-orange'>地方/高校自办预科：</span>多数省属重点高校（如上海大学、浙江科技大学等）均设有自主招生的预科项目。",
                link: "https://mp.weixin.qq.com/s/IkkcaVsj8658lLdSH7t3Lw" 
            },
        ],
         // --- 新增图片组件配置 ---
        hasImage: true,
        imgUrl: "https://coco-default.oss-cn-shanghai.aliyuncs.com/%E5%8D%8E%E4%BE%A8%E5%A4%A7%E5%AD%A6%E9%A2%84%E7%A7%91%E7%BB%93%E4%B8%9A%E8%80%83%E8%AF%95.webp",
        imgWidth: 45, // 百分比宽度
        imgDesc: "北京语言大学预科结业考试"
    },
    // 2.2 国内预科表格
    {
        id: "ch1",
        type: "content",
        chapter: "Chapter 02",
        title: "国内预科开设情况",
        theme: "orange",
        cards: [
            { 
                type: "blue", 
                title: "😨搜索难、材料旧、备考盲", 
                desc: "标准上正在接轨，但在数字化的服务闭环、备考资源和前置教学上，依然处于严重碎片化的‘信息孤岛’状态",
                link: "" // 这里填链接，不填则传空字符串 ""
            },
        ],
        hasTable: true,
        // 重新定义表头，适配你的新需求
        tableHeaders: ["院校名称", "是否有预科", "授课模式", "学制", "科目","学费","详情链接"],
        tableRows: [
            { 
                name: "北京大学", 
                exists: "是 (基地校)", 
                mode: "线下", 
                duration: "1/1.5年",
                subjects: "汉语/数学",
                // 2. 填充学费数据
                tuition: "5.4 / 8.1万", 
                link: "<a href='https://www.isd.pku.edu.cn/cn/news/detail.php?id=108' target='_blank' class='text-blue-500'>🔗 </a>" 
            },
            { 
                name: "同济大学", 
                exists: "是 (基地校)", 
                mode: "线下", 
                duration: "1年",
                subjects: "汉语/数学/物理/化学",
                // 2. 填充学费数据
                tuition: "3.8万", 
                link: "<a href='https://www.isd.pku.edu.cn/cn/news/detail.php?id=108' target='_blank' class='text-blue-500'>🔗 </a>" 
            },
            { 
                name: "北京语言大学", 
                exists: "是 (基地校)", 
                mode: "线下+线上", 
                duration: "1年",
                subjects: "汉语",
                tuition: "3.9万", 
                link: "<a href='https://admission.blcu.edu.cn/ykxskc/list.htm' target='_blank' class='text-blue-500'>🔗 </a>" 
            },
            
            { 
                name: "南京大学", 
                exists: "是", 
                mode: "线下", 
                duration: "1年",
                subjects: "汉语/数学/综合",
                tuition: "2.4万",
                link: "<a href='https://hwxy.nju.edu.cn/lxnd/zsxx/bkxm/sbzn/index.html' target='_blank' class='text-blue-500'>🔗</a>"
            },
            { 
                name: "江苏大学", 
                exists: "是", 
                mode: "线下", 
                duration: "1年",
                subjects: "数学/英语/化学/物理",
                tuition: "暂无",
                link: "<a href='https://oec.ujs.edu.cn/jxypy/ykjy.htm' target='_blank' class='text-blue-500'>🔗</a>"
            },
        ], 
    },
    // 2.2 国外预科表格
    {
        id: "ch1",
        type: "content",
        chapter: "Chapter 02",
        title: "国外预科开设情况",
        theme: "orange",
        cards: [
            { 
                type: "blue", 
                title: "🌏专业衔接强，信息透明，费用昂贵", 
                desc: "体系高度成熟，课程内容与大学专业高度衔接，且提供丰富的教学资源和学术支持。",
                link: "" // 这里填链接，不填则传空字符串 ""
            },
        ],
        hasTable: true,
        // 重新定义表头，适配你的新需求
        tableHeaders: ["院校/服务商名称", "是否有预科", "授课模式", "学制", "科目","学费","详情链接"],
        tableRows: [
            { 
                name: "伦敦大学学院 (UCL)", 
                exists: "是", 
                mode: "线下+线上", 
                duration: "1年",
                subjects: "人文/社会科学/STEM",
                tuition: "26万", 
                link: "<a href='UCL Undergraduate Preparatory Certificates' target='_blank' class='text-blue-500'>🔗 </a>" 
            },
            { 
                name: "曼彻斯特大学", 
                exists: "是", 
                mode: "线下", 
                duration: "1年",
                subjects: "商业/工程/生物科学",
                // 2. 填充学费数据
                tuition: "20万", 
                link: "<a href='https://www.manchester.ac.uk/study/international/admissions/foundation-courses/'>🔗 </a>" 
            },
            { 
                name: "悉尼大学", 
                exists: "是", 
                mode: "线下", 
                duration: "1年",
                subjects: "艺术/商科/理学/IT",
                tuition: "19.5万", 
                link: "<a href='https://www.taylorssydney.edu.au/programs/university-sydney-foundation-program'>🔗 </a>" 
            },
            
            { 
                name: "东北大学 (美)", 
                exists: "是", 
                mode: "线下", 
                duration: "1年/1.5年",
                subjects: "通识/商业/计算机",
                tuition: "39万",
                link: "<a href='https://international.northeastern.edu/global-pathways/' target='_blank' class='text-blue-500'>🔗</a>"
            },
            { 
                name: "Kaplan（<span class='highlight-purple'>集团化预科</span>,<br>合作学校：利物浦大学、<br>约克大学，布里斯托大学...）", 
                exists: "是", 
                mode: "线上+线下", 
                duration: "1年/1.5年<br>视学校而定",
                subjects: "视学校而定",
                tuition: "14万以上<br>视学校而定",
                link: "<a href='https://www.kaptest.com/college-prep' target='_blank' class='text-blue-500'>🔗</a>"
            },
        ], 
    },
    // 2.3 预科集团Kaplan
    {
        id: "ch1",
        type: "content",
        chapter: "Chapter 02",
        title: "Kaplan: 替世界名校办预科",
        theme: "orange",
        layout: "split", // 【核心】：标记这一页使用左右分栏
        cards: [
            { 
                type: "blue", 
                title: "Kaplan 的定位", 
                desc: "集团化预科，直接和大学（如格拉斯哥、约克等）签合同，提供线上或线下（大学校园）预科。",
                link: "https://www.kaptest.com/college-prep" // 这里填链接，不填则传空字符串 ""
            },
            { 
                type: "blue", 
                title: "Kaplan 的核心竞争力", 
                desc: "统一申请入口，极速回复，<span class='wavy-orange'>AI大学申请顾问KapAdvisor</span>，交互式学习系统，包含录播课、在线题库和实时反馈，线上线下无缝衔接。",
                link: "https://www.kaptest.com/college-prep/ai-advisor" // 这里填链接，不填则传空字符串 ""
            },
        ],
         // --- 新增图片组件配置 ---
        hasImage: true,
        imgUrl: "https://coco-default.oss-cn-shanghai.aliyuncs.com/kaplan.png",
        imgWidth: 45, // 百分比宽度
        imgDesc: "Kaplan预科页面"
    },
    // 2.4 国内预科发展趋势
    {
        id: "ch1",
        type: "content",
        chapter: "Chapter 02",
        title: "国内预科与 CSCA 的三大未来趋势",
        theme: "orange",
        cards: [
            { 
                type: "blue", 
                title: "准入标准化：从“一校一策”迈向<span class='highlight-purple'>“全国统考”</span>时代", 
                desc: "随着 CSCA 自 2026 年起成为中国政府奖学金（CSC）申请的强制性标准，它正在迅速成为中国版的“SAT/ACT”。",
                link: "" // 这里填链接，不填则传空字符串 ""
            },
            { 
                type: "blue", 
                title: "体验数字化：从“前年的 PDF”转向<span class='highlight-blue'>“全流程数字化闭环”</span>", 
                desc: "未来的国内预科招生将是“秒回级”的 AI 咨询、随时随地的手机端报名、以及像 Kaplan 那样带进度条的数字化录取系统。",
                link: "" 
            },
            { 
                type: "blue", 
                title: "教学前置化：从“入境后学”转向<span class='highlight-green'>“入境前修”</span>", 
                desc: "混合式预科（Blended Learning）将成为主流。学生可以在自己的国家先修完 30%-50% 的学分，降低入境成本",
                link: "" 
            },
        ],
    },
    // --- 3.1 过渡页 ---
    {
        id: "ch3-divider",
        type: "divider", 
        chapter: "Chapter 03",
        title: "三、360 Global Edu产品方案",
        subtitle: "中国版“Kaplan”数字化预科生态重塑者",
        theme: "green"
    },
    // 3.0 用户痛点
    {
        id: "ch1",
        type: "content",
        chapter: "Chapter 03",
        title: "用户痛点",
        theme: "green",
        // --- 新增图片组件配置 ---
        imgAspectRatio: "3/1", // 自定义比例
        hasImage: true,
        imgUrl: "https://coco-default.oss-cn-shanghai.aliyuncs.com/%E7%94%A8%E6%88%B7%E5%BF%83%E6%80%81.png",
        imgWidth: 100, // 百分比宽度
        imgDesc: ""
    },
    // 3.1 产品基本介绍
    {
        id: "ch1",
        type: "content",
        chapter: "Chapter 03",
        title: "产品介绍",
        theme: "green",
        cards: [
            { 
                type: "blue", 
                title: "产品名称", 
                desc: "360 Global Edu",
                link: "http://www.moe.gov.cn/srcsite/A20/moe_850/200903/t20090313_89013.html" // 这里填链接，不填则传空字符串 ""
            },
            { 
                type: "blue", 
                title: "产品定位", 
                desc: "利用 CSCA 考试作为<span class='highlight-purple'>流量入口</span></.span>，将高校的‘学术专业课’包装成<span class='highlight-purple'>‘数字化预科’</span>",
                link: "https://mp.weixin.qq.com/s/IkkcaVsj8658lLdSH7t3Lw" 
            },
            { 
                type: "blue", 
                title: "产品目标", 
                desc: "提升海外学生来华CSCA考试通过率</span><br><br>提升高校海外招生转化效率<br><br>构建高校可信的国际传播与学习体系",
                link: "https://mp.weixin.qq.com/s/IkkcaVsj8658lLdSH7t3Lw" 
            },
        ],
    },
    // 3.2 产品功能清单 - 360 Global Edu 数字化解决方案
    {
        id: "product-features",
        type: "content",
        chapter: "Chapter 04",
        title: "360 Global Edu 核心功能",
        theme: "blue", 
        layout: "vertical", 
        
        // 1. 【核心修复】必须加上这个开关，脚本才会执行渲染逻辑
        hasFeatures: true, 
        
        // 2. 网格配置
        featureCols: 3, // 建议 4 个项目设为 2 列或 4 列更整齐
        features: [
            { 
                icon: "📝", 
                title: "CSCA 备考矩阵(考试)", 
                desc: "官方对标题库与自适应模考系统，实时预测统考成绩，确保学生顺利达到公办校录取门槛。" 
            },
            { 
                icon: "💻", 
                title: "名校先修课(课程）", 
                desc: "联合高校研发线上专业课，支持海外预修学分并获官方回认，降低留学时间成本与适应难度。" 
            },
            { 
                icon: "🧭", 
                title: "数字化招生中心（选校）", 
                desc: "整合高校专业要求与预科详情，AI 选校助手实现精准方案匹配，让报考流程清晰透明。" 
            },
        ],

        // 如果你想保留原来的表格，就让 hasTable 为 true；
        // 如果只想看卡片，就把 hasTable 改为 false
        hasTable: false, 
        tableTitle: "360 Global Edu 功能模块与数字化指标",
    },
    // 3.3 高校落地模式方案
    {
        id: "implementation-modes",
        type: "content",
        chapter: "Chapter 05",
        title: "360 Global Edu 高校落地模式",
        theme: "blue",
        layout: "vertical",
        hasTable: true,
        tableTitle: "轻量接入 vs. 深度托管 方案对比",
        tableHeaders: ["维度", "方案 A：数字化标准包", "方案 B：联办深度包"],
        tableRows: [
            { 
                dim: "适合院校", 
                light: "已有成熟预科/招生体系，仅需工具补齐的学校", 
                heavy: "拟新设数字化预科、寻求增量收入的特色院校" 
            },
            { 
                dim: "核心功能", 
                light: "AI 题库、自动模拟考、品牌曝光", 
                heavy: "联合开发线上课、学分前置平台、全托管运营" 
            },
            { 
                dim: "归口部门", 
                light: "国际学院", 
                heavy: "国际学院、二级院系" 
            },
            { 
                dim: "解决问题", 
                light: "较低：仅需现有系统接口对接", 
                heavy: "中等：需教学大纲审定与师资协同" 
            },
            { 
                dim: "建设周期", 
                light: "3 - 4 周 (SaaS 快速部署)", 
                heavy: "3 - 4 个月 (课程联合研发)" 
            },
            { 
                dim: "预估投入", 
                light: "¥5万 / 年 (服务费)", 
                heavy: "¥20万+ (启动费) + 学费比例分成" 
            },
            { 
                dim: "预期收益", 
                light: "<span class='highlight-purple'>品牌曝光率、招生转化率↑ / 审核人效↓</span>", 
                heavy: "<span class='highlight-green'>年均增收 ¥50万+ (非学历教育)</span>" 
            },
            { 
                dim: "典型院校", 
                light: "北京大学、华东师范大学 (标杆参考)", 
                heavy: "省属重点院校、地方特色基地校" 
            }
        ],
        tableNote: "* 具体金额根据院校专业数量与定制化需求另行核算"
    },
    // 3.4 轻量方案特色：场景化 AI 题库
    {
        id: "feature-scenario",
        type: "content",
        chapter: "Chapter 06",
        title: "方案A：数字化标准包",
        theme: "blue", // 绿色代表成功和高体验
        cards: [
            {
                title: "AI 题库、自动模拟考、品牌曝光",
                type: "blue",
                desc: "我们的 AI 题库会提取协作高校的真实校园元素（地标、历史、校训）进行智能出题。题目不仅关联学校，更关联专业。商科学生做报表分析，理工学生算结构力学，让考试成为入学前的“第一堂课"
            },
        ],
        // --- 右侧展示具有代入感的题目截图 ---
        hasImage: true,
        imgUrl: "https://coco-default.oss-cn-shanghai.aliyuncs.com/%E5%85%B3%E8%81%94%E4%B8%93%E4%B8%9A%E5%AD%A6%E6%A0%A1%E7%9A%84%E9%A2%98%E7%9B%AE%E7%A4%BA%E4%BE%8B.jpg", // 建议放一张带学校背景的模拟题UI
        imgWidth: 45, 
        imgDesc: "交互示例：在高校模拟场景中完成专业汉语对话"
    },
    // 3.5 重量级方案：全链路数字化生态托管
    {
        id: "heavyweight-solution",
        type: "content",
        chapter: "Chapter 05",
        title: "方案B：联办深度包",
        theme: "blue",
        cards: [
            {
                title: "联合开发线上预科课程、学分前置、全托管运营",
                type: "blue",
                desc: "为院校量身定制全量数字门户，实现从海外曝光、AI 咨询、在线教学到录取管理的全流程闭环。"
            },
        ],
        hasImage: true,
        imgUrl: "https://coco-default.oss-cn-shanghai.aliyuncs.com/%E4%BA%92%E5%8A%A8%E8%AF%BE%E7%A8%8B%E7%A4%BA%E4%BE%8B.jpg", 
        imgWidth: 45,
        imgDesc: "院校端管理后台：实时监测全球生源分布、学习进度与录取画像"
    },
    // 3.5 落地计划
    {
        id: "ch1",
        type: "content",
        chapter: "Chapter 02",
        title: "待解决",
        theme: "orange",
        cards: [
            { 
                type: "blue", 
                title: "问题", 
                desc: "学校会为曝光率或分成为我们录制csca备考辅导课吗?<br>换一种说法是：纽约大学会为了SAT 课放在一个平台上吗？，如果学生考了高分，转身就去了哥伦比亚大学怎么办？",
                link: "" // 这里填链接，不填则传空字符串 ""
            },
            { 
                type: "blue", 
                title: "问题", 
                desc: "csca以后火了，新东方等培训机构也能录出比高校老师更会讲题、更好看的备考课，那我们是不是会被替代?",
                link: "" // 这里填链接，不填则传空字符串 ""
            },
            { 
                type: "blue", 
                title: "问题", 
                desc: "如果是把学校现成的课程放上去，跟csca的考核要求不一致，学生会买单吗？",
                link: "" // 这里填链接，不填则传空字符串 ""
            },
            { 
                type: "blue", 
                title: "问题", 
                desc: "如果把课程预科化，是不是就能解决上面的问题？<br>高校的动力变成非学历收入和提前锁定学生，...",
                link: "" // 这里填链接，不填则传空字符串 ""
            },
        ],
    },
    // // --- 4.1 过渡页 ---
    // {
    //     id: "ch4-divider",
    //     type: "divider", 
    //     chapter: "Chapter 04",
    //     title: "四、高校合作商业价值",
    //     subtitle: "低成本撬动全球化招生资产",
    //     theme: "purple"
    // },


    // // 4.1 价格策略：极简成本核算
    // {
    //     id: "pricing-direct",
    //     type: "content",
    //     chapter: "Chapter 07",
    //     title: "价格策略与合作成本",
    //     theme: "blue",
    //     layout: "vertical",
    //     cards: [
    //         {
    //             title: "面向国际教育学院 / 留学生院（院长）介绍，成本：",
    //             type: "blue",
    //             desc: "我们提供极具竞争力的准入价格，旨在通过数字化手段降低院校全球招生的门槛。"
    //         }
    //     ],
    //     hasTable: true,
    //     tableTitle: "合作成本清单",
    //     tableHeaders: ["费用项", "金额", "服务包含内容"],
    //     tableRows: [
    //         { 
    //             item: "<strong>系统建设费</strong>", 
    //             cost: "<strong>3万 - 5万</strong>", 
    //             detail: "包含 CSCA 题库系统、AI 自动阅卷系统、学生管理后台等" 
    //         },
    //         { 
    //             item: "<strong>录制代工费</strong>", 
    //             cost: "<strong>10万+</strong>", 
    //             detail: "专业级录制、剪辑、后期包装。按课程数量阶梯收费。" 
    //         },
    //         { 
    //             item: "<span class='highlight-green'>CSCA 题库</span>", 
    //             cost: "<span class='highlight-green'>免费使用</span>", 
    //             detail: "所有合作伙伴均可获赠官方对标题库的永久使用权" 
    //         }
    //     ],
    // },
    // // 4.2 收益回报：以小博大
    // {
    //     id: "roi-direct",
    //     type: "content",
    //     chapter: "Chapter 07",
    //     title: "收益回报预测",
    //     theme: "green",
    //     layout: "vertical",
    //     cards: [
    //         {
    //             title: "直接学费收入：首年即可回本",
    //             type: "blue",
    //             desc: "假设远程预科学费为 1.5万 - 2.5万 / 生，仅需招收 8 - 12名远程预科留学生，即可完全覆盖首年所有平台建设与录课成本。"
    //         }
    //     ],
    //     hasTable: true,
    //     tableTitle: "衍生价值分析",
    //     tableHeaders: ["价值维度", "具体效益"],
    //     tableRows: [
    //         { 
    //             type: "锁定四年本科收益", 
    //             effect: "成功转化一名远程预科生，意味着为学校锁定未来 4 年共计 <strong>10 万+</strong> 元的本科教育收入。" 
    //         },
    //         { 
    //             type: "降低流失成本", 
    //             effect: "夯实 CSCA 学科基础，大幅降低入学后的挂科率与退学率，保障教学连续性。" 
    //         },
    //         { 
    //             type: "提升品牌资产", 
    //             effect: "将线下优质师资转化为数字化资产，实现全球化教育品牌出海。" 
    //         }
    //     ]
    // }
    

    


];