import GillModel              from "lib/gill/model.type";
import GillModelBufferService from "lib/gill/model-buffer-service.type";
import GillProgram            from "lib/gill/program.type";
import GillRenderer           from "lib/gill/renderer.type";

class StandardGillRenderer implements GillRenderer
{
  private webglProgram  : WebGLProgram;

  private webglRenderingContext : WebGLRenderingContext;

  constructor(
    private gillModelBufferService  : GillModelBufferService,
    private gillProgram             : GillProgram
  ) {
    this.webglProgram           = gillProgram.getWebglProgram();
    this.webglRenderingContext  = gillProgram.getWebglRenderingContext();
  }

  drawModel(
    model : GillModel
  ): void
  {
    this.webglRenderingContext.useProgram(
      this.webglProgram
    );

    // Bind attributes

    this.gillProgram.forEachAttribute((attribute) => {
      const attributeName = attribute.getName(),
            attributeType = attribute.getType();

      this.webglRenderingContext.bindBuffer(
        this.webglRenderingContext.ARRAY_BUFFER,
        this.gillModelBufferService.getModelAttributeBuffer(
          model,
          attributeName,
          this.webglRenderingContext
        )
      );

      const attributeData = model.getAttributeData(
                              attributeName
                            );

      if (
        attributeData.needsBuffered()
      ) {
        const typedArrayConstructor = attributeType.getTypedArrayConstructor();

        this.webglRenderingContext.bufferData(
          this.webglRenderingContext.ARRAY_BUFFER,
          typedArrayConstructor.from(
            attributeData.getData()
          ),
          attribute.getUsage()
        );

        attributeData.setNeedsBuffered(
          false
        );
      }

      this.webglRenderingContext.vertexAttribPointer(
        attribute.getLocation(),
        attributeType.getUnitSize(),
        attributeType.getDataType(),
        attributeData.isNormalized(),
        attributeData.getStride(),
        attributeData.getOffset()
      );
    });

    this.webglRenderingContext.bindBuffer(
      this.webglRenderingContext.ARRAY_BUFFER,
      null
    );

    // Bind uniforms

    this.gillProgram.forEachUniform((uniform) => {
      const uniformType  = uniform.getType();

      const size  = uniformType.getUnitSize(),
            type  = uniformType.getDataType() === this.webglRenderingContext.FLOAT ? "f" : "i";

      const uniformFunction = `uniform${size}${type}v`;

      (<any>this.webglRenderingContext)[uniformFunction](
        uniform.getLocation(),
        model.getUniformData(
          uniform.getName()
        )
      );
    });

    const modelIndices  = model.getIndexData();

    this.webglRenderingContext.bindBuffer(
      this.webglRenderingContext.ELEMENT_ARRAY_BUFFER,
      this.gillModelBufferService.getModelIndexBuffer(
        model,
        this.webglRenderingContext
      )
    );

    if (
      model.getBufferIndices()
    ) {
      this.webglRenderingContext.bufferData(
        this.webglRenderingContext.ELEMENT_ARRAY_BUFFER,
        Uint16Array.from(
          modelIndices
        ),
        this.webglRenderingContext.STATIC_DRAW
      );

      model.setBufferIndices(
        false
      );
    }

    // Draw Elements

    this.webglRenderingContext.drawElements(
      this.webglRenderingContext.TRIANGLES,
      modelIndices.length,
      this.webglRenderingContext.UNSIGNED_SHORT,
      0
    );

    this.webglRenderingContext.bindBuffer(
      this.webglRenderingContext.ELEMENT_ARRAY_BUFFER,
      null
    );

    this.webglRenderingContext.useProgram(
      null
    );
  }
}

export default StandardGillRenderer;
