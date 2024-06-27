/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { HospitalWhereUniqueInput } from "../../hospital/base/HospitalWhereUniqueInput";
import { PaymentCreateNestedManyWithoutAppointmentsInput } from "./PaymentCreateNestedManyWithoutAppointmentsInput";
import { EnumAppointmentStatus } from "./EnumAppointmentStatus";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class AppointmentCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  appointmentDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => HospitalWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HospitalWhereUniqueInput)
  @IsOptional()
  @Field(() => HospitalWhereUniqueInput, {
    nullable: true,
  })
  hospital?: HospitalWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => PaymentCreateNestedManyWithoutAppointmentsInput,
  })
  @ValidateNested()
  @Type(() => PaymentCreateNestedManyWithoutAppointmentsInput)
  @IsOptional()
  @Field(() => PaymentCreateNestedManyWithoutAppointmentsInput, {
    nullable: true,
  })
  payments?: PaymentCreateNestedManyWithoutAppointmentsInput;

  @ApiProperty({
    required: false,
    enum: EnumAppointmentStatus,
  })
  @IsEnum(EnumAppointmentStatus)
  @IsOptional()
  @Field(() => EnumAppointmentStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { AppointmentCreateInput as AppointmentCreateInput };
