(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CampaignItem.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CampaignItem.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "campaign-item",
  props: ['campaign'],
  data: function data() {
    return {
      isActive: false,
      overlay: false
    };
  },
  computed: {
    progress: function progress() {
      return Math.round(this.campaign.collected / this.campaign.required * 100);
    },
    titleLimit: function titleLimit() {
      if (this.campaign.title.length > 33) {
        return this.campaign.title.substring(0, 33) + '...';
      } else {
        return this.campaign.title;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CampaignItem.vue?vue&type=template&id=7c3482ae&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/CampaignItem.vue?vue&type=template&id=7c3482ae&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c("v-hover", {
    scopedSlots: _vm._u([
      {
        key: "default",
        fn: function(ref) {
          var hover = ref.hover
          return [
            _c(
              "v-card",
              {
                staticClass: "pa-3 mb-4 mr-5 rounded-lg",
                staticStyle: { "text-decoration": "none" },
                attrs: {
                  to: "/campaign/" + _vm.campaign.id,
                  elevation: hover ? 12 : 2,
                  "max-width": "372"
                }
              },
              [
                _c(
                  "v-img",
                  {
                    staticClass: "rounded-lg",
                    attrs: { src: _vm.campaign.image, "max-height": "200px" },
                    scopedSlots: _vm._u(
                      [
                        {
                          key: "placeholder",
                          fn: function() {
                            return [
                              _c("v-skeleton-loader", {
                                attrs: { type: "image" }
                              })
                            ]
                          },
                          proxy: true
                        }
                      ],
                      null,
                      true
                    )
                  },
                  [
                    _vm.progress >= 100
                      ? _c("v-overlay", { attrs: { absolute: "" } }, [
                          _c("h4", [_vm._v("Donasi Terpenuhi")])
                        ])
                      : _vm._e()
                  ],
                  1
                ),
                _vm._v(" "),
                _c("v-card-title", { staticClass: "subtitle-1" }, [
                  _c("strong", [_vm._v(_vm._s(_vm.titleLimit))])
                ]),
                _vm._v(" "),
                _c(
                  "v-progress-linear",
                  {
                    staticClass: "rounded-pill",
                    attrs: {
                      color: "indigo darken-4",
                      height: "15",
                      value: _vm.progress,
                      striped: ""
                    }
                  },
                  [
                    _c("strong", { staticClass: "white--text" }, [
                      _vm._v(_vm._s(_vm.progress) + "%")
                    ])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "v-card-text",
                  [
                    _c("v-icon", [_vm._v("mdi-cash")]),
                    _vm._v("  \n            "),
                    _c("b", [
                      _vm._v(
                        "Rp" +
                          _vm._s(_vm.campaign.required.toLocaleString("id-ID"))
                      )
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ]
        }
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/CampaignItem.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/CampaignItem.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CampaignItem_vue_vue_type_template_id_7c3482ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CampaignItem.vue?vue&type=template&id=7c3482ae&scoped=true& */ "./resources/js/components/CampaignItem.vue?vue&type=template&id=7c3482ae&scoped=true&");
/* harmony import */ var _CampaignItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CampaignItem.vue?vue&type=script&lang=js& */ "./resources/js/components/CampaignItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _CampaignItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CampaignItem_vue_vue_type_template_id_7c3482ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CampaignItem_vue_vue_type_template_id_7c3482ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7c3482ae",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/CampaignItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/CampaignItem.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/CampaignItem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./CampaignItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CampaignItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/CampaignItem.vue?vue&type=template&id=7c3482ae&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/CampaignItem.vue?vue&type=template&id=7c3482ae&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignItem_vue_vue_type_template_id_7c3482ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./CampaignItem.vue?vue&type=template&id=7c3482ae&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/CampaignItem.vue?vue&type=template&id=7c3482ae&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignItem_vue_vue_type_template_id_7c3482ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CampaignItem_vue_vue_type_template_id_7c3482ae_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);