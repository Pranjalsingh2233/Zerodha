import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";
import { describe, expect, it } from "vitest";
import "@testing-library/jest-dom/vitest";

describe("image", () => {
  it("image visibility", () => {
    render(<Hero />);
    const heroImage = screen.getByAltText("Hero Image");
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute("src", "images/homeHero.png");
  });

  it("image location");
});
