import createHeader from "./header.htl";

export default {
  title: "Header HTL"
};

export const standard = () => ({
  data() {
    return {
      source: "Loading"
    };
  },
  async created() {
    this.source = await createHeader({
      title: "Hi there!"
    });
  },
  template: `<div v-html="source" />`
});

export const custom = () => ({
  data() {
    return {
      source: "Loading"
    };
  },
  async created() {
    this.source = await createHeader({
      title: "Hi!"
    });
  },
  template: `<div v-html="source" />`
});
