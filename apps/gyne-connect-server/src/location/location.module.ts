import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { LocationModuleBase } from "./base/location.module.base";
import { LocationService } from "./location.service";
import { LocationController } from "./location.controller";
import { LocationResolver } from "./location.resolver";

@Module({
  imports: [LocationModuleBase, forwardRef(() => AuthModule)],
  controllers: [LocationController],
  providers: [LocationService, LocationResolver],
  exports: [LocationService],
})
export class LocationModule {}
