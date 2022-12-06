<script setup lang="ts">
import { ref } from "vue";
import { OtpContainer, OtpInput } from "@/components/Otp";
// import { FlowBox } from "../components/FlowBox.ts";
// import { Toggle } from "../components/Toggle.ts";

// const enabled = ref(true);
// const disable = ref(false);

// const setDisabled = () => {
//   disable.value = !disable.value;
// };
</script>

<template>
  <main>Home view</main>
  <!-- <FlowBox
    as="main"
    horizontal
    :vertical="true"
    class="bg-yellow-500 w-full h-1/2"
  >
    <div class="py-10">dafhkljdha</div>
  </FlowBox> -->
  <!-- <Toggle
    :disabled="disable"
    v-slot="{ toggle, disabled }"
    v-model="enabled"
    class="bg-red-400"
  >
    <button
      @click="toggle"
      :class="[
        enabled ? 'bg-teal-900' : 'bg-teal-700',
        disabled ? 'bg-gray-700' : '',
      ]"
      class="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      <span
        :class="enabled ? 'translate-x-9' : 'translate-x-0'"
        class="pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
      />
    </button>
    {{ disabled + " is" }}

    <button @click="toggle" class="bg-red-400">toggle</button>
  </Toggle> -->
  <!-- <Toggle
    as="button"
    :disabled="disable"
    v-model="enabled"
    :class="[
      enabled ? 'bg-teal-900' : 'bg-teal-700',
      disable ? 'bg-gray-700' : '',
    ]"
    class="relative flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
  >
    <span
      :class="enabled ? 'translate-x-9' : 'translate-x-0'"
      class="pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out"
    />
  </Toggle> -->

  <!-- {{ enabled }} -->

  <!-- <button @click="setDisabled" class="bg-green-500">Set Disabled</button> -->

  <OtpContainer class="">
    <OtpInput
      class="border rounded-full bg-gray-500 text-white px-4 py-2 outline-none"
    />
    <OtpInput
      class="border rounded-full bg-gray-500 text-white px-4 py-2 outline-none"
    />
  </OtpContainer>
</template>

<style scoped>
.flower {
  height: 50vh;
  background-color: yellow;
}

p {
  margin: 200px 0;
}
</style>
