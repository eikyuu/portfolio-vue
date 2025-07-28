import { Resend } from 'resend';

const config = useRuntimeConfig()
const resend = new Resend(config.apiSecret)

export default defineEventHandler(async (event) => {

    const body = await readBody(event)

    const html = `<div>
    <p>De : ${body.email}</p>
    <p>Sujet : ${body.subject}</p>
    <p>Message : ${body.message}</p>
    <p>Envoyé le : ${new Date().toLocaleString()}</p>
    <p>Envoyé par : ${body.email}</p>
</div>`

    const { data, error } = await resend.emails.send({
        from: 'Vincent Duguet <contact@vincentduguet.dev>',
        to: 'vincent.duguet.pro@gmail.com',
        subject: 'Nouveau message de contact',
        html: html,
    });

    if (error) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Une erreur est survenue lors de l\'envoi du message',
        });
    }

    return data;
});


