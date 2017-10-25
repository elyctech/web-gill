"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StandardGillWebglProgramFactory = function () {
    function StandardGillWebglProgramFactory(webglShaderFactory) {
        _classCallCheck(this, StandardGillWebglProgramFactory);

        this.webglShaderFactory = webglShaderFactory;
    }

    _createClass(StandardGillWebglProgramFactory, [{
        key: "construct",
        value: function construct(webglRenderingContext, vertexShaderSource, fragmentShaderSource) {
            var webglProgram = webglRenderingContext.createProgram();
            var fragmentShader = this.webglShaderFactory.construct(fragmentShaderSource, webglRenderingContext.FRAGMENT_SHADER, webglRenderingContext),
                vertexShader = this.webglShaderFactory.construct(vertexShaderSource, webglRenderingContext.VERTEX_SHADER, webglRenderingContext);
            webglRenderingContext.attachShader(webglProgram, vertexShader);
            webglRenderingContext.attachShader(webglProgram, fragmentShader);
            webglRenderingContext.linkProgram(webglProgram);
            if (!webglRenderingContext.getProgramParameter(webglProgram, webglRenderingContext.LINK_STATUS)) {
                throw "Unable to initialize the WebGL program: " + webglRenderingContext.getProgramInfoLog(webglProgram);
            }
            return webglProgram;
        }
    }]);

    return StandardGillWebglProgramFactory;
}();

exports.default = StandardGillWebglProgramFactory;