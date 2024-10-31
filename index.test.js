const { sequelize } = require("./db");
const { Restaurant, Menu } = require("./models/index");
const { seedRestaurant, seedMenu } = require("./seedData");

describe("Restaurant and Menu Models", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the
    // test suite is run
    await sequelize.sync({ force: true });
  });

  test("can create a Restaurant", async () => {
    await Restaurant.create({ name: "Zizzi" });
    const foundRestaurant = await Restaurant.findAll();
    expect(foundRestaurant).toEqual("Zizi");
  });

  test("can create a Menu", async () => {
    await Menu.create({ name: "breakfast" });
    const foundMenu = await Menu.findAll();
    expect(foundMenu).toEqual("breakfast");
  });

  test("can find Restaurants", async () => {
    await Restaurant.create({ name: "Pizza Express" });
    const restaurant = await Restaurant.findAll();
    expect(restaurant).toEqual("Pizza Express");
  });

  test("can find Menus", async () => {
    await Menu.create({ name: "Daily Special" });
    const specialMenu = await Menu.findAll();
    expect(specialMenu).toEqual("Daily Special");
  });

  test("can delete Restaurants", async () => {
    const restaurant = await Restaurant.create({
      name: "zizi",
      location: "London",
    });
    await Restaurant.destroy();
    await Restaurant.findOne({ name: "zizi", location: "london" });
    expect("restaurant").toEqual("zizi");
  });

  test("Restaurant can have many menus", async function () {
    await sequelize.sync({ force: true }); //recreate db
    let myRestaurant = await Menu.create(menus[0]);
    let myMenu1 = await Menu.create(menus[0]);
    let myMenu2 = await Menu.create(menus[1]);

    await myRestaurant.addMenu(myMenu1);
    await myRestaurant.addMenu(myMenu2);

    const associatedMenus = await myRestaurant.getMenus();
    console.log(associatedMenus);
    expect(associatedMenus.length).toBe(2);
    expect(associatedMenus instanceof Menu).toBeTruthy;
  });

  //test for Item
  test("can delete Item", async () => {
    const item = await Item.create({
      name: "salmon",
    });
    await Item.destroy();
    await Item.findOne({ name: "salmon" });
    expect("item").toEqual("salmon");
  });
});
