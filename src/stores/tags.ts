import { defineStore } from "pinia";
interface ListItem {
  name: string;
  path: string;
  title: string;
}

export const useTagsStore = defineStore("tags", {
  state: () => {
    return {
      list: <ListItem[]>[],
    };
  },
  getters: {
    show: (state) => {
      return state.list.length > 0;
    },
    nameList: (state) => {
      return state.list.map((item) => item.name);
    },
  },
  actions: {
    //添加tag
    setTagsItem(data: ListItem) {
      this.list.push(data);
    },
    //删除tag
    delTagsItem(index: number) {
      //只有一个标签，不允许删除
      if (this.list.length === 1) {
        return;
      }
      this.list.splice(index, 1);
    },
  },
});
