import Header from "./header.vue";

export default {
  title: "Header Vue"
};

export const standard = () => ({
  components: {
    component: Header
  },
  data() {
    return {
      title: "Hi there!"
    };
  },
  template: `<component :title="title" />`
});

export const custom = () => ({
  components: {
    component: Header
  },
  data() {
    return {
      title: "Hi!"
    };
  },
  template: `<component :title="title" />`
});
