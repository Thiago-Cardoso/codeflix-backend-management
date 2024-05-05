import { IsString, MaxLength  } from "class-validator";

class CategoryRules {
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  name: string;
  description: string | null;
  is_active: boolean;
}

class CategoryValidator {

}