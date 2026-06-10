const i18n = {
  en: {
    "nav.paper": "Paper",
    "nav.platform": "Platform",
    "nav.downloads": "Downloads",
    "nav.benchmark": "Benchmark",
    "nav.framework": "Framework",
    "nav.leaderboard": "Leaderboard",
    "nav.citation": "Citation",
    "actions.github": "GitHub",
    "actions.paper": "Paper",
    "actions.code": "Code",
    "actions.benchmark": "Benchmark",
    "actions.downloadBenchmark": "Download Benchmark",
    "actions.viewLeaderboard": "View Leaderboard",
    "actions.view3d": "3D View",
    "actions.leaderboard": "Leaderboard",
    "hero.type": "Paper · Platform · Benchmark · Framework",
    "hero.title": "MultiUAV-Plat: An LLM-Oriented Platform, Benchmark and Framework for Multi-UAV Collaborative Task Planning",
    "hero.subtitle": "A lightweight simulation platform and reproducible benchmark for studying LLM agents that plan, act, observe, and verify multi-UAV missions through restricted APIs and partial local perception.",
    "hero.corresponding": "* Corresponding author",
    "hero.visual2d": "2D mission overview for spatial reasoning and task inspection",
    "hero.visual3d": "3D visualization for execution feedback",
    "hero.visualConcept": "Conceptual benchmark mission map with UAV routes, assigned areas, targets, and validation states",
    "stats.sessions": "mission sessions",
    "stats.tasks": "natural-language tasks",
    "stats.checks": "validation checks",
    "platform.label": "Platform",
    "platform.title": "An agent-facing simulation layer for multi-UAV missions.",
    "platform.body": "MultiUAV-Plat exposes mission-level UAV actions through concise RESTful APIs, while preserving realistic constraints such as role-based visibility, partial observations, environment feedback, and optional 2D/3D visualization.",
    "platform.feature1.title": "Restricted API interaction",
    "platform.feature1.body": "Agents use observation, takeoff, landing, waypoint navigation, sensing, photography, communication, and verification endpoints instead of privileged simulator state.",
    "platform.feature2.title": "Agent-level observability",
    "platform.feature2.body": "Each active agent receives task descriptions, UAV status, command feedback, and local perception without access to hidden validator specifications.",
    "platform.feature3.title": "Human-readable debugging",
    "platform.feature3.body": "Synchronized 2D and 3D views make mission state, UAV movement, obstacles, targets, and execution progress easier to inspect.",
    "platform.image2d": "2D overview view",
    "platform.image3d": "3D visualization view",
    "downloads.label": "Downloads",
    "downloads.title": "Platform packages and benchmark assets.",
    "downloads.body": "Download platform installers for Windows, macOS, and Ubuntu, together with the benchmark package used for reproducible evaluation. Packages are distributed through GitHub Releases.",
    "downloads.windows": "Windows",
    "downloads.macos": "macOS",
    "downloads.ubuntu": "Ubuntu",
    "downloads.benchmark": "Benchmark",
    "downloads.release": "Platform installer",
    "downloads.benchmarkBody": "Sessions, tasks, scenarios, and validation assets",
    "benchmark.label": "Benchmark",
    "benchmark.title": "Closed-loop evaluation for LLM-controlled aerial collaboration.",
    "benchmark.body": "The benchmark evaluates whether agents can interpret natural-language objectives, choose UAVs, collect missing information, execute valid actions, coordinate multiple vehicles, and satisfy hidden mission-level checks.",
    "benchmark.scenarios.title": "Scenario families",
    "benchmark.scenarios.body": "Target Assignment, Area Search, and Area Assignment and Patrol.",
    "benchmark.difficulty.title": "Difficulty levels",
    "benchmark.difficulty.body": "Easy, Intermediate, Moderate, Hard, and Extreme mission settings.",
    "benchmark.validators.title": "Validation endpoints",
    "benchmark.validators.body": "Hidden checks score task completion and partial progress across movement, sensing, target, area, and coordination conditions.",
    "benchmark.caption": "Methodology overview connecting the platform, benchmark, and Agent4Drone workflow.",
    "framework.label": "Framework",
    "framework.title": "Agent4Drone structures planning into a feedback-driven workflow.",
    "framework.body": "The workflow keeps the agent focused on mission-level reasoning: observe, understand, remember, plan, execute, verify, and replan when feedback shows a gap.",
    "framework.caption": "Agent4Drone framework structure from the paper.",
    "workflow.observation": "Observation",
    "workflow.understanding": "Task Understanding",
    "workflow.memory": "Memory",
    "workflow.planning": "Planning",
    "workflow.execution": "Execution",
    "workflow.verification": "Verification",
    "leaderboard.label": "Leaderboard",
    "leaderboard.title": "Benchmark leaderboard and submissions.",
    "leaderboard.body": "The leaderboard is maintained under the unified benchmark protocol. Researchers can report new evaluation results through the Submit Results entry.",
    "leaderboard.loading": "Loading leaderboard data...",
    "leaderboard.loaded": "{count} results loaded. Sorted by Task Pass.",
    "leaderboard.error": "Could not load leaderboard data.",
    "leaderboard.sort": "Sort by Task Pass",
    "leaderboard.submit": "Submit Results",
    "leaderboard.costNote": "* The Agent4Drone + deepseek-v4-pro full benchmark run cost approximately $60 across more than 35K API requests, with roughly 15M output tokens, 90M cache-miss input tokens, and 2B cache-hit input tokens, based on the API usage records reported in the paper.",
    "table.rank": "Rank",
    "table.method": "Method",
    "table.backend": "LLM Backend",
    "table.taskPass": "Task Pass",
    "table.avgCheck": "Avg. Check",
    "table.globalCheck": "Global Check",
    "table.totalFailed": "Total Failed",
    "table.date": "Date",
    "table.paper": "Paper",
    "table.code": "Code",
    "table.notes": "Notes",
    "resources.label": "Resources",
    "resources.title": "Paper, code, benchmark, and citation.",
    "resources.citationNotice": "If you find this paper useful in your research, please consider citing it.\nIf you use or refer to our platform, benchmark, or workflow framework, please cite our paper.",
    "resources.code.title": "Code repository",
    "resources.code.body": "Open-source platform implementation",
    "resources.paper.title": "Paper and citation",
    "resources.paper.body": "Paper information, BibTeX entry, and citation guidance",
    "resources.data.title": "Benchmark data",
    "resources.data.body": "Download benchmark package from releases",
    "resources.copy": "Copy BibTeX",
    "resources.copied": "Copied",
    "resources.copyToast": "BibTeX copied to clipboard.",
    "resources.copyFailed": "Copy failed. Please select and copy the BibTeX manually.",
    "footer.text": "MultiUAV-Plat · LLM-oriented multi-UAV collaborative task planning",
    "footer.back": "Back to top"
  },
  zh: {
    "nav.paper": "论文",
    "nav.platform": "平台",
    "nav.downloads": "下载",
    "nav.benchmark": "基准",
    "nav.framework": "框架",
    "nav.leaderboard": "排行榜",
    "nav.citation": "引用",
    "actions.github": "GitHub",
    "actions.paper": "论文",
    "actions.code": "代码",
    "actions.benchmark": "基准数据",
    "actions.downloadBenchmark": "下载 Benchmark",
    "actions.viewLeaderboard": "查看排行榜",
    "actions.view3d": "3D View",
    "actions.leaderboard": "排行榜",
    "hero.type": "论文 · 平台 · 基准 · 框架",
    "hero.title": "MultiUAV-Plat：面向大模型的多无人机协同任务规划平台、基准与框架",
    "hero.subtitle": "一个轻量级仿真平台和可复现基准，用于研究大模型智能体如何在受限 API 与局部可观测条件下完成多无人机任务的规划、执行、观测和验证。",
    "hero.corresponding": "* 通信作者",
    "hero.visual2d": "用于空间推理和任务检查的 2D 任务总览",
    "hero.visual3d": "用于执行反馈的 3D 可视化",
    "hero.visualConcept": "包含无人机航线、分配区域、目标和验证状态的基准任务概念图",
    "stats.sessions": "任务会话",
    "stats.tasks": "自然语言任务",
    "stats.checks": "验证检查",
    "platform.label": "平台",
    "platform.title": "面向智能体的多无人机任务仿真交互层。",
    "platform.body": "MultiUAV-Plat 通过简洁的 RESTful API 暴露任务级无人机动作，同时保留基于角色的可见性、局部观测、环境反馈和可选 2D/3D 可视化等真实约束。",
    "platform.feature1.title": "受限 API 交互",
    "platform.feature1.body": "智能体通过观测、起飞、降落、航点飞行、感知、拍照、通信和验证等端点行动，而不是读取特权仿真状态。",
    "platform.feature2.title": "智能体级可观测性",
    "platform.feature2.body": "每个智能体只能访问任务描述、无人机状态、命令反馈和局部感知，不能读取隐藏验证规范。",
    "platform.feature3.title": "直观调试与展示",
    "platform.feature3.body": "同步 2D 与 3D 视图使任务状态、无人机运动、障碍物、目标和执行进度更易检查。",
    "platform.image2d": "2D 总览视图",
    "platform.image3d": "3D 可视化视图",
    "downloads.label": "下载",
    "downloads.title": "平台安装包与 Benchmark 资源。",
    "downloads.body": "下载 Windows、macOS 和 Ubuntu 平台安装包，以及用于可复现实验评测的 Benchmark 资源包。所有发布包通过 GitHub Releases 分发。",
    "downloads.windows": "Windows",
    "downloads.macos": "macOS",
    "downloads.ubuntu": "Ubuntu",
    "downloads.benchmark": "Benchmark",
    "downloads.release": "平台安装包",
    "downloads.benchmarkBody": "任务会话、任务、场景和验证资源",
    "benchmark.label": "基准",
    "benchmark.title": "面向大模型空中协同任务的闭环评测。",
    "benchmark.body": "该基准评估智能体能否理解自然语言目标、选择无人机、主动收集缺失信息、执行合法动作、协调多机并满足隐藏任务级检查。",
    "benchmark.scenarios.title": "场景族",
    "benchmark.scenarios.body": "目标分配、区域搜索、区域分配与巡逻。",
    "benchmark.difficulty.title": "难度级别",
    "benchmark.difficulty.body": "覆盖 Easy、Intermediate、Moderate、Hard 和 Extreme 五类任务设置。",
    "benchmark.validators.title": "验证端点",
    "benchmark.validators.body": "隐藏检查从移动、感知、目标、区域和协同条件衡量任务完成度与部分进展。",
    "benchmark.caption": "连接平台、基准和 Agent4Drone 工作流的方法总览。",
    "framework.label": "框架",
    "framework.title": "Agent4Drone 将任务规划组织为反馈驱动的工作流。",
    "framework.body": "该工作流聚焦任务级推理：观测、理解、记忆、规划、执行、验证，并在反馈显示偏差时重新规划。",
    "framework.caption": "论文中的 Agent4Drone 框架结构。",
    "workflow.observation": "观测",
    "workflow.understanding": "任务理解",
    "workflow.memory": "记忆",
    "workflow.planning": "规划",
    "workflow.execution": "执行",
    "workflow.verification": "验证",
    "leaderboard.label": "排行榜",
    "leaderboard.title": "Benchmark 排行榜与结果提交。",
    "leaderboard.body": "排行榜按照统一 Benchmark 协议维护，研究者可以通过提交结果入口报告新的评测结果。",
    "leaderboard.loading": "正在加载排行榜数据...",
    "leaderboard.loaded": "已加载 {count} 条结果，按任务通过率排序。",
    "leaderboard.error": "无法加载排行榜数据。",
    "leaderboard.sort": "按任务通过率排序",
    "leaderboard.submit": "提交结果",
    "leaderboard.costNote": "* Agent4Drone + deepseek-v4-pro 全量 Benchmark 运行约花费 400 多元人民币，覆盖超过 3.5 万次 API 请求，约消耗 1500 万输出 token、9000 万未命中缓存输入 token 和 20 亿命中缓存输入 token，依据论文中报告的 API 使用记录。",
    "table.rank": "排名",
    "table.method": "方法",
    "table.backend": "模型后端",
    "table.taskPass": "任务通过率",
    "table.avgCheck": "平均检查通过率",
    "table.globalCheck": "全局检查通过率",
    "table.totalFailed": "完全失败率",
    "table.date": "日期",
    "table.paper": "论文",
    "table.code": "代码",
    "table.notes": "备注",
    "resources.label": "资源",
    "resources.title": "论文、代码、基准数据与引用。",
    "resources.citationNotice": "如果你认为本文对你的研究有帮助，欢迎引用我们的论文。\n如果你使用或参考了我们的平台、测试基准或工作流框架，请引用我们的论文。",
    "resources.code.title": "代码仓库",
    "resources.code.body": "开源平台实现",
    "resources.paper.title": "论文与引用",
    "resources.paper.body": "论文信息、BibTeX 条目和引用说明",
    "resources.data.title": "基准数据",
    "resources.data.body": "从 releases 下载 Benchmark 包",
    "resources.copy": "复制 BibTeX",
    "resources.copied": "已复制",
    "resources.copyToast": "BibTeX 已复制到剪贴板。",
    "resources.copyFailed": "复制失败，请手动选中 BibTeX 复制。",
    "footer.text": "MultiUAV-Plat · 面向大模型的多无人机协同任务规划",
    "footer.back": "返回顶部"
  }
};

let currentLang = localStorage.getItem("multiuav-lang") || "en";
let sortDirection = "desc";

const t = (key) => i18n[currentLang][key] || i18n.en[key] || key;

const projectAuthors = [
  { name: "Sheng Zhang", url: "" },
  { name: "Qinglin Li", url: "" },
  { name: "Yuechao Zang", url: "" },
  { name: "Xueqin Huang", url: "" },
  { name: "Yijia Fu", url: "" },
  { name: "Cheng Zhu", url: "", marker: "*" }
];

const fallbackLeaderboardRows = [
  {
    rank: 1,
    method: "Agent4Drone",
    featured: true,
    backend: "DeepSeek V4 Pro",
    taskPass: 70.27,
    avgCheck: 84.86,
    globalCheck: 82.82,
    totalFailed: 6.20,
    passedTasks: "1054 / 1500",
    fullyFailedTasks: "93 / 1500",
    date: "2026-06-06",
    notes: "Full benchmark run",
    links: {
      github: "https://github.com/zhangsheng93/MultiUAV-Plat",
      paper: "https://arxiv.org/"
    }
  },
  {
    rank: 2,
    method: "Agent4Drone",
    backend: "DeepSeek V4 Flash",
    taskPass: 69.60,
    avgCheck: 83.40,
    globalCheck: 80.76,
    totalFailed: 6.80,
    passedTasks: "1044 / 1500",
    fullyFailedTasks: "102 / 1500",
    date: "2026-06-06",
    notes: "Full benchmark run",
    links: {
      github: "https://github.com/zhangsheng93/MultiUAV-Plat",
      paper: "https://arxiv.org/"
    }
  },
  {
    rank: 3,
    method: "Agent4Drone",
    backend: "doubao-2-pro",
    taskPass: 57.93,
    avgCheck: 74.58,
    globalCheck: 71.96,
    totalFailed: 12.93,
    passedTasks: "869 / 1500",
    fullyFailedTasks: "194 / 1500",
    date: "2026-06-09",
    notes: "Paper framework",
    links: {
      github: "https://github.com/zhangsheng93/MultiUAV-Plat",
      paper: "https://arxiv.org/"
    }
  },
  {
    rank: 4,
    method: "ReAct",
    backend: "qwen3.5",
    taskPass: 41.93,
    avgCheck: 59.42,
    globalCheck: 56.29,
    totalFailed: 22.20,
    passedTasks: "629 / 1500",
    fullyFailedTasks: "333 / 1500",
    date: "2026-05-25",
    notes: "Baseline",
    links: {
      github: "https://github.com/zhangsheng93/MultiUAV-Plat",
      paper: ""
    }
  },
  {
    rank: 5,
    method: "ReAct",
    backend: "doubao-2-pro",
    taskPass: 30.60,
    avgCheck: 47.91,
    globalCheck: 43.15,
    totalFailed: 32.40,
    passedTasks: "459 / 1500",
    fullyFailedTasks: "486 / 1500",
    date: "2026-06-10",
    notes: "Baseline",
    links: {
      github: "https://github.com/zhangsheng93/MultiUAV-Plat",
      paper: ""
    }
  }
];

let leaderboardRows = [...fallbackLeaderboardRows];

function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.body.dataset.lang = lang;
  localStorage.setItem("multiuav-lang", lang);
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  renderHeroMeta();
  renderLeaderboard();
}

function renderHeroMeta() {
  const authorList = document.querySelector("[data-author-list]");

  if (authorList) {
    authorList.innerHTML = "";
    projectAuthors.forEach((author, index) => {
      const node = author.url ? document.createElement("a") : document.createElement("span");
      node.textContent = author.name;
      if (author.url) {
        node.href = author.url;
        node.target = "_blank";
        node.rel = "noopener noreferrer";
      }
      if (author.marker) {
        const marker = document.createElement("sup");
        marker.textContent = author.marker;
        marker.className = "author-marker";
        node.appendChild(marker);
      }
      authorList.appendChild(node);
      if (index < projectAuthors.length - 1) {
        authorList.appendChild(document.createTextNode(", "));
      }
    });
  }
}

function formatPercent(value) {
  return `${Number(value).toFixed(2)}%`;
}

function normalizedRows() {
  const sorted = [...leaderboardRows].sort((a, b) => {
    const delta = Number(a.taskPass) - Number(b.taskPass);
    return sortDirection === "desc" ? -delta : delta;
  });
  return sorted.map((row, index) => ({ ...row, rank: index + 1 }));
}

function renderLeaderboard() {
  const body = document.querySelector("#leaderboard-body");
  const status = document.querySelector("#leaderboard-status");
  if (!body) return;
  body.innerHTML = "";

  if (!leaderboardRows.length) {
    if (status) status.textContent = t("leaderboard.loading");
    return;
  }

  normalizedRows().forEach((row) => {
    const tr = document.createElement("tr");
    const cells = [
      { text: `#${row.rank}`, className: "rank-pill", wrapped: true },
      { text: row.method, strong: true, method: true, featured: row.featured },
      { text: row.backend },
      { text: formatPercent(row.taskPass), className: "score" },
      { text: formatPercent(row.avgCheck) },
      { text: formatPercent(row.globalCheck) },
      { text: formatPercent(row.totalFailed), className: "lower-is-better" },
      { text: row.date }
    ];
    cells.forEach((cell) => {
      const td = document.createElement("td");
      const content = cell.strong ? document.createElement("strong") : document.createElement("span");
      content.textContent = cell.text;
      if (cell.className) content.className = cell.className;
      if (cell.method) {
        content.className = content.className ? `${content.className} method-name` : "method-name";
        if (cell.featured) {
          const marker = document.createElement("sup");
          marker.className = "cost-marker";
          marker.textContent = "*";
          content.appendChild(marker);
        }
      }
      td.appendChild(content);
      tr.appendChild(td);
    });
    tr.appendChild(renderLinkCell(row.links?.paper, "Paper", paperIcon()));
    tr.appendChild(renderLinkCell(row.links?.github, "Code", githubIcon()));
    tr.appendChild(renderNotesCell(row));
    body.appendChild(tr);
  });

  if (status) {
    status.textContent = t("leaderboard.loaded").replace("{count}", leaderboardRows.length);
  }
}

function renderNotesCell(row) {
  const td = document.createElement("td");
  const wrap = document.createElement("div");
  wrap.className = "notes-cell";

  const note = document.createElement("span");
  note.textContent = row.notes || "";
  wrap.appendChild(note);

  td.appendChild(wrap);
  return td;
}

function renderLinkCell(url, label, icon) {
  const td = document.createElement("td");
  td.className = "link-cell";
  if (!url) {
    const dash = document.createElement("span");
    dash.className = "empty-link";
    dash.textContent = "-";
    td.appendChild(dash);
    return td;
  }

  const anchor = document.createElement("a");
  anchor.className = "note-icon-link";
  anchor.href = url;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  anchor.setAttribute("aria-label", label);
  anchor.title = label;
  anchor.innerHTML = icon;
  td.appendChild(anchor);
  return td;
}

function githubIcon() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.9c-2.9.6-3.5-1.2-3.5-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.7-1.3-2.3-.3-4.7-1.2-4.7-5A3.9 3.9 0 0 1 6.5 8c-.1-.3-.5-1.3.1-2.7 0 0 .9-.3 2.8 1a9.5 9.5 0 0 1 5.2 0c1.9-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1.1 2.8c0 3.9-2.4 4.7-4.7 5 .4.3.7 1 .7 2v3.1c0 .3.2.6.7.5A10 10 0 0 0 12 2Z"/></svg>';
}

function paperIcon() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2h8l5 5v15H6V2Zm7 1.8V8h4.2L13 3.8ZM8.5 11v1.5h7V11h-7Zm0 3.5V16h7v-1.5h-7Zm0 3.5v1.5H13V18H8.5Z"/></svg>';
}

async function loadLeaderboard() {
  const status = document.querySelector("#leaderboard-status");
  try {
    const response = await fetch("data/leaderboard.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    leaderboardRows = await response.json();
    renderLeaderboard();
  } catch (error) {
    leaderboardRows = [...fallbackLeaderboardRows];
    renderLeaderboard();
    if (status) status.textContent = t("leaderboard.loaded").replace("{count}", leaderboardRows.length);
    console.error(error);
  }
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
  return true;
}

function showToast(message) {
  const toast = document.querySelector("[data-toast]");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 2200);
}

document.addEventListener("DOMContentLoaded", () => {
  applyLanguage(currentLang);
  renderLeaderboard();
  loadLeaderboard();

  document.querySelector("[data-lang-toggle]")?.addEventListener("click", () => {
    applyLanguage(currentLang === "en" ? "zh" : "en");
  });

  document.querySelector("[data-sort-toggle]")?.addEventListener("click", () => {
    sortDirection = sortDirection === "desc" ? "asc" : "desc";
    renderLeaderboard();
  });

  document.querySelector("[data-copy-citation]")?.addEventListener("click", async (event) => {
    const text = document.querySelector("#citation-text")?.textContent || "";
    try {
      const copied = await copyText(text);
      if (!copied) throw new Error("copy command failed");
      event.currentTarget.textContent = t("resources.copied");
      showToast(t("resources.copyToast"));
      window.setTimeout(() => {
        event.currentTarget.textContent = t("resources.copy");
      }, 1400);
    } catch (error) {
      showToast(t("resources.copyFailed"));
      console.error(error);
    }
  });
});
