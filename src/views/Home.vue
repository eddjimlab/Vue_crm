<template>
  <div class="home">
    <div>
      <div class="page-title">
        <h3>{{'AccountTitle' | localize}}</h3>

        <button
          class="btn waves-effect waves-light btn-small"
          @click="refresh"
        >
          <i class="material-icons">refresh</i>
        </button>
      </div>
      <Loader v-if="loading" />
      <div
        v-else
        class="row"
      >
        <HomeBill :rates="currency.rates" />
        <HomeCurrency
          :rates="currency.rates"
          :date="currency.date"
        />
      </div>
    </div>
  </div>
</template>

<script>
import HomeBill from '@/components/HomeBill'
import HomeCurrency from '@/components/HomeCurrency'

export default {
  metaInfo () {
    return {
      title: this.$title('CategoryTitle'),
      meta: [
        { name: 'description', content: 'Сайт учета расходов и доходов, с учетом категорий и бюджета, графический анализ, CRM Vue' }
      ]
    }
  },
  name: 'home',
  data: () => ({
    loading: true,
    currency: null
  }),
  async mounted () {
    this.currency = await this.$store.dispatch('fetchCurrency')
    this.loading = false
  },
  methods: {
    async refresh () {
      this.loading = true
      this.currency = await this.$store.dispatch('fetchCurrency')
      this.loading = false
    }
  },
  components: {
    HomeBill, HomeCurrency
  }
}
</script>
