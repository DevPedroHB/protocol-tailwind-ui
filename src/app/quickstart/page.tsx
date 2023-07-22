export default function Quickstart() {
  return (
    <main className="prose prose-invert prose-headings:text-zinc-100 prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-xl prose-h2:font-medium prose-p:text-zinc-400 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-a:text-cyan-400 hover:prose-a:text-cyan-500 prose-a:transition-colors">
      <h1 id="quickstart">Quickstart</h1>
      <p>
        This Quickstart guide will walk you through the basic steps to start
        using the Protocol API. By the end of this guide, you'll be able to send
        your first message using our API.
      </p>
      <h2 id="sign-up">Sign Up for an Account</h2>
      <p>
        If you haven't already, head over to our website and sign up for a
        Protocol account. Once you've completed the sign-up process, you'll be
        able to access the API features from your dashboard.
      </p>
      <h2 id="create-an-application">Create an Application</h2>
      <p>
        To use the Protocol API, you'll need to create an application. Log in to
        your Protocol dashboard and navigate to the API settings. Create a new
        application, and you'll receive your API credentials, including the
        client ID and secret.
      </p>
      <h2 id="choose-authentication-method">Choose Authentication Method</h2>
      <p>
        As mentioned in the Introduction, you can choose between Basic
        Authentication or OAuth2 with a bearer token. For quick testing and
        development, Basic Authentication may be more straightforward, but for
        production applications, OAuth2 is recommended for enhanced security.
      </p>
      <h2 id="make-your-first-request">Make Your First Request</h2>
      <p>
        Now that you have your API credentials and have chosen an authentication
        method, it's time to make your first API request. For this quickstart,
        we'll use cURL to demonstrate a simple message sending API call.
      </p>
      <pre>
        <code className="language-bash">
          curl -X POST https://api.protocol.chat/v1/messages \ -u
          YOUR_CLIENT_ID:YOUR_CLIENT_SECRET \ -d "to=RECIPIENT_USER_ID" \ -d
          "text=Hello, this is my first message with the Protocol API!"
        </code>
      </pre>
      <p>
        Replace <code>YOUR_CLIENT_ID</code> and <code>YOUR_CLIENT_SECRET</code>{" "}
        with your actual credentials. Also, set the{" "}
        <code>RECIPIENT_USER_ID</code> to the user ID of the recipient you want
        to send the message to.
      </p>
      <p>
        When successful, the API will return a JSON response with the details of
        the sent message, including the message ID, timestamp, and other
        relevant information.
      </p>
      <h2 id="explore-further">Explore Further</h2>
      <p>
        Congratulations! You've just sent your first message using the Protocol
        API. Now you can explore the full range of API endpoints and build more
        advanced integrations into your applications. Check out the Guides and
        Resources sections in the left navigation menu for more in-depth
        examples and documentation.
      </p>
    </main>
  );
}
