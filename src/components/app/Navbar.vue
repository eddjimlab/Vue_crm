<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a
          href="#"
          @click.prevent="$emit('clickNav')"
        >
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{date | datefilter('datetime')}}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            class="dropdown-trigger black-text"
            href="#"
            data-target="dropdown"
            ref="dropdownNav"
          >
            {{name}}
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul
            id='dropdown'
            class='dropdown-content'
          >
            <li>
              <router-link
                to="/profile"
                class="black-text"
              >
                <i class="material-icons">account_circle</i>{{'ProfileTitle' | localize}}
              </router-link>
            </li>
            <li
              class="divider"
              tabindex="-1"
            ></li>
            <li>
              <a
                href="#"
                class="black-text"
                @click="logout"
              >
                <i class="material-icons">assignment_return</i>{{'Logout' | localize}}
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data: () => ({
    date: new Date(),
    iterval: null,
    dropdown: null
  }),
  methods: {
    async logout () {
      await this.$store.dispatch('logout')
      this.$router.push('/login?message=logout')
    }
  },
  computed: {
    name () {
      return this.$store.getters.info.name
    }
  },
  mounted () {
    this.interval = setInterval(() => {
      this.date = new Date()
    }, 1000)
    this.dropdown = M.Dropdown.init(this.$refs.dropdownNav, {// eslint-disable-line
      constrainWidth: true
    })
  },
  beforeDestroy () {
    clearInterval(this.interval)
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy()
    }
  }
}
</script>
