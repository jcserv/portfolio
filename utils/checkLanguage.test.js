// const checkLocale = require("./checkLanguage");
// const en = require("../locale/locale");
// import { de, en, pt } from "../locale/locale";
import { en } from "../locale/locale";
import checkLocale from "./checkLanguage";
// import {} from '@testing-library/react'

describe("Check and select i18n language function", () => {
  it("Return appropriat object 'en'", () => {
    expect(checkLocale("en")).toBe(en);
  });
});
