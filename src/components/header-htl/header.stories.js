import defaultTemplate from "./header.htl";
import customTemplate from "./header.htl?model=dropdown";
import Dropdown from "../dropdown/dropdown";

export default {
  title: "Header HTL"
};

export const standard = () => ({
  template: defaultTemplate,
  components: {
    Dropdown
  },
});

export const custom = () => ({
  template: customTemplate,
  components: {
    Dropdown
  },
});
