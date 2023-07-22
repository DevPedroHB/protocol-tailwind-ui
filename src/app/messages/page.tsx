export default function Messages() {
  return (
    <main className="prose prose-invert prose-headings:text-zinc-100 prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-xl prose-h2:font-medium prose-p:text-zinc-400 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-a:text-cyan-400 hover:prose-a:text-cyan-500 prose-a:transition-colors">
      <h1 id="messages">Messages</h1>
      <p>
        The Messages API allows you to send, receive, and manage messages within
        conversations on the Protocol platform. Messages are the individual
        units of communication exchanged between participants in a conversation.
      </p>
      <h2 id="message-object">Message Object</h2>
      <p>
        A message in the Protocol API is represented as an object with the
        following attributes:
      </p>
      <pre>
        <code className="language-json">
          &#123; "id": "MESSAGE_ID", "conversation_id": "CONVERSATION_ID",
          "sender": "SENDER_USER_ID", "text": "Hello, this is a sample
          message.", "timestamp": "2023-07-22T12:34:56Z", "metadata": &#123;
          "key": "value", "attachment": "https://example.com/attachment.pdf"
          &#125; &#125;
        </code>
      </pre>
      <ul>
        <li>
          <strong>id:</strong> A unique identifier for the message (string).
        </li>
        <li>
          <strong>conversation_id:</strong> The ID of the conversation that the
          message belongs to (string).
        </li>
        <li>
          <strong>sender:</strong> The user ID of the message sender (string).
        </li>
        <li>
          <strong>text:</strong> The content of the message (string).
        </li>
        <li>
          <strong>timestamp:</strong> The timestamp when the message was sent
          (string in ISO 8601 format).
        </li>
        <li>
          <strong>metadata:</strong> Additional key-value pairs to store custom
          data about the message (object).
        </li>
      </ul>
      <h2 id="listing-messages">Listing Messages</h2>
      <p>
        To retrieve a list of all messages within a conversation, make a GET
        request to the following endpoint, replacing{" "}
        <code>CONVERSATION_ID</code> with the ID of the conversation:
      </p>
      <pre>
        <code className="language-bash">
          GET
          https://api.protocol.chat/v1/conversations/CONVERSATION_ID/messages
        </code>
      </pre>
      <p>
        The API will respond with an array of message objects, each representing
        a message within the specified conversation.
      </p>
      <h2 id="sending-a-message">Sending a Message</h2>
      <p>
        To send a new message to a conversation, make a POST request to the
        following endpoint, replacing <code>CONVERSATION_ID</code> with the ID
        of the conversation. Include the message text in the request body:
      </p>
      <pre>
        <code className="language-bash">
          POST
          https://api.protocol.chat/v1/conversations/CONVERSATION_ID/messages
        </code>
      </pre>
      <pre>
        <code className="language-json">
          &#123; "text": "Hello, this is a sample message." &#125;
        </code>
      </pre>
      <p>
        The API will respond with the newly created message object, including
        the automatically generated <code>id</code> and <code>timestamp</code>.
      </p>
      <h2 id="retrieving-a-message">Retrieving a Message</h2>
      <p>
        To get the details of a specific message within a conversation, make a
        GET request to the following endpoint, replacing{" "}
        <code>CONVERSATION_ID</code> and
        <code>MESSAGE_ID</code> with the IDs of the conversation and the
        message, respectively:
      </p>
      <pre>
        <code className="language-bash">
          GET
          https://api.protocol.chat/v1/conversations/CONVERSATION_ID/messages/MESSAGE_ID
        </code>
      </pre>
      <p>
        The API will respond with the message object that matches the provided
        IDs.
      </p>
      <h2 id="updating-a-message">Updating a Message</h2>
      <p>
        To update the content of an existing message, make a PUT request to the
        following endpoint, replacing <code>CONVERSATION_ID</code> and
        <code>MESSAGE_ID</code> with the IDs of the conversation and the
        message, respectively. Include the updated message text in the request
        body:
      </p>
      <pre>
        <code className="language-bash">
          PUT
          https://api.protocol.chat/v1/conversations/CONVERSATION_ID/messages/MESSAGE_ID
        </code>
      </pre>
      <pre>
        <code className="language-json">
          &#123; "text": "Updated message content." &#125;
        </code>
      </pre>
      <h2 id="deleting-a-message">Deleting a Message</h2>
      <p>
        To delete a message from a conversation, make a DELETE request to the
        following endpoint, replacing <code>CONVERSATION_ID</code> and
        <code>MESSAGE_ID</code> with the IDs of the conversation and the
        message, respectively:
      </p>
      <pre>
        <code className="language-bash">
          DELETE
          https://api.protocol.chat/v1/conversations/CONVERSATION_ID/messages/MESSAGE_ID
        </code>
      </pre>
      <p>
        The API will respond with a success message upon successful deletion of
        the message.
      </p>
    </main>
  );
}
