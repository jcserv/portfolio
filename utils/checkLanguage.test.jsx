// const checkLocale = require("./checkLanguage");
// const en = require("../locale/locale");
import checkLocale from "./checkLanguage";
import { pt, en, de } from "../locale/locale";
// import {} from '@testing-library/react'

describe("Check and select i18n language function", () => {
  it("Return appropriat object 'en'", () => {
    expect(checkLocale("en")).toBe(en);
  });
});
