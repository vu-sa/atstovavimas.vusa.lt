<script setup lang="ts">\<script setup lang=\"ts\"\>

import StructureGraphWrapper from '../components/StructureGraphWrapper.vue'

import Seimas from '../data/seimas'import StructureGraphWrapper from

import KAP from '../data/kap'\'./components/StructureGraphWrapper.vue\'

import VU from '../data/vu'

import SMSM from '../data/smsm'import Seimas from \'./data/seimas\'

import LRV from '../data/lrv'

import AM from '../data/am'import CAU from \'./data/kap\'

</script>

import VU from \'./data/vu\'

# Diagrams

import SMSM from \'./data/smsm\'

## Higher Education

import LRV from \'./data/lrv\'

<StructureGraphWrapper :nodes="AM.nodes" :edges="AM.edges" />

import AM from \'./data/am\'

## Parliament of Lithuania

\</script\>

<StructureGraphWrapper :nodes="Seimas.nodes" :edges="Seimas.edges" />

\# Schemes

## Government of Lithuania

\## Higher education

<StructureGraphWrapper :nodes="LRV.nodes" :edges="LRV.edges" />

\<StructureGraphWrapper :nodes=\"AM.nodes\" :edges=\"AM.edges\" /\>

## Ministry of Education, Science and Sport

\## LR Seimas

<StructureGraphWrapper :nodes="SMSM.nodes" :edges="SMSM.edges" />

\<StructureGraphWrapper :nodes=\"Seimas.nodes\" :edges=\"Seimas.edges\"

## Vilnius University/\>



<StructureGraphWrapper :nodes="VU.nodes" :edges="VU.edges" />\<!\--\<StructureGraph :svg-object=\"SeimasProcesasTrumpai\" /\>\--\>



## Vilnius University Core Academic Units\<!\-\-\--\>



<StructureGraphWrapper :nodes="KAP.nodes" :edges="KAP.edges" />\<!\--\<StructureGraph :svg-object=\"SeimasProcesas\" /\>\--\>


\## LR Vyriausybė

\<!\-\-\--\>

\<StructureGraphWrapper :nodes=\"LRV.nodes\" :edges=\"LRV.edges\" /\>

\<!\-\-\--\>

\<!\--\<StructureGraph :svg-object=\"VyriausybeProcesas\" /\>\--\>

\<!\-\-\--\>

\## Ministry of education and science

\<StructureGraphWrapper :nodes=\"SMSM.nodes\" :edges=\"SMSM.edges\" /\>

\## Vilnius university

\<StructureGraphWrapper :nodes=\"VU.nodes\" :edges=\"VU.edges\" /\>

\## Vilnius university core academic units

\<StructureGraphWrapper :nodes=\"KAP.nodes\" :edges=\"KAP.edges\" /\>
