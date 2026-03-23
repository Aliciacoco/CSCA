// data.js
const CHAPTER_DATA = [
    // --- 1. Kaplan 集团介绍 ---
    {
        id: "ch1-divider",
        type: "divider", 
        chapter: "Chapter 01",
        title: "一、Kaplan 集团介绍",
        subtitle: "Kaplan集团的前世今生",
        theme: "purple"
    },
    // 1.1 Kaplan 历史
    {
        id: "ch1",
        type: "content",
        chapter: "Chapter 01",
        title: "Kaplan 历史",
        theme: "purple",
        cards: [
            { 
                type: "blue", 
                title: "1938年：车库里的雏形", 
                desc: "Stanley Kaplan 本人在 1938年 开始在他父母位于布鲁克林住宅的地下室里<span class='highlight-purple'>帮学生补习</span>。当时的 Kaplan 只是一个“个体户”性质的补习班。",
                link: "https://www.kaplan.com/" 
            },
            { 
                type: "blue", 
                title: "1967年：现代企业的转折点", 
                desc: "随着 <span class='highlight-blue'>SAT </span>等标准化考试在美国大学录取中地位的确立，Kaplan 的业务从纽约扩展到了全美。",
                link: "" 
            },
            { 
                type: "blue", 
                title: "1984年：资本市场的真正腾飞", 
                desc: "Kaplan 被<span class='highlight-green'>《华盛顿邮报》</span>公司收购，从此从一家家族式培训机构变成了跨国教育巨头 Kaplan Inc.。",
                link: ""
            },
            { 
                type: "blue", 
                title: "2005年至今：预科爆发", 
                desc: "2005年，Kaplan 与英国谢菲尔德大学合作成立了<span class='highlight-orange'>谢菲尔德大学国际学院（USIC）</span>，正式大规模进入大学衔接课程（Pathways）领域",
                link: ""
            },
            
        ],
        },
    // 1.1 Kaplan 创始人
    {
        id: "ch1",
        type: "content",
        chapter: "Chapter 01",
        title: "Kaplan 创始人",
        theme: "purple",
        cards: [
            { 
                type: "purple", 
                title: "斯坦利·卡普兰 (Stanley Kaplan)", 
                desc: "成立于 1938 年，隶属于格雷厄姆控股公司。作为全球最大的<span class='highlight-purple'>跨国教育集团</span>之一，业务遍及 30 多个国家，每年服务超过 100 万名学生。",
                link: "https://www.kaplan.com/" 
            },
            
        ],
        // --- 新增图片组件配置 ---
        hasImage: true,
        imgAspectRatio: "3/1", // 自定义比例
        imgUrl: "https://coco-default.oss-cn-shanghai.aliyuncs.com/stanley%20kaplan.webp",
        imgWidth: 80, // 百分比宽度
        imgDesc: "斯坦利·卡普兰 (Stanley Kaplan)"
    },
    // --- 2. Kaplan 备考起家 ---
    {
        id: "ch1-divider",
        type: "divider", 
        chapter: "Chapter 02",
        title: "二、SAT美国备考起家",
        subtitle: "1930s-1970s",
        theme: "purple",
    },
    
    // --- 2.1 SAT 背景与 Kaplan 的机遇 ---
    {
        id: "ch1-sat-context",
        type: "content",
        chapter: "Chapter 02",
        title: "时代背景：SAT 的兴起与机遇",
        theme: "purple",
        tips: "历史转折：SAT 最初被设计为一种“无法补习”的智商测试",
        // 新增字段
        bgUrl: "", // 背景图地址
        bgOpacity: 0.5, // 背景可见度（0.15 代表图片很浅，文字很清楚；1 代表图片全显）
        
        // 1. 核心 Card：分析背景逻辑
        cards: [
            { 
                type: "purple", 
                title: "精英选拔制的变革", 
                desc: "20世纪40年代，哈佛等名校引入 SAT 旨在打破校友子弟的垄断，选拔真正的“天才”。当时主流观点认为 SAT 考察的是先天智力，不可提高。<br><br>Stanley Kaplan 通过研究发现，SAT 本质上是标准化测试，通过<span class='highlight-blue'>针对性逻辑训练和解题技巧</span>，普通学生也能大幅提分。这一发现不仅打破了“智力决定论”，也让 Kaplan 迅速成为全美中产家庭跨越阶层的有力武器。" 
            }
        ],
    },
    // --- 2.2 SAT 辅导形式：Stats 数字化展示 ---
    {
        id: "ch1-sat-methods-stats",
        type: "content",
        chapter: "Chapter 01",
        title: "Kaplan SAT 交付体系",
        theme: "purple",
        
        // 1. 核心 Stats 组件：将形式转化为价值指标
        hasStats: true,
        // 1. 将 hasStats 改为 hasFeatures
        hasFeatures: true, 
        
        // 2. 将 stats 数组改为 features 数组
        features: [
            { 
                // 适配 JS：使用 icon 字段（Emoji），原 iconName 现有组件不支持
                icon: "📺", 
                // 适配 JS：使用 title 字段（合并了原 value 和 unit 以保持信息完整）
                title: "直播课 (实时互动)", 
                // 适配 JS：使用 desc 字段
                desc: "自研平台交付，主讲老师拆解逻辑 + 助教实时答疑。" 
            },
            { 
                icon: "🎬", 
                title: "录制课 (5-10min微视频)", 
                desc: "全考点拆解为数百个微视频，穿插交互式练习。" 
            },
            { 
                icon: "💻", 
                title: "仿真模考 (Digital SAT)", 
                desc: "界面与官方机考完全一致，精准预测最终得分。" 
            }
        ],

        // 2.3 补充 Card：保留高价值的私人定制服务
        cards: [
            { 
                type: "purple", 
                title: "精英进阶：1对1 私人定制服务", 
                desc: "针对目标 1550+ 或存在严重偏科的学生，提供基于大数据诊断的个性化提分路径，是 Kaplan 最高端的交付形态。" 
            }
        ],

        hasImage: false
    },
    // --- 3. Kaplan预科 ---
    {
        id: "ch1-divider",
        type: "divider", 
        chapter: "Chapter 03",
        title: "三、Kaplan 英国预科",
        subtitle: "全球业务的旗舰板块",
        theme: "purple"
    },
    // --- 2.1. 与谢菲尔德大学的合作 ---
    {
        id: "ch1",
        type: "content",
        chapter: "Chapter 03",
        title: "预科起点：与英国谢菲尔德大学的合作",
        theme: "purple",
        cards: [
            { 
                type: "blue", 
                title: "联合成立：谢菲尔德大学国际学院", 
                desc: "谢菲尔德大学（The University of Sheffield）与 Kaplan双方共同成立了<span class='highlight-purple'>谢菲尔德大学国际学院</span>。学生享有和普通大学生一样的校园卡，可以使用图书馆、体育馆和学生会。",
                link: "" 
            },
            { 
                type: "blue", 
                title: "核心吸引力：升学保证", 
                desc: "学生在 USIC 完成本科预科（Foundation）或硕士预科（Pre-Master's），只要达到约定的校内成绩（通常是<span class='highlight-blue'>成绩达到 60%-70% 且英语达标</span>），即可直接升读谢菲尔德大学的学位课程。",
                link: "" 
            },
            { 
                type: "blue", 
                title: "联合开发课程", 
                desc: "他们的合作深入到了专业课，工程预科的数学难度是<span class='highlight-green'>根据谢大顶尖的工程学院要求定制</span>的。",
                link: "" 
            },
        ]
    },
    // --- 2.2. 贴牌教育 ---
    {
        id: "ch1",
        type: "content",
        chapter: "Chapter 03",
        title: "贴牌教育",
        theme: "purple",
        tips: "✨ 核心逻辑：品牌归大学，运营归企业，利益共享",
        tipsColor: "red", 
        tipsAlign: "left",
        cards: [
            { 
                type: "blue", 
                title: "Kaplan 负责：全球运营与学生支持", 
                desc: "包括全球范围内的招生渠道、咨询和录取、USIC 教学楼（Velocity Village）的租赁、设施维护和行政管理、学费的收取与商业运营等",
                link: "" 
            },
            { 
                type: "blue", 
                title: "谢大提供：学术内核和名校背书", 
                desc: "制定升学所需的成绩标准（如 60%-70% 升学线），定期审核 USIC 的教案、试卷和评分标准，确保预科学生达到大学本科的入学水平，学位证由谢菲尔德大学直接颁发",
                link: "" 
            },
        ],
        
    },
    // --- 2.3. 谢大国际学院官网" ---
    {
        id: "ch1",
        type: "content",
        chapter: "Chapter 03",
        title: "谢大国际学院官网",
        theme: "purple",
        

        // --- 新增图片组件配置 ---
        hasImage: true,
        imgAspectRatio: "16/9", // 自定义比例
        imgUrl: "https://coco-default.oss-cn-shanghai.aliyuncs.com/%E8%B0%A2%E8%8F%B2%E5%B0%94%E5%BE%B7%E5%A4%A7%E5%AD%A6%E7%BD%91%E7%AB%99.png",
        imgWidth: 70, // 百分比宽度
        imgDesc: "谢菲尔德大学国际学院官网，未展示第三方信息，<br>但底部<span class='wavy-orange'>合作伙伴已变为SG（Study Group）</span>"
        
    
    },
    // --- 2.4 kaplan预科竞争对手 ---
    {
        id: "competitor_analysis",
        type: "content",
        chapter: "Market Intelligence",
        title: "Kaplan预科竞争对手",
        theme: "blue",

        // 2. 核心对比表格（含 Kaplan 自己）
        hasTable: true,
        tableHeaders: ["教育集团", "核心市场", "合作院校特色", "办学模式", "中国认可度", "优势特色"],
        tableRows: [
            { 
                group: "Kaplan", 
                name: "英/美/澳/新", 
                lang: "顶尖公立及综合大学", 
                time: "深度校内集成", 
                count: "极高（中留服全面认证）", 
                score: "自研KITE测试/升学率95%+" 
            },
            { 
                group: "Study Group", 
                name: "英/欧/澳", 
                lang: "罗素集团及研究型大学", 
                time: "校外/校内中心混合", 
                count: "高", 
                score: "英国市场占有率极高" 
            },
            { 
                group: "INTO", 
                name: "英/美", 
                lang: "城市型及大型州立大学", 
                time: "校方合资联办", 
                count: "中高", 
                score: "校园设施投资规模大" 
            },
            { 
                group: "Navitas", 
                name: "澳洲/加/英", 
                lang: "现代化实用型大学", 
                time: "校内中心", 
                count: "中", 
                score: "澳洲起家，流程标准化" 
            }
        ],
        // --- 新增图片组件配置 ---
        hasImage: true,
        imgAspectRatio: "8/1", // 自定义比例
        imgUrl: "https://coco-default.oss-cn-shanghai.aliyuncs.com/%E7%AB%9E%E5%93%81.png",
        imgWidth: 80, // 百分比宽度
        imgDesc: ""
    },
    // --- 2.5 Kaplan 预科版图与战略解析 ---
    {
        id: "foundation-global-strategy",
        type: "content",
        chapter: "Market Strategy",
        title: "Kaplan 预科全球版图：为何美国是“例外”？",
        theme: "blue",

        //// 1. 开启 Features 开关
    hasFeatures: true,
    
    // 2. 将 stats 转换为 features 数组
    features: [
        { 
            // 🚩 对应原 flag 图标
            icon: "🗺️", 
            title: "英/澳/新：官方预科 (刚需衔接)",
            desc: "针对英联邦 13 年学制断层。Kaplan 作为大学官方延伸，提供学术与语言双重保障，是升入名校的唯一“标准化通道”。" 
        },
        { 
            // ⚡ 对应原 bolt 图标
            icon: "⚡", 
            title: "新加坡：快捷本科 (高效跳板)",
            desc: "利用 CPE 政策压缩学制。通过“2 年本科”模式解决亚洲学生的时间焦虑，侧重于职业产出而非单纯的学制补齐。" 
        },
        { 
            // 🙅 对应原 block 图标
            icon: "🙅", 
            title: "美国：非预科逻辑 (Why No Foundation?)",
            desc: "美国本科无学制断层；且美国大学极其看重学术自治，倾向于自主招生或“校内桥梁课程”，而非独立的校外预科。" 
        }
    ]
        
    },

    // --- 4. 过渡页 ---
    {
        id: "ch1-divider",
        type: "divider", 
        chapter: "Chapter 04",
        title: "四、Kaplan 亚洲",
        subtitle: "名校的超级教学中心",
        theme: "purple"
    },
    //--- 4.1 kaplan亚洲布局 ---
    {
        id: "ch1",
        type: "content",
        chapter: "Chapter 04",
        title: "Kaplan亚洲布局",
        theme: "purple",
        cards: [
            { 
                type: "purple", 
                title: "亚洲布局", 
                desc: "以新加坡为学术心脏，以中国为战略与生源引擎，Kaplan 亚洲构建了一个辐射亚太的跨境名校学历与金融考证教育网络。",
                link: "" 
            },
        ],
        // --- 新增图片组件配置 ---
        hasImage: true,
        imgAspectRatio: "2/1", // 自定义比例
        imgUrl: "https://coco-default.oss-cn-shanghai.aliyuncs.com/kaplan-asia.jpg",
        imgWidth: 60, // 百分比宽度
        imgDesc: ""
    },
    //--- 4.2 战略选择：为何重仓新加坡？ ---
    {
        id: "ch1",
        type: "content",
        chapter: "Chapter 04",
        title: "战略选择：为何重仓新加坡？",
        theme: "purple",
        // --- 新增的 Tip 标签 ---
        tips: "⚖️ 核心价值：新加坡校区不仅是教学点，更是 Kaplan 亚洲的‘信用背书’与‘学术标准’输出中心。",
        tipsColor: "purple",
        tipsAlign: "left", // 居中显示，显得更有分量
        cards: [
            { 
                type: "purple", 
                title: "EduTrust 严苛准入", 
                desc: "新加坡拥有全球最严的私立教育监管体系，确保学历的<span class='highlight-purple'>高含金量与国际认可度</span>，非其他东南亚国家可比。",
                link: "" 
            },
            { 
                type: "purple", 
                title: "黄金“跳板”地位", 
                desc: "作为英澳名校的亚洲枢纽，学生在此可实现<span class='wavy-orange'>学分互认、自由转校</span>，是通往全球 Top 100 名校的最优捷径。",
                link: "" 
            },
            { 
                type: "purple", 
                title: "商业中心价值", 
                desc: "借力新加坡全球金融中心地位，Kaplan 毕业生不仅获得学位，更能获得<span class='highlight-blue'>跨国企业的实习与就业机会</span>。",
                link: ""
            }
        ]
    },
    //--- 4.3 什么是EduTrust 认证？ ---
    {
        id: "edutrust-explained",
        type: "content", 
        chapter: "Quality Assurance",
        title: "什么是EduTrust认证？",
        theme: "purple",
        cards: [
            { 
                type: "blue", 
                title: "什么是 EduTrust？", 
                desc: "这是新加坡政府（CPE）给私立学校发的‘优等生证’。它不仅考察教学，还强制要求学费保障计划。简单说：没这个证，学校不合法，留学生办不了签证。<span class='highlight-green'>中国教育部（中留服）目前只认可获得该认证的私立院校文凭</span>，这是回国认证的唯一前提。" 
            }
        ],
        hasTable: true,
        tableHeaders: ["认证等级", "有效期", "含金量解读", "学生保障", "代表院校"],
        tableRows: [
            { 
                group: "星级认证 (Star)", 
                name: "4 年", 
                lang: "行业最高荣誉", 
                time: "全方位顶配", 
                count: "Kaplan, JCU, LaSalle" 
            },
            { 
                group: "优质认证 (Standard)", 
                name: "4 年", 
                lang: "主流信誉保障", 
                time: "符合政府高标准", 
                count: "SIM, PSB, MDIS" 
            },
            { 
                group: "临时认证 (Provisional)", 
                name: "1 年", 
                lang: "入门/观察期", 
                time: "基础合规", 
                count: "新成立或小型学院" 
            }
        ]
    },
    // --- 4.3. 战略扩张：为何布局胡志明市？ ---
    {
        id: "ch2",
        type: "content",
        chapter: "Chapter 04",
        title: "增长引擎：为何剑指胡志明市？",
        theme: "orange", // 使用橙色代表新兴市场与活力
        tips: "🚀 增长洞察：胡志明市中心已从单纯的招生代表处，正式升级为 Kaplan 亚洲区第四大战略支点。",
        tipsColor: "orange",
        tipsAlign: "left",
        cards: [
            { 
                type: "orange", 
                title: "人口红利与中产崛起", 
                desc: "越南拥有东南亚最年轻的人口结构，胡志明市作为经济中心，其<span class='highlight-orange'>爆发式增长的中产阶级</span>正成为英澳名校预科的强力消费者。",
                link: "" 
            },
            { 
                type: "orange", 
                title: "区域战略“供血泵”", 
                desc: "作为 Kaplan 亚洲最新的生源枢纽，胡志明市中心直接对接新加坡校区，实现<span class='wavy-orange'>越-新-英/澳</span>三地联动，对冲传统留学市场的波动。",
                link: "" 
            },
            { 
                type: "orange", 
                title: "低成本名校路径", 
                desc: "通过在胡志明市完成前置衔接课程，学生能以<span class='highlight-blue'>极具竞争力的学费支出</span>获取同等质量的国际教育资源，开启名校录取“降维打击”。",
                link: "" 
            }
        ],

    },
    // --- 4. kplan副总裁 ---
    {
        id: "ch2",
        type: "content",
        chapter: "Chapter 04",
        title: "Kaplan中国区副总裁",
        theme: "orange", // 使用橙色代表新兴市场与活力
        // --- 新增图片组件配置 ---
        hasImage: true,
        imgAspectRatio: "4/3", // 自定义比例
        imgLink: "https://www.xiaohongshu.com/explore/6863af65000000001c036747?xsec_token=ABX8r06C7nptRXuaz1UnsISN1kAqwzVdjn22EX000uVvo=&xsec_source=pc_collect",
        imgUrl: "https://coco-default.oss-cn-shanghai.aliyuncs.com/kaplan%E5%89%AF%E6%80%BB%E8%A3%81%E6%8E%A5%E5%8F%97%E9%87%87%E8%AE%BF%E5%A4%A7%E5%9B%BE.png",
        imgWidth: 50, // 百分比宽度
        imgDesc: "Kaplan 中国区副总裁王凇<br>“预科适合想上名校但高中成绩没那么好的学生”，“不需要高考成绩，需要高中三年的平均成绩”，“预科期间每学期成绩加权计算，第三学期权重最高”"

    },
    // --- 5. 商业模式 ---
    {
        id: "ch1-divider",
        type: "divider", 
        chapter: "Chapter 05",
        title: "五、商业模式",
        subtitle: "Kaplan集团的前世今生",
        theme: "purple"
    },
        //5.1 商业实力
    {
    id: "ch8-parent-company-ghc",
    type: "content", 
    chapter: "Chapter 05",
    title: "资本版图：母公司 Graham Holdings (GHC)",
    theme: "purple",
    cards: [
        { 
            type: "purple", 
            title: "纽交所巨头：格雷厄姆控股 (NYSE: GHC)", 
            desc: "前身为《华盛顿邮报》集团。作为一家多元化投资控股公司，GHC 为 Kaplan 提供了极强的<span class='highlight-purple'>财务抗风险能力</span>与全球化的合规经营背书。" 
        }
    ],
    tableTitle: "GHC 集团主要业务板块 (2024)",
    hasTable: true,
    // 重新设计表头，更符合母公司资产配置视角
    tableHeaders: ["业务领域", "核心品牌/主体", "行业地位", "对集团贡献", "商业角色"],
    tableRows: [
        { 
            group: "教育服务", 
            name: "Kaplan 全球", 
            lang: "全球最大教育商", 
            time: "<span class='wavy-orange'>约 45-50%</span>", 
            count: "核心现金流来源" // 对应“现金牛”
        },
        { 
            group: "广播电视", 
            name: "Graham Media Group", 
            lang: "区域电视台领头羊", 
            time: "约 15%", 
            count: "稳定的本地营收" 
        },
        { 
            group: "制造与医疗", 
            name: "Hoover / Dekko 等", 
            lang: "细分工业领域", 
            time: "约 20%", 
            count: "多元化资产对冲" 
        },
        { 
            group: "汽车与零售", 
            name: "Graham Automotive", 
            lang: "美国本土服务", 
            time: "约 15%", 
            count: "增长型潜力业务" 
        }
    ]
},
    //5.2 现金流奶牛
    {
        id: "ch10-cash-cow-focus",
        type: "content",
        chapter: "Chapter 05",
        title: "Kaplan：现金流奶牛",
        theme: "blue",
        // 只保留一个核心卡片，通过大段文字讲透
        cards: [
            { 
                type: "blue", 
                title: "庞大的预收账款", 
                desc: "Kaplan 的账面上通常滚动着 数亿美元 的“预收账款”，在 2023/2024 财年报告中，这一数字经常保持在 <span class='wavy-orange'>4 亿至 5 亿美元</span> 规模" 
            },
            { 
                type: "blue", 
                title: "轻资产、高周转", 
                desc: " 其资本开支通常仅占营收的 1% - 2%（主要用于 IT 系统维护和校区翻新）" 
            },
            { 
                type: "blue", 
                title: "极强的“抗周期性”", 
                desc: "当经济繁荣时，大家有钱留学；<span class='highlight-purple'>当经济低迷、就业困难时，大家为了避险或提升竞争力，反而会扎堆去考证（CFA/ACCA）或读研究生。</span>" 
            }
        ],
        // 彻底去掉图片和 stats
        hasStats: false,
        hasImage: false
    },
    // --- 5.3. 商业盈利模式与分成机制 ---
    {
        id: "ch9-revenue-model",
        type: "content", 
        chapter: "Chapter 05",
        title: "互利共赢：商业合作与分成机制",
        theme: "purple",
        cards: [
            { 
                type: "purple", 
                title: "多元化营收结构", 
                desc: "Kaplan 的商业成功建立在与全球合作伙伴的深度利益绑定之上。通过<span class='highlight-purple'>学费分成</span>、<span class='highlight-purple'>资源授权</span>及<span class='highlight-purple'>招生佣金</span>，构建了极其稳健的现金流体系。" 
            }
        ],
        tableTitle: "合作伙伴分配机制参考",
        hasTable: true,
        // 补齐了第 6 个表头 "核心逻辑/评价"
        tableHeaders: ["角色类型", "分配项目", "预估占比 (Est.)", "结算周期", "关键考核指标", "核心逻辑/评价"],
        tableRows: [
            { 
                group: "海外大学 (B2B)", 
                name: "学费净额分成", 
                lang: "25% - 45%", 
                time: "按学期结算", 
                count: "招生规模/学生满意度", 
                score: "风险共担，名校品牌授权" 
            },
            { 
                group: "区域代理 (B2B2C)", 
                name: "招生激励佣金", 
                lang: "15% - 22%", 
                time: "学生全额缴费后", 
                count: "学生到校率/签证通过率", 
                score: "阶梯式激励机制" 
            },
            { 
                group: "内部中心", 
                name: "教学服务管理费", 
                lang: "30% - 35%", 
                time: "年度财报核算", 
                count: "KITE测试/升学率", 
                score: "核心学术质量运营成本" 
            },
            { 
                group: "<span class='wavy-orange'>数字化平台</span>", 
                name: "技术/内容授权费", 
                lang: "10% - 15%", 
                time: "按订阅/使用量", 
                count: "系统稳定性/活跃度", 
                score: "数字化教学资产复用" 
            }
        ],
    },
    // --- 5.5. 数字化资产与技术授权 ---
    {
        id: "ch11-digital-kaplan",
        type: "content",
        chapter: "Chapter 11",
        title: "数字化平台：Kaplan Digital Learning",
        theme: "cyan",
        cards: [
            { 
                type: "cyan", 
                title: "1. 数字化门户：MyKaplan", 
                desc: "一站式全设备学习门户。集成录播课、电子教材与实时进度分析，支持学生随时随地开启碎片化学习。" 
            },
            { 
                type: "blue", 
                title: "2. 核心大脑：KITE 测评", 
                desc: "AI 驱动的自适应测评系统。通过算法精准分析学生薄弱点，动态调整练习难度，实现个性化提分路径。" 
            },
        ],
        hasStats: false,
        hasImage: false
    },
    {
        id: "ch11-mykaplan-focus",
        type: "content",
        chapter: "Chapter 05",
        title: "数字化门户：MyKaplan 智能学习系统",
        theme: "purple",

        
        // 1. 唯一核心 Card：讲透功能
        cards: [
            { 
                type: "cyan", 
                title: "全场景智能 LMS 平台", 
                desc: "提供高清直播、录播课程及全套考试资料，支持全球学生随时随地同步学习进度。"
            }
        ],

        // 2. 唯一展示图：展示跨设备界面（建议使用 21:9 或更扁平的比例防止溢出）
        hasImage: true,
        imgUrl: "https://coco-default.oss-cn-shanghai.aliyuncs.com/mykaplan.png",
        imgLink: "https://www.kaplan.com.sg/mykaplan/",
        imgDesc: "MyKaplan 界面示意：支持多端同步的智能化学习仪表盘",
        imgAspectRatio: "18/7", // 极致扁平比例，留出更多空间给文字
        imgWidth: 70, // 百分比宽
        hasStats: false
    },
    // --- 5.6. 核心数字化资产：KITE 测评系统 ---
    {
        id: "ch12-kite-assessment",
        type: "content",
        chapter: "Chapter 05",
        title: "核心资产：KITE 自适应测评系统",
        theme: "purple",
        
        // 1. 唯一核心 Card：突出 AI 自适应属性
        cards: [
            { 
                type: "blue", 
                title: "AI 驱动的“千人千面”测评大脑", 
                desc: "基于 CAT (计算机自适应测试) 算法，题目难度随学生作答正确率实时调整。仅需 60 分钟即可产出高信度评估报告，是 Kaplan 全球入学筛选与技术授权的核心知识产权 (IP)。" 
            }
        ],

        // 2. 唯一展示图：建议展示测评报告或系统界面
        hasImage: true,
        imgUrl: "https://coco-default.oss-cn-shanghai.aliyuncs.com/KITE%E8%80%83%E8%AF%95.png", // 建议替换为 KITE 报告样张
        imgLink: "https://www.kaplanenglishtest.com/",
        imgDesc: "KITE 测评报告示例：多维度解析语言能力，提供针对性提分建议",
        imgAspectRatio: "18/7", 
        imgWidth: 70, 
        hasStats: false
    },
    
];