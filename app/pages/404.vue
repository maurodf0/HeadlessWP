<script setup>
const error = useError();
</script>

<template>
  <NuxtLayout>
    <div class="prose">
      <h1>OOOPS, Qualcosa è andato storto.</h1>
            <p>
              <strong>{{ error.message }}</strong>
            </p>
      <p>Scusa, ma forse questa pagina non esiste più (o non è mai stata creata).</p>
      <p>Mi dispiace.</p>
      <p>
            <NuxtLink class="primary" to="/">
              
            Torna alla Home
            </NuxtLink>
          </p>
    </div>
  </NuxtLayout>
</template>