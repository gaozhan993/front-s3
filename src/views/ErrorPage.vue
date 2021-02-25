<template>
  <div  class="about">
    <h1>Bitcoin Price Index Error</h1>
    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>

    <section v-else>
      <div v-if="loading">Loading...</div>

      <div
              v-else
              v-for="currency in info" v-bind:key="currency.symbol"
              class="currency"
      >
        {{ currency.description }}:
        <span class="lighten">
        <span v-html="currency.symbol"></span>{{ currency.rate_float | currencydecimal }}
      </span>
      </div>

    </section>
  </div>
</template>

<script>
  import axios from 'axios'
  import { getErrorInfo } from '../api/infoApi.js'
export default {
  data () {
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  filters: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  mounted () {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.jsonp','',{timeout:3000})
            .then(response => {
              this.info = response.data.bpi
            })
            .catch(error => {
              console.log(error)
              this.errored = true
            })
            .finally(() => this.loading = false)
    // this.executeQueryPage()
  },
  methods: {
    executeQueryPage() {
      getErrorInfo().then(res => {
        console.info(res)
        this.info = res.bpi
        this.loading = false
      })
    }
  }
}
</script>

