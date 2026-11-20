/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/country-block/components/CountryBlockSettings.js":
/*!**************************************************************!*\
  !*** ./src/country-block/components/CountryBlockSettings.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_countryBlockApi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/countryBlockApi */ "./src/country-block/utils/countryBlockApi.js");
/* harmony import */ var _CountrySelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CountrySelect */ "./src/country-block/components/CountrySelect.js");

/**
 * Country Block Settings Component
 */




const CountryBlockSettings = () => {
  const [enabled, setEnabled] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [mode, setMode] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)("include"); // "include" or "exclude"
  const [selectedCountries, setSelectedCountries] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const [blockMessage, setBlockMessage] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [loading, setLoading] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const [saving, setSaving] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [saveStatus, setSaveStatus] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);

  // Load settings on mount
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    loadSettings();
  }, []);
  const loadSettings = async () => {
    setLoading(true);
    try {
      const result = await (0,_utils_countryBlockApi__WEBPACK_IMPORTED_MODULE_3__.getCountryBlockSettings)();
      if (result.success && result.data) {
        setEnabled(result.data.enabled || false);
        setMode(result.data.mode || "include");
        setSelectedCountries(result.data.countries || []);
        setBlockMessage(result.data.message || "");
      }
    } catch (error) {
      console.error("Error loading country block settings:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleSave = async () => {
    setSaving(true);
    setSaveStatus(null);
    try {
      const result = await (0,_utils_countryBlockApi__WEBPACK_IMPORTED_MODULE_3__.saveCountryBlockSettings)({
        enabled,
        mode,
        countries: selectedCountries,
        message: blockMessage
      });
      if (result.success) {
        setSaveStatus("success");
        setTimeout(() => setSaveStatus(null), 3000);
      } else {
        setSaveStatus("error");
        setTimeout(() => setSaveStatus(null), 3000);
      }
    } catch (error) {
      console.error("Error saving country block settings:", error);
      setSaveStatus("error");
      setTimeout(() => setSaveStatus(null), 3000);
    } finally {
      setSaving(false);
    }
  };
  const handleEnabledChange = newEnabled => {
    setEnabled(newEnabled);
    // Auto-save on toggle change
    setTimeout(() => {
      (0,_utils_countryBlockApi__WEBPACK_IMPORTED_MODULE_3__.saveCountryBlockSettings)({
        enabled: newEnabled,
        mode,
        countries: selectedCountries,
        message: blockMessage
      }).catch(error => {
        console.error("Error auto-saving enabled state:", error);
      });
    }, 100);
  };
  const handleModeChange = newMode => {
    setMode(newMode);
    // Auto-save on mode change
    setTimeout(() => {
      (0,_utils_countryBlockApi__WEBPACK_IMPORTED_MODULE_3__.saveCountryBlockSettings)({
        enabled,
        mode: newMode,
        countries: selectedCountries,
        message: blockMessage
      }).catch(error => {
        console.error("Error auto-saving mode:", error);
      });
    }, 100);
  };
  const handleCountryChange = newCountries => {
    setSelectedCountries(newCountries);
    // Auto-save on country change
    setTimeout(() => {
      (0,_utils_countryBlockApi__WEBPACK_IMPORTED_MODULE_3__.saveCountryBlockSettings)({
        enabled,
        mode,
        countries: newCountries,
        message: blockMessage
      }).catch(error => {
        console.error("Error auto-saving countries:", error);
      });
    }, 100);
  };
  if (loading) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "flex justify-center items-center p-lg"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "text-center"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
      className: "mt-md"
    }, "Loading settings...")));
  }
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "country-block-settings"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mb-lg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "toggle"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "checkbox",
    className: "toggle-checkbox",
    checked: enabled,
    onChange: e => handleEnabledChange(e.target.checked)
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "toggle-switch"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Enable Country Blocking")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mt-sm text-sm text-gray-600"
  }, enabled ? "Country blocking is currently active." : "Country blocking is disabled. Enable it to start blocking or allowing visitors by country.")), enabled && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mb-xlg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "block mb-md text-base font-medium"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Block Settings")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex flex-col gap-base"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "flex items-center gap-sm cursor-pointer"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "radio",
    name: "blocking-mode",
    value: "include",
    checked: mode === "include",
    onChange: () => handleModeChange("include"),
    className: "w-4 h-4"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Allow only selected countries")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    className: "flex items-center gap-sm cursor-pointer"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "radio",
    name: "blocking-mode",
    value: "exclude",
    checked: mode === "exclude",
    onChange: () => handleModeChange("exclude"),
    className: "w-4 h-4"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, "Block selected countries"))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mt-sm text-sm text-gray-600"
  }, mode === "include" ? "Only visitors from selected countries will be allowed to access the site." : "Visitors from selected countries will be blocked from accessing the site.")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mb-xlg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Select Countries")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_CountrySelect__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selectedCountries: selectedCountries,
    onChange: handleCountryChange,
    disabled: !enabled
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mt-sm text-sm text-gray-600"
  }, selectedCountries.length > 0 ? `${selectedCountries.length} countr${selectedCountries.length === 1 ? "y" : "ies"} selected. Click to search and select countries.` : "No countries selected. Click the dropdown to search and select countries.")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "mb-xlg"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "block-message"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, "Block Message")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    id: "block-message",
    value: blockMessage,
    onChange: e => {
      setBlockMessage(e.target.value);
      // Auto-save on change
      setTimeout(() => {
        (0,_utils_countryBlockApi__WEBPACK_IMPORTED_MODULE_3__.saveCountryBlockSettings)({
          enabled,
          mode,
          countries: selectedCountries,
          message: e.target.value
        }).catch(error => {
          console.error("Error auto-saving message:", error);
        });
      }, 500);
    },
    placeholder: "Access to this website is restricted in your country.",
    className: "w-full p-md border border-gray-300 rounded min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-200",
    rows: "4"
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", {
    className: "mt-sm text-sm text-gray-600"
  }, "This message will be displayed to blocked visitors. Leave empty to use the default message."))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    onClick: handleSave,
    disabled: saving,
    className: "button button-primary"
  }, saving ? "Saving..." : "Save Settings"), saveStatus && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Notice, {
    status: saveStatus === "success" ? "success" : "error",
    isDismissible: false,
    className: "mt-md"
  }, saveStatus === "success" ? "Settings saved successfully!" : "Error saving settings. Please try again."));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountryBlockSettings);

/***/ }),

/***/ "./src/country-block/components/CountrySelect.js":
/*!*******************************************************!*\
  !*** ./src/country-block/components/CountrySelect.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_countries__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/countries */ "./src/country-block/utils/countries.js");

/**
 * Modern Searchable Country Select Component
 */


const CountrySelect = ({
  selectedCountries,
  onChange,
  disabled = false
}) => {
  const [searchTerm, setSearchTerm] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const [isOpen, setIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const containerRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const searchInputRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  // Close dropdown when clicking outside
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const handleClickOutside = event => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen]);

  // Focus search input when dropdown opens
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  // Filter countries based on search term
  const filteredCountries = _utils_countries__WEBPACK_IMPORTED_MODULE_2__.COUNTRIES.filter(country => country.name.toLowerCase().includes(searchTerm.toLowerCase()) || country.code.toLowerCase().includes(searchTerm.toLowerCase()));
  const toggleCountry = countryCode => {
    if (disabled) return;
    const newSelection = selectedCountries.includes(countryCode) ? selectedCountries.filter(code => code !== countryCode) : [...selectedCountries, countryCode];
    onChange(newSelection);
  };
  const removeCountry = (countryCode, e) => {
    e.stopPropagation();
    if (disabled) return;
    const newSelection = selectedCountries.filter(code => code !== countryCode);
    onChange(newSelection);
  };
  const getCountryName = code => {
    const country = _utils_countries__WEBPACK_IMPORTED_MODULE_2__.COUNTRIES.find(c => c.code === code);
    return country ? country.name : code;
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    ref: containerRef,
    className: "country-select-wrapper relative w-full"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `border border-input rounded-sm p-sm min-h-[42px] bg-base cursor-pointer flex items-center justify-between ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${isOpen ? "border-border-active ring-2 ring-active" : ""}`,
    onClick: () => !disabled && setIsOpen(!isOpen)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "flex-1 flex flex-wrap gap-sm"
  }, selectedCountries.length === 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "text-contrast opacity-40"
  }, "Select countries...") : selectedCountries.map(code => (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    key: code,
    className: "inline-flex items-center gap-xsm bg-base  text-contrast border border-contrast border-solid px-sm py-xsm rounded-sm text-caption"
  }, getCountryName(code), !disabled && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "button",
    onClick: e => removeCountry(code, e),
    className: "hover:text-contrast font-bold ml-xsm",
    "aria-label": `Remove ${getCountryName(code)}`
  }, "\xD7")))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "ml-sm text-contrast opacity-50 pointer-events-none flex-shrink-0"
  }, isOpen ? "▲" : "▼")), isOpen && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "absolute z-50 w-full mt-xsm bg-base border border-input rounded-sm shadow-lg max-h-[300px] overflow-hidden"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-sm border-b border-border"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    ref: searchInputRef,
    type: "text",
    placeholder: "Search countries...",
    value: searchTerm,
    onChange: e => setSearchTerm(e.target.value),
    className: "w-full px-sm py-xsm border border-border rounded-sm focus:outline-none focus:ring-2 focus:ring-active focus:border-border-active"
  })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "overflow-y-auto max-h-[250px]"
  }, filteredCountries.length === 0 ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "p-md text-center text-contrast opacity-50"
  }, "No countries found") : (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "py-xsm"
  }, filteredCountries.map(country => {
    const isSelected = selectedCountries.includes(country.code);
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      key: country.code,
      onClick: () => toggleCountry(country.code),
      className: `px-md py-sm cursor-pointer hover:bg-active flex items-center gap-sm ${isSelected ? "bg-active" : ""}`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
      type: "checkbox",
      checked: isSelected,
      onChange: () => toggleCountry(country.code),
      className: "w-4 h-4",
      readOnly: true
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "flex-1"
    }, country.name), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      className: "text-footnote text-contrast opacity-50"
    }, country.code));
  }))), selectedCountries.length > 0 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "px-md py-sm border-t border-border bg-surface text-caption text-contrast opacity-60"
  }, selectedCountries.length, " countr", selectedCountries.length === 1 ? "y" : "ies", " selected")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountrySelect);

/***/ }),

/***/ "./src/country-block/index.js":
/*!************************************!*\
  !*** ./src/country-block/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/country-block/style.scss");
/* harmony import */ var _components_CountryBlockSettings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/CountryBlockSettings */ "./src/country-block/components/CountryBlockSettings.js");

/**
 * Country Block Main Component
 */



const CountryBlockApp = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_CountryBlockSettings__WEBPACK_IMPORTED_MODULE_3__["default"], null);
};

// Initialize the app
const container = document.getElementById("country-block-app");
if (container) {
  const root = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
  root.render((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(CountryBlockApp, null));
}

/***/ }),

/***/ "./src/country-block/utils/countries.js":
/*!**********************************************!*\
  !*** ./src/country-block/utils/countries.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COUNTRIES: () => (/* binding */ COUNTRIES)
/* harmony export */ });
/**
 * List of all countries with ISO 3166-1 alpha-2 codes
 */
const COUNTRIES = [{
  code: "AF",
  name: "Afghanistan"
}, {
  code: "AX",
  name: "Åland Islands"
}, {
  code: "AL",
  name: "Albania"
}, {
  code: "DZ",
  name: "Algeria"
}, {
  code: "AS",
  name: "American Samoa"
}, {
  code: "AD",
  name: "Andorra"
}, {
  code: "AO",
  name: "Angola"
}, {
  code: "AI",
  name: "Anguilla"
}, {
  code: "AQ",
  name: "Antarctica"
}, {
  code: "AG",
  name: "Antigua and Barbuda"
}, {
  code: "AR",
  name: "Argentina"
}, {
  code: "AM",
  name: "Armenia"
}, {
  code: "AW",
  name: "Aruba"
}, {
  code: "AU",
  name: "Australia"
}, {
  code: "AT",
  name: "Austria"
}, {
  code: "AZ",
  name: "Azerbaijan"
}, {
  code: "BS",
  name: "Bahamas"
}, {
  code: "BH",
  name: "Bahrain"
}, {
  code: "BD",
  name: "Bangladesh"
}, {
  code: "BB",
  name: "Barbados"
}, {
  code: "BY",
  name: "Belarus"
}, {
  code: "BE",
  name: "Belgium"
}, {
  code: "BZ",
  name: "Belize"
}, {
  code: "BJ",
  name: "Benin"
}, {
  code: "BM",
  name: "Bermuda"
}, {
  code: "BT",
  name: "Bhutan"
}, {
  code: "BO",
  name: "Bolivia"
}, {
  code: "BQ",
  name: "Bonaire, Sint Eustatius and Saba"
}, {
  code: "BA",
  name: "Bosnia and Herzegovina"
}, {
  code: "BW",
  name: "Botswana"
}, {
  code: "BV",
  name: "Bouvet Island"
}, {
  code: "BR",
  name: "Brazil"
}, {
  code: "IO",
  name: "British Indian Ocean Territory"
}, {
  code: "BN",
  name: "Brunei Darussalam"
}, {
  code: "BG",
  name: "Bulgaria"
}, {
  code: "BF",
  name: "Burkina Faso"
}, {
  code: "BI",
  name: "Burundi"
}, {
  code: "CV",
  name: "Cabo Verde"
}, {
  code: "KH",
  name: "Cambodia"
}, {
  code: "CM",
  name: "Cameroon"
}, {
  code: "CA",
  name: "Canada"
}, {
  code: "KY",
  name: "Cayman Islands"
}, {
  code: "CF",
  name: "Central African Republic"
}, {
  code: "TD",
  name: "Chad"
}, {
  code: "CL",
  name: "Chile"
}, {
  code: "CN",
  name: "China"
}, {
  code: "CX",
  name: "Christmas Island"
}, {
  code: "CC",
  name: "Cocos (Keeling) Islands"
}, {
  code: "CO",
  name: "Colombia"
}, {
  code: "KM",
  name: "Comoros"
}, {
  code: "CG",
  name: "Congo"
}, {
  code: "CD",
  name: "Congo, Democratic Republic of the"
}, {
  code: "CK",
  name: "Cook Islands"
}, {
  code: "CR",
  name: "Costa Rica"
}, {
  code: "CI",
  name: "Côte d'Ivoire"
}, {
  code: "HR",
  name: "Croatia"
}, {
  code: "CU",
  name: "Cuba"
}, {
  code: "CW",
  name: "Curaçao"
}, {
  code: "CY",
  name: "Cyprus"
}, {
  code: "CZ",
  name: "Czechia"
}, {
  code: "DK",
  name: "Denmark"
}, {
  code: "DJ",
  name: "Djibouti"
}, {
  code: "DM",
  name: "Dominica"
}, {
  code: "DO",
  name: "Dominican Republic"
}, {
  code: "EC",
  name: "Ecuador"
}, {
  code: "EG",
  name: "Egypt"
}, {
  code: "SV",
  name: "El Salvador"
}, {
  code: "GQ",
  name: "Equatorial Guinea"
}, {
  code: "ER",
  name: "Eritrea"
}, {
  code: "EE",
  name: "Estonia"
}, {
  code: "SZ",
  name: "Eswatini"
}, {
  code: "ET",
  name: "Ethiopia"
}, {
  code: "FK",
  name: "Falkland Islands (Malvinas)"
}, {
  code: "FO",
  name: "Faroe Islands"
}, {
  code: "FJ",
  name: "Fiji"
}, {
  code: "FI",
  name: "Finland"
}, {
  code: "FR",
  name: "France"
}, {
  code: "GF",
  name: "French Guiana"
}, {
  code: "PF",
  name: "French Polynesia"
}, {
  code: "TF",
  name: "French Southern Territories"
}, {
  code: "GA",
  name: "Gabon"
}, {
  code: "GM",
  name: "Gambia"
}, {
  code: "GE",
  name: "Georgia"
}, {
  code: "DE",
  name: "Germany"
}, {
  code: "GH",
  name: "Ghana"
}, {
  code: "GI",
  name: "Gibraltar"
}, {
  code: "GR",
  name: "Greece"
}, {
  code: "GL",
  name: "Greenland"
}, {
  code: "GD",
  name: "Grenada"
}, {
  code: "GP",
  name: "Guadeloupe"
}, {
  code: "GU",
  name: "Guam"
}, {
  code: "GT",
  name: "Guatemala"
}, {
  code: "GG",
  name: "Guernsey"
}, {
  code: "GN",
  name: "Guinea"
}, {
  code: "GW",
  name: "Guinea-Bissau"
}, {
  code: "GY",
  name: "Guyana"
}, {
  code: "HT",
  name: "Haiti"
}, {
  code: "HM",
  name: "Heard Island and McDonald Islands"
}, {
  code: "VA",
  name: "Holy See"
}, {
  code: "HN",
  name: "Honduras"
}, {
  code: "HK",
  name: "Hong Kong"
}, {
  code: "HU",
  name: "Hungary"
}, {
  code: "IS",
  name: "Iceland"
}, {
  code: "IN",
  name: "India"
}, {
  code: "ID",
  name: "Indonesia"
}, {
  code: "IR",
  name: "Iran"
}, {
  code: "IQ",
  name: "Iraq"
}, {
  code: "IE",
  name: "Ireland"
}, {
  code: "IM",
  name: "Isle of Man"
}, {
  code: "IL",
  name: "Israel"
}, {
  code: "IT",
  name: "Italy"
}, {
  code: "JM",
  name: "Jamaica"
}, {
  code: "JP",
  name: "Japan"
}, {
  code: "JE",
  name: "Jersey"
}, {
  code: "JO",
  name: "Jordan"
}, {
  code: "KZ",
  name: "Kazakhstan"
}, {
  code: "KE",
  name: "Kenya"
}, {
  code: "KI",
  name: "Kiribati"
}, {
  code: "KP",
  name: "Korea, Democratic People's Republic of"
}, {
  code: "KR",
  name: "Korea, Republic of"
}, {
  code: "KW",
  name: "Kuwait"
}, {
  code: "KG",
  name: "Kyrgyzstan"
}, {
  code: "LA",
  name: "Lao People's Democratic Republic"
}, {
  code: "LV",
  name: "Latvia"
}, {
  code: "LB",
  name: "Lebanon"
}, {
  code: "LS",
  name: "Lesotho"
}, {
  code: "LR",
  name: "Liberia"
}, {
  code: "LY",
  name: "Libya"
}, {
  code: "LI",
  name: "Liechtenstein"
}, {
  code: "LT",
  name: "Lithuania"
}, {
  code: "LU",
  name: "Luxembourg"
}, {
  code: "MO",
  name: "Macao"
}, {
  code: "MG",
  name: "Madagascar"
}, {
  code: "MW",
  name: "Malawi"
}, {
  code: "MY",
  name: "Malaysia"
}, {
  code: "MV",
  name: "Maldives"
}, {
  code: "ML",
  name: "Mali"
}, {
  code: "MT",
  name: "Malta"
}, {
  code: "MH",
  name: "Marshall Islands"
}, {
  code: "MQ",
  name: "Martinique"
}, {
  code: "MR",
  name: "Mauritania"
}, {
  code: "MU",
  name: "Mauritius"
}, {
  code: "YT",
  name: "Mayotte"
}, {
  code: "MX",
  name: "Mexico"
}, {
  code: "FM",
  name: "Micronesia"
}, {
  code: "MD",
  name: "Moldova"
}, {
  code: "MC",
  name: "Monaco"
}, {
  code: "MN",
  name: "Mongolia"
}, {
  code: "ME",
  name: "Montenegro"
}, {
  code: "MS",
  name: "Montserrat"
}, {
  code: "MA",
  name: "Morocco"
}, {
  code: "MZ",
  name: "Mozambique"
}, {
  code: "MM",
  name: "Myanmar"
}, {
  code: "NA",
  name: "Namibia"
}, {
  code: "NR",
  name: "Nauru"
}, {
  code: "NP",
  name: "Nepal"
}, {
  code: "NL",
  name: "Netherlands"
}, {
  code: "NC",
  name: "New Caledonia"
}, {
  code: "NZ",
  name: "New Zealand"
}, {
  code: "NI",
  name: "Nicaragua"
}, {
  code: "NE",
  name: "Niger"
}, {
  code: "NG",
  name: "Nigeria"
}, {
  code: "NU",
  name: "Niue"
}, {
  code: "NF",
  name: "Norfolk Island"
}, {
  code: "MK",
  name: "North Macedonia"
}, {
  code: "MP",
  name: "Northern Mariana Islands"
}, {
  code: "NO",
  name: "Norway"
}, {
  code: "OM",
  name: "Oman"
}, {
  code: "PK",
  name: "Pakistan"
}, {
  code: "PW",
  name: "Palau"
}, {
  code: "PS",
  name: "Palestine, State of"
}, {
  code: "PA",
  name: "Panama"
}, {
  code: "PG",
  name: "Papua New Guinea"
}, {
  code: "PY",
  name: "Paraguay"
}, {
  code: "PE",
  name: "Peru"
}, {
  code: "PH",
  name: "Philippines"
}, {
  code: "PN",
  name: "Pitcairn"
}, {
  code: "PL",
  name: "Poland"
}, {
  code: "PT",
  name: "Portugal"
}, {
  code: "PR",
  name: "Puerto Rico"
}, {
  code: "QA",
  name: "Qatar"
}, {
  code: "RE",
  name: "Réunion"
}, {
  code: "RO",
  name: "Romania"
}, {
  code: "RU",
  name: "Russian Federation"
}, {
  code: "RW",
  name: "Rwanda"
}, {
  code: "BL",
  name: "Saint Barthélemy"
}, {
  code: "SH",
  name: "Saint Helena, Ascension and Tristan da Cunha"
}, {
  code: "KN",
  name: "Saint Kitts and Nevis"
}, {
  code: "LC",
  name: "Saint Lucia"
}, {
  code: "MF",
  name: "Saint Martin (French part)"
}, {
  code: "PM",
  name: "Saint Pierre and Miquelon"
}, {
  code: "VC",
  name: "Saint Vincent and the Grenadines"
}, {
  code: "WS",
  name: "Samoa"
}, {
  code: "SM",
  name: "San Marino"
}, {
  code: "ST",
  name: "Sao Tome and Principe"
}, {
  code: "SA",
  name: "Saudi Arabia"
}, {
  code: "SN",
  name: "Senegal"
}, {
  code: "RS",
  name: "Serbia"
}, {
  code: "SC",
  name: "Seychelles"
}, {
  code: "SL",
  name: "Sierra Leone"
}, {
  code: "SG",
  name: "Singapore"
}, {
  code: "SX",
  name: "Sint Maarten (Dutch part)"
}, {
  code: "SK",
  name: "Slovakia"
}, {
  code: "SI",
  name: "Slovenia"
}, {
  code: "SB",
  name: "Solomon Islands"
}, {
  code: "SO",
  name: "Somalia"
}, {
  code: "ZA",
  name: "South Africa"
}, {
  code: "GS",
  name: "South Georgia and the South Sandwich Islands"
}, {
  code: "SS",
  name: "South Sudan"
}, {
  code: "ES",
  name: "Spain"
}, {
  code: "LK",
  name: "Sri Lanka"
}, {
  code: "SD",
  name: "Sudan"
}, {
  code: "SR",
  name: "Suriname"
}, {
  code: "SJ",
  name: "Svalbard and Jan Mayen"
}, {
  code: "SE",
  name: "Sweden"
}, {
  code: "CH",
  name: "Switzerland"
}, {
  code: "SY",
  name: "Syrian Arab Republic"
}, {
  code: "TW",
  name: "Taiwan"
}, {
  code: "TJ",
  name: "Tajikistan"
}, {
  code: "TZ",
  name: "Tanzania"
}, {
  code: "TH",
  name: "Thailand"
}, {
  code: "TL",
  name: "Timor-Leste"
}, {
  code: "TG",
  name: "Togo"
}, {
  code: "TK",
  name: "Tokelau"
}, {
  code: "TO",
  name: "Tonga"
}, {
  code: "TT",
  name: "Trinidad and Tobago"
}, {
  code: "TN",
  name: "Tunisia"
}, {
  code: "TR",
  name: "Turkey"
}, {
  code: "TM",
  name: "Turkmenistan"
}, {
  code: "TC",
  name: "Turks and Caicos Islands"
}, {
  code: "TV",
  name: "Tuvalu"
}, {
  code: "UG",
  name: "Uganda"
}, {
  code: "UA",
  name: "Ukraine"
}, {
  code: "AE",
  name: "United Arab Emirates"
}, {
  code: "GB",
  name: "United Kingdom"
}, {
  code: "UM",
  name: "United States Minor Outlying Islands"
}, {
  code: "US",
  name: "United States of America"
}, {
  code: "UY",
  name: "Uruguay"
}, {
  code: "UZ",
  name: "Uzbekistan"
}, {
  code: "VU",
  name: "Vanuatu"
}, {
  code: "VE",
  name: "Venezuela"
}, {
  code: "VN",
  name: "Viet Nam"
}, {
  code: "VG",
  name: "Virgin Islands, British"
}, {
  code: "VI",
  name: "Virgin Islands, U.S."
}, {
  code: "WF",
  name: "Wallis and Futuna"
}, {
  code: "EH",
  name: "Western Sahara"
}, {
  code: "YE",
  name: "Yemen"
}, {
  code: "ZM",
  name: "Zambia"
}, {
  code: "ZW",
  name: "Zimbabwe"
}];

/***/ }),

/***/ "./src/country-block/utils/countryBlockApi.js":
/*!****************************************************!*\
  !*** ./src/country-block/utils/countryBlockApi.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCountryBlockSettings: () => (/* binding */ getCountryBlockSettings),
/* harmony export */   saveCountryBlockSettings: () => (/* binding */ saveCountryBlockSettings)
/* harmony export */ });
/**
 * Country Block API utilities
 */

const ajaxurl = countryBlock.ajaxurl;
const nonce = countryBlock.DPDEV_nonce;

/**
 * Save country block settings
 */
const saveCountryBlockSettings = async settings => {
  const response = await fetch(ajaxurl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      action: "dpdev_save_country_block_settings",
      enabled: settings.enabled ? "1" : "0",
      mode: settings.mode,
      countries: JSON.stringify(settings.countries || []),
      message: settings.message || "",
      verify_nonce: nonce
    })
  });
  const data = await response.json();
  return data;
};

/**
 * Get country block settings
 */
const getCountryBlockSettings = async () => {
  const response = await fetch(ajaxurl, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      action: "dpdev_get_country_block_settings",
      verify_nonce: nonce
    })
  });
  const data = await response.json();
  return data;
};

/***/ }),

/***/ "./src/country-block/style.scss":
/*!**************************************!*\
  !*** ./src/country-block/style.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"country-block/index": 0,
/******/ 			"country-block/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkdevkit_pro"] = globalThis["webpackChunkdevkit_pro"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["country-block/style-index"], () => (__webpack_require__("./src/country-block/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map