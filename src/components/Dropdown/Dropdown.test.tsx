import Dropdown from "./Dropdown";
import { DropdownProps } from "./Dropdown";
import { fireEvent, render, screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/utils-for-tests";

const optionsArr = ["Option 1", "Option 2", "Option 3"];

const makeSut = (props: Partial<DropdownProps>) => {
  return renderWithProviders(
    <Dropdown
      dropdownText={"dropdownText"}
      defaultOption={"defaultOption"}
      options={optionsArr}
      stateIdentifier={"Identifier"}
      {...props}
    />
  );
};

describe("<Dropdown />", () => {
  test("Should render.", () => {
    makeSut({});
    const element = screen.getByText(/dropdownText/);
    expect(element).toBeInTheDocument();
  });
});
