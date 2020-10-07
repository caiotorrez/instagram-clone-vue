<template>
  <v-card>
    <template v-slot:header>
      <timeline-card-header />
    </template>
    <template v-slot:body>
      <timeline-card-body />
    </template>
    <template v-slot:controls>
      <timeline-card-controls />
    </template>
    <template v-slot:footer>
      <timeline-card-footer style="padding: 7px 15px" />
    </template>
  </v-card>
</template>

<script>
import VCard from "./VCard";
import TimelineCardHeader from "./TimelineCardHeader";
import TimelineCardBody from "./TimelineCardBody";
import TimelineCardControls from "./TimelineCardControls";
import TimelineCardFooter from "./TimelineCardFooter";

export default {
  name: "timeline-card",
  components: {
    VCard,
    "timeline-card-header": TimelineCardHeader,
    "timeline-card-body": TimelineCardBody,
    "timeline-card-controls": TimelineCardControls,
    "timeline-card-footer": TimelineCardFooter,
  },
};
</script>

<style lang="scss" scoped>
</style>
