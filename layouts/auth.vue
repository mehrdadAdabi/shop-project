<template>
    <header>
        <h1>یکتا کالا</h1>
    </header>
  <div class="authPanel">
    <slot />
  </div>
</template>
<script setup lang="ts"></script>
<style>
header h1 {
    text-align: center;
    border-bottom: var(--border);
    padding: 10px 0;
    margin: 0;
}

p {
    margin: 0;
}

.parent {
    display: flow-root;
    width: 100%;
    margin: 20px auto 0;
}

.parent h1 {
    font-size: 20pt;
    margin: 0 auto 20px;
    text-align: center;
}

.parent .auth {
    display: flow-root;
    width: 360px;
    min-height: 220px;
    padding: 16px;
    border-radius: 10px;
    /* margin: 50px 0; */
    background: #f8f8f8;
    border: var(--border);
}

.parent .form {
    display: flow-root;
    text-align: center;
    margin-top: 15px;
}

.parent .form .inputType {
    display: flow-root;
    text-align: right;
    font-size: 10pt;
}

.formElements label {
  display: flow-root;
    font-weight: bold;
    margin: 8px 0;
}

.parent .form div input {
    margin: 10px 0;
}

.parent .btnSendRequest{
  position: relative;
}

.parent .btnSendRequest button {
    width: calc(100% - 10px);
    font-size: 13pt;
    padding: 14px 10px;
    border-radius: 10px;
    margin: 15px auto 0;
    border: unset;
    background-color: var(--hover);
    color: var(--mainColor);
}

.parent .rules {
    text-align: right;
    margin: 10px 0 4px;
    font-size: 11pt;
    color: var(--txtColor);
    line-height: 1.8;
}

#createAccount {
    display: inline-block;
    text-align: right;
    color: var(--hover);
}

.registered{
  display: flex;
  gap: 10px;
  margin-top: 10px;
}
.page-enter-active {
    transition: all 0.3s ease-out;
}

.page-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
}

button:disabled{
  background-color: #cdcccc!important;
  cursor: not-allowed;
}


/*loader*/

.loader {
  width: 20px;
  height: 20px;
  border: 5px solid #f4433670;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  background: var(--edit);
  position: absolute;
  top: 45%;
  right: 12%;
  transform: translate(-50% , 50%);
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>