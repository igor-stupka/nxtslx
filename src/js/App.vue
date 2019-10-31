<template>
  <div id="app">
    <header-comp />
    <grid />
    <control-charts @charting="updateChartsArr" />
    <div class="grid">
      <div
        v-for="(el, index) in chartsArr"
        :key="index"
        class="grid__item"
      >
        <chart
          :type="el"
          :chart-series="chartData"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import HeaderComp from './components/HeaderComponent.vue';
import Grid from './components/Grid.vue';
import Chart from './components/Chart.vue';
import ControlCharts from './components/ControlCharts.vue';


export default {
  name: 'App',
  components: {
    HeaderComp,
    Grid,
    Chart,
    ControlCharts
  },
  data() {
    return {
      chartsArr: []
    };
  },
  methods: {
    updateChartsArr(data) {
      this.chartsArr = data;
    }
  },
  computed: {
    ...mapGetters('chartStore', {
      chartData: 'getChartData'
    })
  }
};
</script>

<style lang="sass">
@import "../css/main"
</style>
