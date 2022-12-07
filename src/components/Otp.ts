import { defineComponent, h, Fragment, computed, onMounted, ref } from "vue";
import type { Ref, VNode } from "vue";

export const OtpContainer = defineComponent({
  name: "OtpContainer",
  props: {
    as: {
      type: [Object, String],
      required: false,
      default: undefined,
    },
  },
  emits: ["update:modelValue"],

  setup(props, { slots, emit }: any) {
    // const inputCount = computed(() => {
    //   const slotCount = slots
    //     .default()
    //     .filter((slot: VNode) => slot.type === OtpInput).length;
    //   return slotCount;
    // });

    // initalize empty otp input values
    const otpInputRefs = ref(new Array(slots.default().length).fill(""));
    const otpHandler = ref(new Array(slots.default().length).fill(""));

    // the value to be sent to parent scope
    const otpValue = computed(() => {
      return otpHandler.value.join("");
    });

    const handleInput = (e: InputEvent, index: number) => {
      const targetValue = (e.target as HTMLInputElement).value;
      const temporalOtp = [...otpHandler.value];
      temporalOtp[index] = targetValue.substring(targetValue.length - 1);
      otpHandler.value = temporalOtp;
      emit("update:modelValue", otpValue.value);
      // console.log(otpHandler.value);
    };

    const handleKeyup = (e: KeyboardEvent, index: number) => {
      if (
        (!otpInputRefs.value[index].value || otpInputRefs.value[index].value) &&
        e.key === "ArrowRight"
      ) {
        e.preventDefault();
        focusNext(index);
        // console.log(otpInputRefs.value[index]);
      }
      if (otpInputRefs.value[index].value) {
        e.preventDefault();
        focusNext(index);
      }

      if (
        (!otpInputRefs.value[index].value || otpInputRefs.value[index].value) &&
        e.key === "ArrowLeft"
      ) {
        e.preventDefault();
        focusPrev(index);
        // console.log(otpInputRefs.value[index]);
      }
      if (!otpInputRefs.value[index].value && e.key === "Backspace") {
        e.preventDefault();
        focusPrev(index);
        // console.log(otpInputRefs.value[index]);
      }
    };

    const focusNext = (currentIndex: number) => {
      for (let i = currentIndex + 1; i < otpInputRefs.value.length; i++) {
        // console.log(otpInputRefs.value[i]);
        if (otpInputRefs.value[i] !== "") {
          if (otpInputRefs.value[i].disabled) {
            continue;
          }
          otpInputRefs.value[i].focus();
          return;
        }
      }
      return;
    };

    const focusPrev = (currentIndex: number) => {
      for (let i = currentIndex - 1; i >= 0; i--) {
        if (otpInputRefs.value[i] !== "") {
          if (otpInputRefs.value[i].disabled) {
            continue;
          }
          otpInputRefs.value[i].focus();
          return;
        }
      }
      return;
    };

    console.log(otpInputRefs.value);
    // onMounted(() => {
    //   inputCount.value;
    //   if (slots.default()) {
    //     for (const item of slots.default()) {
    //       if (item["type"].name === "OtpInput") {
    //         inputElements.value.push(item);
    //       }
    //     }
    //   }
    // });

    // const inputs = slots
    //   .default()
    //   .filter((slot: VNode) => slot.type === OtpInput)
    //   .map((input: VNode) => {
    //     return h(input, { onInput: handleClick });
    //   });

    const tag = Fragment;
    return () =>
      h(
        props.as || tag,
        slots.default().map((slot: any, i: number) => {
          return slot.type === OtpInput
            ? h("input", {
                onKeyup: (event: KeyboardEvent) => handleKeyup(event, i),
                onInput: (event: InputEvent) => handleInput(event, i),
                ref: (el) => {
                  otpInputRefs.value[i] = el;
                },
                disabled: slot.props.disabled,
                class: slot.props.class,
                type: slot.props.type,
                value: otpHandler.value[i],
              })
            : h(slot);
        })
      );
  },
});

export const OtpInput = defineComponent({
  name: "OtpInput",
  setup() {
    return () => h("input");
  },
});
