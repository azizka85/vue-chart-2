<template>
  <div class="card single">
    <div class="card-title">
      <div class="card-title-content">
        Forecasts
      </div>
      <div class="card-title-btns">
        <div class="card-title-btn">
          Sales
          <svg xmlns="http://www.w3.org/2000/svg" class="card-title-btn-icon" viewBox="0 0 16 16">
            <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
          </svg>          
        </div>
      </div>
    </div>
    <div class="card-content">
      <div 
        class="chart"
        v-for="item, i in charts" 
        :key="i"          
      >
        <div class="chart-title">{{ item.title }}</div>
        <chart class="chart-content" :data="item.data" :axisWidth="item.axisWidth"></chart>
        <div class="chart-label">
          <div>{{ item.min }}</div>
          <div>{{ item.max }}</div>
        </div>          
      </div>
    </div>
  </div>
</template>

<script>
import Chart from './components/Chart';

export default {
  name: 'App',
  components: {
    Chart
  },
  data() {
    return {
      charts: [
        {
          title: 'Current month',
          min: '$1.6K',
          max: '$2.4K',
          data: [
            {
              value: 100,
              color: '#0b2035'
            }, {
              value: 100,
              color: '#256bff'
            }, {
              value: 100,
              color: '#77c3f7'
            }
          ],
          axisWidth: 0.25
        }, {
          title: 'Current Quarter',
          min: '$1.6K',
          max: '$2.4K',
          data: [
            {
              value: 45,
              color: '#0b2035'
            }, {
              value: 195,
              color: '#256bff'
            }, {
              value: 60,
              color: '#77c3f7'
            }
          ],
          axisWidth: 0.6
        }
      ]
    }
  },
}
</script>
