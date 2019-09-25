const mocks = {
  default: {
    title: "Hi there!"
  },
  dropdown: {
    title: "Hi!",
    dropdown: {
      toggle: "Toggle",
      content: "Content"
    }
  }
};

module.exports = class Data {
  constructor() {
    this.model = "default";
  }

  use() {
    return mocks[this.model];
  }
};
