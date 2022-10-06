/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\axios\\index.js'");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Footer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Footer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Footer'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Header.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Header.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Header',
  data: function data() {
    return {
      menuLinks: [{
        name: 'homepage',
        label: 'Homepage'
      } // {
      //     name: 'advanced-search',
      //     label: 'Cerca'
      // },
      ]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AdvancedSearch.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/AdvancedSearch.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import Profiles from '../components/Profiles.vue';
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AdvancedSearch',
  // components: {
  //     Profiles
  // },
  data: function data() {
    return {
      users: []
    };
  },
  methods: {
    getUsersBySpecialization: function getUsersBySpecialization(pageNumber) {
      var _this = this;

      axios.get('/api/users-by-specialization/' + this.$route.params.specialization_slug, {
        params: {
          page: pageNumber
        }
      }).then(function (response) {
        _this.users = response.data.results; // this.currentPage = response.data.results.current_page;
        // this.lastPage = response.data.results.last_page;
      });
    },
    getUsersBySpecAndAvgVote: function getUsersBySpecAndAvgVote(pageNumber, filter_avg_vote) {
      var _this2 = this;

      console.log(filter_avg_vote);
      console.log(this.$route.params.specialization_slug);
      axios.get('/api/users-by-specialization-and-average-vote/' + this.$route.params.specialization_slug + '/' + filter_avg_vote, {
        params: {
          page: pageNumber
        }
      }).then(function (response) {
        console.log(response);
        _this2.users = response.data.results; // this.currentPage = response.data.results.current_page;
        // this.lastPage = response.data.results.last_page;
      });
    },
    getUsersBySpecAndCountRev: function getUsersBySpecAndCountRev(pageNumber, reviews_min, reviews_max) {
      var _this3 = this;

      console.log(reviews_min, reviews_max);
      console.log(this.$route.params.specialization_slug);
      axios.get('/api/users-by-specialization-and-count-reviews/' + this.$route.params.specialization_slug + '/' + reviews_min + '/' + reviews_max, {
        params: {
          page: pageNumber
        }
      }).then(function (response) {
        console.log(response);
        _this3.users = response.data.results; // this.currentPage = response.data.results.current_page;
        // this.lastPage = response.data.results.last_page;
      });
    },
    truncateText: function truncateText(text) {
      if (text.length > 100) {
        return text.slice(0, 100) + '...';
      }

      return text;
    }
  },
  mounted: function mounted() {
    // setTimeout(function(){ this.getUsersBySpecialization(this.$route.params.specialization_slug, 1) }, 500);
    this.getUsersBySpecialization(1);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/HomePage.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/HomePage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Footer_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Footer.vue */ "./resources/js/components/Footer.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'HomePage',
  components: {
    Footer: _components_Footer_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      pageTitle: 'Risultato ricerca',
      users: [],
      specializations: []
    };
  },
  methods: {
    getSponsoredUsers: function getSponsoredUsers() {
      var _this = this;

      axios.get('/api/sponsored-users', {}).then(function (response) {
        _this.users = response.data.results.users;
        _this.specializations = response.data.results.specializations;
      });
    }
  },
  mounted: function mounted() {
    this.getSponsoredUsers();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SingleProfile.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/SingleProfile.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SingleProfile',
  data: function data() {
    return {
      user: {},
      authorMessage: '',
      userEmail: '',
      contentMessage: '',
      authorReview: '',
      contentReview: '',
      voteReview: 1,
      success_message: false,
      success_review: false,
      errors: {},
      sending: false
    };
  },
  methods: {
    getSingleProfile: function getSingleProfile() {
      var _this = this;

      axios.get('/api/users/' + this.$route.params.user_slug).then(function (response) {
        _this.user = response.data.results;
      });
    },
    sendMessage: function sendMessage() {
      var _this2 = this;

      this.sending = true;
      axios.post('/api/messages', {
        author: this.authorMessage,
        email: this.userEmail,
        content: this.contentMessage,
        user_id: this.user.id
      }).then(function (response) {
        _this2.scrollTopPage();

        if (response.data.success) {
          _this2.success_message = true;
          _this2.authorMessage = '';
          _this2.userEmail = '';
          _this2.contentMessage = '';
          _this2.errors = {};
        } else {
          _this2.errors = response.data.errors;
        }

        _this2.sending = false;
      });
    },
    sendReview: function sendReview() {
      var _this3 = this;

      this.sending = true;
      axios.post('/api/reviews', {
        author: this.authorReview,
        content: this.contentReview,
        vote: this.voteReview,
        user_id: this.user.id
      }).then(function (response) {
        _this3.scrollToReview();

        if (response.data.success) {
          _this3.success_review = true;
          _this3.authorReview = '';
          _this3.contentReview = '';
          _this3.voteReview = 1;
          _this3.errors = {};
        } else {
          _this3.errors = response.data.errors;
        }

        _this3.sending = false;
      });
    },
    scrollTopPage: function scrollTopPage() {
      window.scrollTo(0, 0);
    },
    scrollToReview: function scrollToReview() {
      window.scrollTo(0, 628);
    } // transformVote() {
    //     return Math.round((this.reviews.vote * 5) / 10);
    // },
    // getStarsStyle(starNumber) {
    //     if(starNumber <= this.transformVote()) {
    //         return 'fa-solid fa-star';
    //     } else {
    //         return 'fa-regular fa-star'
    //     }
    // }

  },
  mounted: function mounted() {
    this.getSingleProfile();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/App.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Header_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Header.vue */ "./resources/js/components/Header.vue");
 // import Footer from '../components/Footer.vue';

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'App',
  components: {
    Header: _components_Header_vue__WEBPACK_IMPORTED_MODULE_0__["default"] // Footer

  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Footer.vue?vue&type=template&id=61a7c374&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Footer.vue?vue&type=template&id=61a7c374&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm._m(0);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("footer", {
    staticClass: "bg-info text-light py-3"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row align-items-center"
  }, [_c("div", {
    staticClass: "col-3"
  }, [_c("div", [_vm._v("\n                    via giulio cesare\n                ")]), _vm._v(" "), _c("div", [_vm._v("\n                    3693583475\n                ")]), _vm._v(" "), _c("div", [_vm._v("\n                    0823 657894\n                ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-9"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_c("ul", {
    staticClass: "list-unstyled"
  }, [_c("li", [_c("a", {
    staticClass: "link-light text-light border-bottom-0",
    attrs: {
      href: "#"
    }
  }, [_vm._v("specializzazioni")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "link-light text-light border-bottom-0",
    attrs: {
      href: "#"
    }
  }, [_vm._v("chi siamo")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "link-light text-light border-bottom-0",
    attrs: {
      href: "#"
    }
  }, [_vm._v("contatti")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "link-light text-light border-bottom-0",
    attrs: {
      href: "#"
    }
  }, [_vm._v("privacy e condizioni")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("ul", {
    staticClass: "list-unstyled"
  }, [_c("li", [_c("a", {
    staticClass: "link-light text-light border-bottom-0",
    attrs: {
      href: "#"
    }
  }, [_vm._v("specializzazioni")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "link-light text-light border-bottom-0",
    attrs: {
      href: "#"
    }
  }, [_vm._v("chi siamo")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "link-light text-light border-bottom-0",
    attrs: {
      href: "#"
    }
  }, [_vm._v("contatti")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "link-light text-light border-bottom-0",
    attrs: {
      href: "#"
    }
  }, [_vm._v("privacy e condizioni")])])])]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_c("ul", {
    staticClass: "list-unstyled"
  }, [_c("li", [_c("a", {
    staticClass: "link-light text-light border-bottom-0",
    attrs: {
      href: "#"
    }
  }, [_vm._v("specializzazioni")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "link-light text-light border-bottom-0",
    attrs: {
      href: "#"
    }
  }, [_vm._v("chi siamo")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "link-light text-light border-bottom-0",
    attrs: {
      href: "#"
    }
  }, [_vm._v("contatti")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "link-light text-light border-bottom-0",
    attrs: {
      href: "#"
    }
  }, [_vm._v("privacy e condizioni")])])])])])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Header.vue?vue&type=template&id=1f42fb90&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Header.vue?vue&type=template&id=1f42fb90& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("header", [_c("nav", {
    staticClass: "navbar navbar-expand-lg navbar-light bg-light"
  }, [_c("div", {
    staticClass: "container-fluid"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "collapse navbar-collapse d-flex justify-content-between",
    attrs: {
      id: "navbarNavAltMarkup"
    }
  }, [_c("div", {
    staticClass: "d-flex"
  }, _vm._l(_vm.menuLinks, function (link, index) {
    return _c("div", {
      key: index,
      staticClass: "navbar-nav"
    }, [_c("router-link", {
      staticClass: "nav-link",
      attrs: {
        to: {
          name: link.name
        }
      }
    }, [_vm._v(_vm._s(link.label))])], 1);
  }), 0), _vm._v(" "), _vm._m(1)])])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("button", {
    staticClass: "navbar-toggler",
    attrs: {
      type: "button",
      "data-bs-toggle": "collapse",
      "data-bs-target": "#navbarNavAltMarkup",
      "aria-controls": "navbarNavAltMarkup",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }
  }, [_c("span", {
    staticClass: "navbar-toggler-icon"
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "navbar-nav"
  }, [_c("ul", {
    staticClass: "list-unstyled d-flex"
  }, [_c("li", {
    staticClass: "p-3"
  }, [_c("a", {
    attrs: {
      href: "/login"
    }
  }, [_vm._v("Accedi")])]), _vm._v(" "), _c("li", {
    staticClass: "p-3"
  }, [_c("a", {
    attrs: {
      href: "/register"
    }
  }, [_vm._v("Registrati")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AdvancedSearch.vue?vue&type=template&id=0312e533&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/AdvancedSearch.vue?vue&type=template&id=0312e533&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-2"
  }, [_c("div", {
    staticClass: "average"
  }, [_vm._m(0), _vm._v(" "), _vm._l(5, function (number, index) {
    return _c("div", {
      key: "B" + index
    }, [_c("div", {
      staticClass: "hover-effect",
      staticStyle: {
        cursor: "pointer"
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          return _vm.getUsersBySpecAndAvgVote(1, number);
        }
      }
    }, [_vm._v("\n                        Media Voto: " + _vm._s(number) + " e più\n                    ")])]);
  }), _vm._v(" "), _c("div", {
    staticClass: "mt-3"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "hover-effect",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.getUsersBySpecAndCountRev(1, 0, 5);
      }
    }
  }, [_vm._v("\n                        Fino a 5 recensioni\n                    ")]), _vm._v(" "), _c("div", {
    staticClass: "hover-effect",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.getUsersBySpecAndCountRev(1, 5, 10);
      }
    }
  }, [_vm._v("\n                        da 5 a 10 recensioni\n                    ")]), _vm._v(" "), _c("div", {
    staticClass: "hover-effect",
    staticStyle: {
      cursor: "pointer"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.getUsersBySpecAndCountRev(1, 10, 1000);
      }
    }
  }, [_vm._v("\n                        10 recensioni e più\n                    ")])])], 2)]), _vm._v(" "), _c("div", {
    staticClass: "col-10"
  }, [_c("div", {
    staticClass: "d-flex flex-wrap justify-content-between"
  }, _vm._l(_vm.users, function (user, index) {
    return _c("div", {
      key: "A" + index
    }, [_c("div", {
      staticClass: "card mb-5",
      staticStyle: {
        width: "18rem"
      }
    }, [_c("img", {
      staticClass: "card-img-top",
      attrs: {
        src: user.photo,
        alt: "..."
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "card-body"
    }, [_c("h5", {
      staticClass: "card-title"
    }, [_vm._v(_vm._s(user.name))]), _vm._v(" "), _c("h6", {
      staticClass: "card-text badge bg-info text-dark mr-1"
    }, [_vm._v(_vm._s(user.specialization_slug))]), _vm._v(" "), _c("div", {
      staticClass: "mb-1"
    }, [_c("strong", [_vm._v(_vm._s(user.email))])]), _vm._v(" "), _c("div", [_vm._v("Voto: " + _vm._s(user.reviews_avg_vote))]), _vm._v(" "), _c("div", [_vm._v("Numero di recensioni: " + _vm._s(user.reviews_count))]), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.truncateText(user.curriculum)))]), _vm._v(" "), _c("router-link", {
      staticClass: "btn btn-primary",
      attrs: {
        to: {
          name: "single-profile",
          params: {
            user_slug: user.slug
          }
        }
      }
    }, [_vm._v("\n                                Scopri di più\n                            ")])], 1)])]);
  }), 0)])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "mb-2"
  }, [_c("strong", {
    staticClass: "bg-info"
  }, [_vm._v("Scegli un medico in base "), _c("br"), _vm._v(" a i voti che ha ricevuto")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "mb-2"
  }, [_c("strong", {
    staticClass: "bg-info"
  }, [_vm._v("Filtra per numero "), _c("br"), _vm._v(" di recensioni")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/HomePage.vue?vue&type=template&id=04c29797&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/HomePage.vue?vue&type=template&id=04c29797&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("section", [_c("section", {
    staticClass: "main-content"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("section", {
    staticClass: "bg-info my-5"
  }, [_c("h5", {
    staticClass: "text-center py-3 text-light specialization-doctor"
  }, [_vm._v("Ricerca qui medici per specializzazione")]), _vm._v(" "), _c("ul", {
    staticClass: "list-unstyled d-flex justify-content-center pb-3"
  }, _vm._l(_vm.specializations, function (specialization, index) {
    return _c("li", {
      key: index,
      staticClass: "mr-5"
    }, [_c("router-link", {
      staticClass: "text-light specialization-name",
      attrs: {
        to: {
          name: "advanced-search",
          params: {
            specialization_slug: specialization.slug
          }
        }
      }
    }, [_vm._v("\n                            " + _vm._s(specialization.name) + "\n                    ")])], 1);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "container-lg"
  }, [_c("h2", {
    staticClass: "text-center mb-2 text-primary"
  }, [_vm._v("Medici in evidenza")]), _vm._v(" "), _c("div", {
    staticClass: "carousel d-flex"
  }, _vm._l(_vm.users, function (user, index) {
    return _c("div", {
      key: index
    }, [_c("div", {
      staticClass: "card",
      staticStyle: {
        width: "12rem"
      }
    }, [_c("img", {
      staticClass: "card-img-top",
      attrs: {
        src: user.user_photo,
        alt: "..."
      }
    }), _vm._v(" "), _c("div", {
      staticClass: "card-body"
    }, [_c("h5", {
      staticClass: "card-title"
    }, [_vm._v(_vm._s(user.user_name))]), _vm._v(" "), _c("p", {
      staticClass: "card-text"
    }, [_vm._v(_vm._s(user.specialization_slug))]), _vm._v(" "), _c("div", {
      staticClass: "card-text mb-3"
    }, [_vm._v(_vm._s(user.user_email))]), _vm._v(" "), _c("router-link", {
      staticClass: "btn btn-primary",
      attrs: {
        to: {
          name: "single-profile",
          params: {
            user_slug: user.user_slug
          }
        }
      }
    }, [_vm._v("\n                                Scopri di più\n                            ")])], 1)])]);
  }), 0)]), _vm._v(" "), _vm._m(2)]), _vm._v(" "), _c("Footer")], 1);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "text-center"
  }, [_c("h2", {
    staticClass: "mt-3 text-primary"
  }, [_vm._v("Benvenuti su BDoctors")]), _vm._v(" "), _c("p", {
    staticClass: "mt-3"
  }, [_vm._v("\n                Benvenuto nel sito BDoctors, dove puoi trovare la miglior scelta per la tua esigenza.\n            ")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("section", {
    staticClass: "progress",
    staticStyle: {
      height: "200px"
    }
  }, [_c("img", {
    attrs: {
      src: "https://images.theconversation.com/files/59470/original/bmc3zndq-1411073854.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
      alt: ""
    }
  }), _vm._v(" "), _c("img", {
    attrs: {
      src: "https://dr-olivier-clinic.com/wp-content/uploads/2014/10/different-doctors.jpg",
      alt: ""
    }
  }), _vm._v(" "), _c("img", {
    attrs: {
      src: "https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?w=2000",
      alt: ""
    }
  }), _vm._v(" "), _c("img", {
    attrs: {
      src: "https://welpmagazine.com/wp-content/uploads/2020/09/becoming-doctor.jpg",
      alt: ""
    }
  }), _vm._v(" "), _c("img", {
    attrs: {
      src: "https://www.optimahealth.com/_assets/images/group-of-doctors-card.jpg",
      alt: ""
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("section", {
    staticClass: "about-us my-5"
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col col-sm-12 col-md-6 mr-3"
  }, [_c("img", {
    staticStyle: {
      height: "200px"
    },
    attrs: {
      src: "https://www.ges-tt.com/wp-content/uploads/2020/11/recensioni-positive-google-perche-sono-importanti-come-gestirle.jpg",
      alt: "reviews"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "col col-sm-12 col-md-5"
  }, [_c("h3", {
    staticClass: "text-primary"
  }, [_vm._v("\n                            Dicono di noi \n                        ")]), _vm._v(" "), _c("h5", [_vm._v("\n                            Oltre il 90% di pazienti soddisfatti.\n                        ")]), _vm._v(" "), _c("p", [_vm._v("\n                            BDoctors è un nuovo sito in Italia di prenotazioni di visite mediche ed esami diagnostici, online dal 2022.\n                            Crediamo nell'importanza dell'informazione e della trasparenza per aiutare i pazienti a scegliere il medico giusto tra gli oltre 9.000 presenti su BDoctors.\n                            Per questo su BDoctors, solo i pazienti che hanno prenotato attraverso il sito e svolto la prestazione possono rilasciare un feedback sul medico: una garanzia dell'affidabilità delle 13.553 recensioni che leggi.\n                        ")])])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SingleProfile.vue?vue&type=template&id=d06745f0&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/SingleProfile.vue?vue&type=template&id=d06745f0&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "container"
  }, [_c("h2", {
    staticClass: "mb-4"
  }, [_vm._v(_vm._s(_vm.user.name))]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-5"
  }, [_c("div", {
    staticClass: "d-flex"
  }, [_c("div", {
    staticClass: "card mb-5",
    staticStyle: {
      width: "30rem"
    }
  }, [_c("img", {
    staticClass: "card-img-top",
    attrs: {
      src: _vm.user.photo,
      alt: "..."
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("h5", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(_vm.user.name))]), _vm._v(" "), _vm.user.specializations.length > 0 ? _c("div", [_c("strong", [_vm._v("Specializzazione in")]), _vm._v(" "), _vm._l(_vm.user.specializations, function (specialization) {
    return _c("span", {
      key: specialization.id,
      staticClass: "badge bg-info text-light mr-1 mb-3"
    }, [_vm._v(_vm._s(specialization.name))]);
  })], 2) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("strong", [_vm._v("Contatta il medico al seguente indirizzo:")]), _vm._v(" " + _vm._s(_vm.user.email))]), _vm._v(" "), _c("p", [_c("strong", {
    staticClass: "d-block"
  }, [_vm._v("Curriculum Vitae")]), _vm._v(_vm._s(_vm.user.curriculum))])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-7 d-flex"
  }, _vm._l(_vm.user.reviews, function (review, index) {
    return _c("div", {
      key: index
    }, [_c("div", {
      staticClass: "review-card card text-dark bg-light mb-3",
      staticStyle: {
        "max-width": "18rem"
      }
    }, [_c("div", {
      staticClass: "card-header"
    }, [_vm._v("Recensione")]), _vm._v(" "), _c("div", {
      staticClass: "card-body"
    }, [_c("h5", {
      staticClass: "card-title"
    }, [_vm._v(_vm._s(review.author))]), _vm._v(" "), _c("p", {
      staticClass: "card-text"
    }, [_vm._v(_vm._s(review.content))])])])]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col"
  }, [_vm.success_message ? _c("div", {
    staticClass: "alert alert-success",
    attrs: {
      role: "alert"
    }
  }, [_vm._v("\n                Grazie per averci contattato!\n            ")]) : _vm._e(), _vm._v(" "), _c("h4", [_vm._v("Scrivi un messaggio al medico")]), _vm._v(" "), _c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.sendMessage();
      }
    }
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "author-message"
    }
  }, [_vm._v("Nome e cognome *")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.authorMessage,
      expression: "authorMessage"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "author-message"
    },
    domProps: {
      value: _vm.authorMessage
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.authorMessage = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.errors.author ? _c("div", _vm._l(_vm.errors.name, function (error, index) {
    return _c("div", {
      key: index,
      staticClass: "alert alert-danger",
      attrs: {
        role: "alert"
      }
    }, [_vm._v("\n                            " + _vm._s(error) + "\n                        ")]);
  }), 0) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "user-mail"
    }
  }, [_vm._v("Email *")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.userEmail,
      expression: "userEmail"
    }],
    staticClass: "form-control",
    attrs: {
      type: "email",
      id: "user-mail"
    },
    domProps: {
      value: _vm.userEmail
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.userEmail = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.errors.email ? _c("div", _vm._l(_vm.errors.email, function (error, index) {
    return _c("div", {
      key: index,
      staticClass: "alert alert-danger",
      attrs: {
        role: "alert"
      }
    }, [_vm._v("\n                            " + _vm._s(error) + "\n                        ")]);
  }), 0) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "content-message"
    }
  }, [_vm._v("Messaggio *")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.contentMessage,
      expression: "contentMessage"
    }],
    staticClass: "form-control",
    attrs: {
      id: "content-message",
      rows: "8"
    },
    domProps: {
      value: _vm.contentMessage
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.contentMessage = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.errors.content ? _c("div", _vm._l(_vm.errors.message, function (error, index) {
    return _c("div", {
      key: index,
      staticClass: "alert alert-danger",
      attrs: {
        role: "alert"
      }
    }, [_vm._v("\n                            " + _vm._s(error) + "\n                        ")]);
  }), 0) : _vm._e()]), _vm._v(" "), _c("input", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "submit",
      value: "Invia Messaggio",
      disabled: _vm.sending
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "col"
  }, [_vm.success_review ? _c("div", {
    staticClass: "alert alert-success",
    attrs: {
      role: "alert"
    }
  }, [_vm._v("\n                Grazie per averci recensito e dato un voto!\n            ")]) : _vm._e(), _vm._v(" "), _c("h4", [_vm._v("Scrivi una recensione")]), _vm._v(" "), _c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.sendReview();
      }
    }
  }, [_c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "author-review"
    }
  }, [_vm._v("Nome e cognome *")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.authorReview,
      expression: "authorReview"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      id: "author-review"
    },
    domProps: {
      value: _vm.authorReview
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.authorReview = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.errors.author ? _c("div", _vm._l(_vm.errors.name, function (error, index) {
    return _c("div", {
      key: index,
      staticClass: "alert alert-danger",
      attrs: {
        role: "alert"
      }
    }, [_vm._v("\n                            " + _vm._s(error) + "\n                        ")]);
  }), 0) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "content-review"
    }
  }, [_vm._v("Recensione *")]), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.contentReview,
      expression: "contentReview"
    }],
    staticClass: "form-control",
    attrs: {
      id: "content-review",
      rows: "8"
    },
    domProps: {
      value: _vm.contentReview
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.contentReview = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.errors.review ? _c("div", _vm._l(_vm.errors.message, function (error, index) {
    return _c("div", {
      key: index,
      staticClass: "alert alert-danger",
      attrs: {
        role: "alert"
      }
    }, [_vm._v("\n                            " + _vm._s(error) + "\n                        ")]);
  }), 0) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "mb-3"
  }, [_c("div", {
    staticClass: "average_vote"
  }, [_c("span", {
    staticClass: "bold_text"
  }, [_vm._v("Vote")]), _vm._v(": \n                        "), _vm._l(5, function (star, index) {
    return _c("span", {
      key: index,
      staticClass: "star_icon",
      "class": {
        active: star <= _vm.voteReview
      },
      on: {
        click: function click($event) {
          $event.preventDefault();
          _vm.voteReview = star;
        }
      }
    }, [_vm._v("\n                            ★\n                        ")]);
  })], 2), _vm._v(" "), _c("div", [_vm._v("\n                        " + _vm._s(_vm.voteReview) + "\n                    ")]), _vm._v(" "), _vm.errors.vote ? _c("div", _vm._l(_vm.errors.name, function (error, index) {
    return _c("div", {
      key: index,
      staticClass: "alert alert-danger",
      attrs: {
        role: "alert"
      }
    }, [_vm._v("\n                            " + _vm._s(error) + "\n                        ")]);
  }), 0) : _vm._e()]), _vm._v(" "), _c("input", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "submit",
      value: "Invia Recensione",
      disabled: _vm.sending
    }
  })])])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/App.vue?vue&type=template&id=91ac6b5c&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/App.vue?vue&type=template&id=91ac6b5c& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("Header"), _vm._v(" "), _c("main", [_c("router-view")], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/bootstrap/dist/js/bootstrap.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap/dist/js/bootstrap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\bootstrap\\dist\\js\\bootstrap.js'");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AdvancedSearch.vue?vue&type=style&index=0&id=0312e533&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/AdvancedSearch.vue?vue&type=style&index=0&id=0312e533&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".average[data-v-0312e533] {\n  position: fixed;\n}\n.star_icon[data-v-0312e533] {\n  color: grey;\n  cursor: pointer;\n}\n.active[data-v-0312e533] {\n  color: gold;\n}\n.hover-effect[data-v-0312e533]:hover {\n  font-weight: bold;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/HomePage.vue?vue&type=style&index=0&id=04c29797&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/HomePage.vue?vue&type=style&index=0&id=04c29797&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".specialization-name[data-v-04c29797] {\n  font-size: 1rem;\n}\n.carousel[data-v-04c29797] {\n  overflow-x: scroll;\n  position: relative;\n}\n.carousel[data-v-04c29797]::-webkit-scrollbar {\n  display: none;\n}\n.carousel .card[data-v-04c29797] {\n  margin-inline: 1rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SingleProfile.vue?vue&type=style&index=0&id=d06745f0&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/SingleProfile.vue?vue&type=style&index=0&id=d06745f0&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col-7[data-v-d06745f0] {\n  flex-wrap: wrap;\n}\n.col-7 .review-card[data-v-d06745f0] {\n  margin-inline: 0.9rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\css-loader\\lib\\css-base.js'");

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\jquery\\dist\\jquery.js'");

/***/ }),

/***/ "./node_modules/lodash/lodash.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/lodash.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\lodash\\lodash.js'");

/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/*!***************************************************!*\
  !*** ./node_modules/popper.js/dist/esm/popper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\popper.js\\dist\\esm\\popper.js'");

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AdvancedSearch.vue?vue&type=style&index=0&id=0312e533&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/AdvancedSearch.vue?vue&type=style&index=0&id=0312e533&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./AdvancedSearch.vue?vue&type=style&index=0&id=0312e533&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AdvancedSearch.vue?vue&type=style&index=0&id=0312e533&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/HomePage.vue?vue&type=style&index=0&id=04c29797&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/HomePage.vue?vue&type=style&index=0&id=04c29797&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./HomePage.vue?vue&type=style&index=0&id=04c29797&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/HomePage.vue?vue&type=style&index=0&id=04c29797&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SingleProfile.vue?vue&type=style&index=0&id=d06745f0&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/SingleProfile.vue?vue&type=style&index=0&id=d06745f0&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProfile.vue?vue&type=style&index=0&id=d06745f0&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SingleProfile.vue?vue&type=style&index=0&id=d06745f0&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\style-loader\\lib\\addStyles.js'");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\vue-loader\\lib\\runtime\\componentNormalizer.js'");

/***/ }),

/***/ "./node_modules/vue-router/dist/vue-router.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/vue-router/dist/vue-router.esm.js ***!
  \********************************************************/
/*! exports provided: NavigationFailureType, RouterLink, RouterView, START_LOCATION, default, isNavigationFailure, version */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\vue-router\\dist\\vue-router.esm.js'");

/***/ }),

/***/ "./node_modules/vue/dist/vue.common.js":
/*!*********************************************!*\
  !*** ./node_modules/vue/dist/vue.common.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\vue\\dist\\vue.common.js'");

/***/ }),

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/App.vue */ "./resources/js/views/App.vue");
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router.js */ "./resources/js/router.js");
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


var app = new Vue({
  el: '#root',
  render: function render(h) {
    return h(_views_App_vue__WEBPACK_IMPORTED_MODULE_0__["default"]);
  },
  router: _router_js__WEBPACK_IMPORTED_MODULE_1__["default"]
});

/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window._ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
  window.Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js")["default"];
  window.$ = window.jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");
} catch (e) {}
/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */


window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo';
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });

/***/ }),

/***/ "./resources/js/components/Footer.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Footer.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_vue_vue_type_template_id_61a7c374_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=61a7c374&scoped=true& */ "./resources/js/components/Footer.vue?vue&type=template&id=61a7c374&scoped=true&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/components/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Footer_vue_vue_type_template_id_61a7c374_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Footer_vue_vue_type_template_id_61a7c374_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "61a7c374",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Footer.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Footer.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Footer.vue?vue&type=template&id=61a7c374&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Footer.vue?vue&type=template&id=61a7c374&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_61a7c374_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=template&id=61a7c374&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Footer.vue?vue&type=template&id=61a7c374&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_61a7c374_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_61a7c374_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Header.vue":
/*!********************************************!*\
  !*** ./resources/js/components/Header.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header_vue_vue_type_template_id_1f42fb90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.vue?vue&type=template&id=1f42fb90& */ "./resources/js/components/Header.vue?vue&type=template&id=1f42fb90&");
/* harmony import */ var _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.vue?vue&type=script&lang=js& */ "./resources/js/components/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Header_vue_vue_type_template_id_1f42fb90___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Header_vue_vue_type_template_id_1f42fb90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Header.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/components/Header.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Header.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Header.vue?vue&type=template&id=1f42fb90&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Header.vue?vue&type=template&id=1f42fb90& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_1f42fb90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./Header.vue?vue&type=template&id=1f42fb90& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Header.vue?vue&type=template&id=1f42fb90&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_1f42fb90___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_template_id_1f42fb90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/AdvancedSearch.vue":
/*!***********************************************!*\
  !*** ./resources/js/pages/AdvancedSearch.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdvancedSearch_vue_vue_type_template_id_0312e533_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdvancedSearch.vue?vue&type=template&id=0312e533&scoped=true& */ "./resources/js/pages/AdvancedSearch.vue?vue&type=template&id=0312e533&scoped=true&");
/* harmony import */ var _AdvancedSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdvancedSearch.vue?vue&type=script&lang=js& */ "./resources/js/pages/AdvancedSearch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AdvancedSearch_vue_vue_type_style_index_0_id_0312e533_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdvancedSearch.vue?vue&type=style&index=0&id=0312e533&lang=scss&scoped=true& */ "./resources/js/pages/AdvancedSearch.vue?vue&type=style&index=0&id=0312e533&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AdvancedSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdvancedSearch_vue_vue_type_template_id_0312e533_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdvancedSearch_vue_vue_type_template_id_0312e533_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0312e533",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/AdvancedSearch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/AdvancedSearch.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/pages/AdvancedSearch.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvancedSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AdvancedSearch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AdvancedSearch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvancedSearch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/AdvancedSearch.vue?vue&type=style&index=0&id=0312e533&lang=scss&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/pages/AdvancedSearch.vue?vue&type=style&index=0&id=0312e533&lang=scss&scoped=true& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvancedSearch_vue_vue_type_style_index_0_id_0312e533_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./AdvancedSearch.vue?vue&type=style&index=0&id=0312e533&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AdvancedSearch.vue?vue&type=style&index=0&id=0312e533&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvancedSearch_vue_vue_type_style_index_0_id_0312e533_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvancedSearch_vue_vue_type_style_index_0_id_0312e533_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvancedSearch_vue_vue_type_style_index_0_id_0312e533_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvancedSearch_vue_vue_type_style_index_0_id_0312e533_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/AdvancedSearch.vue?vue&type=template&id=0312e533&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/AdvancedSearch.vue?vue&type=template&id=0312e533&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvancedSearch_vue_vue_type_template_id_0312e533_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./AdvancedSearch.vue?vue&type=template&id=0312e533&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/AdvancedSearch.vue?vue&type=template&id=0312e533&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvancedSearch_vue_vue_type_template_id_0312e533_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AdvancedSearch_vue_vue_type_template_id_0312e533_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/HomePage.vue":
/*!*****************************************!*\
  !*** ./resources/js/pages/HomePage.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HomePage_vue_vue_type_template_id_04c29797_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage.vue?vue&type=template&id=04c29797&scoped=true& */ "./resources/js/pages/HomePage.vue?vue&type=template&id=04c29797&scoped=true&");
/* harmony import */ var _HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HomePage.vue?vue&type=script&lang=js& */ "./resources/js/pages/HomePage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _HomePage_vue_vue_type_style_index_0_id_04c29797_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HomePage.vue?vue&type=style&index=0&id=04c29797&lang=scss&scoped=true& */ "./resources/js/pages/HomePage.vue?vue&type=style&index=0&id=04c29797&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HomePage_vue_vue_type_template_id_04c29797_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _HomePage_vue_vue_type_template_id_04c29797_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "04c29797",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/HomePage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/HomePage.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/pages/HomePage.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./HomePage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/HomePage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/HomePage.vue?vue&type=style&index=0&id=04c29797&lang=scss&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/pages/HomePage.vue?vue&type=style&index=0&id=04c29797&lang=scss&scoped=true& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_04c29797_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./HomePage.vue?vue&type=style&index=0&id=04c29797&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/HomePage.vue?vue&type=style&index=0&id=04c29797&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_04c29797_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_04c29797_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_04c29797_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_style_index_0_id_04c29797_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/HomePage.vue?vue&type=template&id=04c29797&scoped=true&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/HomePage.vue?vue&type=template&id=04c29797&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_04c29797_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./HomePage.vue?vue&type=template&id=04c29797&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/HomePage.vue?vue&type=template&id=04c29797&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_04c29797_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_HomePage_vue_vue_type_template_id_04c29797_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/SingleProfile.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/SingleProfile.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SingleProfile_vue_vue_type_template_id_d06745f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleProfile.vue?vue&type=template&id=d06745f0&scoped=true& */ "./resources/js/pages/SingleProfile.vue?vue&type=template&id=d06745f0&scoped=true&");
/* harmony import */ var _SingleProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SingleProfile.vue?vue&type=script&lang=js& */ "./resources/js/pages/SingleProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SingleProfile_vue_vue_type_style_index_0_id_d06745f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SingleProfile.vue?vue&type=style&index=0&id=d06745f0&lang=scss&scoped=true& */ "./resources/js/pages/SingleProfile.vue?vue&type=style&index=0&id=d06745f0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SingleProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SingleProfile_vue_vue_type_template_id_d06745f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SingleProfile_vue_vue_type_template_id_d06745f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d06745f0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/SingleProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/SingleProfile.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/SingleProfile.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SingleProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/SingleProfile.vue?vue&type=style&index=0&id=d06745f0&lang=scss&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/pages/SingleProfile.vue?vue&type=style&index=0&id=d06745f0&lang=scss&scoped=true& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProfile_vue_vue_type_style_index_0_id_d06745f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProfile.vue?vue&type=style&index=0&id=d06745f0&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SingleProfile.vue?vue&type=style&index=0&id=d06745f0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProfile_vue_vue_type_style_index_0_id_d06745f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProfile_vue_vue_type_style_index_0_id_d06745f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProfile_vue_vue_type_style_index_0_id_d06745f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProfile_vue_vue_type_style_index_0_id_d06745f0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/pages/SingleProfile.vue?vue&type=template&id=d06745f0&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/pages/SingleProfile.vue?vue&type=template&id=d06745f0&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProfile_vue_vue_type_template_id_d06745f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./SingleProfile.vue?vue&type=template&id=d06745f0&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/SingleProfile.vue?vue&type=template&id=d06745f0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProfile_vue_vue_type_template_id_d06745f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_SingleProfile_vue_vue_type_template_id_d06745f0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/router.js":
/*!********************************!*\
  !*** ./resources/js/router.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _pages_AdvancedSearch_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/AdvancedSearch.vue */ "./resources/js/pages/AdvancedSearch.vue");
/* harmony import */ var _pages_SingleProfile_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/SingleProfile.vue */ "./resources/js/pages/SingleProfile.vue");
/* harmony import */ var _pages_HomePage_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/HomePage.vue */ "./resources/js/pages/HomePage.vue");


vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]);


 //routing

var router = new vue_router__WEBPACK_IMPORTED_MODULE_1__["default"]({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'homepage',
    component: _pages_HomePage_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  }, {
    path: '/advanced-search/:specialization_slug',
    name: 'advanced-search',
    component: _pages_AdvancedSearch_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, {
    path: '/single-profile/:user_slug',
    name: 'single-profile',
    component: _pages_SingleProfile_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  }]
});
/* harmony default export */ __webpack_exports__["default"] = (router);

/***/ }),

/***/ "./resources/js/views/App.vue":
/*!************************************!*\
  !*** ./resources/js/views/App.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_91ac6b5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=91ac6b5c& */ "./resources/js/views/App.vue?vue&type=template&id=91ac6b5c&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./resources/js/views/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_91ac6b5c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_91ac6b5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/App.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./resources/js/views/App.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/App.vue?vue&type=template&id=91ac6b5c&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/App.vue?vue&type=template&id=91ac6b5c& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_91ac6b5c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=91ac6b5c& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/App.vue?vue&type=template&id=91ac6b5c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_91ac6b5c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_91ac6b5c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: Can't find stylesheet to import.\n  ╷\n8 │ @import '~bootstrap/scss/bootstrap';\r\n  │         ^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  ╵\n  C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\resources\\sass\\app.scss 8:9  root stylesheet\n    at C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\webpack\\lib\\NormalModule.js:316:20\n    at C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at context.callback (C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\sass-loader\\dist\\index.js:73:7\n    at Function.call$2 (C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\sass\\sass.dart.js:101257:16)\n    at render_closure1.call$2 (C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\sass\\sass.dart.js:86329:12)\n    at _RootZone.runBinary$3$3 (C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\sass\\sass.dart.js:30053:18)\n    at _FutureListener.handleError$1 (C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\sass\\sass.dart.js:28582:21)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\sass\\sass.dart.js:28889:49)\n    at Object._Future__propagateToListeners (C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\sass\\sass.dart.js:3911:77)\n    at _Future._completeError$2 (C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\sass\\sass.dart.js:28735:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\sass\\sass.dart.js:28383:12)\n    at Object._asyncRethrow (C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\sass\\sass.dart.js:3713:17)\n    at C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\sass\\sass.dart.js:20081:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\sass\\sass.dart.js:3738:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\sass\\sass.dart.js:28402:12)\n    at _awaitOnObject_closure0.call$2 (C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\sass\\sass.dart.js:28396:25)\n    at _RootZone.runBinary$3$3 (C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\sass\\sass.dart.js:30053:18)\n    at _FutureListener.handleError$1 (C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\sass\\sass.dart.js:28582:21)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\sass\\sass.dart.js:28889:49)\n    at Object._Future__propagateToListeners (C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\sass\\sass.dart.js:3911:77)\n    at _Future._completeError$2 (C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\sass\\sass.dart.js:28735:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\sass\\sass.dart.js:28383:12)\n    at Object._asyncRethrow (C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\sass\\sass.dart.js:3713:17)\n    at C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\sass\\sass.dart.js:15495:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\sass\\sass.dart.js:3738:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\sass\\sass.dart.js:28402:12)\n    at _awaitOnObject_closure0.call$2 (C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\sass\\sass.dart.js:28396:25)\n    at _RootZone.runBinary$3$3 (C:\\Users\\Andrei\\boolean_projects_class_66\\laravel-projects\\bdoctors_project\\node_modules\\sass\\sass.dart.js:30053:18)");

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Andrei\boolean_projects_class_66\laravel-projects\bdoctors_project\resources\js\app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! C:\Users\Andrei\boolean_projects_class_66\laravel-projects\bdoctors_project\resources\sass\app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });