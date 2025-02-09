<template>

    <TitleUnder title="Discutons de vos projets" class="mt-20 mb-20" />

    <div class="flex flex-col items-center xl:flex-row">
        <div class=" bg-number bg-opacity-85 bg-cover mb-4">
            <p class="xl:pr-10 ">📩 Vous avez un projet de développement web ou mobile en tête ? Vous souhaitez
                améliorer
                l’expérience utilisateur de votre site ou application ? Vous avez besoin d’un développeur freelance pour
                vous
                accompagner dans la création de votre projet ? N’hésitez pas à me contacter pour discuter de vos besoins
                et
                échanger sur les solutions que je peux vous apporter.
                <br><br>🚀 Je suis disponible pour des missions de développement web et mobile, de design UX/UI, de
                conseil en
                stratégie digitale, ou pour toute autre collaboration qui pourrait vous aider à atteindre vos objectifs.
                <br><br>📞 Vous pouvez me joindre par email à l’adresse <a href="mailto:vincent.duguet.pro@gmail.com"
                    class="text-[#FFC800]">vincent.duguet.pro@gmail.com</a> ou via LinkedIn. Je suis impatient de
                discuter avec
                vous et de
                contribuer à la réussite de votre projet.
            </p>
        </div>
    </div>

    <div class="bg-white z-0 relative  shadow-xl shadow-[#F2EBF4] p-5 items-center rounded-xl mt-20">
        <h2 class="font-bold text-[#5A3B5D] text-xl">Contactez-moi</h2>
        <form @submit.prevent="handleSubmit">
            <!-- subject -->
            <div class="mb-4">
                <label for="subject" class="block text-gray-700">Sujet</label>
                <input id="subject" type="text" v-model="form.subject" class="w-full border rounded p-2"
                    :class="{ 'border-red-500': errors.subject }" placeholder="Sujet du message" />
                <p v-if="errors.subject" class="text-red-500 text-sm">{{ errors.subject }}</p>
            </div>

            <!-- Email -->
            <div class="mb-4">
                <label for="email" class="block text-gray-700">Email</label>
                <input id="email" type="email" v-model="form.email" class="w-full border rounded p-2"
                    :class="{ 'border-red-500': errors.email }" placeholder="Votre email" />
                <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
            </div>

            <!-- Message -->
            <div class="mb-4">
                <label for="message" class="block text-gray-700">Message</label>
                <textarea id="message" v-model="form.message" class="w-full border rounded p-2"
                    :class="{ 'border-red-500': errors.message }" rows="5" placeholder="Votre message"></textarea>
                <p v-if="errors.message" class="text-red-500 text-sm">{{ errors.message }}</p>
            </div>

            <!-- Bouton -->
            <button type="submit"
                class="relative border rounded-md border-[#5A3B5D] hover:bg-white ease-in-out duration-300 w-52 h-10 before:content-[''] before:absolute before:bg-[#FFC800] before:left-1 before:right-0 before:top-1 before:-z-10 before:h-10 before:w-[13rem] before:rounded  ">
                Envoyer </button>

        </form>

        <!-- Message de succès -->
        <p v-if="successMessage" class="text-green-500 mt-4">{{ successMessage }}</p>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const config = useRuntimeConfig()

const postMessage = async (form: { message: string; email: string; subject: string; }): Promise<any> => {
    try {
        const response = await fetch(`${config.public.apiBase}contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form),
        });
        return await response.json();
    } catch (err) {
        console.error(err);
    }
}

// Données du formulaire
const form = reactive({
    subject: "",
    email: "",
    message: "",
});

// Erreurs de validation
const errors = reactive<{
    subject: string | null;
    email: string | null;
    message: string | null;
}>({
    subject: null,
    email: null,
    message: null,
});

// Message de succès
const successMessage = ref("");

// Validation simple
const validate = () => {
    let isValid = true;

    // Nom
    if (!form.subject.trim()) {
        errors.subject = "Le sujet est requis.";
        isValid = false;
    } else {
        errors.subject = null;
    }

    // Email
    if (!form.email.trim()) {
        errors.email = "L'email est requis.";
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        errors.email = "L'email n'est pas valide.";
        isValid = false;
    } else {
        errors.email = null;
    }

    // Message
    if (!form.message.trim()) {
        errors.message = "Le message est requis.";
        isValid = false;
    } else {
        errors.message = null;
    }

    return isValid;
};

// Gestion de la soumission
const handleSubmit = () => {
    if (validate()) {
        // Envoi du formulaire
        postMessage(form);
        successMessage.value = "Votre message a été envoyé avec succès !";

        // Réinitialisation du formulaire
        form.subject = "";
        form.email = "";
        form.message = "";
    }
};

</script>