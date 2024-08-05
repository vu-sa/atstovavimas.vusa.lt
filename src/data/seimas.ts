import { MarkerType, Position } from "@vue-flow/core"
import { h } from "vue"
import { orangeStyle, redStyle } from "./edgeStyles"

export const nodes = [
  {
    id: 'node-seimas',
    type: 'multiple-handle',
    data: { label: h('div', [h('img', { src: '/img/Seimas.png', class: 'p-2' })]), handles: ['left-bottom', 'left', 'left-bottom', 'top', 'left-top', 'right', 'bottom', 'right-bottom', 'right-top'], description: "Lietuvos Respublikos Seimas yra įstatymų leidžiamoji valdžia.", url: 'https://www.lrs.lt/sip/portal.show?p_r=35354' },
    position: { x: -50, y: 150 },
  },
  {
    id: 'node-lrv',
    type: 'multiple-handle',
    data: { label: h('div', [h('img', { class: 'p-2', src: '/img/Lietuvos_Respublikos_Vyriausybes_logotipas.png' })]), handles: ['right-bottom', 'right-top'], description: "Vyriausybė – tai Lietuvos Respublikos įstatymų vykdomoji valdžia. Vyriausybė sudaro 14 ministerijų ministrai ir ministras pirmininkas, Seimo paskirti ketverių metų kadencijai.", url: "https://lrv.lt/lt/aktuali-informacija/apie-vyriausybe/vyriausybe" },
    position: { x: -350, y: 160 },
  },
  {
    id: 'node-seimo-kanceliarija',
    type: 'multiple-handle',
    data: { label: "Seimo kanceliarija", handles: ['top'], description: "Seimo kanceliarijos žmonės atlieka įvairias užduotis, kad užtikrintų sklandų Seimo darbą ir nepertraukiamą teisėkūros procesą, gerintų informacijos apie Seimo darbą sklaidą ir pasiekiamumą, nuosekliai ir kryptingai plėtotų	tarptautinį bendradarbiavimą.", url: "https://www.lrs.lt/sip/portal.show?p_r=35381" },
    position: { x: 250, y: 150 },
  },
  {
    id: 'node-seimo-nariai',
    type: 'multiple-handle',
    data: { label: "LR Seimo nariai", handles: ['top', 'bottom', 'left'], description: 'Seimo nariais tampa 141 demokratiškuose rinkimuose išrinkti Lietuvos piliečiai.', url: '/seimas.html#seimo-nariai', textClass: 'font-bold text-[15px]' },
    style: { lineHeight: '1.25' },
    position: { x: -50, y: 410 },
  },
  {
    id: 'node-seimo-frakcijos',
    type: 'multiple-handle',
    data: { label: "LR Seimo frakcijos", handles: ['top', 'left', 'right', 'right-top', 'right-bottom'], description: 'Seimo nariai pagal politines partijas ar vertybines nuostatas gali jungtis į frakcijas sudarytas iš ne mažiau kaip 7 narių, kuriose siekia politinių tikslų įgyvendinimo.', url: '/seimas.html#seimo-frakcijos' },
    position: { x: -50, y: 500 },
  },
  {
    id: 'parent-node-seimo-grupes',
    position: { x: -50, y: 610 },
    style: { backgroundColor: 'rgba(60,30,60, 0.02)', width: '200px', height: '180px' },
    sourcePosition: Position.Left,
    targetPosition: Position.Left,
  },
  {
    id: 'node-laikinosios-darbo-grupes',
    type: 'multiple-handle',
    data: { label: "Laikinosios darbo grupės", handles: ['right'], description: "Konkretiems klausimams spręsti Seimo nariai (mažiausiai penki) gali jungtis į laikinąsias darbo grupes.", url: 'https://www.lrs.lt/sip/portal.show?p_r=38270' },
    position: { x: 25, y: 15 },
    parentNode: 'parent-node-seimo-grupes',
    style: { lineHeight: '1.25' },
    extent: 'parent',
  },
  {
    id: 'node-komitetai',
    type: 'multiple-handle',
    data: { label: "Komitetai", handles: [], description: 'Seimas įstatymams nagrinėti ir kitiems klausimams spręsti sudaro komitetus. Komitetai svarbiausioms veiklos kryptims iš savo narių gali sudaryti pakomitečius.', url: '/seimas.html#seimo-komitetai' },
    position: { x: 25, y: 75 },
    parentNode: 'parent-node-seimo-grupes',
    extent: 'parent',
  },
  {
    id: 'node-komisijos',
    type: 'multiple-handle',
    data: { label: "Komisijos", handles: [], description: 'Seimas įstatymams nagrinėti ir kitiems klausimams spręsti sudaro komisijas.', url: '/seimas.html#komisijos' },
    position: { x: 25, y: 125 },
    parentNode: 'parent-node-seimo-grupes',
    extent: 'parent',
  },
  {
    id: 'node-sao',
    data: { label: "Studentams atstovaujančios organizacijos", handles: ['right', 'bottom', 'top'], url: 'studentams-atstovaujancios-organizacijos.html' },
    position: { x: -350, y: 500 },
    style: { lineHeight: '1.25' },
    type: 'multiple-handle',
  },
  {
    id: 'node-studentai',
    data: { label: "Studentai (-ės)", handles: ['top'], description: 'Studentas – asmuo, studijuojantis aukštojoje mokykloje pagal tam tikrą studijų programą arba doktorantūroje.' },
    position: { x: -350, y: 650 },
    type: 'multiple-handle',
  },
  {
    id: 'node-seimo-pirmininkas',
    type: 'multiple-handle',
    data: { label: "LR Seimo pirmininkas",textClass: 'font-bold text-[16px]', handles: ['left-top', 'right-top', 'right', 'left', 'top-left'], description: "Seimo pirmininkas yra Lietuvos Respublikos Seimo vadovas, renkamas Seimo daugumos balsais Seimo kadencijos laikotarpiui. Vykdydamas savo įgaliojimus, Seimo Pirmininkas leidžia potvarkius.", url: 'https://e-seimas.lrs.lt/portal/legalAct/lt/TAD/TAIS.5734/OLtfmteOUm' },
    style: { lineHeight: '1.25' },
    position: { x: 250, y: 260 },
  },
  {
    id: 'node-seimo-pirmininko-pavaduotojai',
    type: 'multiple-handle',
    data: { label: "LR Seimo pirmininko pavaduotojai", handles: ['left', 'right', 'left-bottom'], description: 'Seimo Pirmininko pavaduotojai atlieka Seimo Pirmininko jiems pavestas funkcijas.', url: 'https://e-seimas.lrs.lt/portal/legalAct/lt/TAD/TAIS.5734/OLtfmteOUm' },
    style: { lineHeight: '1.25' },
    position: { x: 250, y: 365 },
  },
  {
    id: 'node-seimo-frakciju-seniunu-sueiga',
    type: 'multiple-handle',
    data: { label: "LR Seimo frakcijų seniūnų sueiga", handles: ['left', 'right-top', 'right-bottom', 'right', 'left-top', 'bottom', 'top'], description: "Seime veikia Seniūnų sueiga, į kurią įeina Seimo valdybos nariai ir frakcijų atstovai, kurių skaičius proporcingas frakcijų narių skaičiui.", url: '/seimas.html#seniunu-sueiga' },
    style: { lineHeight: '1.25' },
    position: { x: 200, y: 540 },
  },
  {
    id: 'node-frakcijos-seniunas',
    type: 'multiple-handle',
    data: { label: "LR Seimo Frakcijos seniūnas", handles: ['bottom', 'left'], description: 'Seimo narių frakcijai vadovauja ir jai Seime atstovauja frakcijos seniūnas ar seniūno pavaduotojas.', url: 'https://www.lrs.lt/sip/portal.show?p_r=35342' },
    style: { lineHeight: '1.25' },
    position: { x: 200, y: 450 },
  },
  {
    id: 'node-seimo-valdyba',
    type: 'multiple-handle',
    data: { label: "LR Seimo valdyba", handles: ['top', 'left', 'bottom'], description: 'Seimo valdybą sudaro Seimo Pirmininkas, jo pavaduotojai ir Seimo opozicijos lyderis. Valdyba sprendžia organizacinius Seimo darbo klausimus ir teikia patarimus Seimo Pirmininkui.', url: '/seimas.html#seimo-valdyba' },
    position: { x: 450, y: 460 },
  },
]

export const edges = [
  {
    id: 'e1',
    source: 'node-lrv',
    target: 'node-seimas',
    sourceHandle: 'right-bottom',
    targetHandle: 'left',
    label: 'Teikia siūlymus / išvadas',
    ...orangeStyle
  },
  {
    id: 'e2',
    source: 'node-seimas',
    target: 'node-lrv',
    sourceHandle: 'left-top',
    targetHandle: 'right-top',
    label: 'Kreipiasi',
    ...orangeStyle
  },
  {
    id: 'e3',
    source: 'node-seimo-kanceliarija',
    target: 'node-seimas',
    sourceHandle: 'top',
    targetHandle: 'top',
    type: 'smoothstep',
    label: 'Padeda',
    ...orangeStyle
  },
  {
    id: 'e4',
    source: 'node-seimo-nariai',
    target: 'node-seimas',
    sourceHandle: 'top',
    targetHandle: 'bottom',
    label: 'Sudaro',
    ...redStyle
  },
  {
    id: 'e5',
    source: 'node-seimo-nariai',
    target: 'node-seimo-frakcijos',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    label: 'Formuoja',
    ...redStyle
  },
  {
    id: 'e6',
    source: 'node-seimas',
    target: 'node-seimo-pirmininkas',
    sourceHandle: 'right',
    targetHandle: 'left-top',
    label: 'Skiria',
    ...redStyle
  },
  {
    id: 'e6a',
    source: 'node-seimas',
    target: 'node-seimo-pirmininko-pavaduotojai',
    sourceHandle: 'right',
    targetHandle: 'left',
    label: 'Skiria',
    ...redStyle
  },
  {
    id: 'e7',
    source: 'node-seimo-pirmininkas',
    target: 'node-seimas',
    sourceHandle: 'top-left',
    targetHandle: 'right-top',
    label: 'Vadovauja',
    ...redStyle
  },
  {
    id: 'e8',
    source: 'node-seimo-pirmininkas',
    target: 'node-seimo-valdyba',
    sourceHandle: 'right',
    targetHandle: 'top',
    label: 'Įeina',
    ...redStyle
  },
  {
    id: 'e9',
    source: 'node-seimo-pirmininko-pavaduotojai',
    target: 'node-seimo-valdyba',
    sourceHandle: 'right',
    targetHandle: 'top',
    label: 'Įeina',
    ...redStyle
  },
  {
    id: 'e10',
    source: 'node-seimo-valdyba',
    target: 'node-seimo-frakciju-seniunu-sueiga',
    sourceHandle: 'left',
    targetHandle: 'right',
    label: 'Įeina',
    ...redStyle
  },
  {
    id: 'e11',
    source: 'node-seimo-frakciju-seniunu-sueiga',
    target: 'node-seimo-pirmininkas',
    sourceHandle: 'right-top',
    targetHandle: 'right-top',
    type: 'smoothstep',
    label: 'Pataria',
    ...orangeStyle
  },
  {
    id: 'e12',
    source: 'node-seimo-frakciju-seniunu-sueiga',
    target: 'node-seimo-valdyba',
    sourceHandle: 'right-bottom',
    targetHandle: 'bottom',
    label: 'Teikia sprendimus',
    ...orangeStyle
  },
  {
    id: 'e13',
    source: 'node-frakcijos-seniunas',
    target: 'node-seimo-frakciju-seniunu-sueiga',
    sourceHandle: 'bottom',
    targetHandle: 'top',
    label: 'Įeina',
    ...redStyle
  },
  {
    id: 'e14',
    source: 'node-sao',
    target: 'node-seimo-nariai',
    sourceHandle: 'top',
    targetHandle: 'left',
    label: 'Kreipiasi',
    ...orangeStyle
  },
  {
    id: 'e15',
    source: 'node-sao',
    target: 'node-seimo-pirmininkas',
    sourceHandle: 'top',
    targetHandle: 'left',
    type: 'smoothstep',
    label: 'Kreipiasi',
    ...orangeStyle
  },
  {
    id: 'e16',
    source: 'node-sao',
    target: 'node-seimo-frakcijos',
    sourceHandle: 'right',
    targetHandle: 'left',
    label: 'Kreipiasi',
    ...orangeStyle
  },
  {
    id: 'e17',
    source: 'node-sao',
    target: 'parent-node-seimo-grupes',
    sourceHandle: 'right',
    type: 'smoothstep',
    label: 'Kreipiasi',
    ...orangeStyle
  },
  {
    id: 'e20',
    source: 'node-studentai',
    target: 'node-sao',
    sourceHandle: 'top',
    targetHandle: 'bottom',
    label: 'Renka',
    ...redStyle
  },
  {
    id: 'e21',
    source: 'node-seimo-frakcijos',
    target: 'node-seimo-pirmininko-pavaduotojai',
    sourceHandle: 'right-top',
    targetHandle: 'left-bottom',
    label: 'Siūlo',
    ...orangeStyle
  },
  {
    id: 'e21a',
    source: 'node-seimo-frakcijos',
    target: 'node-seimo-frakciju-seniunu-sueiga',
    sourceHandle: 'right-bottom',
    targetHandle: 'left',
    label: 'Skiria',
    ...redStyle
  },
  {
    id: 'e21b',
    source: 'node-seimo-frakcijos',
    target: 'node-frakcijos-seniunas',
    sourceHandle: 'right',
    targetHandle: 'left',
    label: 'Renka',
    ...redStyle
  },
  {
    id: 'e22',
    source: 'node-seimo-frakciju-seniunu-sueiga',
    target: 'node-seimas',
    sourceHandle: 'left-top',
    targetHandle: 'right-bottom',
    label: 'Teikia siūlymus darbotvarkei',
    ...orangeStyle
  },
  {
    id: 'e23',
    source: 'node-seimo-frakciju-seniunu-sueiga',
    target: 'node-laikinosios-darbo-grupes',
    sourceHandle: 'left-bottom',
    targetHandle: 'right',
    label: 'Formuoja klausimus',
    ...orangeStyle
  },
  {
    id: 'e24',
    source: 'node-seimas',
    target: 'parent-node-seimo-grupes',
    sourceHandle: 'left-bottom',
    label: 'Formuoja',
    type: 'smoothstep',
    ...redStyle
  }
]

export default { nodes, edges }
