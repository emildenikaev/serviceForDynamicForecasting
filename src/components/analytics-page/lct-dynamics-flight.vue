<template>
  <h1>Динамика бронирования рейса</h1>
  <div class="lct-dynamic-flight">
    <lct-analytics-form :link="`booking-dynamics`" />
    <apexchart
      v-if="this.GRAPH"
      type="bar"
      :options="this.GRAPH.data.chart_options"
      :series="this.GRAPH.data.series"
      class="chart"
    ></apexchart>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import lctAnalyticsForm from "./lct-analytics-form.vue";

export default {
  name: "lct-dynamic-flight",
  components: { lctAnalyticsForm },
  methods: {
    ...mapActions(["GET_GRAPH_FROM_API"]),
  },
  computed: {
    ...mapGetters(["GRAPH"]),
  },
};
</script>
<style scoped lang="scss">
h1 {
  margin-top: 20px;
}

.lct-dynamic-flight {
  display: flex;
  margin-top: 30px;
}
.chart {
  width: 70%;
  margin: 0 auto;
}

@media (max-width: 1000px) {
  .lct-dynamic-flight {
    display: flex;
    flex-direction: column;
  }
}
</style>
