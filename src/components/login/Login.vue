<template>
    <div class="d-flex align-center justify-center" style="height: 100vh">
        <v-sheet width="400" class="mx-auto">
            <v-form fast-fail @submit.prevent="login">
                <v-text-field v-model="username" label="User Name"></v-text-field>

                <v-text-field v-model="password" label="password"></v-text-field>
                <a href="#" class="text-body-2 font-weight-regular">Forgot Password?</a>

                <v-btn type="submit" color="primary" block class="mt-2">Sign in</v-btn>

            </v-form>
            <div class="mt-2">
                <p class="text-body-2">Don't have an account? <a href="#">Sign Up</a></p>
            </div>
        </v-sheet>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useFirebaseAuth, useCurrentUser, getCurrentUser } from 'vuefire';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default defineComponent({
    setup() {
        const username = ref('');
        const password = ref('');
        const auth = getAuth();
        const login = () => {
            createUserWithEmailAndPassword(auth,
                username.value, password.value).then((userCredential) => {
                    // Signed in 
                    const user = getCurrentUser();
                    console.log(user);
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });

        }

        return {
            username,
            password,
            login
        }
    }
})
</script>