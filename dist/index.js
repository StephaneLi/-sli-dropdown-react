

function ___$insertStyle(css) {
    if (!css || typeof window === 'undefined') {
        return;
    }
    const style = document.createElement('style');
    style.setAttribute('type', 'text/css');
    style.innerHTML = css;
    document.head.appendChild(style);
    return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');
var reactFontawesome = require('@fortawesome/react-fontawesome');
var react = require('react');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

___$insertStyle(".dropdown {\n  font-family: Arial, Helvetica, sans-serif;\n  position: relative;\n  width: 100%;\n  max-width: 250px;\n  min-height: 30px;\n  margin-top: 20px;\n  margin-bottom: 30px;\n  cursor: pointer;\n}\n.dropdown--show .dropdown__input label, .dropdown--show .dropdown__input i {\n  color: var(--focus-color) !important;\n}\n.dropdown--show .dropdown__choicies {\n  max-height: 170px;\n  border-color: var(--focus-color);\n}\n.dropdown--show i {\n  transform: rotate(180deg);\n}\n.dropdown__input {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  cursor: inherit;\n}\n.dropdown__input label, .dropdown__input input {\n  padding: 5px 10px;\n  height: 30px;\n  cursor: inherit;\n  z-index: 2;\n  color: var(--text-color);\n}\n.dropdown__input label {\n  position: absolute;\n  top: 0;\n  left: 0;\n  line-height: 30px;\n  font-size: 1.2rem;\n  opacity: 0.5;\n  transform-origin: center left;\n  transition: transform 0.15s ease-in-out;\n  z-index: 3;\n  pointer-events: none;\n}\n.dropdown__input__error-message {\n  position: absolute;\n  right: 0;\n  top: 30px;\n  font-size: 0.6rem;\n  color: var(--error-color) !important;\n  animation: error 0.25s ease-in both;\n}\n.dropdown__input__content {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border: none;\n  width: 100%;\n}\n.dropdown__input__content i {\n  position: absolute;\n  right: 0;\n  width: 40px;\n  height: 30px;\n  line-height: 30px;\n  text-align: center;\n  transition: transform 0.15s ease-in-out;\n  z-index: 2;\n  color: var(--text-color);\n  pointer-events: none;\n}\n.dropdown__input__content input {\n  flex: 1 1 auto;\n  width: 100%;\n  outline: none;\n  border: none;\n  font-size: 1rem;\n  background: transparent;\n  padding-right: 28px;\n  text-overflow: ellipsis;\n}\n.dropdown__input--error label, .dropdown__input--error input, .dropdown__input--error i {\n  color: var(--error-color) !important;\n}\n.dropdown__input--active label {\n  font-size: 16px !important;\n  opacity: 1;\n  transform: translate(-5px, -30px) scale(0.85);\n}\n.dropdown__choicies {\n  position: absolute;\n  min-height: 38px;\n  top: 0;\n  width: 100%;\n  margin: 0;\n  z-index: 1;\n  max-height: 28px;\n  background-color: white;\n  overflow: hidden;\n  border: 1px solid var(--border-color);\n  color: var(--text-color);\n  border-radius: var(--border-radius);\n  transition: max-height 0.3s ease-in-out;\n}\n.dropdown__choicies ul {\n  margin: 0;\n  padding: 0;\n  margin-top: 38px;\n  overflow-y: auto;\n  height: 100%;\n  max-height: 140px;\n}\n.dropdown__choicies li {\n  list-style: none;\n  text-align: left !important;\n  position: relative;\n  padding: 2px 10px;\n  font-size: 0.9rem;\n  color: var(--text-color);\n}\n.dropdown__choicies li::before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  content: \"\";\n  height: 100%;\n  width: 100%;\n  background-color: var(--focus-color) !important;\n  opacity: 0;\n}\n.dropdown__choicies li:hover {\n  color: var(--focus-color) !important;\n}\n.dropdown__choicies li:hover::before {\n  opacity: 0.2;\n}\n.dropdown__choicies li:last-child {\n  padding-bottom: 10px;\n}\n.dropdown__choicies--error {\n  border: 1px solid var(--error-color);\n}\n\n@keyframes error {\n  0% {\n    opacity: 0;\n    transform: translateX(3px);\n  }\n  25% {\n    transform: translateX(-3px);\n  }\n  50% {\n    transform: translateX(3px);\n  }\n  75% {\n    transform: translateX(-3px);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0px);\n  }\n}");

var Dropdown = function (_a) {
    var label = _a.label, name = _a.name, _b = _a.errorMessage, errorMessage = _b === void 0 ? "Erreur message" : _b, _c = _a.error, error = _c === void 0 ? false : _c, choicies = _a.choicies, _d = _a.value, value = _d === void 0 ? '' : _d, _e = _a.borderColor, borderColor = _e === void 0 ? '#DADCE0' : _e, _f = _a.textColor, textColor = _f === void 0 ? '#70757A' : _f, _g = _a.focusColor, focusColor = _g === void 0 ? '#059ECE' : _g, _h = _a.errorColor, errorColor = _h === void 0 ? '#EF6C6C' : _h, _j = _a.borderRadius, borderRadius = _j === void 0 ? '5px' : _j, _k = _a.zIndex, zIndex = _k === void 0 ? 1 : _k, onSelect = _a.onSelect;
    var inputElement = react.useRef(null);
    var _l = react.useState(false), showOptions = _l[0], setShowOptions = _l[1];
    var _m = react.useState(value), inputValue = _m[0], setInputValue = _m[1];
    react.useEffect(function () {
        setInputValue(value);
    }, [value]);
    var displayOptions = function () {
        var _a;
        (_a = inputElement.current) === null || _a === void 0 ? void 0 : _a.focus();
        setShowOptions(!showOptions);
    };
    var onClickOption = function (e) {
        var _a;
        setInputValue(e.currentTarget.innerHTML);
        (_a = inputElement.current) === null || _a === void 0 ? void 0 : _a.blur();
        if (onSelect)
            onSelect(e.currentTarget.innerHTML);
    };
    return (jsxRuntime.jsxs("div", __assign({ "data-testid": "container", className: "dropdown".concat(showOptions ? ' dropdown--show' : ''), style: {
            zIndex: zIndex,
            '--text-color': textColor,
            '--focus-color': focusColor,
            '--error-color': errorColor,
            '--border-color': borderColor,
            '--border-radius': borderRadius,
        } }, { children: [jsxRuntime.jsxs("div", __assign({ "data-testid": "dropdown", onClick: displayOptions, className: "dropdown__input".concat(inputValue !== '' ? ' dropdown__input--active' : '').concat(error ? ' dropdown__input--error' : '') }, { children: [jsxRuntime.jsx("label", __assign({ htmlFor: name }, { children: label })), jsxRuntime.jsxs("div", __assign({ className: "dropdown__input__content" }, { children: [jsxRuntime.jsx("input", { "data-testid": "input", ref: inputElement, name: name, readOnly: true, onBlur: function () { return setShowOptions(false); }, value: inputValue }), jsxRuntime.jsx("i", { children: jsxRuntime.jsx(reactFontawesome.FontAwesomeIcon, { icon: freeSolidSvgIcons.faAngleDown }) })] })), error && (jsxRuntime.jsx("p", __assign({ className: "dropdown__input__error-message" }, { children: errorMessage })))] })), jsxRuntime.jsx("div", __assign({ className: "dropdown__choicies".concat(error ? ' dropdown__choicies--error' : '') }, { children: jsxRuntime.jsx("ul", { children: choicies.map(function (element, index) { return (jsxRuntime.jsx("li", __assign({ onClick: onClickOption }, { children: element }), 'option-' + index)); }) }) }))] })));
};

exports["default"] = Dropdown;
//# sourceMappingURL=index.js.map
