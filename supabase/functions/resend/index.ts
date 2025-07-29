const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');

const handler = async (_request: Request): Promise<Response> => {
  // Handle CORS preflight
  if (_request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
      },
    });
  }

  // Only handle POST requests
  if (_request.method === 'POST') {
    try {
      const body = await _request.json();

      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: 'Vincent Duguet <contact@vincentduguet.dev>',
          to: 'vincent.duguet.pro@gmail.com',
          subject: body.subject,
          html: `<div>
                    <p>De : ${body.email}</p>
                    <p>Sujet : ${body.subject}</p>
                    <p>Message : ${body.message}</p>
                    <p>Envoyé le : ${new Date().toLocaleString()}</p>
                    <p>Envoyé par : ${body.email}</p>
                </div>`,
        }),
      });

      const data = await res.json();

      return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error(error);
      return new Response(JSON.stringify({ error: error.message || error.toString() }), {
        status: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
        },
      });
    }
  }

  // For all other methods
  return new Response('Method Not Allowed', {
    status: 405,
    headers: {
      'Allow': 'POST, OPTIONS',
      'Access-Control-Allow-Origin': '*',
    },
  });
};

Deno.serve(handler);
