import { fireEvent, render, screen } from "@testing-library/react";

import { componentRender } from "shared/config/jest/componentRender/componentRender";

import { SideBar } from "widgets/SideBar";

describe("SideBar", () => {
  test("with only params", () => {
    componentRender(<SideBar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("test toggle", () => {
    componentRender(<SideBar />);
    const button = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(button);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
  // test("with only params", () => {
  //   renderWithTranslation(<SideBar />);
  //   expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  // });
});
