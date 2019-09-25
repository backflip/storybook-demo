import Dropdown from "./dropdown.vue";

export default {
  title: "Dropdown Vue"
};

export const standard = () => ({
  components: {
    Dropdown
  },
  template: `<dropdown inline-template>
    <div>
      <button type="button" @click="toggle">Toggle</button>
      <div v-show="expanded">Content</div>
    </div>
  </dropdown>`
});
