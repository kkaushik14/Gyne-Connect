import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { HospitalModuleBase } from "./base/hospital.module.base";
import { HospitalService } from "./hospital.service";
import { HospitalController } from "./hospital.controller";
import { HospitalResolver } from "./hospital.resolver";

@Module({
  imports: [HospitalModuleBase, forwardRef(() => AuthModule)],
  controllers: [HospitalController],
  providers: [HospitalService, HospitalResolver],
  exports: [HospitalService],
})
export class HospitalModule {}
