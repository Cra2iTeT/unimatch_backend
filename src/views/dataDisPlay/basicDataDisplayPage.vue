<template>
  <a-row>
    <a-statistic title="上周新增用户" :value="lastWeek.newUserNum" style="margin-right: 50px"/>
    <a-statistic title="总用户数" :value="totalData.totalUserNum" style="margin-right: 50px"/>
    <a-statistic title="上周新增群聊" :value="lastWeek.newGroupNum" style="margin-right: 50px"/>
    <a-statistic title="总群聊数" :value="totalData.totalGroupNum" style="margin-right: 50px"/>
  </a-row>
  <a-row>
    上周每天用户活跃数
    用户活跃时间段
  </a-row>
  <a-row>
    累计用户活跃数变化折线
  </a-row>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "basicDataDisplayPage",
  components: {},
  data() {
    return {
      lastWeek: {
        newUserNum: 112893,
        newGroupNum: 1234,
        activeUser:{

        }
      },
      totalData: {
        totalUserNum: 200000,
        totalGroupNum: 1234,
      },
    }
  },
  setup() {
  }
})

</script>

<style>

</style>