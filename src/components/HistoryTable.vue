<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>{{'Sum'|localize}}</th>
          <th>{{'HomeCurrency_Date'|localize}}</th>
          <th>{{'Category'|localize}}</th>
          <th>{{'Type'|localize}}</th>
          <th>{{'Open'|localize}}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(record, idx) of records"
          :key="record.id"
        >
          <td>{{idx + 1}}</td>
          <td>{{record.amount | currency('RUB')}}</td>
          <td>{{record.date | datefilter('datetime')}}</td>
          <td>{{record.categoryName}}</td>
          <td>
            <span
              class="white-text badge"
              :class="[record.typeClass]"
            >{{record.typeText}}</span>
          </td>
          <td>
            <button
              data-position="left"
              v-tooltip="`RecordDetails`"
              class="btn-small btn"
              @click="$router.push('/detailRecord/' + record.id)"
            >
              <i class="material-icons">open_in_new</i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    records: {
      required: true,
      type: Array
    }
  }
}
</script>
