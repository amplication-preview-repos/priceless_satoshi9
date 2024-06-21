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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { ReservationUpdateManyWithoutRestaurantsInput } from "./ReservationUpdateManyWithoutRestaurantsInput";
import { Type } from "class-transformer";
import { TableUpdateManyWithoutRestaurantsInput } from "./TableUpdateManyWithoutRestaurantsInput";

@InputType()
class RestaurantUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string | null;

  @ApiProperty({
    required: false,
    type: () => ReservationUpdateManyWithoutRestaurantsInput,
  })
  @ValidateNested()
  @Type(() => ReservationUpdateManyWithoutRestaurantsInput)
  @IsOptional()
  @Field(() => ReservationUpdateManyWithoutRestaurantsInput, {
    nullable: true,
  })
  reservations?: ReservationUpdateManyWithoutRestaurantsInput;

  @ApiProperty({
    required: false,
    type: () => TableUpdateManyWithoutRestaurantsInput,
  })
  @ValidateNested()
  @Type(() => TableUpdateManyWithoutRestaurantsInput)
  @IsOptional()
  @Field(() => TableUpdateManyWithoutRestaurantsInput, {
    nullable: true,
  })
  tables?: TableUpdateManyWithoutRestaurantsInput;
}

export { RestaurantUpdateInput as RestaurantUpdateInput };
