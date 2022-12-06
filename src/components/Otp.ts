import { defineComponent, h, Fragment, computed } from "vue";

export const OtpContainer = defineComponent({
  name: "OtpContainer",
  props: {
    as: {
      type: String,
      required: false,
      default: undefined,
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
    const componentTag = computed(() => {
      return props.as !== undefined ? props.as : Fragment;
    });

    return () => h("div", {}, slots);
  },
});

export const OtpInput = defineComponent({
  name: "OtpInput",
  props: {},

  setup(props, { slots }) {
    return () => h("input");
  },
});
