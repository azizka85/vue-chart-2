<script>
import { HorizontalBar } from 'vue-chartjs';
import { HorizontalLinePlugin } from '../plugins/chart/HorizontalLinePlugin';

export default {
  extends: HorizontalBar,
  props: ['data', 'axisWidth'],
  data: () => ({
    chartdata: {
			lengthPercent: 0.4,
			lineWidth: 2,
			lineDash: [5],
			lineColor: '#fff',
			arrowLength: 20,
			arrowWidth: 10,
			arrowLineWidth: 2,
			arrowColor: '#fff',
			arrowBorderColor: '#000',      
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
      this.chartdata.lengthPercent = this.axisWidth;    
      for(let item of this.data) {
        this.chartdata.datasets.push({
          backgroundColor: item.color,
          data: [item.value],
          barPercentage: 1,
          categoryPercentage: 1
        });
      }
    }
  },
  mounted() {
    Chart.plugins.register(HorizontalLinePlugin);
    this.setDatasets();
    this.renderChart(this.chartdata, this.options);
  }
}
</script>
