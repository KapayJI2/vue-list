<template>
  <div class="left-list__wrapper">
    <ul>
      <li>
        <span
          class="left__list--block--element--expander"
          :class="{ isExpanded: isExpanded }"
          @click="handleExpandList"
        ></span>
        <input
          type="checkbox"
          name=""
          :id="listName"
          :checked="listChecked"
          @change="storeListChecked(listIndex, listName)"
        />
        <span
          :class="{
            'left-list__checkbox--visible':
              listItems.findIndex((item) => item.checked === true) !== -1 &&
              !listChecked,
          }"
          class="left-list__checkbox"
          >&#8226;</span
        >
        {{ listName }}
        <ul
          v-for="item in listItems"
          :key="item.id"
          class="items__list"
          :class="{ 'items__list--visible': isExpanded }"
        >
          <li class="left-list__item">
            <input
              type="checkbox"
              name=""
              :id="listName + '' + item.name"
              :checked="item.checked"
              @change="
                storeItemChecked(listIndex, item.id, listName + '' + item.name)
              "
            />{{ item.name }}
            <span class="item__custom">
              {{ item.count }}
            </span>
            <span>
              <input
                type="number"
                name=""
                :id="'number' + listName + '' + item.name"
                min="1"
                max="40"
                :value="item.count"
                @change="
                  handleChangeCountItem(
                    listIndex,
                    item.id,
                    'number' + listName + '' + item.name
                  )
                "
              />
              <input
                type="color"
                name=""
                :id="listName + '' + item.name + item.id"
                :value="item.color"
                @change="
                  storeChangeColor(
                    listIndex,
                    item.id,
                    listName + '' + item.name + item.id
                  )
                "
                class="item__custom--color"
              />
            </span>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
<script>
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  props: {
    listName: {
      type: String,
    },
    listItems: {
      type: Array,
    },
    listIndex: {
      type: Number,
    },
    listChecked: {
      type: Boolean,
    },
  },
  setup(props, { emit }) {
    const store = useStore();
    const isExpanded = ref(false);
    const isAnyItemSelected = computed(() => {
      props.listItems.findIndex((item) => item.checked === true) !== -1;
    });
    const handleExpandList = () => {
      isExpanded.value = !isExpanded.value;
    };
    const storeChangeColor = (listIndex, itemId, itemName) => {
      let color = document.getElementById(itemName).value;
      store.dispatch("changeColor", [listIndex, itemId, color]);
    };
    const storeListChecked = (idx, name) => {
      let checked = document.getElementById(name).checked;
      store.dispatch("changeCheckedList", [idx, name, checked]);
    };
    const storeItemChecked = (idx, id, name) => {
      let itemChecked = document.getElementById(name).checked;
      store.dispatch("changeCheckedItem", [idx, id, itemChecked]);
    };
    const handleChangeCountItem = (idx, id, name) => {
      let itemCount = document.getElementById(name).value;
      store.dispatch("changeCountItem", [idx, id, itemCount]);
    };
    return {
      isExpanded,
      handleExpandList,
      storeChangeColor,
      storeListChecked,
      storeItemChecked,
      isAnyItemSelected,
      handleChangeCountItem,
    };
  },
};
</script>
