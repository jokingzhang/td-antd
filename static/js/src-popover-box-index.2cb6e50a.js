(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./src/divisionBox/index.js":function(e,t,n){"use strict";var a=n("react"),o=n.n(a);t.a=function(e){return o.a.createElement("div",{className:"td-handleBox"},e.children)}},"./src/linkBtn/index.js":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),c=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),i=n("react"),l=n("./node_modules/classnames/index.js"),b=n.n(l),p=function(e){function t(){return Object(a.a)(this,t),Object(s.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.children;return i.createElement("button",Object.assign({type:"button"},this.props,{className:b()("td-linkBtn",t)}),n)}}]),t}(i.Component);p.defaultProps={className:""},"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LinkBtn",filename:"src/linkBtn/index.js"}}),"undefined"!==typeof p&&p&&p===Object(p)&&Object.isExtensible(p)&&Object.defineProperty(p,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"LinkBtn",filename:"src/linkBtn/index.js"}})},"./src/popoverBox/index.mdx":function(e,t,n){"use strict";n.r(t);var a=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),o=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),s=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),r=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),c=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),i=n("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),l=n("react"),b=n.n(l),p=n("./node_modules/@mdx-js/react/dist/esm.js"),d=n("./node_modules/docz/dist/index.esm.js"),m=(n("./node_modules/antd/es/popover/style/index.js"),n("./node_modules/antd/es/popover/index.js")),A=(n("./node_modules/antd/es/button/style/index.js"),n("./node_modules/antd/es/button/index.js")),g=function(e){function t(){var e,n;Object(a.a)(this,t);for(var o=arguments.length,c=new Array(o),i=0;i<o;i++)c[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(r.a)(t)).call.apply(e,[this].concat(c)))).state={visible:!1},n.show=function(e){n.setState({visible:!0},(function(){e&&e()}))},n.hide=function(e){n.setState({visible:!1},(function(){e&&e()}))},n.ok=function(){var e=n.props.onOk;e?e():n.hide()},n.cancel=function(){var e=n.props.onCancel;e?e():n.hide()},n.contentNode=function(){var e=n.props,t=e.content,a=e.okText,o=e.cancelText,s=e.okButtonProps,r=e.cancelButtonProps;return b.a.createElement(b.a.Fragment,null,b.a.createElement("div",{className:"td-popover-content"},t),b.a.createElement("div",{className:"td-popover-footer"},b.a.createElement(A.a,Object.assign({size:"small",onClick:n.cancel},r),o),b.a.createElement(A.a,Object.assign({size:"small",type:"primary",onClick:n.ok},s),a)))},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.children,n=this.state.visible;return b.a.createElement(m.a,Object.assign({},this.props,{visible:n,overlayClassName:"td-popover-box",content:this.contentNode(),onVisibleChange:function(t){e.setState({visible:t})},trigger:"click"}),t)}}]),t}(b.a.PureComponent);g.defaultProps={okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",okButtonProps:{},cancelButtonProps:{}},"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PopoverBox",filename:"src/popoverBox/index.js"}}),"undefined"!==typeof g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"PopoverBox",filename:"src/popoverBox/index.js"}});var j=n("./src/linkBtn/index.js"),O=n("./src/divisionBox/index.js");n.d(t,"default",(function(){return f}));var u={},B="wrapper";function f(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(p.b)(B,Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),Object(p.b)("h2",{id:"popoverbox"},"PopoverBox"),Object(p.b)("p",null,"\u57fa\u4e8e Popover \u7684\u4e8c\u6b21\u5c01\u88c5\u3002"),Object(p.b)(d.c,{__position:0,__code:'class Example extends React.Component {\n    handleClick() {\n      this.modalRef.show()\n    }\n    render() {\n      return (\n        <React.Fragment>\n          <DivisionBox>\n            <PopoverBox\n              title="title"\n              ref={r => {\n                this.modalRef = r\n              }}\n              content="\u8fd9\u91cc\u662f\u5185\u5bb9"\n              onOk={() => {\n                console.log(\'Ok\')\n              }}\n              onCancel={() => {\n                console.log(\'Cancel\')\n              }}\n            >\n              <LinkBtn onClick={() => this.handleClick()}>Show1</LinkBtn>\n            </PopoverBox>\n            <PopoverBox title="title" placement="right" content="\u8fd9\u91cc\u662f\u5185\u5bb9">\n              <LinkBtn>Show2</LinkBtn>\n            </PopoverBox>\n          </DivisionBox>\n        </React.Fragment>\n      )\n    }\n  }',__scope:{props:this?this.props:n,Playground:d.c,PopoverBox:g,LinkBtn:j.a,DivisionBox:O.a},__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkmXwldXfTl-nm8GTM6yay1C7Gw836dHI3XcyTgBAEoRSKVgdhGLzw4xsdgqwKwSxmsH83UytkR5lscFCMHW1FSuLe9UQAEozEZJGYIEQZpQBFMAEowVzkKZgIREdidcWS9oAbj5AqFooVBAAIgB5ACy7GlkTlXQlBAAtCciMrVYLhQ5IoLUPpDTK5ThJNhXALYDbUGYxWbdXqcF0MBkABTrZhsMTrCyMPAAZjEjjVzponDVwuy7BxEx6gKJVRBAkQUmTcfMFnYjBmYgjDSmUWSztzrnQLBi1Hi7BmQju40oqRgUxe7DDmH6qBSeZgCQ5Unr8draadLskVYT0ljijMJ16RH0ODSBAAorAjzQAEKJBroCOdYQEdpc1AcpUKZRen0wHCaMgdGoWh6EQFRsymYB2AABSgVxEhSIRQgwdh5FdY12gPAAvP1-TtKZoMoQVWAya9vHQ2V2g9OABHISRBWI0jvEkVRsFwiD2AAGTQbZrwIcwjUo6jaMkKAeL41B2Pw9gtTYWwBlQMifEE91JBouiZHk6glKk9V2EDSUKJNTV2jBVBdBRY5Tiw5wCESLF2G4dhgHWKIBGeVArnaAAGdgkxmLB2j3asZg7FgZy8gAWAL2AANgCoL1jAYCADFvWgRIvP4ZxDgRB1MBgoR-CWIhqEoOBQoRRLq2SmhnAgLDLnYABGSLgvkMyLKmABBOZHPYCMoPIGwoHQMNUI5RyxAG6MZHYFF7JgbhgGw2zFrgeQtxrYBhugMbggAMgO8ZEnmShml20bxu4G65TAZDJQU9p2AAfg2PawwjSarku_bUA66spBkKs3zMGE9MwMAwigKYvqmmbAd65dqwsYA4e4aaXJRmtyDguA7DPLBvTJbpsBA9A7AMggcDXagXSxmtGemDBYHsMSdjhhmmcZiZbBwUr0HiMUwBwOBhhGL6V0ZgHuYsSdI0mrnZYnUc-nMKNseVxgqZwFLMhSK8CC25XGcYWTWC0xTvGNk3TcIxiBCUqXbZrGICFgPgQDd2B-Gdl2VbAZajgx5y_f9_E-YFoWYGaJyBDD235Bl8PGd0ECCE9wBN-MAGcTAHozQBQxUATu1fc18PqB1bZlvRzGE5dizKFgHAoEoFJHwr19a-VpPO9l6h7HcBEoCryaQ6VlOceoOAG7_ZvW_afvzPnDvS_97uV5Nm2U8YbjUF4_i9lQNnYkrtGR-m3m4HwSpWfZ7Yvs25xxeaqQd731BN5dqR7coEjHetnu7ZER_kxLAACmbeyWvwCBJdx41jJBKGAhtPb9BSIQGBsDCx6BoFnPORd0Epw_v7be4l-JiEfqMAATC_Eh78wHbm_r_JShDZZSHNpbJhPcpA6z1q4A2-hmEWDfF3Z2ydGZdAIGrWshNiawHYJuFca9txIxBmYL8IB1L0SAYw5irENBaAoMBfQhhTCoCMOwQA8wrsCjlAdggAAOUAOwWgB_eUABSugAQt0ACg2gBDm0ACN-gA3uW5Owbq0EGhXCxmYiwlBtiWDJlcQAdh6ACztQAkMaADqU1xgBw00ABIWASLBxEXlAaJWACBXEAGvKgAI2xSekrJpiJ5YKKXKIK7BAB2toAIR1AC0cq4vB1SIm8XCBEVA0EBz3HYAkipgA9HUAOQG2TVh5OvL06gAyiJDLKWMyZXSD4VzifEwA0XL-LWX3Ae84SmlJ2QEgGZieRmTwnpKmRl5Rml0vaKCsybjUCWAwjIqFbnuAIOgB5UwqIsXDLgLEcA_RgywNJSG0Mpi438HYd5f8fBkzoBTfSmocDQT6DAWmGZILrBRNEWIxwY7QoWYOJyY9IkFLqe0BJ1VU4HPyTEuUZT6U1kic8vpZKhnACUCuXJg9OXzMGaEvl1Z5AqmrAS2g_Ux4W3yB4WAVwoZQDgDAYKFgJVmQsGLUY_UIzkA8GfUO2ML6i1HLZLIg1nbyogIqpqqIGQaprEoAaxqx4WEeNCOAYkaCWlsK4e15pnSFPNL6xkpdDXsCOj0DwX1JXSw_OsLV_pqw2AKk5A1Rr4Zjy9YAQitACABoAMQtSmAEZNFcZq1UEEtbQa1pdbX2uVfENVzrNVLGria7mXr4C-otCwCoQaQ0WnDc7KNMbDXxoUUm8VkqmS7Eze6_lk9ILrN2GhJyZr-yLITTWbtPq0B9oDYOsmYa0ARsZuXXYb1L1wyuGa9NMBJ0zu1dMwe-rF3Yy6s5A-C833rojpfLddwd2eskN63t_qB2wGDSekd2N9l5Nej-xlt6AP4C4I-6dmrZ3VjTvoAAcoCd9Oal2oEsh6zB6dW3sqiWTajOTGXUvo3sHpLz-mDOYwK-cQr2OLOo_-zdgycNiNVgIdWzttbop4XwmgzCYwcFhfjfD3pIFe3QOaBiwCBDmjwzQcQO1DE0HkEDWMYd5M9DxnAZTR5PY_I01ojI5pkoiFBCAARtYePzQaqpuAUQEj8B_bfZaZquNQDQsAHAkXQs8e5ZtHajGybGckDx9zjBPP5Eap7Xz8QoABbsvMT2_Z-SuAEIkALfcgvADNZE8LkWcAcrmbxu4cWqWJakClszO5ZASckNw_WhsbZYdQsJlW4YBCc1I-R96V1ggCYJDgIDcAQOYKmw22Rc2-bSpgCNuWonxOl0YAisOEXIuCcWaIpma2lrACuxdi9v84KJDZnC6zqm7Oad_uaao-Cma6YzlV-bf3COYHvmHagAA1eS9r7B-BnNdiMrB3VoarTWx9UErtXA4PISaijZaoggBiDIntcbHx-xYZhO0Rp_Tu7WSQCLBs7oBgDNRGjfVv0BWof8-igK1IYFc-0Zj_BorNLc00ipJX85hZZ17dgVLtEU3AVAKnQUS44gC3RTd4Aq7MuDe0ULQgwws3CriNDoSFJRZTdFOL6b4oIIS8gxKoYG4INy2V_Lpcqa8mylN6x5bjcVpNldCvXtLF-uNDbgGhMvt2xIsTCNuaMA8I1sO-XVNJ7Y2T7adWzvNbDsHlTy189HjgI-OzbOJINKLzADkNOKdh7oDTqQ6e-kM-TWYZnSh1EiU0vkbSOigVc8An9vnHEbly7Fy-VX0l1cD5BWCkNkKSXO4Gotj9MfJEa1NnNKvtn1Ow_QLAJ2bngCLY-FTsMSXgbrGnfIFnIkPsgI59gTX-Mh-GYMGBHA72HPaeqJ29giAmIlAHgvYY8OA3y9mDs5oaAzo2mf2_-jMoUnYBQVw3ky2ycTOZkX-6mD-cB7-_-SB4UKQVwzUFCAUkqAMZg2BkBWmTmz4HyXMhBKB7AAAHDFKQeQesLQKGvEATp5BOAToQDul4AIFOOaBEDMCQTFFPGJDkAAMQwAsGKGKEjbN7MhjxuQeRhoxx1IcFYCM7t6qKd6s40JP7Apa5v685gQAACkucoAAft8ugKJHampHZLAJIBMIgvANIEvjDC_trqmtQeXvvFzCATsIhG0BgFcKgHTMIUKFOKgTurVHUmgJsP0AQDuuGuaJsIIakagOkS8DukwRFOwGgesFQM3GWOwNYUVm5IkDpg3EKDur0AIFPNUYKAehkDuvsOGjEXES-gdIgP2oGrADkGPJUUKFcO5HGs1AAOzeRLDzGLEtQLFDY5J9DtH9EWg5ajDZAGH_R34aRyS95WxYBmEBGWHpwMDUH76H7kRcyuAIFWIlZaEoKEAkFkH6HR7RqIB4wWi_TPEWCaFoDmjvF1LlHYwYEvpqHmAaGvGgngmfGcGpqMxDH_E6ZU5AkvHuSIl5FJEKJt7_RGHKCVTbC8J_iaDUBXFGJgRcz8BK5Hj8BXD8A_DFjVCOY_gkzFTrD8C_ynHMnsD8DeQ4AineQ8nVj8DlDkD9AzDdj-hIBCkgDdRea_hm4yLdCYBkiUCJC5h5AFAqxmiNHlB_ClgSkWD8BRBoCCn8Aa6aDmlKlakorwgQDwCCljz8AT42lubcDNSxQ4BJiikOkWkgBOHekAB6gZFCzUQZIA1GrJlmjJbpip_A4ZFCOA6ZsUwZSpE-lokQ3pYgvp_pgZ4pIARJt-xhppuAugkAKQXO1J2gw-dJUCiC8CtAzJrJpotAYJmo5oswMw_AFZScQAA",mdxType:"Playground"},function(e){function t(){return Object(a.a)(this,t),Object(s.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(c.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(){this.modalRef.show()}},{key:"render",value:function(){var e=this;return Object(p.b)(b.a.Fragment,null,Object(p.b)(O.a,{mdxType:"DivisionBox"},Object(p.b)(g,{title:"title",ref:function(t){e.modalRef=t},content:"\u8fd9\u91cc\u662f\u5185\u5bb9",onOk:function(){console.log("Ok")},onCancel:function(){console.log("Cancel")},mdxType:"PopoverBox"},Object(p.b)(j.a,{onClick:function(){return e.handleClick()},mdxType:"LinkBtn"},"Show1")),Object(p.b)(g,{title:"title",placement:"right",content:"\u8fd9\u91cc\u662f\u5185\u5bb9",mdxType:"PopoverBox"},Object(p.b)(j.a,{mdxType:"LinkBtn"},"Show2"))))}}]),t}(b.a.Component)),Object(p.b)("h2",{id:"api"},"API"),Object(p.b)("p",null,"\u652f\u6301\u539f ",Object(p.b)("a",Object.assign({parentName:"p"},{href:"https://ant-design.gitee.io/components/popover-cn/"}),"Popover")," API"),Object(p.b)("table",null,Object(p.b)("thead",{parentName:"table"},Object(p.b)("tr",{parentName:"thead"},Object(p.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"\u53c2\u6570"),Object(p.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"),Object(p.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(p.b)("th",Object.assign({parentName:"tr"},{align:"left"}),"\u9ed8\u8ba4\u503c"))),Object(p.b)("tbody",{parentName:"table"},Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"show(callback)"),Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"\u6d6e\u5c42\u663e\u793a\u7684\u51fd\u6570"),Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"function"),Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}))),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"hide(callback)"),Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"\u6d6e\u5c42\u9690\u85cf\u7684\u51fd\u6570"),Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"function"),Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}))),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"onOk"),Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"\u70b9\u51fb\u786e\u8ba4\u6309\u94ae\u7684\u56de\u8c03\u51fd\u6570"),Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"function"),Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}))),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"onCancel"),Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"\u70b9\u51fb\u53d6\u6d88\u6309\u94ae\u7684\u56de\u8c03\u51fd\u6570"),Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"function"),Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}))),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"okText"),Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"\u786e\u8ba4\u6309\u94ae\u7684\u6587\u6848"),Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"string"),Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"\u786e\u5b9a")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"cancelText"),Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"\u53d6\u6d88\u6309\u94ae\u7684\u6587\u6848"),Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"string"),Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"\u53d6\u6d88")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"okButtonProps"),Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"\u786e\u5b9a\u6309\u94ae\u7684\u5c5e\u6027"),Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"object"),Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"{}")),Object(p.b)("tr",{parentName:"tbody"},Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"cancelButtonProps"),Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"\u53d6\u6d88\u6309\u94ae\u7684\u5c5e\u6027"),Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"object"),Object(p.b)("td",Object.assign({parentName:"tr"},{align:"left"}),"{}")))))}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"src/popoverBox/index.mdx"}}),f.isMDXComponent=!0}}]);