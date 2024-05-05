import { InvalidUuidError, Uuid } from "../uuid.vo";
import { validate as uuidValidate } from 'uuid';

const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate')

describe("Uuid Unit test", () => {
  test("should throw error when uuid is invalid", () => {
    expect(() => {
        new Uuid("invalid-uuid");
    }).toThrowError(new InvalidUuidError());
    expect(validateSpy).toHaveBeenCalledTimes(1);
  })


  test("should create a valid uuid", () => {
    const uuid = new Uuid();
    expect(uuid.id).toBeDefined();
    expect(uuidValidate(uuid.id)).toBe(true);
    expect(validateSpy).toHaveBeenCalledTimes(1);
  })

})