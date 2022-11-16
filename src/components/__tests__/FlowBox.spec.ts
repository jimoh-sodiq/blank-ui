import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { FlowBox } from "../FlowBox";

describe("FlowBox.ts", () => {
  it("renders the component correctly", () => {
    const wrapper = mount(FlowBox);
    expect(wrapper).toBeDefined();
  });

  it("has div as the default tag", () => {});

  it("uses the as props as the tag", () => {});

  it("receives vertical and horizontal props", () => {});

  it("has a overflow-y-auto if vertical props is true", () => {});

  it("has a overflow-x-auto if horizontal props is true", () => {});
});
