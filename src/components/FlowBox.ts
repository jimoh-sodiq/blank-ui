import { defineComponent, h } from "vue";

// show as a div or main etc
// height and width can be overridden by passing in a style object with the height
// can be styled
// option to specify overflow direction vertical or horizontal: boolean values

export const FlowBox = defineComponent({
  name: "FlowBox",
  props: {
    as: {
      type: String,
      required: false,
      default: "div",
    },
    vertical: {
      type: Boolean,
      default: true,
    },
    horizontal: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { slots }) {
    return () =>
      h(
        props.as,
        {
          style: {
            overflowY: props.vertical ? "auto" : "hidden",
            overflowX: props.horizontal ? "auto" : "hidden",
          },
        },
        slots
      );
  },
});
