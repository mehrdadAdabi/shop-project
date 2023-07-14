<template>
  <div class="container">
    <Head>
      <Title>ثبت نام در سایت</Title>
    </Head>
    <div class="parent">
      <h1>ثبت نام</h1>
      <div class="auth">
      <Form
          @submit="register"
          :validation-schema="registerSchema"
          class="auth-form"
          v-slot="{ meta }"
      >
        <div class="inputType">
        <input-component
            name="phoneNumber"
            label="شماره تلفن"
            v-model="registerData.phoneNumber"
            placeholder="شماره تلفن خود را وارد کنید"
        />
        </div>
        <div class="inputType">
        <input-component
            name="password"
            type="password"
            label="کلمه عبور"
            class="mb-3"
            v-model="registerData.password"
            placeholder="کلمه عبور  را وارد کنید"
        />
        </div>
        <div class="inputType">
        <input-component
            name="confirmPassword"
            type="password"
            label="تکرار کلمه عبور"
            class="mb-3"
            v-model="registerData.confirmPassword"
            placeholder="تکرار کلمه عبور  را وارد کنید"
        />
        </div>
        <div class="info btnSendRequest">
          <span class="loader" v-if="loading"></span>
          <button
              type="submit"
              :disabled="meta.valid == false"
              w-full
          >
            ثبت نام درسایت
          </button>
        </div>
        <div class="registered">
          <div>
            <span>قبلا ثبت نام کرده اید ؟</span>
            <nuxt-link to="/auth/login"  id="createAccount">ورود به سایت</nuxt-link>
          </div>
        </div>
      </Form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Form} from "vee-validate";
import { registerDTO } from "@/models/auth/registerDTO";
import { registerUser } from "@/service/auth.service"
import * as Yup from "yup";
import InputComponent from "~/components/input-component.vue";


definePageMeta({
  layout: "auth",
});

const registerSchema = Yup.object().shape({
  phoneNumber: Yup.string()
      .required()
      .min(11, "شماره تلفن نامعتبر است")
      .max(11, "شماره تلفن نامعتبر است"),
  password: Yup.string().required(),
  confirmPassword: Yup.string().oneOf(
      [Yup.ref("password")],
      "کلمه های عبور یکسان نیستند"
  ),
});
let registerData: registerDTO = reactive({
  phoneNumber: "",
  password: "",
  confirmPassword: "",
});
const loading = ref(false);
const router = useRouter();

const register = async () => {
  loading.value = true;
  var result = await registerUser(registerData);
  loading.value = false;
  if (result.isSuccess) {
    await router.push("/auth/login");
    alert("ok")
    //Toast
  } else {
    // Toast
    alert(result.metaData.message);
  }
};
</script>

<style>

  .text-danger{
    color: var(--danger);
    font-size: 9pt;
  }

</style>