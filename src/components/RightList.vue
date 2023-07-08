<template>
  <div class="items__list--wrapper">
    {{ listName }}
    <div class="items__list__hidden">
      <div v-for="item in items" :key="item.id">
        <div v-if="item.checked" class="items__list__details">
          <div v-for="(n, idx) in item.count" :key="idx">
            <img
              class="right__list__img"
              src=""
              alt=""
              width="15"
              height="15"
              :style="{ 'background-color': item.color }"
              @click="handleSliceItem(listIndex, item.id, item.count)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useStore } from "vuex";
export default {
  props: {
    listName: {
      type: String,
    },
    listIndex: {
      type: Number,
    },
    items: {
      type: Array,
    },
  },
  setup(props) {
    const store = useStore();
    const handleSliceItem = (idx, id, count) => {
      if (count >= 2) {
        store.dispatch("sliceElement", [idx, id]);
      }
    };
    return { handleSliceItem };
  },
};
</script>
