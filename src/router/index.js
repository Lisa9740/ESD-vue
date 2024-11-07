import { createRouter, createWebHistory } from 'vue-router';


import Home from '@/components/HomeComponent.vue';
import SecretPage from '@/components/SecretPage.vue';


// Définir les routes de l'application
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
      },
      {
        path: '/secret',
        name: 'SecretPage',
        component: SecretPage,
      },
];

// Créer une instance de Vue Router
const router = createRouter({
    history: createWebHistory(),  // Utilisez le mode 'history' pour des URLs propres
    routes
});

export default router;
