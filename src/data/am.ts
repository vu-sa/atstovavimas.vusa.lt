import { Position } from "@vue-flow/core"
import { redStyle, orangeStyle, parentStyle } from "./edgeStyles"
import { h } from "vue"

const nodes = [
  {
    id: 'node-pilieciai',
    type: 'multiple-handle',
    data: { label: 'LR piliečiai', handles: ['right', 'bottom'], textClass: 'font-bold text-[16px]', description: 'Asmenys, turintys Lietuvos Respublikos pilietybę ir su ja suteiktas teises bei pareigas.' },
    position: { x: -350, y: -235 },
  },
  {
    id: 'node-prezidentas',
    type: 'multiple-handle',
    data: { label: h('div', [h('img', { src: '/img/AM8.png', class: 'mx-auto w-full object-contain h-24' })]), handles: ['left', 'bottom'], description: 'Prezidentas yra valstybės vadovas. Prezidentas sprendžia pagrindinius užsienio politikos klausimus ir kartu su Vyriausybe vykdo užsienio politiką, turi įstatymų leidybos Seime iniciatyvos teisę, taip pat teisę vetuoti Seimo priimtus įstatymus.', url: 'https://www.lrp.lt/lt/prezidento-funkcijos' },
    position: { x: -55, y: -280 },
    style: { width: '200px', padding: '14px' },
  },
  {
    id: 'node-lst',
    type: 'multiple-handle',
    data: { label: 'Lietuvos švietimo taryba', handles: ['top', 'right', 'bottom'], description: 'Lietuvos švietimo taryba (toliau – Taryba) yra Lietuvos Respublikos Seimo sudaryta ir jam atskaitinga valstybės švietimo savivaldos institucija, atliekanti ekspertinį vertinimą ir konsultuojanti strateginiais Lietuvos švietimo plėtros klausimais.', url: 'https://www.lrs.lt/sip/portal.show?p_r=9258' },
    position: { x: -175, y: -50 },
    style: { width: '200px' }
  },
  {
    id: 'parent-node-seimas',
    data: { label: h('div', [h('img', { src: '/img/Seimas.png', class: 'h-36 absolute top-4 w-full mx-auto object-contain' })]), description: "Lietuvos Respublikos Seimas yra įstatymų leidžiamoji valdžia.", url: 'https://www.lrs.lt/sip/portal.show?p_r=35354', handles: ['top-left', 'top-right', 'bottom-left', 'left-bottom', 'right-top', 'right'] },
    style: { width: '400px', height: '250px', padding: '0px' },

    type: 'multiple-handle',
    //data: { label: h('div', [h('span', { class: 'absolute top-4 left-0 w-full mx-auto' }, ['Studentams atstovaujančios organizacijos'])]) },
    position: { x: -375, y: 50 },
  },
  {
    id: 'node-kiti-komitetai-ir-komisijos',
    type: 'multiple-handle',
    data: { label: 'Kiti komitetai ir komisijos', handles: [] },
    position: { x: 35, y: 180 },
    style: { lineHeight: '1.25' },
    parentNode: 'parent-node-seimas'
  },
  {
    id: 'node-sm-komitetas',
    type: 'multiple-handle',
    data: { label: 'Švietimo ir mokslo komitetas', handles: ['bottom-right'], description: 'Švietimo ir mokslo komitetas (ŠMK) rengia ir svarsto reglamentuojančius įstatymus, nutarimus bei pasiūlymus, susijusius su valstybės švietimo, mokslo, informacinių technologijų, tautos istorinės atminties, valstybinės kalbos politikos formavimo klausimais.', url: '/aukstasis-mokslas#seimas-smk' },
    position: { x: 215, y: 180 },
    style: { lineHeight: '1.25' },
    parentNode: 'parent-node-seimas'
  },
  {
    id: 'parent-node-lrv',
    type: 'multiple-handle',
    data: { label: h('div', [h('img', { src: '/img/Lietuvos_Respublikos_Vyriausybes_logotipas.png', class: 'h-20 absolute w-full mx-auto top-8 object-contain' })]), description: "Vyriausybė – tai Lietuvos Respublikos įstatymų vykdomoji valdžia. Vyriausybė sudaro 14 ministerijų ministrai ir ministras pirmininkas, Seimo paskirti ketverių metų kadencijai.", url: "/vyriausybe#lrv", handles: ['left', 'left-bottom', 'top-left', 'bottom-left', 'bottom-right'] },
    position: { x: 69.5, y: 40 },
    style: { width: '420px', height: '270px', padding: '0px' }
  },
  {
    id: 'parent-node-smsm',
    type: 'parent',
    data: { label: h('div', [h('img', { src: '/img/SMSM.png', class: 'h-16 absolute top-4 mx-auto w-full object-contain' })]), description: 'LR valstybės įstaiga, kuri savo veiklos tikslų perspektyvoje formuoja valstybės politiką, organizuoja, koordinuoja ir kontroliuoja jos įgyvendinimą, o įstatymų nustatytais atvejais – ją ŠMSM ministrui pavestose valdymo srityse.', url: '/smsm' },
    position: { x: 195, y: 110 },
    sourcePosition: Position.Bottom,
    targetPosition: Position.Bottom,
    style: { width: '200px', height: '150px', padding: '3px' },
    parentNode: 'parent-node-lrv'
  },
  {
    id: 'node-smsm-ministras',
    type: 'multiple-handle',
    data: { label: 'ŠMSM ministras', handles: ['bottom-right', 'bottom-left'], description: 'Ministras vadovauja ministerijai, sprendžia ministerijos kompetencijai priklausančius klausimus ir yra tiesiogiai atsakingas už Vyriausybės programos ir kasmetinių Vyriausybės veiklos prioritetų bei planuojamų pasiekti rezultatų jam pavestose valdymo srityse įgyvendinimą.' },
    position: { x: 25, y: 95 },
    parentNode: 'parent-node-smsm'
  },
  {
    id: 'node-ministras-pirmininkas',
    type: 'multiple-handle',
    data: { label: 'Ministras Pirmininkas', handles: ['top-left'] },
    position: { x: 20, y: 170 },
    parentNode: 'parent-node-lrv'
  },
  {
    id: 'node-kitos-ministerijos',
    type: 'multiple-handle',
    data: { label: 'Kitos ministerijos', handles: ['bottom-right'], url: '/vyriausybe' },
    position: { x: 20, y: 222 },
    parentNode: 'parent-node-lrv'
  },
  {
    id: 'node-strata',
    type: 'multiple-handle',
    data: { label: h('div', [h('img', { src: '/img/strata-logo.png', class: 'p-4' })]), handles: ['left', 'top'], description: 'Vyriausybės strateginės analizės centras yra ekspertinė institucija, teikianti Vyriausybei ir ministerijoms nepriklausomą, tiriamąja veikla grįstą informaciją, reikalingą įrodymais pagrįstiems viešosios politikos sprendimams priimti. STRATA įtaka aukštojo mokslo politikos procesuose yra patariamoji.', url: 'https://strata.gov.lt/lt/apie-mus/apie' },
    position: { x: 70, y: 375 },
  },
  {
    id: 'parent-node-skvc',
    type: 'parent',
    data: { label: h('div', [h('img', { src: '/img/AM3.png', class: 'h-16 absolute top-4 mx-auto w-full object-contain' })]), description: 'Studijų kokybės vertinimo centras teisės aktų nustatyta tvarka skatina aukštųjų mokyklų veiklos kokybę per išorinį vertinimą, užsienyje įgytų kvalifikacijų, suteikiančių teisę į aukštąjį mokslą, bei aukštojo mokslo kvalifikacijų, vertinimą.', url: '/aukstasis-mokslas#skvc' },
    position: { x: 100, y: 535 },
    style: { width: '250px', height: '150px', padding: '3px' },
  },
  {
    id: 'node-skvc-taryba',
    type: 'multiple-handle',
    data: { label: 'SKVC taryba', handles: ['left-top', 'left', 'bottom', 'right'], description: 'Svarbiausios tarybos funkcijos – renka centro direktorių, tvirtina centro viziją, miziją ir direktoriaus parengtą strateginį planą, teikia siūlymus dėl centro metinių veiklos planų, tvirtina metinę centro direktoriaus ataskaitą, rengia centro metinę ataskaitą.', url: '/aukstasis-mokslas#skvc-taryba' },
    position: { x: 45, y: 95 },
    parentNode: 'parent-node-skvc'
  },
  {
    id: 'parent-node-vsf',
    type: 'parent',
    data: { label: h('div', [h('img', { src: '/img/AM1.png', class: 'h-14 absolute top-4 mx-auto w-full object-contain' })]), description: 'Valstybinis studijų fondas (VSF) - Švietimo mokslo ir sporto ministerijai pavaldi valstybės biudžetinė įstaiga administruojanti valstybės paskolas, valstybės remiamas paskolas studentams ir mokiniams, teikianti kitą finansinę paramą studentams ir profesiniam mokymui vykdyti.', url: '/aukstasis-mokslas/#vsf' },
    position: { x: 470, y: 535 },
    style: { width: '180px', height: '150px', padding: '3px' },
  },
  {
    id: 'node-vsf-valdyba',
    type: 'multiple-handle',
    data: { label: 'VSF valdyba', handles: ['left', 'bottom', 'right'], description: 'Fondo valdyba paskirsto Fondui skirtas valstybės biudžeto lėšas valstybės paskoloms teikti, valstybės remiamų paskolų palūkanoms apmokėti.', url: '/aukstasis-mokslas#vsf-valdyba' },
    position: { x: 15, y: 95 },
    parentNode: 'parent-node-vsf'
  },
  {
    id: 'parent-node-sao',
    type: 'multiple-handle',
    data: { label: h('div', [h('span', { class: 'absolute top-4 left-0 w-full mx-auto' }, ['Studentams atstovaujančios organizacijos'])]), handles: ['top-left', 'top-right', 'left'] },
    position: { x: 70, y: 865 },
    style: { width: '400px', height: '260px', padding: '3px' },
  },
  {
    id: 'node-vusa',
    type: 'multiple-handle',
    data: { label: h('div', [h('img', { src: '/img/vusa.png', class: 'mx-auto p-2 w-full object-contain h-20' })]), handles: [], description: 'Vilniaus universiteto Studentų atstovybė (VU SA) – seniausia ir didžiausia Lietuvoje visuomeninė, ne pelno siekianti, nepolitinė, ekspertinė švietimo organizacija, atstovaujanti studentų interesams Vilniaus universitete bei už jo ribų, puoselėjanti universitetinę kultūrą ir kurianti palankiausias sąlygas studentų saviraiškai.', url: '/aukstasis-mokslas#vusa' },
    position: { x: 25, y: 65 },
    parentNode: 'parent-node-sao'
  },
  {
    id: 'node-lss',
    type: 'multiple-handle',
    data: { label: h('div', [h('img', { src: '/img/LSS.png', class: 'mx-auto w-full object-contain h-20' })]), handles: ['bottom'], description: 'Lietuvos studentų sąjunga yra nacionalinė, demokratinė, nepriklausoma ir nevyriausybinė organizacija, atstovaujanti Lietuvos studentų interesams, jungianti Lietuvos aukštųjų mokyklų Studentų savivaldas.', url: '/aukstasis-mokslas#lss' },
    position: { x: 195, y: 65 },
    parentNode: 'parent-node-sao'
  },
  {
    id: 'node-am-savivaldos',
    type: 'multiple-handle',
    data: { label: 'AM studentų savivaldos (LSS narės)', handles: ['top'] },
    position: { x: 170, y: 185 },
    style: { lineHeight: '1.25', width: '200px' },
    parentNode: 'parent-node-sao'
  },
  {
    id: 'parent-node-msi',
    type: 'multiple-handle',
    data: { label: h('div', [h('span', { class: 'absolute top-6 left-14 w-24' }, ['Mokslo ir studijų institucijos'])]), handles: ['top-left', 'right', 'top-right', 'bottom-right'] },
    position: { x: -585, y: 905 },
    style: { width: '610px', height: '180px', paddingLeft: '3px' },
  },
  {
    id: 'node-mti',
    type: 'multiple-handle',
    data: { label: 'Mokslo ir tyrimų institutai', handles: [], description: 'Mokslinių tyrimų institutas – juridinis asmuo, kurio pagrindinė veikla – moksliniai tyrimai ir eksperimentinė plėtra.', url: '/aukstasis-mokslas#moksliniu-tyrimu-institutas' },
    position: { x: 25, y: 85 },
    parentNode: 'parent-node-msi'
  },
  {
    id: 'parent-node-am',
    type: 'parent',
    data: { label: 'Aukštosios mokyklos', handles: [] },
    position: { x: 205, y: 40 },
    style: { height: '100px', width: '380px', paddingTop: '60px' },
    parentNode: 'parent-node-msi',
    extent: 'parent'
  },
  {
    id: 'node-universitetai',
    type: 'multiple-handle',
    data: { label: 'Universitetai', handles: ['top-right'], description: 'Universitetas – aukštoji mokykla, kurioje vykdomos universitetinės studijos, atliekami moksliniai tyrimai, eksperimentinė plėtra ir (arba) plėtojamas aukšto lygio profesionalusis menas.', url: '/aukstasis-mokslas#universitetas' },
    position: { x: 25, y: 15 },
    parentNode: 'parent-node-am'
  },
  {
    id: 'node-kolegijos',
    type: 'multiple-handle',
    data: { label: 'Kolegijos', handles: ['top-left'], description: 'Kolegija – tai aukštoji mokykla, kurioje vykdomos koleginės studijos, plėtojami taikomieji moksliniai tyrimai ir (arba) profesionalusis menas.', url: '/aukstasis-mokslas#kolegija' },
    position: { x: 195, y: 15 },
    parentNode: 'parent-node-am'
  },
  {
    id: 'parent-node-aepk',
    type: 'parent',
    data: { label: h('div', { class: 'ml-2' }, [h('img', { src: '/img/AM2.png', class: 'h-16 mb-1 object-contain' }), h('div', { class: 'text-sm w-40 text-left ml-2 leading-4' }, ['Akademinės etikos ir procedūrų kontrolieriaus tarnyba'])]), description: 'Valstybės biudžetinė įstaiga, kurios veiklos tikslas – užtikrinti Lietuvos Respublikos akademinės etikos ir procedūrų kontrolieriaus darbą.', url: '/aukstasis-mokslas#kontrolieriaus-tarnyba' },
    position: { x: -775, y: 600 },
    style: { width: '420px', height: '140px', padding: '3px' },
  },
  {
    id: 'node-kontrolierius',
    type: 'multiple-handle',
    data: { label: 'Akademinės etikos ir procedūrų kontrolierius', handles: ['top', 'right', 'bottom'], description: 'Akademinės etikos ir procedūrų kontrolierius yra valstybės pareigūnas, nagrinėjantis skundus, pranešimus ir savo iniciatyva atliekantis tyrimus dėl galimų akademinės etikos ir procedūrų pažeidimų.', url: '/aukstasis-mokslas#kontrolierius' },
    position: { x: 215, y: 45 },
    style: { lineHeight: '1.25', width: '180px' },
    parentNode: 'parent-node-aepk'
  },
  {
    id: 'node-lma',
    type: 'multiple-handle',
    data: { label: h('div', [h('img', { src: '/img/Lithuanian_Academy_of_Sciences_emblem.png', class: 'mx-auto w-full object-contain h-24' })]), handles: ['top', 'bottom'] },
    position: { x: -710, y: 440 },
    style: { width: '200px', padding: '3px' },
  },
  {
    id: 'node-direktoriu-konferencija',
    type: 'multiple-handle',
    data: { label: 'Lietuvos direktorių konferencija', handles: ['left', 'right', 'right-top'], description: 'Tai konferencija vienijanti visus Lietuvos kolegijų direktorius.', url: '/aukstasis-mokslas#lkdk' },
    position: { x: -125, y: 700 },
    style: { 'lineHeight': '1.25' }
  },
  {
    id: 'node-rektoriu-konferencija',
    type: 'multiple-handle',
    data: { label: 'Lietuvos universitetų rektorių konferencija', handles: ['left', 'right', 'right-bottom'], description: 'Tai konferencija, vienijanti visus Lietuvos universitetų rektorius.', url: '/aukstasis-mokslas#lurk' },
    position: { x: -175, y: 620 },
    style: { width: '200px', lineHeight: '1.25' }
  },
  {
    id: 'parent-node-lmt',
    type: 'multiple-handle',
    data: { label: h('div', [h('img', { src: '/img/AM5.png', class: 'h-16 mx-auto w-full object-contain absolute top-6' })]), handles: ['top', 'bottom', 'bottom-left'], description: 'Lietuvos mokslo taryba yra patariamoji institucija Lietuvos Respublikos Seimui ir Vyriausybei mokslo, studijų ir eksperimentinės plėtros politikos klausimais.', url: '/aukstasis-mokslas#lmt' },
    position: { x: -390, y: 347 },
    style: { width: '420px', height: '200px', padding: '3px' },
  },
  {
    id: 'node-lmt-pirmininkas-pavaduotojai',
    type: 'multiple-handle',
    data: { label: 'LMT valdyba', handles: ['top'], description: 'Valdybą sudaro Lietuvos mokslo tarybos pirmininkas ir jo pavaduotojai.', url: 'aukstasis-mokslas#lmt-valdyba' },
    position: { x: 25, y: 115 },
    style: { lineHeight: '1.25' },
    parentNode: 'parent-node-lmt'
  },
  {
    id: 'node-lmt-nariai',
    type: 'multiple-handle',
    data: { label: 'LMT nariai', handles: ['top-right'], description: 'Lietuvos mokslo tarybą sudaro 29 nariai, renkami 5 m. kadencijai. Lietuvos mokslo tarybos sudėtį vyriausybės teikimu tvirtina Seimas.' },
    position: { x: 215, y: 125 },
    style: { lineHeight: '1.25' },
    parentNode: 'parent-node-lmt'
  },
]

const edges = [
  {
    id: 'edge-seimas-lmt',
    source: 'parent-node-seimas',
    target: 'parent-node-lmt',
    sourceHandle: 'bottom-left',
    targetHandle: 'top',
    label: 'Steigia',
    ...redStyle
  },
  {
    id: 'edge-seimas-lmt-pirmininkas',
    source: 'parent-node-seimas',
    target: 'node-lmt-pirmininkas-pavaduotojai',
    sourceHandle: 'bottom-left',
    targetHandle: 'top',
    label: 'Tvirtina',
    ...redStyle,
    zIndex: 50
  },
  {
    id: 'edge-lmt-seimas',
    source: 'parent-node-lmt',
    target: 'parent-node-seimas',
    sourceHandle: 'bottom',
    targetHandle: 'right',
    type: 'smoothstep',
    //label: 'Atskaitinga ir pataria',
    ...orangeStyle
  },
  {
    id: 'edge-lmt-kontrolierius',
    source: 'parent-node-lmt',
    target: 'node-kontrolierius',
    sourceHandle: 'bottom-left',
    targetHandle: 'right',
    //type: 'smoothstep',
    label: 'Teikia',
    ...redStyle,
    zIndex: 50
  },
  {
    id: 'edge-aepk-msi',
    source: 'node-kontrolierius',
    target: 'parent-node-msi',
    sourceHandle: 'bottom',
    targetHandle: 'top-left',
    //type: 'smoothstep',
    label: 'Informuoja (įpareigoja)',
    ...orangeStyle,
    zIndex: 50
  },
  {
    id: 'edge-lmt-seimas',
    source: 'parent-node-lmt',
    target: 'node-kontrolierius',
    sourceHandle: 'bottom-left',
    targetHandle: 'right',
    //type: 'smoothstep',
    label: 'Teikia',
    ...redStyle,
    zIndex: 50
  },
  {
    id: 'edge-lmt-lrv',
    source: 'parent-node-lmt',
    target: 'parent-node-lrv',
    sourceHandle: 'bottom',
    targetHandle: 'left',
    type: 'smoothstep',
    //label: 'Atskaitinga ir pataria',
    ...orangeStyle
  },
  {
    id: 'edge-seimas-lma',
    source: 'parent-node-seimas',
    target: 'node-lma',
    sourceHandle: 'left-bottom',
    targetHandle: 'top',
    //type: 'smoothstep',
    label: 'Steigia',
    ...redStyle
  },
  {
    id: 'edge-seimas-kontrolierius',
    source: 'parent-node-seimas',
    target: 'node-kontrolierius',
    sourceHandle: 'left-bottom',
    targetHandle: 'top',
    //type: 'smoothstep',
    label: 'Skiria LMT teikimu',
    ...redStyle,
    zIndex: 50
  },
  {
    id: 'edge-lma-seimas',
    source: 'node-lma',
    target: 'parent-node-seimas',
    sourceHandle: 'bottom',
    targetHandle: 'right',
    type: 'smoothstep',
    //label: 'Pataria',
    ...orangeStyle
  },
  {
    id: 'edge-lma-lrv',
    source: 'node-lma',
    target: 'parent-node-lrv',
    sourceHandle: 'bottom',
    targetHandle: 'left',
    type: 'smoothstep',
    //label: 'Pataria',
    ...orangeStyle
  },
  {
    id: 'edge-rektoriai-seimas',
    source: 'node-rektoriu-konferencija',
    target: 'parent-node-seimas',
    sourceHandle: 'right',
    targetHandle: 'right',
    type: 'smoothstep',
    //label: 'Pataria',
    ...orangeStyle
  },
  {
    id: 'edge-rektoriai-lrv',
    source: 'node-rektoriu-konferencija',
    target: 'parent-node-lrv',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',
    //label: 'Pataria',
    ...orangeStyle
  },
  {
    id: 'edge-direktoriai-seimas',
    source: 'node-direktoriu-konferencija',
    target: 'parent-node-seimas',
    sourceHandle: 'right',
    targetHandle: 'right',
    type: 'smoothstep',
    //label: 'Pataria',
    ...orangeStyle
  },
  {
    id: 'edge-direktoriai-lrv',
    source: 'node-direktoriu-konferencija',
    target: 'parent-node-lrv',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',
    //label: 'Pataria',
    ...orangeStyle
  },
  {
    id: 'edge-msi-seimas',
    source: 'parent-node-msi',
    target: 'parent-node-seimas',
    sourceHandle: 'right',
    targetHandle: 'right',
    type: 'smoothstep',
    //label: 'Pataria',
    ...orangeStyle
  },
  {
    id: 'edge-msi-lrv',
    source: 'parent-node-msi',
    target: 'parent-node-lrv',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',
    //label: 'Pataria',
    ...orangeStyle
  },
  {
    id: 'edge-sao-lrv',
    source: 'parent-node-sao',
    target: 'parent-node-lrv',
    sourceHandle: 'left',
    targetHandle: 'left',
    type: 'smoothstep',
    //label: 'Pataria',
    ...orangeStyle
  },
  {
    id: 'edge-strata-seimas',
    source: 'node-strata',
    target: 'parent-node-seimas',
    sourceHandle: 'left',
    targetHandle: 'right',
    type: 'smoothstep',
    //label: 'Pataria',
    ...orangeStyle
  },
  {
    id: 'edge-strata-lrv',
    source: 'node-strata',
    target: 'parent-node-lrv',
    sourceHandle: 'left',
    targetHandle: 'left',
    type: 'smoothstep',
    label: 'Pataria',
    ...orangeStyle
  },
  {
    id: 'edge-lst-seimas',
    source: 'node-lst',
    target: 'parent-node-seimas',
    sourceHandle: 'right',
    targetHandle: 'right',
    type: 'smoothstep',
    //label: 'Pataria',
    ...orangeStyle
  },
  {
    id: 'edge-lst-lrv',
    source: 'node-lst',
    target: 'parent-node-lrv',
    sourceHandle: 'right',
    targetHandle: 'left',
    type: 'smoothstep',
    label: 'Pataria',
    ...orangeStyle
  },
  {
    id: 'edge-smk-skvc',
    source: 'node-sm-komitetas',
    target: 'node-skvc-taryba',
    sourceHandle: 'bottom-right',
    targetHandle: 'left-top',
    //type: 'smoothstep',
    label: 'Deleguoja',
    ...redStyle,
    zIndex: 50
  },
  {
    id: 'edge-pilieciai-prezidentas',
    source: 'node-pilieciai',
    target: 'node-prezidentas',
    sourceHandle: 'right',
    targetHandle: 'left',
    //type: 'smoothstep',
    label: 'Renka',
    ...redStyle,
  },
  {
    id: 'edge-prezidentas-mp',
    source: 'node-prezidentas',
    target: 'node-ministras-pirmininkas',
    sourceHandle: 'bottom',
    targetHandle: 'top-left',
    //type: 'smoothstep',
    label: 'Teikia',
    ...redStyle,
    zIndex: 50
  },
  {
    id: 'edge-pilieciai-seimas',
    source: 'node-pilieciai',
    target: 'parent-node-seimas',
    sourceHandle: 'bottom',
    targetHandle: 'top-left',
    //type: 'smoothstep',
    label: 'Renka',
    ...redStyle,
  },
  {
    id: 'edge-lst-prezidentas',
    source: 'node-lst',
    target: 'node-prezidentas',
    sourceHandle: 'top',
    targetHandle: 'bottom',
    //type: 'smoothstep',
    label: 'Pataria',
    ...orangeStyle,
  },
  {
    id: 'edge-seimas-lst',
    source: 'parent-node-seimas',
    target: 'node-lst',
    sourceHandle: 'top-right',
    targetHandle: 'bottom',
    //type: 'smoothstep',
    label: 'Tvirtina',
    ...redStyle,
  },
  {
    id: 'edge-seimas-mp',
    source: 'parent-node-seimas',
    target: 'node-ministras-pirmininkas',
    sourceHandle: 'right-top',
    targetHandle: 'top-left',
    //type: 'smoothstep',
    label: 'Tvirtina',
    ...redStyle,
    zIndex: 50
  },
  {
    id: 'edge-mp-vyriausybe',
    source: 'node-ministras-pirmininkas',
    target: 'parent-node-lrv',
    sourceHandle: 'top-left',
    targetHandle: 'top-left',
    type: 'smoothstep',
    label: 'Formuoja',
    ...redStyle,
    zIndex: 50
  },
  {
    id: 'edge-smsm-skvc',
    source: 'parent-node-smsm',
    target: 'parent-node-skvc',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    //type: 'smoothstep',
    label: 'Steigia',
    ...redStyle,
    zIndex: 50
  },
  {
    id: 'edge-smsm-ministras-skvc-taryba',
    source: 'node-smsm-ministras',
    target: 'node-skvc-taryba',
    sourceHandle: 'bottom-left',
    targetHandle: 'right',
    type: 'smoothstep',
    label: 'Deleguoja',
    ...redStyle,
    zIndex: 50
  },
  {
    id: 'edge-ldk-skvc-taryba',
    source: 'node-direktoriu-konferencija',
    target: 'node-skvc-taryba',
    sourceHandle: 'right-top',
    targetHandle: 'left',
    //type: 'smoothstep',
    label: 'Deleguoja',
    ...redStyle,
    zIndex: 50
  },
  {
    id: 'edge-lurk-skvc-taryba',
    source: 'node-rektoriu-konferencija',
    target: 'node-skvc-taryba',
    sourceHandle: 'right-bottom',
    targetHandle: 'left',
    //type: 'smoothstep',
    label: 'Deleguoja',
    ...redStyle,
    zIndex: 50
  },
  {
    id: 'edge-smsm-ministras-vsf-valdyba',
    source: 'node-smsm-ministras',
    target: 'node-vsf-valdyba',
    sourceHandle: 'bottom-right',
    targetHandle: 'left',
    type: 'smoothstep',
    label: 'Tvirtina',
    ...redStyle,
    zIndex: 50
  },
  {
    id: 'edge-lrv-vsf',
    source: 'parent-node-lrv',
    target: 'parent-node-vsf',
    sourceHandle: 'bottom-right',
    //type: 'smoothstep',
    label: 'Steigia',
    ...redStyle,
    zIndex: 50
  },
  {
    id: 'edge-ministerijos-vsf-valdyba',
    source: 'node-kitos-ministerijos',
    target: 'node-vsf-valdyba',
    sourceHandle: 'bottom-right',
    targetHandle: 'right',
    type: 'smoothstep',
    label: 'Deleguoja',
    ...redStyle,
    zIndex: 50
  },
  {
    id: 'edge-lrv-strata',
    source: 'parent-node-lrv',
    target: 'node-strata',
    sourceHandle: 'bottom-left',
    targetHandle: 'top',
    //type: 'smoothstep',
    label: 'Steigia',
    ...redStyle,
  },
  {
    id: 'edge-lrv-lmt-nariai',
    source: 'parent-node-lrv',
    target: 'node-lmt-nariai',
    sourceHandle: 'left-bottom',
    targetHandle: 'top-right',
    //type: 'smoothstep',
    label: 'Tvirtina',
    ...redStyle,
    zIndex: 50
  },
  {
    id: 'edge-universitetai-lurk',
    source: 'node-universitetai',
    target: 'node-rektoriu-konferencija',
    sourceHandle: 'top-right',
    targetHandle: 'left',
    type: 'smoothstep',
    label: 'Sudaro',
    ...redStyle,
    zIndex: 50
  },
  {
    id: 'edge-kolegijos-ldk',
    source: 'node-kolegijos',
    target: 'node-direktoriu-konferencija',
    sourceHandle: 'top-left',
    targetHandle: 'left',
    type: 'smoothstep',
    label: 'Sudaro',
    ...redStyle,
    zIndex: 50
  },
  {
    id: 'edge-msi-vsf-valdyba',
    source: 'parent-node-msi',
    target: 'node-vsf-valdyba',
    sourceHandle: 'top-right',
    targetHandle: 'bottom',
    type: 'smoothstep',
    label: 'Deleguoja',
    ...redStyle,
    zIndex: 50
  },
  {
    id: 'edge-sao-vsf-valdyba',
    source: 'parent-node-sao',
    target: 'node-vsf-valdyba',
    sourceHandle: 'top-right',
    targetHandle: 'bottom',
    //type: 'smoothstep',
    label: 'Deleguoja',
    ...redStyle,
    zIndex: 50
  },
  {
    id: 'edge-sao-skvc-taryba',
    source: 'parent-node-sao',
    target: 'node-skvc-taryba',
    sourceHandle: 'top-left',
    targetHandle: 'bottom',
    //type: 'smoothstep',
    label: 'Deleguoja',
    ...redStyle,
    zIndex: 50
  },
  {
    id: 'edge-sao-msi',
    source: 'parent-node-sao',
    target: 'parent-node-msi',
    sourceHandle: 'bottom-left',
    targetHandle: 'bottom-right',
    type: 'smoothstep',
    label: 'Atstovauja valdymo organuose',
    ...redStyle,
    zIndex: 50
  },
  {
    id: 'edge-am-savivaldos-sao',
    source: 'node-am-savivaldos',
    target: 'node-lss',
    sourceHandle: 'top',
    targetHandle: 'bottom',
    //type: 'smoothstep',
    label: 'Sudaro',
    ...redStyle,
    zIndex: 50
  },
  {
    id: 'edge-sao-seimas',
    source: 'parent-node-sao',
    target: 'parent-node-seimas',
    sourceHandle: 'left',
    targetHandle: 'right',
    type: 'smoothstep',
    label: 'Teikia siūlymus',
    ...orangeStyle,
    zIndex: 50
  },
]

export default { nodes, edges }
