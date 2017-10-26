import GillSourceProgramMap from "lib/gill/program/source-program-map.type";

interface GillContextSourceMap
{
  hasSources(
    webglRenderingContext : WebGLRenderingContext
  ): boolean;

  getSources(
    webglRenderingContext : WebGLRenderingContext
  ): GillSourceProgramMap;

  setSources(
    webglRenderingContext : WebGLRenderingContext,
    gillPrograms          : GillSourceProgramMap
  ): void;
}

export default GillContextSourceMap;
