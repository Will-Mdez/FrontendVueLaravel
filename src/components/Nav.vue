<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Home</router-link>
  
        <div>
          <ul class="navbar-nav me-auto mb-2 mb-md-0" v-if="!auth">
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register" class="nav-link">Register</router-link>
            </li>
            
          </ul>
  
          <ul class="navbar-nav me-auto mb-2 mb-md-0" v-if="auth">
            <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Estudiantes
          </a>
          <ul class="dropdown-menu">
            <li>
              <router-link class="dropdown-item" to="/home">Lista de estudiantes</router-link>
            </li>
            <li><hr class="dropdown-divider"></li>
            <li>
              <router-link class="dropdown-item" to="/createE">Registrar nuevo</router-link>
            </li>
          </ul>
        </li>
            <li class="nav-item">
              <a href="#" class="nav-link" @click="logout">Logout</a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  import { computed } from 'vue';
  import { useStore } from "vuex";
  
  export default {
    name: "Nav",
    setup() {
      const store = useStore();
  
      const auth = computed(() => store.state.authenticated);
  
      const logout = async () => {
        await fetch('http://localhost:8000/api/logout', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
        });
      };
  
      return {
        auth,
        logout
      };
    }
  };
</script>