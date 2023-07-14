<template>
  <div class="container">
    <Head>
      <Title>ورود به سایت</Title>
    </Head>
    <div class="parent">
      <h1>ورود به سایت</h1>
      <div class="auth">
        <Form
            @submit="loginFunc"
            :validation-schema="loginSchema"
            class="auth-form"
            v-slot="{ meta }"
        >
          <div class="inputType">
            <input-component
                name="phoneNumber"
                label="شماره تلفن"
                v-model="loginData.phoneNumber"
                placeholder="شماره تلفن خود را وارد کنید"
            />
          </div>
          <div class="inputType">
            <input-component
                name="password"
                type="password"
                label="کلمه عبور"
                class="mb-3"
                v-model="loginData.password"
                placeholder="کلمه عبور  را وارد کنید"
            />
          </div>
          <div class="info btnSendRequest">
            <span class="loader" v-if="loading"></span>
            <button
                type="submit"
                :disabled="meta.valid == false"
                w-full
            >
              ورود
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
import InputComponent from "~/components/input-component.vue";
import * as Yup from "yup";
import {loginUser} from "~/service/auth.service";

definePageMeta({
    layout: "auth"
})
  const loading=ref(false);
  const loginData=reactive({
    phoneNumber:"",
    password:"",
  })

const loginSchema=Yup.object().shape({
  phoneNumber:Yup.string().required().min(11,"شماره تلفن وارد شده معتبر نمی باشد."),
  password:Yup.string().required()
})

const loginFunc=async (data: any, FormEvent: any)=>{
  loading.value=true
  var result= await  loginUser(loginData.phoneNumber,loginData.password)
  loading.value=false;
  console.log(data,FormEvent,result)
  debugger
  if (result.isSuccess) {
    localStorage.setItem("userData",JSON.stringify(result.data));
  }
  else  FormEvent.setFieldError("phoneNumber","مشخصات کاربر مورد نظر یافت نشد.")
}

</script>
