<template>
  <div class="control-charts">
    <label
      for="chart-type"
      class="control-charts__label"
    >Chart type</label>
    <select
      id="chart-type"
      v-model="chartType"
      class="control-charts__select"
    >
      <option
        disabled
        :selected="!chartType"
      >
        select the type
      </option>
      <template v-for="(type, i) in chartTypeList">
        <option
          v-if="isChartCreated(type)"
          :key="i"
          :value="type"
        >
          {{ type }}
        </option>
      </template>
    </select>

    <button
      class="control-charts__button"
      :disabled="!chartType"
      @click="addNewChart"
    >
      {{ $t('insert') }}
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Carousel from 'vue-owl-carousel';
import Chart from './Chart.vue';

export default {
  components: {
    Carousel,
    Chart
  },
  data() {
    return {
      chartType: null,
      chartTypeList: ['bar', 'pie', 'line'],
      createdCharts: []
    };
  },
  computed: {
    ...mapGetters('chartStore', {
      chartData: 'getChartData'
    })
  },
  methods: {
    isChartCreated(type) {
      return this.createdCharts.indexOf(type) === -1;
    },
    addNewChart() {
      if (this.chartType !== null) this.createdCharts.push(this.chartType);
      this.chartType = null;
      this.createNewChart();
    },
    createNewChart() {
      this.$emit('charting', this.createdCharts);
    }
  }
};

</script>

<style lang="sass">
@import "../../css/_variables"
.control-charts
  padding: 35px
  &__
    &label
      display: block
    &select
      border: 1px solid $black
    &button
      background-color: #2f9c1e
      padding: 5px 10px
      cursor: pointer
      color: $light
      &:disabled
        cursor: not-allowed
</style>
