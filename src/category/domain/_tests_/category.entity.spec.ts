import { Uuid } from "../../../shared/domain/value-objects/uuid.vo";
import { Category } from "../category.entity"

describe('Category Unit Tests', () => {
  test('constructor', () => {
    const category = new Category({
      name: 'Movie'
    });
    expect(category.category_id).toBeInstanceOf(Uuid)
    expect(category.name).toBe('Movie')
    expect(category.description).toBeNull();
    expect(category.is_active).toBeTruthy();
    expect(category.created_at).toBeInstanceOf(Date);
  })
})


describe("Create command", () => {
  test("should create a category", () => {
    const category = Category.create({
      name: "Movie",
    });
    expect(category.category_id).toBeInstanceOf(Uuid)
    expect(category.name).toBe("Movie");
    expect(category.description).toBeNull();
    expect(category.is_active).toBe(true);
    expect(category.created_at).toBeInstanceOf(Date);
  })

  test("should create a category with description", () => {
    const category = Category.create({
      name: "Movie",
      description: "some description",
    });
    expect(category.category_id).toBeInstanceOf(Uuid)
    expect(category.name).toBe("Movie");
    expect(category.description).toBe("some description");
    expect(category.is_active).toBe(true);
    expect(category.created_at).toBeInstanceOf(Date);
  })


  test("should create a category with is_active", () => {
    const category = Category.create({
      name: "Movie",
      is_active: false,
    });
    expect(category.category_id).toBeInstanceOf(Uuid)
    expect(category.name).toBe("Movie");
    expect(category.description).toBeNull();
    expect(category.is_active).toBe(false);
    expect(category.created_at).toBeInstanceOf(Date);
   })

   describe("category_id field", () => {
    const arrange = [
      {category_id: null},
      {category_id: undefined},
      {category_id: new Uuid() },
    ];
    test.each(arrange)("id = %j", ({ category_id }) => {
      const category = new Category({
        name: "Movie",
        category_id: category_id as any,
      });
      expect(category.category_id).toBeInstanceOf(Uuid);
      if(category_id instanceof Uuid) {
        expect(category.category_id).toBe(category_id);
      }
    });
   });

   test("should change name", () => {
    const category = Category.create({
      name: "Movie",
    });
    category.changeName("other name");
    expect(category.name).toBe("other name");
   })

   test("should change description", () => {
    const category = Category.create({
      name: "Movie",
    });
    category.changeDescription("some description");
    expect(category.description).toBe("some description");
   })

});