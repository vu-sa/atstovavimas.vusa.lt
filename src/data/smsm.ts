import { h } from "vue"
import { Position } from "@vue-flow/core"
import { redStyle, orangeStyle, parentStyle } from "./edgeStyles"

const nodes = [
  {
    id: 'node-smsm-ministras',
    type: 'multiple-handle',
    data: { label: 'ŠMSM ministras', handles: ['left', 'right', 'bottom', 'bottom-right'], textClass: 'font-bold text-[18px]', description: 'Švietimo, mokslo ir sporto ministras – remiantis LR Vyriausybės įstatymu ir LR Vyriausybės nutarimu „Dėl ministrams pavedamų valdymo sričių“, ŠMSM ministras yra atsakingas už švietimo, mokslo bei sporto sritis ir vadovauja ministerijai.', url: '/smsm#svietimo-mokslo-ir-sporto-ministras' },
    style: { lineHeight: '1.25', },
    position: { x: -30, y: 25 },
  },
  {
    id: 'node-smsm-viceministrai',
    type: 'multiple-handle',
    data: { label: 'ŠMSM viceministrai', handles: ['top', 'bottom'], description: "Švietimo, mokslo ir sporto viceministrai – viceministrai ŠMSM ministro nustatytose veiklos srityse atlieka Vyriausybės įstatyme nustatytas funkcijas.", url: "/smsm#smsm-viceministrai" },
    style: { lineHeight: '1.25', },
    position: { x: -100, y: 130 },
  },
  {
    id: 'node-patarejai',
    type: 'multiple-handle',
    data: { label: 'Patarėjai', handles: ['bottom'], description: 'Švietimo, mokslo ir sporto ministro patarėjai – padeda ministrui suformuoti politines nuostatas ir prioritetus, priimti sprendimus ir juos įgyvendinti.', url: '/smsm#smsm-patarejai' },
    style: { lineHeight: '1.25', },
    position: { x: 160, y: 90 },
  },
  {
    id: 'node-komisijos',
    type: 'multiple-handle',
    data: { label: 'Komisijos ir darbo grupės', handles: ['bottom'], description: 'Tam tikrais atvejais į ŠMSM formuojamas komisijas bei darbo grupes yra deleguojami studentų atstovai iš nacionalinių studentams atstovaujančių organizacijų (t.y. Vilniaus universiteto Studentų atstovybės ir / arba Lietuvos studentų sąjungos).', url: '/smsm#smsm-komisijos-ir-darbo-grupes' },
    style: { lineHeight: '1.25', },
    position: { x: 500, y: 90 },
  },
  {
    id: 'node-skyriai',
    type: 'multiple-handle',
    data: { label: 'Kiti skyriai ir grupės', handles: ['bottom'] },
    style: { lineHeight: '1.25', },
    position: { x: 330, y: 90 },
  },
  {
    id: 'parent-node-pavaldzios-institucijos',
    type: 'parent',
    data: { label: 'Pavaldžios institucijos', url: '/smsm#smsm-pavaldzios-institucijos' },
    targetPosition: Position.Left,
    sourcePosition: Position.Left,
    style: { ...parentStyle, lineHeight: '1.25', width: '825px', height: '310px' },
    position: { x: 116, y: 220 },
  },
  {
    id: 'node-esfa',
    type: 'multiple-handle',
    data: { label: h('div', [h('img', { src: 'img/SMSM/SMSM1.png', class: 'h-16 object-contain p-2' })]), handles: [], description: 'Europos socialinio fondo agentūra (ESFA) – Agentūra siekia pagerinti galimybes įsidarbinti padedant jauniems žmonėms baigus mokyklą integruotis į darbo rinką arba apmokant mažiau kvalifikuotus darbo ieškančius asmenis.', url: '/smsm#esfa' },
    style: { lineHeight: '1.25', },
    position: { x: 15, y: 50 },
    parentNode: 'parent-node-pavaldzios-institucijos',
    extent: 'parent'
  },
  {
    id: 'node-svietimo-centras',
    type: 'multiple-handle',
    data: { label: h('div', [h('img', { src: 'img/SMSM/LMNSC.png', class: 'h-16 mx-auto p-2 object-contain' })]), handles: [], description: 'Lietuvos mokinių neformaliojo švietimo centras – inicijuoja ir dalyvauja rengiant teisės aktus, teikia siūlymus, kuria, diegia ir skleidžia inovacijas neformaliojo vaikų švietimo politikos klausimais, rengia mokytojų kvalifikacijos tobulinimo programas ir organizuoja jų vykdymą, teikia metodinę pagalbą.' },
    style: { lineHeight: '1.25', },
    position: { x: 15, y: 140 },
    parentNode: 'parent-node-pavaldzios-institucijos',
    extent: 'parent'
  },
  {
    id: 'node-nsa',
    type: 'multiple-handle',
    data: { label: h('div', [h('img', { src: 'img/SMSM/SMSM4.png', class: 'h-16 mx-auto p-2 object-contain' })]), handles: [], description: 'Nacionalinė švietimo agentūra dalyvauja įgyvendinant valstybinę ikimokyklinio, priešmokyklinio, bendrojo ugdymo politiką, skatina švietimo įstaigas (išskyrus aukštąsias mokyklas), kitus švietimo teikėjus užtikrinti švietimo veiklos kokybę, teikiant informacinę, konsultacinę, kvalifikacijos tobulinimo, ugdymo(si) aplinkos kūrimo pagalbą.' },
    style: { lineHeight: '1.25', },
    position: { x: 660, y: 50 },
    parentNode: 'parent-node-pavaldzios-institucijos',
    extent: 'parent'
  },
  {
    id: 'node-kpmpc',
    type: 'multiple-handle',
    data: { label: h('div', [h('img', { src: 'img/SMSM/SMSM2.png', class: 'h-16 mx-auto p-2 object-contain' })]), handles: [], description: 'Kvalifikacijų ir profesinio mokymo plėtros centras – švietimo pagalbos įstaiga, teikianti informacinę, ekspertinę, konsultacinę ir kvalifikacijos tobulinimo pagalbą, įgyvendinanti valstybinę profesinio mokymo ir mokymosi visą gyvenimą sistemų plėtros politiką.' },
    style: { lineHeight: '1.25', },
    position: { x: 180, y: 50 },
    parentNode: 'parent-node-pavaldzios-institucijos',
    extent: 'parent'
  },
  {
    id: 'node-melc',
    type: 'multiple-handle',
    data: { label: h('div', [h('img', { src: 'img/SMSM/logo-melc.svg', class: 'h-16 mx-auto p-2 object-contain' })]), handles: [], description: 'Mokslo ir enciklopedijų leidybos centras – valstybinė mokslo leidybos įstaiga.', url: 'https://www.melc.lt/lt/' },
    style: { lineHeight: '1.25', },
    position: { x: 180, y: 140 },
    parentNode: 'parent-node-pavaldzios-institucijos',
    extent: 'parent'
  },
  {
    id: 'node-skvc',
    type: 'multiple-handle',
    data: { label: h('div', [h('img', { src: 'img/SMSM/SMSM6.png', class: 'h-16 mx-auto object-contain' })]), handles: [], description: 'Studijų kokybės vertinimo centras (SKVC), tai LR valstybės biudžetinė įstaiga, įgyvendinanti aukštojo mokslo kokybės priežiūros politiką ir prisidedanti gerinant laisvo asmenų judėjimo sąlygas.' },
    style: { lineHeight: '1.25' },
    position: { x: 660, y: 140 },
    parentNode: 'parent-node-pavaldzios-institucijos',
    extent: 'parent'
  },
  {
    id: 'node-lvjc',
    type: 'multiple-handle',
    data: { label: h('div', [h('img', { src: 'img/SMSM/SMSM3.png', class: 'h-16 mx-auto object-contain' })]), handles: [], description: 'Lietuvos vaikų ir jaunimo centras – centras dalyvauja formuojant neformaliojo vaikų švietimo politiką ir ją įgyvendinant – inicijuoja teisės aktų projektų rengimą neformaliojo vaikų švietimo srityje, koordinuoja šioje srityje dirbančių mokytojų kvalifikacijos tobulinimą, organizuoja neformaliojo švietimo nacionalinius bei tarptautinius renginius vaikams ir jaunimui.' },
    style: { lineHeight: '1.25', },
    position: { x: 340, y: 50 },
    parentNode: 'parent-node-pavaldzios-institucijos',
    extent: 'parent'
  },
  {
    id: 'node-nvi',
    type: 'multiple-handle',
    data: { label: h('div', [h('img', { src: 'img/SMSM/SMSM5.png', class: 'h-16 mx-auto p-2 object-contain' })]), handles: [], description: 'Nacionalinis vėžio institutas – instituto misija yra vykdyti valstybei, visuomenei, tarptautiniam bendradarbiavimui, ūkio subjektams svarbius ilgalaikius mokslinius tyrimus ir eksperimentinę plėtrą, siekiant pagerinti onkologinių pacientų diagnostikos, gydymo ir profilaktikos efektyvumą ir sumažinti mirtingumą nuo vėžio, rengti onkologijos ir gretutinių krypčių mokslininkus ir aukštos kvalifikacijos specialistus.', url: 'https://www.nvi.lt/' },
    style: { lineHeight: '1.25', },
    position: { x: 340, y: 140 },
    parentNode: 'parent-node-pavaldzios-institucijos',
    extent: 'parent'
  },
  {
    id: 'node-smpf',
    type: 'multiple-handle',
    data: { label: h('div', [h('img', { src: 'img/SMSM/smpf.png', class: 'h-16 mx-auto p-1 object-contain' })]), handles: [], description: 'Švietimo mainų ir paramos fondas (ŠMPF) – Lietuvos nacionalinė agentūra, kuriai pavesta administruoti programą „Erasmus+“ ir kitas Europos Komisijos (EK) ir Lietuvos Respublikos Vyriausybės finansuojamas iniciatyvas švietimo ir mokymo srityje.', url: 'https://www.smpf.lt/wp-content/uploads/2020/10/AR_2020-05-08.pdf' },
    style: { lineHeight: '1.25', },
    position: { x: 500, y: 50 },
    parentNode: 'parent-node-pavaldzios-institucijos',
    extent: 'parent'
  },
  {
    id: 'node-vsf',
    type: 'multiple-handle',
    data: { label: h('div', [h('img', { src: 'img/SMSM/VSF.jpg', class: 'h-16 mx-auto p-2 object-contain' })]), handles: [], description: 'Valstybinis studijų fondas (VSF) – biudžetinė įstaiga, administruojanti valstybės paskolas, valstybės remiamas paskolas studentams ir mokiniams, kurie mokosi pagal formaliojo profesinio mokymo programas, kitą finansinę paramą studentams ir profesiniam mokymui vykdyti, lėšas studentų pilietiniams, moksliniams, verslumo, kūrybiniams ir sportiniams projektams vykdyti.' },
    style: { lineHeight: '1.25', },
    position: { x: 500, y: 140 },
    parentNode: 'parent-node-pavaldzios-institucijos',
    extent: 'parent'
  },
  {
    id: 'node-vln',
    type: 'multiple-handle',
    data: { label: 'Vilniaus lietuvių namai', handles: [], description: 'Vilniaus lietuvių namai – dieninė, savarankiško mokymosi bendrojo lavinimo gimnazija Vilniuje vykdanti pradinio, pagrindinio, vidurinio ir papildomo ugdymo programas, orientuota į užsienio lietuvius.' },
    style: { lineHeight: '1.25', },
    position: { x: 340, y: 235 },
    parentNode: 'parent-node-pavaldzios-institucijos',
    extent: 'parent'
  },
  {
    id: 'node-sao',
    type: 'multiple-handle',
    data: { label: 'Studentams atstovaujančios organizacijos', handles: ['left', 'right'], url: 'studentams-atstovaujancios-organizacijos' },
    style: { lineHeight: '1.25', },
    position: { x: -440, y: 65 },
  },
  {
    id: 'node-studentai',
    type: 'multiple-handle',
    data: { label: 'Studentai', handles: ['right'], description: "Studentas – asmuo, studijuojantis aukštojoje mokykloje pagal tam tikrą studijų programą arba doktorantūroje." },
    style: { lineHeight: '1.25', },
    position: { x: -660, y: 82 },
  },
  {
    id: 'parent-node-departamentai',
    type: 'parent',
    data: { label: 'Departamentai', url: '/smsm#smsm-departamentai' },
    targetPosition: Position.Top,
    sourcePosition: Position.Top,
    style: { ...parentStyle, lineHeight: '1.25', width: '500px', height: '315px' },
    position: { x: -455, y: 220 },
  },
  {
    id: 'node-bud',
    type: 'multiple-handle',
    data: { label: 'Bendrojo ugdymo departamentas', handles: [], url: '/smsm#ugdymo-departamentas' },
    style: { lineHeight: '1.25', },
    position: { x: 15, y: 60 },
    parentNode: 'parent-node-departamentai',
    extent: 'parent'
  },
  {
    id: 'node-ed',
    type: 'multiple-handle',
    data: { label: 'Ekonomikos departamentas', handles: [], url: '/smsm#ekonomikos-departamentas' },
    style: { lineHeight: '1.25', },
    position: { x: 175, y: 60 },
    parentNode: 'parent-node-departamentai',
    extent: 'parent'
  },
  {
    id: 'node-es',
    type: 'multiple-handle',
    data: { label: 'ES paramos koordinavimo departamentas', handles: [] },
    style: { lineHeight: '1.25', },
    position: { x: 335, y: 50 },
    parentNode: 'parent-node-departamentai',
    extent: 'parent'
  },
  {
    id: 'node-mvg',
    type: 'multiple-handle',
    data: { label: 'Mokymosi visą gyvenimą departamentas', handles: [] },
    style: { lineHeight: '1.25', },
    position: { x: 15, y: 130 },
    parentNode: 'parent-node-departamentai',
    extent: 'parent'
  },
  {
    id: 'node-smtd',
    type: 'multiple-handle',
    data: { label: 'Studijų mokslo ir technologijų departamentas', handles: [] },
    style: { lineHeight: '1.25', },
    position: { x: 175, y: 130 },
    parentNode: 'parent-node-departamentai',
    extent: 'parent'
  },
  {
    id: 'node-skrpd',
    type: 'multiple-handle',
    data: { label: 'Švietimo kokybės ir regioninės plėtros departamentas', handles: [] },
    style: { lineHeight: '1.25', },
    position: { x: 335, y: 130 },
    parentNode: 'parent-node-departamentai',
    extent: 'parent'
  },
  {
    id: 'node-tbeid',
    type: 'multiple-handle',
    data: { label: 'Tarptautinio bendradarbiavimo grupė', handles: [], url: '/smsm.html#tarptautinio-bendradarbiavimo-grupe' },
    style: { lineHeight: '1.25', width: '200px' },
    position: { x: 60, y: 210 },
    parentNode: 'parent-node-departamentai',
    extent: 'parent'
  },
  {
    id: 'node-tad',
    type: 'multiple-handle',
    data: { label: 'Teisės ir administravimo departamentas', handles: [] },
    style: { lineHeight: '1.25', },
    position: { x: 270, y: 210 },
    parentNode: 'parent-node-departamentai',
    extent: 'parent'
  },
]

const edges = [
  {
    id: 'edge-studentai-sao',
    source: 'node-studentai',
    target: 'node-sao',
    sourceHandle: 'right',
    targetHandle: 'left',
    label: 'Renka',
    ...redStyle
  },
  {
    id: 'edge-sao-ministras',
    source: 'node-sao',
    target: 'node-smsm-ministras',
    sourceHandle: 'right',
    targetHandle: 'left',
    label: 'Kreipiasi',
    ...orangeStyle
  },
  {
    id: 'edge-sao-departamentai',
    source: 'node-sao',
    target: 'parent-node-departamentai',
    sourceHandle: 'right',
    label: 'Kreipiasi',
    ...orangeStyle
  },
  {
    id: 'edge-ministras-institucijos',
    source: 'node-smsm-ministras',
    target: 'parent-node-pavaldzios-institucijos',
    sourceHandle: 'bottom-right',
    type: 'smoothstep',
    label: 'Steigia',
    ...redStyle
  },
  {
    id: 'edge-ministras-komisijos',
    source: 'node-smsm-ministras',
    target: 'node-komisijos',
    sourceHandle: 'right',
    targetHandle: 'bottom',
    type: 'smoothstep',
    label: 'Formuoja',
    ...redStyle
  },
  {
    id: 'edge-ministras-skyriai',
    source: 'node-smsm-ministras',
    target: 'node-skyriai',
    sourceHandle: 'right',
    targetHandle: 'bottom',
    type: 'smoothstep',
    label: 'Vadovauja',
    ...redStyle
  },
  {
    id: 'edge-ministras-patarejai',
    source: 'node-smsm-ministras',
    target: 'node-patarejai',
    sourceHandle: 'right',
    targetHandle: 'bottom',
    type: 'smoothstep',
    label: 'Skiria',
    ...redStyle
  },
  {
    id: 'edge-ministras-viceministrai',
    source: 'node-smsm-ministras',
    target: 'node-smsm-viceministrai',
    sourceHandle: 'bottom',
    targetHandle: 'left',
    //type: 'smoothstep',
    label: 'Skiria',
    ...redStyle
  },
  {
    id: 'edge-viceministrai-departamentai',
    source: 'node-smsm-viceministrai',
    target: 'parent-node-departamentai',
    sourceHandle: 'bottom',
    label: 'Vadovauja',
    ...redStyle
  },
]

export default { nodes, edges }
