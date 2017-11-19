import GillTypedArrayFactory  from "lib/gill/typed-array/factory.type";
import GillWebglAttribute     from "lib/gill/webgl/attribute.type";
import GillWebglUniform       from "lib/gill/webgl/uniform.type";

interface GillWebglProgramService
{
  getAttribute(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
    attributeIndex        : number
  ): GillWebglAttribute;

  getUniform(
    webglRenderingContext : WebGLRenderingContext,
    webglProgram          : WebGLProgram,
    uniformIndex          : number
  ): GillWebglUniform;

  getWebglProgram(
    webglRenderingContext : WebGLRenderingContext,
    vertexShaderSource    : string,
    fragmentShaderSource  : string
  ): WebGLProgram;
}

export default GillWebglProgramService;
