(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"./src/toast/index.mdx":function(e,t,n){"use strict";n.r(t);n("./node_modules/antd/es/col/style/index.js");var a=n("./node_modules/antd/es/col/index.js"),s=(n("./node_modules/antd/es/row/style/index.js"),n("./node_modules/antd/es/row/index.js")),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),b=(n("react"),n("./node_modules/@mdx-js/react/dist/esm.js")),c=n("./node_modules/docz/dist/index.esm.js"),i=(n("./node_modules/antd/dist/antd.css"),n("./node_modules/antd/es/message/index.js"));n("./node_modules/antd/es/message/style/index.js");function l(e){var t=e.type,n=void 0===t?"success":t,a=e.text,s=void 0===a?"":a,o=e.time,b=void 0===o?3:o,c=e.cb,l=void 0===c?function(){}:c,d=i.a[n](s,b);return l(d),d}i.a.config({maxCount:1}),l&&l===Object(l)&&Object.isExtensible(l)&&Object.defineProperty(l,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"toast",filename:"src/toast/index.js"}}),n.d(t,"default",(function(){return g}));var d={},r="wrapper";function g(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(b.b)(r,Object.assign({},d,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"toast"},"toast"),Object(b.b)("p",null,"\u57fa\u4e8e message \u7684\u4e8c\u6b21\u5c01\u88c5"),Object(b.b)(c.c,{__position:0,__code:"<Row>\n  <Col span={6}>\n    <button\n      onClick={() => {\n        toast({ text: 'success' })\n      }}\n    >\n      success\n    </button>\n  </Col>\n  <Col span={6}>\n    <button\n      onClick={() => {\n        toast({\n          type: 'error',\n          text: 'error',\n        })\n      }}\n    >\n      error\n    </button>\n  </Col>\n  <Col span={6}>\n    <button\n      onClick={() => {\n        toast({\n          type: 'loading',\n          text: 'loading',\n          time: 2,\n        }).then(() => {\n          toast({ text: 'success' })\n        })\n      }}\n    >\n      loading.then\n    </button>\n  </Col>\n  <Col span={6}>\n    <button\n      onClick={() => {\n        toast({\n          type: 'loading',\n          text: 'loading',\n          time: 0,\n          cb: hide => {\n            setTimeout(hide, 2000)\n          },\n        })\n      }}\n    >\n      loading.cb\n    </button>\n  </Col>\n</Row>",__scope:{props:this?this.props:n,Playground:c.c,Row:s.a,Col:a.a,toast:l},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtSD2BFUYlkcKBUPQ2V2ncAh0FwiC5Wo9AdxRSRGI-OA4Do_Ch38KU3XaD04AEchJAiXjJFUbAuPVQjNQok1NXaMFUF0FFjlOLDnAIRIsXYbh2GAdYogEZ5UCudoAAZ2CTGYsHaPdqxmDsWBncyABZbPYAA2Wz7PWMBgIAMW9aBEnM_hnEOBEHUwGChH4JYiGoSg4CchE_OrAKaGcCAsMudgAEY3Ic-RlNUqYAEE5j09gIyg8gbCgdAw1Qjk9LEWroxkdgUR0mBuGAbCtL6uB5C3GtgAa6BmuCAAyWbxkSeZKGaKampa7hNrlMBkMlAZUHadgAH4NmmsMIzaq41pm1BSurKQZCrN8zBhGTMDAMIoCmC72s6-6quXasE0DSUcECzIUivAhxprWsiJGGHYdXSgyNS9wBq8saVyR2sPHCCJ_SBnGa2oewoFibYBp-7gOsMoniZrMSUTq8ZsAIcz6XIBEOMO-Q3wZ2H5DugX2ERhnOe5uBsaRqQ8ZuagxZrKRSMVhNSJ6pzUAxrH6ZluWCelnHSfJnYqbammDMN4mmYIOqrYZ7T5nMjIhAEDKRZx2gsHZuUXaFd2PYsPn7ZrIWQ9VpG_YEEPZfxhWreVlGI8YdW0a14BMYjhN9eoEOLGNimzd-unA4sG27d1kXHfy9ooEoDsCgD0vWe98y64bmcm9LmIjyuAAmBzm75nAJjoCNqdpvOkfLqCvZ99oJfgTjWqnoP-Y9sPK5rLOa3blyUhHzZCZF2P5dQZPJBVhPU817Wd8YHPj49gvTeACfLa3z36-Zkvm8Wp25R70boPP-c827133l3QOPd8oWRAc3cgHgrg2FihbX-f8eqjksPyGA-wIwoJgEsPuFkSHryHvAjeZCBabxFjvCwQCZwfA8DHSQj8L5X11lIeGiMuGajBhDKG40pAAyemYL8IAhIiRthJcMGgtAUGAvoBgeEZJHg4q4NI8kqI0CYvASQaiKhpGkvabRNFPRwH0UvDRMBJC9V9CqQmBjrEfGoJAFIdUohYEcMhH2BU-YOJelgbi71PpSl2t2cw5d-yUDuG1X-5UP6w2rjVBeoQuZLy7nPFJmScE1STBQxBNV37ACUOsNC-lol3AcRYBJBCapOLSAAbWrgAXQjHPJYMCPzrEQfgrgMBunVi6AQPo5gCEOPkOItK2xnGaGoIBXQIEDBgV_vwVA3pGRIHYPwH4xZqgZHND-MkmyQH8FYBkfIuctn8AsjgW5FkErrH4OUcg_QZgRP4FcfgFUep4VgNCLA3pjnHBgGSSgiRcx5AKBOTU5pdl_FLI86s_AohoE-dslQsj_xSxAKckAmB5jhhUhAeA6L0EYsYui_gAA9JMOA-4FTuUi2G_BTSSipSAMQ3ACpeRwHSh5uKVysthVaDlXKeV8qZSAMpZhJlKAkQi3Aug3HYvmdoRZSiVn8FoD6LInydmmloOaNlFpZgzH4HKoWQA",mdxType:"Playground"},Object(b.b)(s.a,{mdxType:"Row"},Object(b.b)(a.a,{span:6,mdxType:"Col"},Object(b.b)("button",{onClick:function(){l({text:"success"})}},"success")),Object(b.b)(a.a,{span:6,mdxType:"Col"},Object(b.b)("button",{onClick:function(){l({type:"error",text:"error"})}},"error")),Object(b.b)(a.a,{span:6,mdxType:"Col"},Object(b.b)("button",{onClick:function(){l({type:"loading",text:"loading",time:2}).then((function(){l({text:"success"})}))}},"loading.then")),Object(b.b)(a.a,{span:6,mdxType:"Col"},Object(b.b)("button",{onClick:function(){l({type:"loading",text:"loading",time:0,cb:function(e){setTimeout(e,2e3)}})}},"loading.cb")))),Object(b.b)("h2",{id:"api"},"API"),Object(b.b)("p",null,"\u539f ",Object(b.b)("a",Object.assign({parentName:"p"},{href:"https://ant-design.gitee.io/components/message-cn/"}),"message")," API"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(b.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"\u9ed8\u8ba4\u503c"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"type"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"\u63d0\u793a\u7c7b\u578b"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"string"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"success")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"text"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"\u63d0\u793a\u5185\u5bb9"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"string"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"''")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"time"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"\u81ea\u52a8\u5173\u95ed\u7684\u5ef6\u65f6\uff0c\u5355\u4f4d\u79d2\u3002\u8bbe\u4e3a 0 \u65f6\u4e0d\u81ea\u52a8\u5173\u95ed\u3002"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"number"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"3")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"cb"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"\u56de\u8c03\u51fd\u6570"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"function(hide)"),Object(b.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"-")))),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5728 message.config \u4e2d maxCount \u81ea\u52a8\u8bbe\u7f6e\u4e3a\u4e86 1\u3002\u5982\u679c\u9700\u8981\u4e0d\u540c\u7684\u914d\u7f6e\uff0c\u8bf7\u81ea\u884c\u8bbe\u7f6e\u3002",Object(b.b)("a",Object.assign({parentName:"p"},{href:"https://ant-design.gitee.io/components/message-cn/#message.config"}),"\u914d\u7f6e"))))}g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/toast/index.mdx"}}),g.isMDXComponent=!0}}]);