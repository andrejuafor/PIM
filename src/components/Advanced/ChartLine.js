import { Line } from 'vue-chartjs';
const LineChart = {
  extends: Line,
  props: ['data', 'options'],
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart(this.data, this.options);
  },
  watch: {
    data(newData) {
      this.renderChart(newData, this.options);
    },
    options(newOptions) {
      this.renderChart(this.data, newOptions);
    }
  }
};

export default LineChart;
export { LineChart as mdbLineChart };
