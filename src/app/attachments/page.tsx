export default function Attachments() {
  return (
    <main className="prose prose-invert prose-headings:text-zinc-100 prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-xl prose-h2:font-medium prose-p:text-zinc-400 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-a:text-cyan-400 hover:prose-a:text-cyan-500 prose-a:transition-colors">
      <h1 id="attachments">Attachments</h1>
      <p>
        The Attachments API allows you to manage and interact with file
        attachments in messages on the Protocol platform. You can upload,
        retrieve, and delete attachments to enrich the content of messages.
      </p>
      <h2 id="attachment-object">Attachment Object</h2>
      <p>
        An attachment in the Protocol API is represented as an object with the
        following attributes:
      </p>
      <pre>
        <code className="language-json">
          &#123; "id": "ATTACHMENT_ID", "message_id": "MESSAGE_ID", "filename":
          "example.pdf", "url":
          "https://api.protocol.chat/v1/attachments/ATTACHMENT_ID", "size":
          1024, "mime_type": "application/pdf", "metadata": &#123; "key":
          "value", "description": "Sample PDF attachment" &#125; &#125;
        </code>
      </pre>
      <ul>
        <li>
          <strong>id:</strong> A unique identifier for the attachment (string).
        </li>
        <li>
          <strong>message_id:</strong> The ID of the message that the attachment
          belongs to (string).
        </li>
        <li>
          <strong>filename:</strong> The original filename of the attachment
          (string).
        </li>
        <li>
          <strong>url:</strong> The URL to download the attachment (string).
        </li>
        <li>
          <strong>size:</strong> The size of the attachment in bytes (integer).
        </li>
        <li>
          <strong>mime_type:</strong> The MIME type of the attachment (string).
        </li>
        <li>
          <strong>metadata:</strong> Additional key-value pairs to store custom
          data about the attachment (object).
        </li>
      </ul>
      <h2 id="uploading-an-attachment">Uploading an Attachment</h2>
      <p>
        To upload a new attachment to a message, make a POST request to the
        following endpoint, replacing <code>MESSAGE_ID</code> with the ID of the
        message. Include the attachment file in the request body as binary data.
        You can also provide additional metadata for the attachment:
      </p>
      <pre>
        <code className="language-bash">
          POST https://api.protocol.chat/v1/messages/MESSAGE_ID/attachments
        </code>
      </pre>
      <p>
        The API will respond with the newly created attachment object, including
        the automatically generated <code>id</code>, <code>url</code>, and{" "}
        <code>size</code>.
      </p>
      <h2 id="retrieving-an-attachment">Retrieving an Attachment</h2>
      <p>
        To download an attachment, you can use the <code>url</code> provided in
        the attachment object. Make an HTTP GET request to the <code>url</code>{" "}
        to retrieve the attachment file.
      </p>
      <h2 id="deleting-an-attachment">Deleting an Attachment</h2>
      <p>
        To delete an attachment from a message, make a DELETE request to the
        following endpoint, replacing <code>ATTACHMENT_ID</code> with the ID of
        the attachment:
      </p>
      <pre>
        <code className="language-bash">
          DELETE https://api.protocol.chat/v1/attachments/ATTACHMENT_ID
        </code>
      </pre>
      <p>
        The API will respond with a success message upon successful deletion of
        the attachment.
      </p>
    </main>
  );
}
