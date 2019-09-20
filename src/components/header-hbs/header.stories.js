import header from "./header.hbs";

export default {
  title: "Header HBS"
};

export const standard = () => 
  header({
    title: "Hi there!"
  });

export const custom = () =>
  header({
    title: "Hi!"
  });
