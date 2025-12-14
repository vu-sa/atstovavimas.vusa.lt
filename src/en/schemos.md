<script setup lang="ts">
import StructureGraphWrapper from '../components/StructureGraphWrapper.vue'
import Seimas from '../data/seimas'
import KAP from '../data/kap'
import VU from '../data/vu'
import SMSM from '../data/smsm'
import LRV from '../data/lrv'
import AM from '../data/am'
</script>

# Diagrams

## Higher Education

<StructureGraphWrapper :nodes="AM.nodes" :edges="AM.edges" />

## Parliament of Lithuania

<StructureGraphWrapper :nodes="Seimas.nodes" :edges="Seimas.edges" />

## Government of Lithuania

<StructureGraphWrapper :nodes="LRV.nodes" :edges="LRV.edges" />

## Ministry of Education, Science and Sport

<StructureGraphWrapper :nodes="SMSM.nodes" :edges="SMSM.edges" />

## Vilnius University

<StructureGraphWrapper :nodes="VU.nodes" :edges="VU.edges" />

## Vilnius University Core Academic Units

<StructureGraphWrapper :nodes="KAP.nodes" :edges="KAP.edges" />
