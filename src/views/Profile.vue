<template>
  <div>
    <div class="page-title">
      <h3>{{'ProfileTitle' | localize}}</h3>
    </div>

    <form
      @submit="submitHandler"
      class="form"
    >
      <div class="input-field">
        <input
          id="description"
          type="text"
          v-model="name"
          :class="{invalid: $v.name.$dirty && !$v.name.required }"
        />
        <label
          :class="{active: name.length}"
          for="description"
        >{{'Name' | localize}}</label>
        <small
          class="helper-text invalid"
          v-if="$v.name.$dirty && !$v.name.required"
        >{{'Message_enter_name' | localize}}</small>
      </div>
      <div class="switch">
        <label>
          English
          <input
            type="checkbox"
            v-model="isRuLocale"
          />
          <span class="lever"></span>
          Русский
        </label>
      </div>

      <button
        class="btn waves-effect waves-light"
        type="submit"
      >
        {{'Update' | localize}}
        <i class="material-icons right">send</i>
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { required } from 'vuelidate/lib/validators'
export default {
  metaInfo () {
    return {
      title: this.$title('ProfileTitle'),
      meta: [
        { name: 'description', content: 'Сайт учета расходов и доходов, с учетом категорий и бюджета, графический анализ, CRM Vue' }
      ]
    }
  },
  name: 'profile',
  data: () => ({
    name: '',
    isRuLocale: true
  }),
  validations: {
    name: { required }
  },
  async mounted () {
    M.updateTextFields()//eslint-disable-line
    this.isRuLocale = this.info.locale === 'ru-RU'
    this.name = this.info.name
  },
  computed: {
    ...mapGetters(['info'])
  },
  methods: {
    ...mapActions(['updateInfo']),
    async submitHandler () {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      try {
        await this.updateInfo({
          name: this.name,
          locale: this.isRuLocale ? 'ru-RU' : 'en-US'
        })
      } catch (e) {
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.switch {
  margin-bottom: 2rem;
}
</style>
