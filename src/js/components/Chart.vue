<template>
  <highchart :options="chartOptions" />
</template>
<script>
import { Chart } from 'highcharts-vue';

export default {
  components: {
    highchart: Chart
  },
  props: {
    chartSeries: {
      required: true,
      type: Array
    },
    type: {
      type: String
    }
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: this.type
        },
        title: {
          text: 'Points scored'
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'top'
        },
        xAxis: {
          categories: [
            'Team 1',
            'Team 2',
            'Team 3',
            'Team 4'
          ],
          crosshair: true
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '{point.percentage:.1f} %',
              distance: -50
            },
            showInLegend: true
          }
        },
        series: this.type === 'pie' ? this.chartDataCorrection() : this.chartSeries
      }
    };
  },
  methods: {
    // SUMM VALUES OF ALL PERIODS FOR 'PIE-CHART'
    chartDataCorrection() {
      const res = this.chartSeries.map((item) => item.data);
      const points = this.summOfArrElements(...res);
      return [{
        name: 'All period',
        colorByPoint: true,
        data: points.map((item, i) => ({
          name: `Team ${i + 1}`,
          y: item
        }))
      }];
    },
    summOfArrElements() {
      const total = [];
      for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arguments[i].length; j++) {
          total[j] = (total[j] === undefined ? 0 : total[j]) + arguments[i][j];
        }
      }
      return total;
    }
  }
};

</script>
<style lang="sass">
</style>
