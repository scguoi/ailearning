
import { Slide, SlideType } from './types';

export const SLIDES: Slide[] = [
  // --- Section 1: Intro ---
  {
    id: 1,
    type: SlideType.COVER,
    content: {
      title: "从代码到价值",
      subtitle: "大模型时代新工程师的成长范式",
      quote: "AI 时代，重塑工程师的核心竞争力",
      imagePrompt: "A futuristic digital landscape showing a bridge connecting raw computer code binary streams to a glowing golden gemstone representing value. Cyberpunk style, blue and gold colors, cinematic lighting."
    }
  },
  {
    id: 2,
    type: SlideType.LIST,
    content: {
      title: "今日议程",
      points: [
        "引言：时代变革下的价值重构",
        "新局面：初阶工程师的危机与转机",
        "能力重塑：软件工程核心能力的再定义",
        "认知升级：从执行者到驾驭者",
        "实战案例：AI 赋能工程实践",
        "结语：构建你的未来护城河"
      ],
      imagePrompt: "A clean, modern holographic agenda board floating in a dark tech workspace, showcasing 6 distinct glowing icons."
    }
  },
  {
    id: 3,
    type: SlideType.IMAGE_SPLIT,
    content: {
      title: "引言：软件工程的演进",
      points: [
        "过去 20 年：工程师的价值高度绑定于“高质量代码产出”。",
        "核心指标：代码行数、Bug 率、算法复杂度。",
        "工作模式：人工编写每一行逻辑，手动构建每一个模块。",
        "瓶颈：人的打字速度和记忆容量限制了生产力。"
      ],
      quote: "曾经，代码就是一切。",
      imagePrompt: "A retro computer monitor displaying complex green code on a black screen, surrounded by stacks of technical manuals. 1990s aesthetic."
    }
  },
  {
    id: 4,
    type: SlideType.IMAGE_SPLIT,
    content: {
      title: "大模型的冲击",
      points: [
        "AI 现状：Copilot、Cursor 等工具已能生成 60%-80% 的通用业务代码。",
        "即时性：几秒钟内完成过去需要几小时的 CRUD 工作。",
        "可用性：生成的代码虽然不完美，但已高度可用。",
        "结论：单纯的“写代码”不再是稀缺资源。"
      ],
      quote: "代码生产力的通货膨胀已经开始。",
      imagePrompt: "A giant glowing AI brain descending into a server room, typing code on multiple screens simultaneously at lightning speed."
    }
  },
  {
    id: 5,
    type: SlideType.SECTION_HEADER,
    content: {
      title: "核心主旨",
      subtitle: "从“代码产出”转向“价值创造”",
      quote: "写代码不再是终点，创造价值才是工程师的真正起点。",
      imagePrompt: "An abstract concept art showing a metamorphosis: a caterpillar made of metal code turning into a brilliant butterfly made of light."
    }
  },

  // --- Section 2: Challenges & Opportunities ---
  {
    id: 6,
    type: SlideType.SECTION_HEADER,
    content: {
      title: "新局面",
      subtitle: "初阶工程师的挑战与机遇",
      quote: "危机中往往通过机遇的大门。",
      imagePrompt: "A split screen or duality concept art. One side shows a stormy sea (challenges), the other side shows a rocket taking off (opportunities)."
    }
  },
  {
    id: 7,
    type: SlideType.IMAGE_SPLIT,
    content: {
      title: "挑战一：边际价值下降",
      points: [
        "基础开发门槛降低：实习生+AI 可能等于过去的初级工程师。",
        "可替代感：如果你的工作只是“翻译需求为代码”，AI 比你更快。",
        "竞争加剧：入行门槛看似降低，实则对综合素质要求更高。"
      ],
      imagePrompt: "A robot hand putting the final piece on a puzzle, while a human looks on, looking slightly concerned. Represents automation of tasks."
    }
  },
  {
    id: 8,
    type: SlideType.IMAGE_SPLIT,
    content: {
      title: "挑战二：工程素养缺口放大",
      points: [
        "代码参差不齐：AI 生成的代码可能包含隐蔽 Bug 或安全漏洞。",
        "黑盒风险：直接复制粘贴导致“知其然不知其所以然”。",
        "维护噩梦：如果没有良好的架构意识，AI 生成的堆砌代码将难以维护。"
      ],
      imagePrompt: "A beautiful looking skyscraper (code) that has a very shaky, crumbling foundation. Visualizing technical debt."
    }
  },
  {
    id: 9,
    type: SlideType.IMAGE_SPLIT,
    content: {
      title: "挑战三：学习路径碎片化",
      points: [
        "跳过基础：AI 帮助解决了报错，导致新人失去了 Debug 的磨练机会。",
        "知识断层：能跑通复杂的 Demo，但不懂底层的原理。",
        "虚假自信：误以为“会用 AI 生成”等于“掌握了技术”。"
      ],
      imagePrompt: "A library with scattered, torn pages of books floating in the air, representing fragmented knowledge."
    }
  },
  {
    id: 10,
    type: SlideType.IMAGE_SPLIT,
    content: {
      title: "机遇一：成长加速器",
      points: [
        "24小时导师：随时随地解释代码、分析错误、提供优化建议。",
        "缩短学习曲线：从“卡在语法错误”到“专注于逻辑实现”。",
        "知识图谱：AI 可以帮你快速构建陌生领域的知识框架。"
      ],
      imagePrompt: "A young engineer wearing AR glasses, with a friendly glowing AI interface guiding them through a complex holographic engine."
    }
  },
  {
    id: 11,
    type: SlideType.IMAGE_SPLIT,
    content: {
      title: "机遇二：更快进入核心层",
      points: [
        "跳过重复劳动：不再被 CRUD 消耗精力。",
        "直面业务：新人能更早接触业务逻辑、架构设计等高维问题。",
        "全栈潜力：前端能轻松写后端，后端能快速画页面，边界被打破。"
      ],
      imagePrompt: "An elevator shooting up rapidly past floors labeled 'Syntax' and 'Boilerplate' directly to the top floor labeled 'Architecture'."
    }
  },
  {
    id: 12,
    type: SlideType.IMAGE_SPLIT,
    content: {
      title: "机遇三：价值体现前置",
      points: [
        "从执行到提案：不仅是完成任务，更能利用 AI 提出优化方案。",
        "每个人都是 PM：利用 AI 快速产出原型，验证想法。",
        "影响力提升：初级工程师也能通过工具杠杆产出资深工程师的质量。"
      ],
      quote: "AI 不是来替代你的，而是加速把你推向更高维度的竞争。",
      imagePrompt: "A young person presenting a glowing, complex 3D model to a group of impressed executives. Success and early impact."
    }
  },

  // --- Section 3: Core Skills ---
  {
    id: 13,
    type: SlideType.SECTION_HEADER,
    content: {
      title: "能力重塑",
      subtitle: "软件工程核心能力的再定义",
      quote: "在 AI 能写代码的时代，工程师的护城河是工程力，而不是手速。",
      imagePrompt: "A blueprint of a human brain merging with a circuit board, highlighting new neural pathways."
    }
  },
  {
    id: 14,
    type: SlideType.TABLE,
    content: {
      title: "能力对比概览",
      subtitle: "从 Traditional 到 AI-Native",
      table: {
        headers: ["维度", "传统核心能力", "新时代核心能力"],
        rows: [
          ["编码", "手动编写，语法记忆", "Code Review，提示词工程"],
          ["交付", "功能实现", "系统设计与技术取舍"],
          ["协作", "独立开发模块", "人机协作，工具链整合"],
          ["思维", "执行力", "批判性思维与验证能力"]
        ]
      },
      imagePrompt: "A scale weighing two sides: one side has a stack of floppy disks, the other side has a glowing AI chip."
    }
  },
  {
    id: 15,
    type: SlideType.IMAGE_SPLIT,
    content: {
      title: "转变 1：写代码 → 审视代码",
      points: [
        "Reviewer 角色：你将成为 AI 的代码审查员。",
        "鉴别能力：能够一眼看出 AI 生成代码的潜在 Bug 和性能陷阱。",
        "安全意识：防止 AI 引入恶意包或不安全的写法。",
        "重构能力：指引 AI 优化代码结构，而不仅仅是生成代码。"
      ],
      imagePrompt: "A detective looking at lines of code through a magnifying glass, looking for clues or errors."
    }
  },
  {
    id: 16,
    type: SlideType.IMAGE_SPLIT,
    content: {
      title: "转变 2：功能交付 → 系统设计",
      points: [
        "关注宏观：模块之间如何交互？数据如何流转？",
        "技术选型：为什么用 A 方案不用 B 方案？（AI 可以给出选项，你需要做决策）",
        "可扩展性：设计能够适应未来变化的系统架构。",
        "取舍之道：在性能、成本、开发速度之间做平衡。"
      ],
      imagePrompt: "An architect looking at a city blueprint table, moving buildings around to create the perfect layout."
    }
  },
  {
    id: 17,
    type: SlideType.IMAGE_SPLIT,
    content: {
      title: "转变 3：独立完成 → 工具链整合",
      points: [
        "工具驾驭：熟练使用 IDE AI 插件、CLI 工具、自动化脚本。",
        "流程编排：将 AI 嵌入到从需求到上线的每一个环节。",
        "人机协作：知道什么时候该自己写，什么时候该让 AI 写。",
        "效率倍增：构建自己的“外挂”库。"
      ],
      imagePrompt: "A conductor leading an orchestra where the musicians are various robots and AI tools."
    }
  },
  {
    id: 18,
    type: SlideType.IMAGE_SPLIT,
    content: {
      title: "转变 4：熟练技能 → 批判性思维",
      points: [
        "不盲从：AI 经常会一本正经地胡说八道（幻觉）。",
        "验证精神：对每一行生成的代码进行测试和验证。",
        "问题定义：准确描述问题的能力比解决问题的能力更重要。",
        "第一性原理：回归事物本质，不被 AI 的表面答案迷惑。"
      ],
      imagePrompt: "A thinker sculpture pose, but the thinker is looking at a holographic projection, analyzing it critically."
    }
  },

  // --- Section 4: Mindset ---
  {
    id: 19,
    type: SlideType.SECTION_HEADER,
    content: {
      title: "心态与认知升级",
      subtitle: "Identity Shift",
      quote: "AI 可以帮你跑得更快，但只有自驱力才能让你跑得更远。",
      imagePrompt: "A runner on a track, starting blocks transforming into rocket boosters."
    }
  },
  {
    id: 20,
    type: SlideType.IMAGE_SPLIT,
    content: {
      title: "身份转变",
      points: [
        "❌ 执行者 (Executor)：等待分配任务，按部就班写代码。",
        "✅ 驾驭者 (Pilot)：指挥 AI 完成基础工作，掌控航向。",
        "✅ 价值贡献者 (Value Creator)：关注代码背后的业务价值。",
        "目标：从“我写了多少代码”转变为“我解决了什么问题”。"
      ],
      imagePrompt: "A person in a pilot suit sitting in a high-tech cockpit, controlling a massive futuristic mech."
    }
  },
  {
    id: 21,
    type: SlideType.IMAGE_SPLIT,
    content: {
      title: "学习模式转变",
      points: [
        "旧模式：背诵 API，记忆语法，重复练习。",
        "新模式：探索边界，验证假设，即学即用。",
        "JIT 学习 (Just-In-Time)：遇到问题 → 询问 AI → 理解原理 → 解决问题。",
        "元认知：学习“如何学习”比学习具体的知识更重要。"
      ],
      imagePrompt: "A student downloading knowledge packs directly into their mind, representing fast, efficient learning."
    }
  },
  {
    id: 22,
    type: SlideType.IMAGE_SPLIT,
    content: {
      title: "自驱力：核心的发动机",
      points: [
        "主动性：AI 只是工具，不会自己找活干。",
        "好奇心：探究 AI 代码背后的原理，而不是止步于“能跑就行”。",
        "危机感：意识到停滞不前就是退步。",
        "结论：自驱力是将工具能力转化为个人竞争力的关键。"
      ],
      imagePrompt: "A glowing internal engine inside a human silhouette, radiating energy."
    }
  },

  // --- Section 5: Practice ---
  {
    id: 23,
    type: SlideType.GRID,
    content: {
      title: "工程实践案例",
      subtitle: "AI 如何赋能日常开发",
      gridItems: [
        { title: "研发提效", desc: "CI/CD 脚本自动化", icon: "zap" },
        { title: "质量保障", desc: "单测与边界用例生成", icon: "shield" },
        { title: "知识沉淀", desc: "文档与注释自动维护", icon: "book" },
        { title: "业务原型", desc: "快速 Demo 搭建", icon: "layout" }
      ],
      imagePrompt: "A futuristic workshop table with four distinct stations, each showing a different aspect of engineering being enhanced by glowing AI tools."
    }
  },
  {
    id: 24,
    type: SlideType.IMAGE_SPLIT,
    content: {
      title: "案例 1：研发提效",
      points: [
        "场景：配置复杂的 GitHub Actions 或 Dockerfile。",
        "AI 赋能：描述需求，AI 生成完整配置脚本。",
        "价值：将数小时的查阅文档时间缩短为几分钟。",
        "注意：需要人工检查路径、权限和版本号。"
      ],
      imagePrompt: "A high-speed conveyor belt in a factory, moving software packages rapidly through green scanning lights."
    }
  },
  {
    id: 25,
    type: SlideType.IMAGE_SPLIT,
    content: {
      title: "案例 2：质量保障",
      points: [
        "场景：为遗留代码补充单元测试。",
        "AI 赋能：粘贴代码，让 AI 生成测试用例，特别是边界条件（空值、溢出）。",
        "价值：大幅提升测试覆盖率，减少线上 Bug。",
        "进阶：让 AI 扮演“找茬”角色，Review 你的代码逻辑。"
      ],
      imagePrompt: "A digital shield protecting a server, repelling red virus bugs."
    }
  },
  {
    id: 26,
    type: SlideType.IMAGE_SPLIT,
    content: {
      title: "案例 3：知识沉淀",
      points: [
        "场景：编写 API 文档或 onboarding 指南。",
        "AI 赋能：读取代码，自动生成 Swagger 文档或 Markdown 说明。",
        "价值：新人上手时间减少 30%，文档维护不再是负担。",
        "提示：保持文档与代码同步是关键。"
      ],
      imagePrompt: "An ancient looking book that is writing itself with a magical glowing quill."
    }
  },
  {
    id: 27,
    type: SlideType.IMAGE_SPLIT,
    content: {
      title: "案例 4：业务原型 (Demo)",
      points: [
        "场景：验证一个产品想法。",
        "AI 赋能：用前端代码生成器快速搭界面，用 Mock 数据填充。",
        "价值：验证周期从 2 周缩短到 3 天，低成本试错。",
        "成果：直接拿着可交互的 Demo 去找老板或客户沟通。"
      ],
      imagePrompt: "A 3D printer rapidly printing a prototype of a futuristic gadget."
    }
  },

  // --- Section 6: Conclusion ---
  {
    id: 28,
    type: SlideType.SECTION_HEADER,
    content: {
      title: "总结",
      subtitle: "The Future is Now",
      quote: "会用 AI 把工程做对，才是价值。",
      imagePrompt: "A sunrise over a digital city, symbolizing a new dawn."
    }
  },
  {
    id: 29,
    type: SlideType.LIST,
    content: {
      title: "回顾：新工程师的成长公式",
      points: [
        "基础：扎实的计算机科学原理（AI 给不了你的）。",
        "杠杆：熟练的 AI 协作能力（你的加速器）。",
        "核心：系统的工程思维与架构意识（你的护城河）。",
        "动力：永不满足的自驱力（你的燃料）。"
      ],
      quote: "Competence = CS Fundamentals + AI Leverage + Engineering Mindset",
      imagePrompt: "A mathematical formula floating in space, written in stars."
    }
  },
  {
    id: 30,
    type: SlideType.CLOSING,
    content: {
      title: "未来已来",
      subtitle: "去创造价值吧，工程师们！",
      quote: "AI 加速了成长，但决定你能否脱颖而出的，永远是自驱力。",
      imagePrompt: "An astronaut standing on Mars looking back at Earth, ready to explore further."
    }
  }
];
