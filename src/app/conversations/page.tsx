export default function Conversations() {
  return (
    <main className="prose prose-invert prose-headings:text-zinc-100 prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-xl prose-h2:font-medium prose-p:text-zinc-400 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-a:text-cyan-400 hover:prose-a:text-cyan-500 prose-a:transition-colors">
      <h1 id="conversations">Conversations</h1>
      <p>
        The Conversations API allows you to manage and interact with
        conversations on the Protocol platform. A conversation represents a
        messaging thread between two or more participants and includes messages
        exchanged within that thread.
      </p>
      <h2 id="conversation-object">Conversation Object</h2>
      <p>
        A conversation in the Protocol API is represented as an object with the
        following attributes:
      </p>
      <pre>
        <code className="language-json">
          &#123; "id": "CONVERSATION_ID", "participants": ["USER_ID_1",
          "USER_ID_2", "..."], "metadata": &#123; "key": "value", "topic":
          "Project Updates" &#125; &#125;
        </code>
      </pre>
      <ul>
        <li>
          <strong>id:</strong> A unique identifier for the conversation
          (string).
        </li>
        <li>
          <strong>participants:</strong> An array of user IDs representing the
          participants of the conversation (array of strings).
        </li>
        <li>
          <strong>metadata:</strong> Additional key-value pairs to store custom
          data about the conversation (object).
        </li>
      </ul>
      <h2 id="listing-conversations">Listing Conversations</h2>
      <p>
        To retrieve a list of all conversations associated with your account,
        make a GET request to the following endpoint:
      </p>
      <pre>
        <code className="language-bash">
          GET https://api.protocol.chat/v1/conversations
        </code>
      </pre>
      <p>
        The API will respond with an array of conversation objects, each
        representing a conversation in your account.
      </p>
      <h2 id="retrieving-a-conversation">Retrieving a Conversation</h2>
      <p>
        To get the details of a specific conversation, make a GET request to the
        following endpoint, replacing <code>CONVERSATION_ID</code> with the
        actual ID of the conversation:
      </p>
      <pre>
        <code className="language-bash">
          GET https://api.protocol.chat/v1/conversations/CONVERSATION_ID
        </code>
      </pre>
      <p>
        The API will respond with the conversation object that matches the
        provided ID.
      </p>
      <h2 id="creating-a-conversation">Creating a Conversation</h2>
      <p>
        To start a new conversation with participants, make a POST request to
        the following endpoint, providing the user IDs of the participants in
        the request body:
      </p>
      <pre>
        <code className="language-bash">
          POST https://api.protocol.chat/v1/conversations
        </code>
      </pre>
      <pre>
        <code className="language-json">
          &#123; "participants": ["USER_ID_1", "USER_ID_2"] &#125;
        </code>
      </pre>
      <p>
        The API will respond with the newly created conversation object,
        including the automatically generated <code>id</code>.
      </p>
      <h2 id="updating-a-conversation">Updating a Conversation</h2>
      <p>
        To update the metadata of an existing conversation, make a PUT request
        to the following endpoint, replacing <code>CONVERSATION_ID</code> with
        the ID of the conversation to be updated. Include the updated metadata
        in the request body:
      </p>
      <pre>
        <code className="language-bash">
          PUT https://api.protocol.chat/v1/conversations/CONVERSATION_ID
        </code>
      </pre>
      <pre>
        <code className="language-json">
          &#123; "metadata": &#123; "key": "new value", "topic": "Updated
          Project Details" &#125; &#125;
        </code>
      </pre>
      <h2 id="deleting-a-conversation">Deleting a Conversation</h2>
      <p>
        To delete a conversation from your account, make a DELETE request to the
        following endpoint, replacing <code>CONVERSATION_ID</code> with the ID
        of the conversation to be deleted:
      </p>
      <pre>
        <code className="language-bash">
          DELETE https://api.protocol.chat/v1/conversations/CONVERSATION_ID
        </code>
      </pre>
      <p>
        The API will respond with a success message upon successful deletion of
        the conversation.
      </p>
      <h2 id="managing-messages">Managing Messages</h2>
      <p>
        Once you have a conversation, you can send and receive messages within
        it. Refer to the "Messages" section of the documentation for details on
        how to manage messages in a conversation.
      </p>
    </main>
  );
}
