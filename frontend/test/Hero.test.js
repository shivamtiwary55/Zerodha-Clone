import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
  test("renders the hero component with correct content", () => {
    render(<Hero />);

    const heroImage = screen.getByAltText("heroimage");

    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute(
      "src",
      expect.stringContaining("Media/Images/HomeHero.png")
    );
  });
});