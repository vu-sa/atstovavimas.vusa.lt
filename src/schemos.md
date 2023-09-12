<script setup lang="ts">
import StructureGraph from './components/StructureGraph.vue'
import AM from './graphs/AM.svg?component'
import KAP from './graphs/KAP.svg?component'
import LRV from './graphs/LRV.svg?component'
import Seimas from './graphs/Seimas.svg?component'
import SeimasProcesas from './graphs/SeimasProcesas.svg?component'
import SeimasProcesasTrumpai from './graphs/SeimasProcesasTrumpai.svg?component'
import SMSM from './graphs/SMSM.svg?component'
import VU from './graphs/VU.svg?component'
import VyriausybeProcesas from './graphs/VyriausybeProcesas.svg?component'
</script>

# Schemos

## Aukštasis mokslas

<StructureGraph :svg-object="AM" />

## LR Seimas

<StructureGraph :svg-object="Seimas" />

<StructureGraph :svg-object="SeimasProcesasTrumpai" />

<StructureGraph :svg-object="SeimasProcesas" />

## LR Vyriausybė

<StructureGraph :svg-object="LRV" />

<StructureGraph :svg-object="VyriausybeProcesas" />

## Švietimo ir mokslo ministerija

<StructureGraph :svg-object="SMSM" />

## Vilniaus universitetas

<StructureGraph :svg-object="VU" />

## Vilniaus universiteto kamieniniai akademiniai padaliniai

<StructureGraph :svg-object="KAP" />
