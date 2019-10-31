export default {
  namespaced: true,
  state: {
    chartData: [{
      name: 'Period 1',
      colorByPoint: true,
      data: [18, 27, 39, 25]
    },
    {
      name: 'Period 2',
      colorByPoint: true,
      data: [12, 35, 25, 55]
    }
    ]

  },
  getters: {
    getChartData(state) {
      return state.chartData;
    }
  },
  mutations: {}
};
