import gillWebglAttributeFactory      from "app/gill/webgl/attribute/factory";
import gillWebglAttributeTypeMap      from "app/gill/webgl/attribute/type/map";
import gillWebglProgramFactory        from "app/gill/webgl/program/factory";
import gillWebglProgramServiceFactory from "app/gill/webgl/program/service/factory";
import gillWebglUniformFactory        from "app/gill/webgl/uniform/factory";
import gillWebglVariableTypeMap       from "app/gill/webgl/variable/type-map";

const gillWebglProgramService = gillWebglProgramServiceFactory.construct(
                                  gillWebglAttributeFactory,
                                  gillWebglAttributeTypeMap,
                                  gillWebglProgramFactory,
                                  gillWebglUniformFactory,
                                  gillWebglVariableTypeMap
                                );

export default gillWebglProgramService;
