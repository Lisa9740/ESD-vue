<template>
  <div class="finance-home">
    <header>
      <h1>ASACUP</h1>
      <nav>
        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">À propos</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <section id="hero">
      <img src="../assets/pexels-photo-3183197.jpeg" alt="Image d'accueil" />
      <div class="hero-content">
        <h2>Votre partenaire financier de confiance</h2>
        <p>Des solutions sur mesure pour vos besoins financiers.</p>
        <button @click="navigateTo('contact')">Contactez-nous</button>
      </div>
    </section>

    <section id="services">
      <h3>Nos Services</h3>
      <ul>
        <li>
          <img src="../assets/pexels-pixabay-128867.jpg" alt="Conseil en investissement" />
          <h4>Conseil en investissement</h4>
          <p>Stratégies personnalisées pour optimiser vos investissements.</p>
        </li>
        <li>
          <img src="../assets/pexels-photo-3184292.jpeg" alt="Planification financière" />
          <h4>Planification financière</h4>
          <p>Planifiez votre avenir financier avec nos experts.</p>
        </li>
        <li>
          <img src="../assets/pexels-photo-6693654.jpeg" alt="Gestion de patrimoine" />
          <h4>Gestion de patrimoine</h4>
          <p>Solutions complètes pour la gestion de votre patrimoine.</p>
        </li>
      </ul>
    </section>

    <section id="about">
      <h3>À propos de nous</h3>
      <img src="../assets/pexels-photo-3184638.jpeg" alt="À propos de ASACUP" />
      <p>ASACUP est une entreprise leader dans le secteur financier, offrant des services de qualité depuis plus de 20 ans.</p>
    </section>

    <footer>
      <p>&copy; 2024 ASACUP. Tous droits réservés.</p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    navigateTo(section) {
      document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    },
    submitForm() {
      alert('Formulaire soumis avec succès !');
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
.finance-home {
  font-family: Arial, sans-serif;
  color: #333;
}

header {
  background-color: #004080;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1.5rem;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

#hero {
  text-align: center;
  padding: 3rem;
  background-color: #f0f0f0;
}

img {
  width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: cover;
}

.hero-content {
  margin-top: 2rem;
}

.hero-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
}

button {
  background-color: #004080;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #003060;
}

#services {
  padding: 2rem 1rem;
  background-color: #ffffff;
}

#services h3 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

#services ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 2rem;
  justify-content: center;
}

#services li {
  flex: 1;
  text-align: center;
  max-width: 300px;
}

#services img {
  width: 100%;
  height: 200px;
  max-height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 0.5rem;
}

#services h4 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #004080;
}

#about {
  padding: 2rem 1rem;
  background-color: #f7f7f7;
  text-align: center;
}

#about img {
  width: 100%;
  height: auto;
  max-height: 300px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
}

#about h3 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

footer {
  text-align: center;
  padding: 1rem;
  background-color: #004080;
  color: white;
  font-size: 0.875rem;
}
</style>
