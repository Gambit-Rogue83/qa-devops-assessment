const shuffle = require("../src/shuffle");

describe("shuffle should...", () => {

  it("checks that all the same items are in the array", () =>{
    expect(shuffle(array)).toContain(array)})

  it("checks that array length remains the same after shuffling", () => {
      expect(shuffle(array.length)).toHaveLength(array.length)
  })
});
