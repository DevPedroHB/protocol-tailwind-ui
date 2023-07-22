export default function Webhooks() {
  return (
    <main className="prose prose-invert prose-headings:text-zinc-100 prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-xl prose-h2:font-medium prose-p:text-zinc-400 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-a:text-cyan-400 hover:prose-a:text-cyan-500 prose-a:transition-colors">
      <h1 id="webhooks">Webhooks</h1>
      <p>
        Webhooks are a powerful way to receive real-time updates from the
        Protocol API. Instead of repeatedly polling the API for changes, you can
        set up webhooks to be notified automatically whenever specific events
        occur on your Protocol account.
      </p>
      <h2 id="how-webhooks-work">How Webhooks Work</h2>
      <p>
        When an event that you've subscribed to occurs, the Protocol API will
        send a POST request to the webhook URL you provided during the
        subscription setup. The payload of the request will contain relevant
        information about the event.
      </p>
      <p>
        It's essential to set up a secure and reliable endpoint to receive the
        webhook notifications. Make sure your server can handle incoming webhook
        requests and validate the authenticity of the requests to prevent
        unauthorized access.
      </p>
      <h2 id="setting-up-webhooks">Setting Up Webhooks</h2>
      <p>To set up a webhook, you need to follow these steps:</p>
      <ol>
        <li>
          <strong>Create a Webhook Endpoint:</strong> Set up an endpoint on your
          server to receive webhook notifications. This endpoint should be
          publicly accessible via HTTPS.
        </li>
        <li>
          <strong>Subscribe to Events:</strong> Use the Protocol API to
          subscribe to the events you want to be notified about. You can choose
          from various events like new message received, user added, group
          created, etc.
        </li>
        <li>
          <strong>Handle Webhook Payloads:</strong> When a webhook notification
          is received at your endpoint, handle the payload data accordingly.
          Verify the authenticity of the request and perform necessary actions
          based on the event type and data.
        </li>
      </ol>
      <h2 id="verifying-webhook-requests">Verifying Webhook Requests</h2>
      <p>
        Webhook security is crucial to ensure that your server receives valid
        and authorized requests. You can verify the authenticity of incoming
        webhook requests by comparing the received signature with a signature
        generated using your webhook secret.
      </p>
      <p>
        When you subscribe to a webhook, the Protocol API will include a
        signature in the headers of each webhook request. You can use this
        signature, along with your webhook secret, to verify that the request is
        indeed from the Protocol API.
      </p>
      <pre>
        <code className="language-javascript">
          // Example code to verify webhook request in Node.js const crypto =
          require('crypto'); const webhookSecret = 'YOUR_WEBHOOK_SECRET';
          function verifyWebhook(requestHeaders, requestBody) &#123; const
          signature = requestHeaders['x-protocol-signature']; const
          computedSignature = crypto .createHmac('sha256', webhookSecret)
          .update(requestBody) .digest('hex'); return crypto.timingSafeEqual(
          Buffer.from(signature, 'utf-8'), Buffer.from(computedSignature,
          'utf-8') ); &#125;
        </code>
      </pre>
      <p>
        Make sure to replace <code>YOUR_WEBHOOK_SECRET</code> with the actual
        webhook secret you set when creating the webhook.
      </p>
      <h2 id="handling-failures">Handling Failures</h2>
      <p>
        Webhooks are asynchronous, and delivery failures may occur. It's
        essential to handle these failures gracefully and implement retry
        mechanisms when needed. Consider logging the events for later processing
        if your server is temporarily unavailable.
      </p>
      <h2 id="security-best-practices">Security Best Practices</h2>
      <p>
        When dealing with webhooks, keep these security best practices in mind:
      </p>
      <ul>
        <li>
          Use HTTPS for your webhook endpoint to ensure data privacy and
          integrity during transmission.
        </li>
        <li>
          Validate the webhook payload and signature to prevent unauthorized
          requests.
        </li>
        <li>
          Implement a retry mechanism for failed deliveries to prevent data
          loss.
        </li>
        <li>
          Monitor webhook activity and set up alerts for unusual patterns or
          suspicious events.
        </li>
      </ul>
      <p>
        With webhooks in place, you can build powerful integrations that respond
        to real-time events and keep your application in sync with the Protocol
        messaging platform.
      </p>
    </main>
  );
}
