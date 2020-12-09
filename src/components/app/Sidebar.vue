<template>
  <ul
    class="sidenav app-sidenav"
    :class="{open: value}"
  >
    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
    >
      <a
        href="#"
        class="waves-effect waves-orange pointer"
      >{{link.title | localize}} </a>
    </router-link>
  </ul>
</template>
<script>
export default {
  props: ['value'],
  data: () => ({
    links: [
      { title: 'AccountTitle', url: '/', exact: true },
      { title: 'HistoryTitle', url: '/history' },
      { title: 'PlanningTitle', url: '/planning' },
      { title: 'NewRecordTitle', url: '/record' },
      { title: 'CategoryTitle', url: '/categories' }
    ]
  })
}
</script>
