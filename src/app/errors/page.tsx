export default function Errors() {
  return (
    <main className="prose prose-invert prose-headings:text-zinc-100 prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-xl prose-h2:font-medium prose-p:text-zinc-400 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-a:text-cyan-400 hover:prose-a:text-cyan-500 prose-a:transition-colors">
      <h1 id="errors">Errors</h1>
      <p>
        The Protocol API may return errors under certain conditions. When an
        error occurs, the API response will include an error object with
        information about the issue encountered. This section provides details
        about the error responses you may encounter while interacting with the
        API.
      </p>
      <h2 id="error-object">Error Object</h2>
      <p>
        An error object in the Protocol API response has the following
        attributes:
      </p>
      <pre>
        <code className="language-json">
          &#123; "code": "ERROR_CODE", "message": "A descriptive error
          message.", "details": &#123; "key": "value", "parameter": "invalid"
          &#125; &#125;
        </code>
      </pre>
      <ul>
        <li>
          <strong>code:</strong> A unique identifier for the error (string).
        </li>
        <li>
          <strong>message:</strong> A human-readable error message describing
          the issue (string).
        </li>
        <li>
          <strong>details:</strong> Additional key-value pairs providing more
          information about the error (object).
        </li>
      </ul>
      <h2 id="error-codes">Error Codes</h2>
      <p>
        The following table lists some common error codes that you may encounter
        while using the Protocol API:
      </p>
      <table>
        <thead>
          <tr>
            <th>Error Code</th>
            <th>Error Message</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>400</td>
            <td>Bad Request</td>
            <td>Invalid parameters in the request.</td>
          </tr>
          <tr>
            <td>401</td>
            <td>Unauthorized</td>
            <td>Authentication failed or insufficient permissions.</td>
          </tr>
          <tr>
            <td>403</td>
            <td>Forbidden</td>
            <td>Access to the requested resource is forbidden.</td>
          </tr>
          <tr>
            <td>404</td>
            <td>Not Found</td>
            <td>The requested resource does not exist.</td>
          </tr>
          <tr>
            <td>429</td>
            <td>Too Many Requests</td>
            <td>Rate limit exceeded.</td>
          </tr>
          <tr>
            <td>500</td>
            <td>Internal Server Error</td>
            <td>An unexpected error occurred on the server.</td>
          </tr>
        </tbody>
      </table>
      <p>
        For other possible error codes and their meanings, please refer to the
        API documentation.
      </p>
      <h2 id="handling-errors">Handling Errors</h2>
      <p>
        When making API requests, it is essential to handle errors
        appropriately. Check the status code of the API response to determine if
        the request was successful. If the status code indicates an error, parse
        the error object in the response to understand the issue and take
        appropriate actions in your application.
      </p>
    </main>
  );
}
