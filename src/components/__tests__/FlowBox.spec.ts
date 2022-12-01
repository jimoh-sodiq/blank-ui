import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import { FlowBox } from "../FlowBox";

describe("FlowBox.ts", () => {
  it("renders the component correctly", () => {
    const wrapper = mount(FlowBox, {});
    expect(wrapper).toBeDefined();
  });

  it("has div as the default tag", () => {
    const wrapper = mount(FlowBox, {});
    expect(wrapper.find("div")).toBeDefined();
  });

  it("uses the as props as the tag", () => {
    const wrapper = mount(FlowBox, {
      props: {
        as: "section",
      },
    });
    expect(wrapper.findAll("div")).toHaveLength(0);
    expect(wrapper.findAll("section")).toHaveLength(1);
  });

  it("has a overflow-y-auto if vertical props is true", () => {
    const wrapper = mount(FlowBox);
    expect(wrapper.element.style.overflowY).toBe("auto");
  });

  it("has a overflow-x-auto if horizontal props is true", () => {
    const wrapper = mount(FlowBox, {
      props: {
        horizontal: true,
        vertical: false,
      },
    });
    expect(wrapper.element.style.overflowX).toBe("auto");
    expect(wrapper.element.style.overflowY).toBe("hidden");
  });
});
