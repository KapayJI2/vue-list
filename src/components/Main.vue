<template>
  <div class="main__wrapper">
    <div class="left__list">
      <div v-for="(list, idx) in lists" :key="idx">
        <LeftList
          :listName="list.name"
          :listItems="items[idx]"
          :listChecked="list.checked"
          :listIndex="idx"
        />
      </div>
    </div>
    <div class="right__list">
      <div
        class="right__list--element--wrapper"
        v-for="(list, idx) in lists"
        :key="idx"
      >
        <RightList :listName="list.name" :listIndex="idx" :items="items[idx]" />
      </div>
    </div>
  </div>
</template>
<script>
import { computed, ref } from "vue";
import { useStore } from "vuex";
import LeftList from "@/components/LeftList";
import RightList from "@/components/RightList";
export default {
  components: {
    LeftList,
    RightList,
  },
  setup() {
    const store = useStore();
    const lists = computed(() => {
      return store.getters.getList;
    });
    const items = computed(() => {
      return store.getters.getItem;
    });

    return { lists, items };
  },
};
</script>
