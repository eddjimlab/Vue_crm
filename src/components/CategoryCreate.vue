<template>
  <div class="col s12 m6">
    <div>
      <div class="page-subtitle">
        <h4>{{'CreateCategory' | localize}}</h4>
      </div>

      <form @submit.prevent="submitHandler">
        <div class="input-field">
          <input
            id="name"
            type="text"
            v-model="title"
            :class="{invalid: validateTitle}"
          >
          <label for="name">{{'Category_Name' | localize}}</label>
          <span
            v-if="$v.title.$error"
            class="helper-text invalid"
          >{{'Category_EnterCategoryName' | localize}}</span>
        </div>

        <div class="input-field">
          <input
            id="limit"
            type="number"
            v-model.number="limit"
            :class="{invalid: $v.limit.$dirty && !$v.limit.minValue}"
          >
          <label for="limit">{{'Category_limit' |localize}}</label>
          <span
            v-if="$v.limit.$error"
            class="helper-text invalid"
          >{{'Category_minimalAmount' | localize }} {{$v.limit.$params.minValue.min}} </span>
        </div>

        <button
          class="btn waves-effect waves-light"
          type="submit"
        >
          {{'CreateCategory' | localize}}
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import { required, minValue } from 'vuelidate/lib/validators'
export default {
  data: () => ({
    title: '',
    limit: 100
  }),
  validations: {
    title: { required },
    limit: { minValue: minValue(100) }
  },
  computed: {
    validateTitle () {
      return this.$v.title.$dirty && !this.$v.title.required
    }
  },
  async mounted () {
    M.updateTextFields() //eslint-disable-line
  },
  methods: {
    async submitHandler () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return //eslint-disable-line
      }
      try {
        const category = await this.$store.dispatch('createCategory', {
          title: this.title,
          limit: this.limit
        })
        this.title = ''
        this.limit = 100
        this.$message(`Категория ${category.title} была создана`)
        this.$emit('created', category)
        this.$v.reset()
      } catch (e) { }
    }
  }
}
</script>
