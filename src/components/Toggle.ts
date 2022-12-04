import { Fragment, ref, defineComponent, h } from "vue";

export const Toggle = defineComponent({
  name: "TheToggle",
  props: {
    modelValue: {
      type: Boolean,
      required: true,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    as: {
      type: String
    },
  },

  emits: ["update:modelValue"],

  setup(props, { slots, emit, expose }) {
    const toggleComponentRef = ref();

    const handleClick = (event: MouseEvent) => {
      event.preventDefault();
      if (props.disabled) {
        return;
      }
      emit("update:modelValue", !props.modelValue);
    };

    const handleKeyEvents = (event: KeyboardEvent) => {
      const spaceKey = " ";
      if (event.key === spaceKey && !props.disabled) {
        event.preventDefault();
        emit("update:modelValue", !props.modelValue);
      }

      return;
    };

    expose({ toggleComponentRef });

    return () =>
      h(
        props.as || Fragment,
        { tabindex: 0, onKeyup: handleKeyEvents },
        slots.default({ toggle: handleClick, disabled: props.disabled })
      );
  },
});
