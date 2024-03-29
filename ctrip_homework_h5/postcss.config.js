export default {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 75, // 1rem 对应的像素值，这里设置为 16px
      propList: ["*"], // 需要转换的 CSS 属性，默认为 ['*']，即所有属性
    },
  },
};
