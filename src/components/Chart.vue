<script>
import { HorizontalBar } from 'vue-chartjs';

export default {
  extends: HorizontalBar,
  props: ['data'],
  data: () => ({
    chartdata: {
      datasets: [] 
    },
    options: {
      maintainAspectRatio: false,
      layout: {
        padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
        }
      },      
      title: {
        display: false        
      },
      legend: {
        display: false
      },
      tooltips: {
        enabled: false
      },
      scales: {
        xAxes: [{
          stacked: true,
          display: false
        }],
        yAxes: [{
          stacked: true,
          display: false
        }]
      }      
    }
  }),
  methods: {
    setDatasets: function() {      
      for(let item of this.data) {
        this.chartdata.datasets.push({
          backgroundColor: item.color,
          data: [item.value]
        });
      }
    }
  },
  mounted() {
    // this.chartdata.datasets = this.getDatasets();
    this.setDatasets();
    this.renderChart(this.chartdata, this.options);
  }
}
</script>
