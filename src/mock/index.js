import Mock from "mockjs";
// 使用 Mock
// Mock.mock (请求地址，请求方式，响应的数据)

//拦截/mock/banners请求，并返回相应的数据
var data = Mock.mock("/mock/banners", "get", {
  code: 200,
  data: [
    {
      id: "1",
      imgUrl: "/images/banner1.jpg",
    },
    {
      id: "2",
      imgUrl: "/images/banner2.jpg",
    },
    {
      id: "3",
      imgUrl: "/images/banner3.jpg",
    },
    {
      id: "4",
      imgUrl: "/images/banner4.jpg",
    },
  ],
});
// 输出结果
console.log(JSON.stringify(data, null, 4));
