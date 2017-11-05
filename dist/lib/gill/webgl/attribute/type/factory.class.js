"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _type = require("lib/gill/webgl/attribute/type.class");

var _type2 = _interopRequireDefault(_type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillWebglAttributeTypeFactory = function () {
    function StandardGillWebglAttributeTypeFactory() {
        _classCallCheck(this, StandardGillWebglAttributeTypeFactory);
    }

    _createClass(StandardGillWebglAttributeTypeFactory, [{
        key: "construct",
        value: function construct(dataType, gillWebglTypedArrayFactory, dataSize, dataIsNormalized, dataStride, dataOffset) {
            return new _type2.default(dataType, gillWebglTypedArrayFactory, dataSize, dataIsNormalized, dataStride, dataOffset);
        }
    }]);

    return StandardGillWebglAttributeTypeFactory;
}();

exports.default = StandardGillWebglAttributeTypeFactory;