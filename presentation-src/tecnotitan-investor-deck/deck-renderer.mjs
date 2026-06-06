import path from "node:path";
import { getDeckData } from "./deck-data.mjs";

const C = {
  ink: "#EAF8FF",
  muted: "#A8B7C7",
  dim: "#6E7D8C",
  cyan: "#55E6FF",
  cyan2: "#16B7D6",
  green: "#41F5A0",
  panel: "#071016",
  panel2: "#0B1821",
  line: "#23424D",
  black: "#020406",
};

function getSlideData(index) {
  const deck = getDeckData();
  return { deck, slide: deck.slides[index - 1] };
}

function t(slide, ctx, text, x, y, w, h, options = {}) {
  return ctx.addText(slide, {
    text,
    x,
    y,
    w,
    h,
    fontSize: options.size || 24,
    color: options.color || C.ink,
    bold: options.bold || false,
    face: options.face || ctx.fonts.body,
    align: options.align || "left",
    valign: options.valign || "top",
    fill: options.fill || "#00000000",
    line: options.line || ctx.line("#00000000", 0),
    insets: options.insets || { left: 0, right: 0, top: 0, bottom: 0 },
    name: options.name,
  });
}

function box(slide, ctx, x, y, w, h, options = {}) {
  return ctx.addShape(slide, {
    x,
    y,
    w,
    h,
    fill: options.fill || C.panel,
    line: ctx.line(options.line || C.line, options.lineWidth ?? 1),
    name: options.name,
  });
}

function rule(slide, ctx, x, y, w, h = 2, color = C.cyan) {
  return box(slide, ctx, x, y, w, h, { fill: color, line: color, lineWidth: 0 });
}

async function background(slide, ctx, imageName = "bg-hero-tech.jpg") {
  const imagePath = path.resolve(process.cwd(), "assets", imageName);
  await ctx.addImage(slide, {
    path: imagePath,
    x: 0,
    y: 0,
    w: ctx.W,
    h: ctx.H,
    fit: "cover",
    alt: "Tecnotitan technology background",
  });
  box(slide, ctx, 0, 0, ctx.W, ctx.H, { fill: "#020406CC", line: "#00000000", lineWidth: 0 });
  box(slide, ctx, 0, 0, ctx.W, ctx.H, { fill: "#07101666", line: "#00000000", lineWidth: 0 });
}

function chrome(slide, ctx, deck, index) {
  t(slide, ctx, "TECNOTITAN", 56, 34, 210, 26, {
    size: 17,
    bold: true,
    color: C.ink,
    face: ctx.fonts.title,
  });
  rule(slide, ctx, 56, 68, 128, 2, C.cyan2);
  t(slide, ctx, `${deck.code} / ${String(index).padStart(2, "0")}`, 1102, 38, 112, 22, {
    size: 14,
    color: C.muted,
    align: "right",
  });
  t(slide, ctx, deck.meta.website, 980, 662, 232, 22, { size: 13, color: C.dim, align: "right" });
}

function titleBlock(slide, ctx, item, x = 76, y = 112, w = 600) {
  t(slide, ctx, item.eyebrow, x, y, w, 22, { size: 13, color: C.cyan, bold: true });
  t(slide, ctx, item.title, x, y + 42, w, 132, { size: 37, color: C.ink, bold: true, face: ctx.fonts.title });
  t(slide, ctx, item.body, x, y + 192, w, 88, { size: 19, color: C.muted });
}

function chip(slide, ctx, text, x, y, w, color = C.cyan) {
  box(slide, ctx, x, y, w, 42, { fill: "#061820CC", line: "#244D59", lineWidth: 1 });
  t(slide, ctx, text, x + 16, y + 11, w - 32, 20, { size: 15, color, bold: true });
}

function proofList(slide, ctx, items, x, y, w) {
  const h = Math.min(72, 300 / items.length);
  items.forEach((item, idx) => {
    const top = y + idx * (h + 12);
    box(slide, ctx, x, top, w, h, { fill: idx % 2 ? "#08151CCC" : "#0A1E27CC", line: "#1B4451" });
    t(slide, ctx, String(idx + 1).padStart(2, "0"), x + 18, top + 17, 42, 20, { size: 14, color: C.cyan, bold: true });
    t(slide, ctx, item, x + 70, top + 15, w - 92, h - 20, { size: items.length > 4 ? 16 : 18, color: C.ink, bold: true });
  });
}

function stageFlow(slide, ctx, items, x, y, w) {
  const gap = 18;
  const bw = (w - gap * (items.length - 1)) / items.length;
  items.forEach((item, idx) => {
    const left = x + idx * (bw + gap);
    box(slide, ctx, left, y, bw, 126, { fill: "#071820DD", line: idx === items.length - 1 ? C.green : "#25505B" });
    t(slide, ctx, String(idx + 1).padStart(2, "0"), left + 18, y + 18, 44, 20, { size: 14, color: idx === items.length - 1 ? C.green : C.cyan, bold: true });
    t(slide, ctx, item, left + 18, y + 54, bw - 36, 48, { size: 19, color: C.ink, bold: true });
    if (idx < items.length - 1) rule(slide, ctx, left + bw + 4, y + 62, gap - 8, 2, "#2D5C68");
  });
}

function matrix(slide, ctx, items, x, y, cols = 3) {
  const gap = 14;
  const w = (1060 - gap * (cols - 1)) / cols;
  const h = 86;
  items.forEach((item, idx) => {
    const col = idx % cols;
    const row = Math.floor(idx / cols);
    const left = x + col * (w + gap);
    const top = y + row * (h + gap);
    box(slide, ctx, left, top, w, h, { fill: "#071820DD", line: idx % 2 ? "#1A4C57" : "#245665" });
    t(slide, ctx, item, left + 18, top + 22, w - 36, 42, { size: 18, color: C.ink, bold: true });
  });
}

function kpiBar(slide, ctx, label, x, y, w, value, color = C.cyan) {
  t(slide, ctx, label, x, y, w, 20, { size: 13, color: C.muted, bold: true });
  box(slide, ctx, x, y + 28, w, 14, { fill: "#071015", line: "#193641" });
  rule(slide, ctx, x, y + 28, value, 14, color);
}

async function cover(presentation, ctx, index) {
  const { deck, slide: item } = getSlideData(index);
  const slide = presentation.slides.add();
  await background(slide, ctx, "bg-hero-tech.jpg");
  t(slide, ctx, item.eyebrow, 76, 82, 520, 24, { size: 14, color: C.cyan, bold: true });
  t(slide, ctx, "TECNOTITAN", 76, 140, 620, 72, { size: 54, color: C.ink, bold: true, face: ctx.fonts.title });
  rule(slide, ctx, 78, 222, 210, 3, C.cyan);
  t(slide, ctx, item.title, 76, 266, 690, 118, { size: 34, color: C.ink, bold: true, face: ctx.fonts.title });
  t(slide, ctx, item.body, 76, 405, 650, 78, { size: 18, color: C.muted });
  chip(slide, ctx, deck.meta.author, 76, 535, 270, C.ink);
  chip(slide, ctx, `${deck.meta.deckTitle} / ${deck.meta.year}`, 368, 535, 250, C.cyan);
  proofList(slide, ctx, item.proof, 846, 246, 330);
  chrome(slide, ctx, deck, index);
  return slide;
}

async function thesis(presentation, ctx, index) {
  const { deck, slide: item } = getSlideData(index);
  const slide = presentation.slides.add();
  await background(slide, ctx, "bg-process-ai.jpg");
  titleBlock(slide, ctx, item, 76, 116, 600);
  stageFlow(slide, ctx, item.proof, 76, 486, 1040);
  chrome(slide, ctx, deck, index);
  return slide;
}

async function problem(presentation, ctx, index) {
  const { deck, slide: item } = getSlideData(index);
  const slide = presentation.slides.add();
  await background(slide, ctx, "bg-capabilities-tech.jpg");
  titleBlock(slide, ctx, item, 76, 108, 590);
  proofList(slide, ctx, item.proof, 755, 160, 365);
  kpiBar(slide, ctx, "Manual workflows", 76, 486, 360, 260, C.cyan);
  kpiBar(slide, ctx, "Data activation", 76, 542, 360, 180, C.green);
  kpiBar(slide, ctx, "AI adoption gap", 76, 598, 360, 298, "#FFCF6B");
  chrome(slide, ctx, deck, index);
  return slide;
}

async function platform(presentation, ctx, index) {
  const { deck, slide: item } = getSlideData(index);
  const slide = presentation.slides.add();
  await background(slide, ctx, "bg-hero-tech.jpg");
  titleBlock(slide, ctx, item, 76, 94, 650);
  stageFlow(slide, ctx, item.proof, 96, 398, 988);
  t(slide, ctx, "Reusable IP, sector knowledge and operating playbooks compound across every project.", 168, 554, 870, 42, {
    size: 18,
    color: C.muted,
    align: "center",
  });
  chrome(slide, ctx, deck, index);
  return slide;
}

async function portfolio(presentation, ctx, index) {
  const { deck, slide: item } = getSlideData(index);
  const slide = presentation.slides.add();
  await background(slide, ctx, "bg-games-experiences.jpg");
  titleBlock(slide, ctx, item, 76, 88, 610);
  matrix(slide, ctx, item.proof, 76, 380, 3);
  chrome(slide, ctx, deck, index);
  return slide;
}

async function services(presentation, ctx, index) {
  const { deck, slide: item } = getSlideData(index);
  const slide = presentation.slides.add();
  await background(slide, ctx, "bg-process-ai.jpg");
  titleBlock(slide, ctx, item, 76, 98, 610);
  stageFlow(slide, ctx, item.proof, 100, 410, 980);
  t(slide, ctx, "Services are the market-sensing engine that turns demand into product decisions.", 178, 570, 830, 42, {
    size: 18,
    color: C.muted,
    align: "center",
  });
  chrome(slide, ctx, deck, index);
  return slide;
}

async function divisions(presentation, ctx, index) {
  const { deck, slide: item } = getSlideData(index);
  const slide = presentation.slides.add();
  await background(slide, ctx, "bg-capabilities-tech.jpg");
  titleBlock(slide, ctx, item, 76, 82, 650);
  const centerX = 612;
  const centerY = 420;
  box(slide, ctx, centerX - 118, centerY - 52, 236, 104, { fill: "#051117EE", line: C.cyan });
  t(slide, ctx, "TECNOTITAN\nCORE", centerX - 88, centerY - 34, 176, 68, { size: 22, color: C.ink, bold: true, align: "center" });
  item.proof.forEach((name, idx) => {
    const angle = (-90 + idx * 72) * (Math.PI / 180);
    const x = centerX + Math.cos(angle) * 342 - 110;
    const y = centerY + Math.sin(angle) * 162 - 34;
    box(slide, ctx, x, y, 220, 68, { fill: "#081A23DD", line: "#25505B" });
    t(slide, ctx, name, x + 18, y + 18, 184, 26, { size: 17, color: C.ink, bold: true, align: "center" });
    rule(slide, ctx, Math.min(centerX, x + 110), Math.min(centerY, y + 34), Math.abs(centerX - (x + 110)) || 2, 2, "#285563");
  });
  chrome(slide, ctx, deck, index);
  return slide;
}

async function model(presentation, ctx, index) {
  const { deck, slide: item } = getSlideData(index);
  const slide = presentation.slides.add();
  await background(slide, ctx, "bg-closing-tech.jpg");
  titleBlock(slide, ctx, item, 76, 92, 630);
  stageFlow(slide, ctx, item.proof, 92, 402, 1000);
  t(slide, ctx, "Each layer can monetize independently while feeding data, references and reusable modules back into the platform.", 170, 566, 830, 46, {
    size: 18,
    color: C.muted,
    align: "center",
  });
  chrome(slide, ctx, deck, index);
  return slide;
}

async function gtm(presentation, ctx, index) {
  const { deck, slide: item } = getSlideData(index);
  const slide = presentation.slides.add();
  await background(slide, ctx, "bg-hero-tech.jpg");
  titleBlock(slide, ctx, item, 76, 92, 600);
  proofList(slide, ctx, item.proof, 758, 152, 366);
  stageFlow(slide, ctx, ["Pilot", "Implementation", "Product expansion", "Strategic partner"], 92, 512, 990);
  chrome(slide, ctx, deck, index);
  return slide;
}

async function team(presentation, ctx, index) {
  const { deck, slide: item } = getSlideData(index);
  const slide = presentation.slides.add();
  await background(slide, ctx, "bg-capabilities-tech.jpg");
  titleBlock(slide, ctx, item, 76, 94, 640);
  matrix(slide, ctx, item.proof, 76, 392, 4);
  t(slide, ctx, "Hiring priorities: product engineering, AI delivery, sales development and investor relations.", 120, 568, 980, 42, {
    size: 18,
    color: C.muted,
    align: "center",
  });
  chrome(slide, ctx, deck, index);
  return slide;
}

async function roadmap(presentation, ctx, index) {
  const { deck, slide: item } = getSlideData(index);
  const slide = presentation.slides.add();
  await background(slide, ctx, "bg-process-ai.jpg");
  titleBlock(slide, ctx, item, 76, 92, 620);
  stageFlow(slide, ctx, item.proof, 122, 420, 920);
  chrome(slide, ctx, deck, index);
  return slide;
}

async function ask(presentation, ctx, index) {
  const { deck, slide: item } = getSlideData(index);
  const slide = presentation.slides.add();
  await background(slide, ctx, "bg-closing-tech.jpg");
  titleBlock(slide, ctx, item, 76, 110, 690);
  proofList(slide, ctx, item.proof, 790, 162, 330);
  box(slide, ctx, 76, 534, 610, 76, { fill: "#061820DD", line: C.cyan });
  t(slide, ctx, `${deck.meta.contact}  |  ${deck.meta.website}`, 106, 558, 550, 28, { size: 21, color: C.cyan, bold: true });
  chrome(slide, ctx, deck, index);
  return slide;
}

const renderers = [cover, thesis, problem, platform, portfolio, services, divisions, model, gtm, team, roadmap, ask];

export async function renderSlide(presentation, ctx, index) {
  const render = renderers[index - 1];
  if (!render) throw new Error(`Missing renderer for slide ${index}`);
  return render(presentation, ctx, index);
}
