<template>
  <div class="formElements">
    <label>{{label}}</label>
    <input
        :name="name"
        :type="type"
        :value="inputValue"
        :class="['input w100', { 'error-input': errorMessage }]"
        :placeholder="placeholder"
        @input="handleInpitChange"
    />
    <span
        class="text-danger"
        v-if="errorMessage && !ignoreErrorMessage"
    >{{ errorMessage }}</span
    >
  </div>
</template>

<script setup lang="ts">
import { useField } from "vee-validate";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  modelValue: {
    default: "",
  },
  label: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  ignoreErrorMessage: {
    type: Boolean,
    default: false,
  },
});

const {
  errorMessage,
  value: inputValue,
  handleChange,
  setValue,
} = useField(props.name, undefined, {
  initialValue: props.modelValue,
});
const emit = defineEmits(["update:modelValue"]);

watch(
    () => props.modelValue,
    (val) => {
      setValue(val);
    }
);

const handleInpitChange = (e: any) => {
  emit("update:modelValue", e.target.value);
  handleChange(e);
};
</script>

<style>
</style>