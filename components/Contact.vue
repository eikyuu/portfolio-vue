<template>
    <section aria-labelledby="contact-heading">
      <TitleUnder
        id="contact-heading"
        title="Discutons de vos projets"
        tag="h2"
        class="mb-10 mt-10 xl:mb-20"
      />
  
      <div class="flex flex-col items-center xl:flex-row">
        <div
          class="bg-number bg-opacity-85 bg-cover mb-4 flex flex-col items-center xl:flex-row xl:justify-between"
        >
          <figure class="xl:w-1/2">
            <NuxtImg
              class="rounded-md mb-10 xl:mb-0"
              src="bulle-de-contact-vert-fond-jaune.jpg"
              width="640"
              height="426"
              format="webp"
              loading="lazy"
              alt="Illustration d’une bulle verte sur fond jaune évoquant la communication"
            />
            <figcaption class="sr-only">
              Cette image représente une bulle de conversation vert fluo sur un fond jaune vif, conçue pour
              inciter à l'interaction et à la communication.
            </figcaption>
          </figure>
  
          <div class="xl:pr-10 xl:pl-5 xl:w-1/2 text-center xl:text-left px-4">
            <p class="mb-4">
              📩 Vous avez un projet de développement web ou mobile ? Vous souhaitez améliorer l’expérience utilisateur de votre site ou application ? N’hésitez pas à me contacter pour échanger.
            </p>
            <p class="mb-4">
              🚀 Je suis disponible pour des missions de développement web et mobile, de design UX/UI, de conseil en stratégie digitale, ou pour toute autre collaboration pour atteindre vos objectifs.
            </p>
            <p>
              📞 Contactez-moi par email à
              <a
                href="mailto:vincent.duguet.pro@gmail.com"
                class="text-[#FFC800] underline focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[#FFC800]"
              >
                vincent.duguet.pro@gmail.com
              </a>
              ou via LinkedIn.
            </p>
          </div>
        </div>
      </div>
  
      <ZcalEmbed class="mt-5" text="Je suis disponible pour une consultation gratuite" />
  
      <div
        class="bg-white z-0 relative shadow-xl shadow-[#F2EBF4] p-5 items-center rounded-xl mt-10 mx-auto"
        aria-labelledby="form-title"
      >
        <h2 id="form-title" class="font-bold text-[#5A3B5D] text-xl mb-4">Contactez-moi</h2>
  
        <form @submit.prevent="handleSubmit" novalidate aria-describedby="form-instructions">
          <p id="form-instructions" class="sr-only">Tous les champs sont requis.</p>
  
          <!-- Sujet -->
          <div class="mb-4">
            <label for="subject" class="block text-gray-700 font-medium">Sujet</label>
            <input
              id="subject"
              type="text"
              v-model="form.subject"
              :class="inputClass(errors.subject)"
              placeholder="Sujet du message"
              autocomplete="off"
            />
            <p v-if="errors.subject" class="text-red-500 text-sm mt-1" role="alert">{{ errors.subject }}</p>
          </div>
  
          <!-- Email -->
          <div class="mb-4">
            <label for="email" class="block text-gray-700 font-medium">Email</label>
            <input
              id="email"
              type="email"
              v-model="form.email"
              :class="inputClass(errors.email)"
              placeholder="Votre email"
              autocomplete="email"
            />
            <p v-if="errors.email" class="text-red-500 text-sm mt-1" role="alert">{{ errors.email }}</p>
          </div>
  
          <!-- Message -->
          <div class="mb-4">
            <label for="message" class="block text-gray-700 font-medium">Message</label>
            <textarea
              id="message"
              v-model="form.message"
              rows="5"
              :class="inputClass(errors.message)"
              placeholder="Votre message"
            ></textarea>
            <p v-if="errors.message" class="text-red-500 text-sm mt-1" role="alert">{{ errors.message }}</p>
          </div>
  
          <!-- Bouton -->
          <Button
            type="submit"
            aria-label="Envoyer le message"
            text="Envoyer le message"
            color="secondary"
          />
        </form>
  
        <!-- Feedback -->
        <p v-if="successMessage" class="text-green-600 mt-4" role="status">{{ successMessage }}</p>
        <p v-if="error" class="text-red-600 mt-4" role="alert">{{ error }}</p>
      </div>
    </section>
  </template>
  


  <script setup lang="ts">
  import { reactive, ref } from "vue";
  import { createClient } from "@supabase/supabase-js";
  
  useHead({
    htmlAttrs: { lang: "fr" },
  });
  
  const form = reactive({
    subject: "",
    email: "",
    message: "",
  });
  
  const errors = reactive<{
    subject: string | null;
    email: string | null;
    message: string | null;
  }>({
    subject: null,
    email: null,
    message: null,
  });
  
  const successMessage = ref("");
  const error = ref("");
  
  const inputClass = (hasError: string | null) =>
    `w-full border rounded p-2 focus:ring-2 focus:ring-[#FFC800] focus:outline-none ${
      hasError ? "border-red-500" : "border-gray-300"
    }`;
  
  const validate = () => {
    let valid = true;
  
    if (!form.subject.trim()) {
      errors.subject = "Le sujet est requis.";
      valid = false;
    } else {
      errors.subject = null;
    }
  
    if (!form.email.trim()) {
      errors.email = "L'email est requis.";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errors.email = "L'email n'est pas valide.";
      valid = false;
    } else {
      errors.email = null;
    }
  
    if (!form.message.trim()) {
      errors.message = "Le message est requis.";
      valid = false;
    } else {
      errors.message = null;
    }
  
    return valid;
  };
  
  const postMessage = async (formData: typeof form) => {
    try {
      const config = useRuntimeConfig();
      const supabase = createClient(config.public.supabaseUrl, config.public.supabaseKey);
  
      const { data, error: supaError } = await supabase.functions.invoke("resend", {
        body: formData,
      });
  
      if (supaError) throw supaError;
  
      successMessage.value = "Votre message a été envoyé avec succès !";
    } catch (err) {
      error.value = "Une erreur est survenue lors de l'envoi du message.";
    }
  };
  
  const handleSubmit = async () => {
    successMessage.value = "";
    error.value = "";
  
    if (validate()) {
      await postMessage(form);
  
      form.subject = "";
      form.email = "";
      form.message = "";
    }
  };
  </script>
  