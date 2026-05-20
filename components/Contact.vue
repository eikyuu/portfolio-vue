<template>
  <section aria-labelledby="contact-heading">
    <TitleUnder id="contact-heading" title="Discutons de vos projets" tag="h2" class="mb-10 mt-10 xl:mb-20" />

    <p class="text-center text-brand-muted max-w-prose mx-auto mb-12">
      Une idée, un projet, un audit, un devis : écrivez-moi via le formulaire ou réservez un appel gratuit.
      Je réponds sous 48 h ouvrées.
    </p>

    <div class="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-screen-xl mx-auto">
      <!-- Colonne coordonnées (2/5) -->
      <aside class="lg:col-span-2 space-y-4">
        <a href="tel:+33659630326"
           class="card-interactive flex items-center gap-4 p-4 rounded-xl bg-white shadow-card focus-ring">
          <span class="inline-flex w-10 h-10 items-center justify-center rounded-full bg-brand-lavender text-brand-purple">
            <Phone class="w-5 h-5" aria-hidden="true" />
          </span>
          <span>
            <span class="block font-semibold text-brand-purple">Téléphone</span>
            <span class="block text-sm text-brand-muted">06&nbsp;59&nbsp;63&nbsp;03&nbsp;26</span>
          </span>
        </a>

        <a href="mailto:contact@vincentduguet.dev"
           class="card-interactive flex items-center gap-4 p-4 rounded-xl bg-white shadow-card focus-ring">
          <span class="inline-flex w-10 h-10 items-center justify-center rounded-full bg-brand-lavender text-brand-purple">
            <Mail class="w-5 h-5" aria-hidden="true" />
          </span>
          <span>
            <span class="block font-semibold text-brand-purple">Email</span>
            <span class="block text-sm text-brand-muted">contact@vincentduguet.dev</span>
          </span>
        </a>

        <a href="https://www.instagram.com/vincentduguet.dev" target="_blank" rel="noopener noreferrer"
           class="card-interactive flex items-center gap-4 p-4 rounded-xl bg-white shadow-card focus-ring">
          <span class="inline-flex w-10 h-10 items-center justify-center rounded-full bg-brand-lavender text-brand-purple">
            <Instagram class="w-5 h-5" aria-hidden="true" />
          </span>
          <span>
            <span class="block font-semibold text-brand-purple">Instagram</span>
            <span class="block text-sm text-brand-muted">@vincentduguet.dev</span>
          </span>
        </a>

        <div class="p-5 rounded-xl bg-brand-purple text-white">
          <p class="flex items-center gap-2 font-semibold">
            <CalendarCheck class="w-5 h-5" aria-hidden="true" />
            Consultation gratuite
          </p>
          <p class="text-sm text-white/85 mt-1 mb-4">
            30 minutes pour discuter de votre projet, sans engagement.
          </p>
          <ZcalEmbed text="Réserver un créneau" />
        </div>
      </aside>

      <!-- Colonne formulaire (3/5) -->
      <form @submit.prevent="handleSubmit" novalidate aria-describedby="form-instructions"
            class="lg:col-span-3 p-6 md:p-8 rounded-2xl bg-white shadow-card">
        <h3 id="form-title" class="text-h3 text-brand-purple mb-2">Écrivez-moi</h3>
        <p id="form-instructions" class="text-sm text-brand-muted mb-6">Tous les champs sont requis.</p>

        <div class="space-y-5">
          <div>
            <label for="subject" class="block text-sm font-medium mb-1">Sujet</label>
            <input id="subject" type="text" v-model="form.subject" :class="inputClass(errors.subject)"
                   placeholder="Refonte de mon site vitrine" autocomplete="off"
                   :aria-invalid="!!errors.subject" :aria-describedby="errors.subject ? 'err-subject' : undefined" />
            <p v-if="errors.subject" id="err-subject" class="text-red-600 text-sm mt-1" role="alert">{{ errors.subject }}</p>
          </div>

          <div>
            <label for="email" class="block text-sm font-medium mb-1">Email</label>
            <input id="email" type="email" v-model="form.email" :class="inputClass(errors.email)"
                   placeholder="vous@exemple.com" autocomplete="email"
                   :aria-invalid="!!errors.email" :aria-describedby="errors.email ? 'err-email' : undefined" />
            <p v-if="errors.email" id="err-email" class="text-red-600 text-sm mt-1" role="alert">{{ errors.email }}</p>
          </div>

          <div>
            <label for="message" class="block text-sm font-medium mb-1">Message</label>
            <textarea id="message" v-model="form.message" rows="6" :class="inputClass(errors.message)"
                      placeholder="Décrivez votre projet, vos contraintes, votre échéance…"
                      :aria-invalid="!!errors.message" :aria-describedby="errors.message ? 'err-message' : undefined" />
            <p v-if="errors.message" id="err-message" class="text-red-600 text-sm mt-1" role="alert">{{ errors.message }}</p>
          </div>
        </div>

        <Button
          class="mt-8"
          type="submit"
          :disabled="isSubmitting"
          aria-label="Envoyer le message"
          :text="isSubmitting ? 'Envoi en cours…' : 'Envoyer le message'"
          color="secondary"
        />

        <!-- Feedback -->
        <div v-if="successMessage"
             class="mt-6 flex items-start gap-3 p-4 rounded-xl bg-green-50 border border-green-200"
             role="status">
          <CheckCircle2 class="w-5 h-5 text-green-700 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p class="font-semibold text-green-800">Message envoyé</p>
            <p class="text-sm text-green-700">{{ successMessage }}</p>
          </div>
        </div>

        <div v-if="error"
             class="mt-6 flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200"
             role="alert">
          <AlertCircle class="w-5 h-5 text-red-700 shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <p class="font-semibold text-red-800">Une erreur est survenue</p>
            <p class="text-sm text-red-700">{{ error }} Vous pouvez aussi m’écrire directement à
              <a href="mailto:contact@vincentduguet.dev" class="underline">contact@vincentduguet.dev</a>.
            </p>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { Phone, Mail, Instagram, CalendarCheck, CheckCircle2, AlertCircle } from 'lucide-vue-next';

const form = reactive({ subject: "", email: "", message: "" });

const errors = reactive<{
  subject: string | null;
  email: string | null;
  message: string | null;
}>({ subject: null, email: null, message: null });

const successMessage = ref("");
const error = ref("");
const isSubmitting = ref(false);

let supabaseClient: SupabaseClient | null = null;
const getSupabase = (): SupabaseClient => {
  if (!supabaseClient) {
    const config = useRuntimeConfig();
    supabaseClient = createClient(config.public.supabaseUrl, config.public.supabaseKey);
  }
  return supabaseClient;
};

const inputClass = (hasError: string | null) =>
  `w-full border rounded-lg p-3 focus:ring-2 focus:ring-brand-yellow focus:outline-none transition ${
    hasError ? "border-red-500" : "border-gray-300"
  }`;

const validate = () => {
  let valid = true;

  if (!form.subject.trim()) { errors.subject = "Le sujet est requis."; valid = false }
  else { errors.subject = null }

  if (!form.email.trim()) { errors.email = "L'email est requis."; valid = false }
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { errors.email = "L'email n'est pas valide."; valid = false }
  else { errors.email = null }

  if (!form.message.trim()) { errors.message = "Le message est requis."; valid = false }
  else { errors.message = null }

  return valid;
};

const postMessage = async (formData: typeof form): Promise<boolean> => {
  try {
    const { error: supaError } = await getSupabase().functions.invoke("resend", { body: formData });
    if (supaError) throw supaError;
    successMessage.value = "Votre message a bien été envoyé. Je vous réponds sous 48 h ouvrées.";
    return true;
  } catch (err) {
    console.error("contact form error", err);
    error.value = "L’envoi a échoué.";
    return false;
  }
};

const handleSubmit = async () => {
  if (isSubmitting.value) return;
  successMessage.value = "";
  error.value = "";
  if (!validate()) return;

  isSubmitting.value = true;
  try {
    const ok = await postMessage(form);
    if (ok) {
      form.subject = "";
      form.email = "";
      form.message = "";
    }
  } finally {
    isSubmitting.value = false;
  }
};
</script>
