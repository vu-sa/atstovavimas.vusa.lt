<script setup lang="ts">
import StructureGraphWrapper from './components/StructureGraphWrapper.vue'
import Seimas from './data/seimas'
import KAP from './data/kap'
import VU from './data/vu'
import SMSM from './data/smsm'
import LRV from './data/lrv'
import AM from './data/am'
</script>

# Schemos

## Aukštasis mokslas

<StructureGraphWrapper :nodes="AM.nodes" :edges="AM.edges" />

## LR Seimas

<StructureGraphWrapper :nodes="Seimas.nodes" :edges="Seimas.edges" />

<!--<StructureGraph :svg-object="SeimasProcesasTrumpai" />-->
<!---->
<!--<StructureGraph :svg-object="SeimasProcesas" />-->

## LR Vyriausybė
<!---->
<StructureGraphWrapper :nodes="LRV.nodes" :edges="LRV.edges" />
<!---->
<!--<StructureGraph :svg-object="VyriausybeProcesas" />-->
<!---->
## Švietimo ir mokslo ministerija

<StructureGraphWrapper :nodes="SMSM.nodes" :edges="SMSM.edges" />

## Vilniaus universitetas

<StructureGraphWrapper :nodes="VU.nodes" :edges="VU.edges" />

## Vilniaus universiteto kamieniniai akademiniai padaliniai

<StructureGraphWrapper :nodes="KAP.nodes" :edges="KAP.edges" />
