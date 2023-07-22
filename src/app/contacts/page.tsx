export default function Contacts() {
  return (
    <main className="prose prose-invert prose-headings:text-zinc-100 prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-xl prose-h2:font-medium prose-p:text-zinc-400 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-a:text-cyan-400 hover:prose-a:text-cyan-500 prose-a:transition-colors">
      <h1 id="contacts">Contacts</h1>
      <p>
        The Contacts API allows you to manage and interact with your contacts on
        the Protocol platform. You can add new contacts, retrieve contact
        information, update existing contacts, and delete contacts when
        necessary.
      </p>
      <h2 id="contact-object">Contact Object</h2>
      <p>
        A contact in the Protocol API is represented as an object with the
        following attributes:
      </p>
      <pre>
        <code className="language-json">
          &#123; "id": "CONTACT_ID", "name": "John Doe", "phone": "+1234567890",
          "email": "john.doe@example.com", "metadata": &#123; "key": "value",
          "age": 30 &#125; &#125;
        </code>
      </pre>
      <ul>
        <li>
          <strong>id:</strong> A unique identifier for the contact (string).
        </li>
        <li>
          <strong>name:</strong> The name of the contact (string).
        </li>
        <li>
          <strong>phone:</strong> The phone number of the contact (string).
        </li>
        <li>
          <strong>email:</strong> The email address of the contact (string).
        </li>
        <li>
          <strong>metadata:</strong> Additional key-value pairs to store custom
          data about the contact (object).
        </li>
      </ul>
      <h2 id="listing-contacts">Listing Contacts</h2>
      <p>
        To retrieve a list of all contacts associated with your account, make a
        GET request to the following endpoint:
      </p>
      <pre>
        <code className="language-bash">
          GET https://api.protocol.chat/v1/contacts
        </code>
      </pre>
      <p>
        The API will respond with an array of contact objects, each representing
        a contact in your account.
      </p>
      <h2 id="retrieving-a-contact">Retrieving a Contact</h2>
      <p>
        To get the details of a specific contact, make a GET request to the
        following endpoint, replacing <code>CONTACT_ID</code> with the actual ID
        of the contact:
      </p>
      <pre>
        <code className="language-bash">
          GET https://api.protocol.chat/v1/contacts/CONTACT_ID
        </code>
      </pre>
      <p>
        The API will respond with the contact object that matches the provided
        ID.
      </p>
      <h2 id="creating-a-contact">Creating a Contact</h2>
      <p>
        To add a new contact, make a POST request to the following endpoint,
        providing the contact details in the request body:
      </p>
      <pre>
        <code className="language-bash">
          POST https://api.protocol.chat/v1/contacts
        </code>
      </pre>
      <pre>
        <code className="language-json">
          &#123; "name": "John Doe", "phone": "+1234567890", "email":
          "john.doe@example.com", "metadata": &#123; "key": "value", "age": 30
          &#125; &#125;
        </code>
      </pre>
      <p>
        The API will respond with the newly created contact object, including
        the automatically generated <code>id</code>.
      </p>
      <h2 id="updating-a-contact">Updating a Contact</h2>
      <p>
        To update the information of an existing contact, make a PUT request to
        the following endpoint, replacing <code>CONTACT_ID</code> with the ID of
        the contact to be updated. Include the updated contact details in the
        request body:
      </p>
      <pre>
        <code className="language-bash">
          PUT https://api.protocol.chat/v1/contacts/CONTACT_ID
        </code>
      </pre>
      <pre>
        <code className="language-json">
          &#123; "name": "Jane Doe", "phone": "+9876543210", "email":
          "jane.doe@example.com", "metadata": &#123; "key": "new value", "age":
          35 &#125; &#125;
        </code>
      </pre>
      <h2 id="deleting-a-contact">Deleting a Contact</h2>
      <p>
        To remove a contact from your account, make a DELETE request to the
        following endpoint, replacing <code>CONTACT_ID</code> with the ID of the
        contact to be deleted:
      </p>
      <pre>
        <code className="language-bash">
          DELETE https://api.protocol.chat/v1/contacts/CONTACT_ID
        </code>
      </pre>
      <p>
        The API will respond with a success message upon successful deletion of
        the contact.
      </p>
    </main>
  );
}
