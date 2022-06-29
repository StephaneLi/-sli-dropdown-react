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

require('./style.css')

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

var Dropdown = function (_a) {
    var label = _a.label, name = _a.name, _b = _a.errorMessage, errorMessage = _b === void 0 ? "Erreur message" : _b, _c = _a.error, error = _c === void 0 ? false : _c, choicies = _a.choicies, _d = _a.value, value = _d === void 0 ? '' : _d, _e = _a.borderColor, borderColor = _e === void 0 ? '#DADCE0' : _e, _f = _a.textColor, textColor = _f === void 0 ? '#70757A' : _f, _g = _a.focusColor, focusColor = _g === void 0 ? '#059ECE' : _g, _h = _a.errorColor, errorColor = _h === void 0 ? '#EF6C6C' : _h, _j = _a.borderRadius, borderRadius = _j === void 0 ? '5px' : _j, _k = _a.zIndex, zIndex = _k === void 0 ? 1 : _k, onSelect = _a.onSelect;
    var inputElement = react.useRef(null);
    var _l = react.useState(false), showOptions = _l[0], setShowOptions = _l[1];
    var _m = react.useState(value), inputValue = _m[0], setInputValue = _m[1];
    react.useEffect(function () {
        setInputValue(value);
    }, [value]);
    /**
     * Expand choicies
     */
    var displayOptions = function () {
        var _a;
        (_a = inputElement.current) === null || _a === void 0 ? void 0 : _a.focus();
        setShowOptions(!showOptions);
    };
    /**
     * Select choice
     */
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
        } }, { children: [jsxRuntime.jsxs("div", __assign({ "data-testid": "dropdown", onClick: displayOptions, className: "dropdown__input".concat(inputValue !== '' ? ' dropdown__input--active' : '').concat(error ? ' dropdown__input--error' : '') }, { children: [jsxRuntime.jsx("label", __assign({ htmlFor: name }, { children: label })), jsxRuntime.jsxs("div", __assign({ className: "dropdown__input__content" }, { children: [jsxRuntime.jsx("input", { id: name, "data-testid": "input", ref: inputElement, name: name, readOnly: true, onBlur: function () { return setShowOptions(false); }, value: inputValue }), jsxRuntime.jsx("i", { children: jsxRuntime.jsx(reactFontawesome.FontAwesomeIcon, { icon: freeSolidSvgIcons.faAngleDown }) })] })), error && (jsxRuntime.jsx("p", __assign({ className: "dropdown__input__error-message" }, { children: errorMessage })))] })), jsxRuntime.jsx("div", __assign({ className: "dropdown__choicies".concat(error ? ' dropdown__choicies--error' : '') }, { children: jsxRuntime.jsx("ul", { children: choicies.map(function (element, index) { return (jsxRuntime.jsx("li", __assign({ onClick: onClickOption }, { children: element }), 'option-' + index)); }) }) }))] })));
};

exports["default"] = Dropdown;
//# sourceMappingURL=index.js.map
