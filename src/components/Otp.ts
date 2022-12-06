import { defineComponent, h, Fragment, computed, onMounted, ref } from "vue";

export const OtpContainer = defineComponent({
  name: "OtpContainer",
  props: {
    as: {
      type: [Object, String],
      required: false,
      default: undefined,
    },
  },

  setup(props, { slots }) {
    const inputElements = ref([]);
    onMounted(() => {
      if (slots.default()) {
        for (const item of slots.default()) {
          if (item["type"].name === "OtpInput") {
            inputElements.value.push(item);
          }
        }
      }
      console.log(inputElements.value);
    });

    const tag = Fragment;
    return () => h(props.as || tag, slots.default({}));
  },
});

export const OtpInput = defineComponent({
  name: "OtpInput",
  props: {},

  setup() {
    return () => h("input");
  },
});
