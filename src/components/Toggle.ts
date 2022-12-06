import { Fragment, ref, defineComponent, h, computed } from "vue";

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
      type: [Object, String],
      default: undefined,
    },
  },

  emits: ["update:modelValue"],

  setup(props, { slots, emit }) {
    // exposed function for manual control from parent
    const handleToggle = (event: MouseEvent | KeyboardEvent) => {
      event.preventDefault();
      if (props.disabled) {
        return;
      }
      emit("update:modelValue", !props.modelValue);
    };

    const handleClick = (event: MouseEvent) => {
      if (!props.disabled && props.as !== undefined) {
        event.preventDefault();
        emit("update:modelValue", !props.modelValue);
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      const spaceKey = " ";
      if (event.key === spaceKey && !props.disabled && props.as !== undefined) {
        event.preventDefault();
        emit("update:modelValue", !props.modelValue);
      }
    };

    const setTabIndex = computed(() => {
      return props.as !== undefined ? 0 : -1;
    });

    // const componentTag = computed(() => {
    //   return props.as !== undefined ? props.as : Fragment;
    // });
    const tag = Fragment;
    return () =>
      h(
        props.as || tag,
        {
          tabindex: setTabIndex.value,
          onKeyup: handleKeyUp,
          onClick: handleClick,
        },
        slots.default({ toggle: handleToggle, disabled: props.disabled })
      );
  },
});
