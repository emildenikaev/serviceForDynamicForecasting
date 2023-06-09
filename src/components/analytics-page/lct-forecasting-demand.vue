<template>
  <h1>Прогноз спроса на 2020 год</h1>
  <div class="lct-forecasting-demand">
    <lct-analytics-form
      :link="`demand-forecast`"
      :toFlightDate="2020"
      :fromFlightDate="2020"
      :pickerValue="`2020-01-01`"
      :showScenarios="true"
    />
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
  name: "lct-forecasting-demand",
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

.lct-forecasting-demand {
  display: flex;
  margin-top: 30px;
}

.chart {
  width: 70%;
  margin: 0 auto;
}

@media (max-width: 1000px) {
  .lct-forecasting-demand {
    display: flex;
    flex-direction: column;
  }
}
</style>
