<template>
  <form @submit.prevent="submit">
    <h1 class="h3 mb-3 fw-normal">Please register</h1>

    <input v-model="data.firstname" class="form-control" placeholder="Fist Name" required>
    
    <input v-model="data.last_name" class="form-control" placeholder="Last Name" required>

    <input v-model="data.email" type="email" class="form-control" placeholder="Email" required>

    <input v-model="data.password" type="password" class="form-control" placeholder="Password" required>

    <button class="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
  </form>
</template>

<script>
import { reactive } from 'vue';
import { useRouter } from "vue-router";

export default {
  name: "Register",
  setup() {
    const data = reactive({
      firstname: '',
      last_name: '',
      email: '',
      password: ''
    });
    const router = useRouter();

    const submit = async () => {
      await fetch('http://localhost:8000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      await router.push('/login');
    }

    return {
      data,
      submit
    }
  }
}
</script>