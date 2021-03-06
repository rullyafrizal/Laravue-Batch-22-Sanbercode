(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Campaign.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Campaign.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Campaign",
  data: function data() {
    return {
      campaign: {} //objek campaign

    };
  },
  created: function created() {
    this.go();
  },
  methods: _objectSpread(_objectSpread(_objectSpread({
    go: function go() {
      var _this = this;

      var id = this.$route.params.id;
      var url = "/api/campaign/".concat(id);
      axios.get(url).then(function (response) {
        var data = response.data.data;
        _this.campaign = data.campaign;
      })["catch"](function (error) {
        var responses = error.responses;
        console.log(responses);
      });
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])({
    tambahTransaksi: 'transactions/insert'
  })), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    setAlert: 'alert/set'
  })), {}, {
    donate: function donate() {
      this.tambahTransaksi();
      this.setAlert({
        status: true,
        color: 'primary',
        text: 'Transaksi Ditambahkan'
      });
    },
    progress: function progress(campaign) {
      return Math.round(campaign.collected / campaign.required * 100);
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Campaign.vue?vue&type=template&id=5561fd2f&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Campaign.vue?vue&type=template&id=5561fd2f&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "v-card",
        {
          staticClass: "pa-2 my-1 rounded-xl",
          attrs: { elevation: "1", tile: "", outlined: "" }
        },
        [
          _c(
            "v-img",
            {
              staticClass: "white--text rounded-xl",
              attrs: { src: _vm.campaign.image, "max-height": "400px" },
              scopedSlots: _vm._u([
                {
                  key: "placeholder",
                  fn: function() {
                    return [
                      _c("v-skeleton-loader", { attrs: { type: "image" } })
                    ]
                  },
                  proxy: true
                }
              ])
            },
            [
              _c("v-card-title", {
                staticClass: "fill-height align-end",
                domProps: { textContent: _vm._s(_vm.campaign.title) }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("v-card-text", [
            _vm._v("\n            Description: "),
            _c("br"),
            _vm._v(" " + _vm._s(_vm.campaign.description) + "\n        ")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card",
        {
          staticClass: "pa-2 my-1 rounded-xl",
          attrs: { elevation: "2", "tile-outlined": "" }
        },
        [
          _c(
            "v-card-text",
            [
              _c("v-simple-table", [
                _c("thead", [
                  _c("tr", [
                    _c("th", { staticClass: "text-left" }, [
                      _c("h3", [_vm._v("Detail")])
                    ]),
                    _vm._v(" "),
                    _c("th")
                  ])
                ]),
                _vm._v(" "),
                _c("tbody", [
                  _c("tr", [
                    _c(
                      "td",
                      [
                        _c("v-icon", [_vm._v("mdi-home-city")]),
                        _vm._v(" Alamat")
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.campaign.address))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c(
                      "td",
                      [_c("v-icon", [_vm._v("mdi-phone")]), _vm._v(" Telepon")],
                      1
                    ),
                    _vm._v(" "),
                    _c("td", [_vm._v(_vm._s(_vm.campaign.phone))])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c(
                      "td",
                      [
                        _c("v-icon", [_vm._v("mdi-hand-heart")]),
                        _vm._v(" Terkumpul")
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("td", { staticClass: "blue--text" }, [
                      _vm._v(
                        _vm._s(
                          new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR"
                          }).format(_vm.campaign.collected)
                        )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c(
                      "td",
                      [
                        _c("v-icon", [_vm._v("mdi-cash")]),
                        _vm._v(" Dibutuhkan")
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("td", { staticClass: "orange--text" }, [
                      _vm._v(
                        _vm._s(
                          new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR"
                          }).format(_vm.campaign.required)
                        )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("tr", [
                    _c(
                      "td",
                      [
                        _c("v-icon", [_vm._v("mdi-progress-check")]),
                        _vm._v(" Progress")
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "td",
                      { staticClass: "orange--text" },
                      [
                        _c(
                          "v-progress-linear",
                          {
                            staticClass: "rounded-pill",
                            attrs: {
                              color: "indigo darken-4",
                              height: "15",
                              value: _vm.progress(_vm.campaign),
                              striped: ""
                            }
                          },
                          [
                            _c("strong", { staticClass: "white--text" }, [
                              _vm._v(_vm._s(_vm.progress(_vm.campaign)) + "%")
                            ])
                          ]
                        )
                      ],
                      1
                    )
                  ])
                ])
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-card-actions",
            [
              _c(
                "v-btn",
                {
                  staticClass: "rounded-pill",
                  attrs: {
                    block: "",
                    color: "primary",
                    disabled: _vm.campaign.collected >= _vm.campaign.required
                  },
                  on: { click: _vm.donate }
                },
                [
                  _c("v-icon", [_vm._v("mdi-money")]),
                  _vm._v("  \n                DONATE\n            ")
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Campaign.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Campaign.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Campaign_vue_vue_type_template_id_5561fd2f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Campaign.vue?vue&type=template&id=5561fd2f&scoped=true& */ "./resources/js/views/Campaign.vue?vue&type=template&id=5561fd2f&scoped=true&");
/* harmony import */ var _Campaign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Campaign.vue?vue&type=script&lang=js& */ "./resources/js/views/Campaign.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Campaign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Campaign_vue_vue_type_template_id_5561fd2f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Campaign_vue_vue_type_template_id_5561fd2f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5561fd2f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Campaign.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Campaign.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Campaign.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Campaign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Campaign.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Campaign.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Campaign_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Campaign.vue?vue&type=template&id=5561fd2f&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/Campaign.vue?vue&type=template&id=5561fd2f&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Campaign_vue_vue_type_template_id_5561fd2f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Campaign.vue?vue&type=template&id=5561fd2f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Campaign.vue?vue&type=template&id=5561fd2f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Campaign_vue_vue_type_template_id_5561fd2f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Campaign_vue_vue_type_template_id_5561fd2f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);