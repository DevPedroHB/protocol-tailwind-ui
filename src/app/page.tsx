export default function Introduction() {
  return (
    <main className="prose prose-invert prose-headings:text-zinc-100 prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-xl prose-h2:font-medium prose-p:text-zinc-400 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-a:text-cyan-400 hover:prose-a:text-cyan-500 prose-a:transition-colors">
      <h1 id="introduction">Introduction</h1>
      <p>
        Welcome to the Protocol API documentation! The Protocol API allows you
        to build powerful applications and integrations with our messaging
        platform. Whether you're looking to send messages, manage contacts, or
        create group conversations, the Protocol API has you covered.
      </p>
      <h2 id="what-is-protocol">What is Protocol?</h2>
      <p>
        Protocol is a leading messaging platform that provides seamless
        communication for individuals and businesses alike. With Protocol, you
        can send and receive messages, share files, and connect with your
        contacts in a secure and efficient way.
      </p>
      <h2 id="api-overview">API Overview</h2>
      <p>
        The Protocol API is designed to give you programmatic access to the
        messaging platform, allowing you to automate tasks and integrate
        Protocol's features into your applications. The API is RESTful and uses
        standard HTTP methods for interactions.
      </p>
      <h2 id="authentication">Authentication</h2>
      <p>
        Before you can start making API requests, you'll need to authenticate
        your application. The Protocol API supports two authentication methods:
        Basic Authentication with your username and password, or OAuth2 with a
        bearer token. Choose the method that best suits your application's
        needs.
      </p>
      <h2 id="rate-limiting">Rate Limiting</h2>
      <p>
        To ensure fair usage and server stability, the Protocol API enforces
        rate limiting. Make sure to check the rate limit headers in the API
        responses to know your current limits and remaining requests.
      </p>
      <h2 id="response-format">Response Format</h2>
      <p>
        The API responses are typically in JSON format, making it easy to parse
        and work with in most programming languages.
      </p>
      <h2 id="errors">Errors</h2>
      <p>
        While using the API, you may encounter errors. The API will return
        informative error messages to help you understand and resolve the
        issues. Implement proper error handling in your application to
        gracefully handle errors.
      </p>
      <h2 id="sdk-support">SDK Support</h2>
      <p>
        We offer official SDKs for various programming languages to simplify API
        integration. These SDKs handle authentication and provide convenient
        wrappers for making API requests.
      </p>
      <h2 id="getting-started">Getting Started</h2>
      <p>
        To get started with the Protocol API, choose the authentication method
        that suits your needs and refer to the guides and resources listed in
        the left navigation menu. If you have any questions or need assistance,
        feel free to reach out to our support team.
      </p>
    </main>
  );
}
