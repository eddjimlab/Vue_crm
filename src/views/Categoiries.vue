<template>
  <div>
    <div class="page-title">
      <h3>{{'CategoryTitle' | localize}}</h3>
    </div>
    <section>
      <Loader v-if="loading" />
      <div
        class="row"
        v-else
      >
        <CategoryCreate @created="addNewCategory" />
        <CategoryEdit
          v-if="categories"
          :categories="categories"
          :key="categories.length + updateCount"
          @updated="updateCategories"
        />
        <p
          v-else
          class="text-center"
        >{{'NoCategories' | localize}}</p>
      </div>
    </section>
  </div>
</template>
<script>
import CategoryCreate from '@/components/CategoryCreate'
import CategoryEdit from '@/components/CategoryEdit'
export default {
  metaInfo () {
    return {
      title: this.$title('CategoryTitle'),
      meta: [
        { name: 'description', content: 'Сайт учета расходов и доходов, с учетом категорий и бюджета, графический анализ, CRM Vue' }
      ]
    }
  },
  name: 'categories',
  data: () => ({
    categories: [],
    loading: true,
    updateCount: 0
  }),
  components: {
    CategoryCreate, CategoryEdit
  },
  async mounted () {
    this.categories = await this.$store.dispatch('fetchCategories')
    this.loading = false
  },
  methods: {
    addNewCategory (category) {
      this.categories.push(category)
    },
    updateCategories (category) {
      const idx = this.categories.findIndex(c => c.id === category.id)
      this.categories[idx].title = category.title
      this.categories[idx].limit = category.limit
      this.updateCount++
    }
  }
}
</script>
