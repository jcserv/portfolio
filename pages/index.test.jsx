// import checkLocale from "../utils/checkLanguage";
import { pt, en, de } from "../locale/locale";
import Home from "./index.jsx";
import { render } from "@testing-library/react";

const mockLanding = jest.fn();
jest.mock("../components/sections/Landing", () => (props) => {
  mockChildComponent(props);
  return <mock-landing />;
});

test("If ParentComponent rendered, ChildComponent is called with prop t (localization)", () => {
  const wrapper = shallow(<Home />);
  expect(mockLanding).toHaveBeenCalledWith(
    expect.objectContaining({
      t: en,
    })
  );
  wrapper.unmount();
});

// describe("Check return of localization object in index", () => {
//   it("Return appropriat object in index component", () => {
//     expect(checkLocale("en")).toBe(en);
//   });
// });
