import { ButtonInfoProp } from "./PrimaryButton";
import PrimaryButton from "./PrimaryButton";
import { fireEvent, render, screen } from "@testing-library/react";

const makeSut = (props: Partial<ButtonInfoProp>) => {
  return render(
    <PrimaryButton buttonText="buttonText" onClick={jest.fn()} {...props} />
  );
};

describe("<PrimaryButton/>", () => {
  
  test("Should render.", () => {
    makeSut({ buttonText: "buttonText" });

    expect(screen.getByText("buttonText")).toBeInTheDocument();
  });

  test("Should call onClick successfully.", () => {
    const spy = jest.fn();

    makeSut({ onClick: spy });

    fireEvent.click(screen.getByText(/buttonText/));

    expect(spy).toHaveBeenCalled();
  });
});
