<template>
  <div class="about">
    <form @submit.prevent="addUser" class="formContainer">
      <input placeholder="Введите имя" type="text">
      <input placeholder="Пароль" type="password">
      <button>
        Регистрация
      </button>
    </form>
  </div>
</template>


<script>
import { useRouter } from 'vue-router'

export default {
  data() {
    return {
      router: useRouter()
    }
  },
  methods: {
    addUser(e) {
      const obj = { name: e.target[0].value, password: e.target[1].value }

      fetch('http://localhost:3004/newUser', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj),
      })
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('name',data.name)
        localStorage.setItem('id',data.id)
        this.router.push({name:'mainPage'})
      })

    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.formContainer {
  display: flex;
  flex-direction: column;
}
</style>
