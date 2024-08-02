<script setup lang="ts">
import StructureGraphWrapper from './components/StructureGraphWrapper.vue'
import Seimas from './data/seimas'
import KAP from './data/kap'
import VU from './data/vu'
import SMSM from './data/smsm'
</script>

# Schemos

<!--## Aukštasis mokslas-->
<!---->
<!--<StructureGraph :svg-object="AM" />-->

## LR Seimas

<StructureGraphWrapper :nodes="Seimas.nodes" :edges="Seimas.edges" />

<!--<StructureGraph :svg-object="SeimasProcesasTrumpai" />-->
<!---->
<!--<StructureGraph :svg-object="SeimasProcesas" />-->

<!--## LR Vyriausybė-->
<!---->
<!--<StructureGraph :svg-object="LRV" />-->
<!---->
<!--<StructureGraph :svg-object="VyriausybeProcesas" />-->
<!---->
## Švietimo ir mokslo ministerija

<StructureGraphWrapper :nodes="SMSM.nodes" :edges="SMSM.edges" />

## Vilniaus universitetas

<StructureGraphWrapper :nodes="VU.nodes" :edges="VU.edges" />

## Vilniaus universiteto kamieniniai akademiniai padaliniai

<StructureGraphWrapper :nodes="KAP.nodes" :edges="KAP.edges" />
