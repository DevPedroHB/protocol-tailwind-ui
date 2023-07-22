export default function Groups() {
  return (
    <main className="prose prose-invert prose-headings:text-zinc-100 prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-xl prose-h2:font-medium prose-p:text-zinc-400 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-a:text-cyan-400 hover:prose-a:text-cyan-500 prose-a:transition-colors">
      <h1 id="groups">Groups</h1>
      <p>
        The Groups API allows you to manage and interact with groups on the
        Protocol platform. A group represents a collection of users who can
        interact with each other through a shared conversation.
      </p>
      <h2 id="group-object">Group Object</h2>
      <p>
        A group in the Protocol API is represented as an object with the
        following attributes:
      </p>
      <pre>
        <code className="language-json">
          &#123; "id": "GROUP_ID", "name": "Developers Group", "members":
          ["USER_ID_1", "USER_ID_2", "..."], "metadata": &#123; "key": "value",
          "description": "Group for developers to collaborate" &#125; &#125;
        </code>
      </pre>
      <ul>
        <li>
          <strong>id:</strong> A unique identifier for the group (string).
        </li>
        <li>
          <strong>name:</strong> The name of the group (string).
        </li>
        <li>
          <strong>members:</strong> An array of user IDs representing the
          members of the group (array of strings).
        </li>
        <li>
          <strong>metadata:</strong> Additional key-value pairs to store custom
          data about the group (object).
        </li>
      </ul>
      <h2 id="listing-groups">Listing Groups</h2>
      <p>
        To retrieve a list of all groups associated with your account, make a
        GET request to the following endpoint:
      </p>
      <pre>
        <code className="language-bash">
          GET https://api.protocol.chat/v1/groups
        </code>
      </pre>
      <p>
        The API will respond with an array of group objects, each representing a
        group in your account.
      </p>
      <h2 id="retrieving-a-group">Retrieving a Group</h2>
      <p>
        To get the details of a specific group, make a GET request to the
        following endpoint, replacing <code>GROUP_ID</code> with the actual ID
        of the group:
      </p>
      <pre>
        <code className="language-bash">
          GET https://api.protocol.chat/v1/groups/GROUP_ID
        </code>
      </pre>
      <p>
        The API will respond with the group object that matches the provided ID.
      </p>
      <h2 id="creating-a-group">Creating a Group</h2>
      <p>
        To create a new group, make a POST request to the following endpoint,
        providing the group details in the request body:
      </p>
      <pre>
        <code className="language-bash">
          POST https://api.protocol.chat/v1/groups
        </code>
      </pre>
      <pre>
        <code className="language-json">
          &#123; "name": "Developers Group", "members": ["USER_ID_1",
          "USER_ID_2"], "metadata": &#123; "key": "value", "description": "Group
          for developers to collaborate" &#125; &#125;
        </code>
      </pre>
      <p>
        The API will respond with the newly created group object, including the
        automatically generated <code>id</code>.
      </p>
      <h2 id="updating-a-group">Updating a Group</h2>
      <p>
        To update the information of an existing group, make a PUT request to
        the following endpoint, replacing <code>GROUP_ID</code> with the ID of
        the group to be updated. Include the updated group details in the
        request body:
      </p>
      <pre>
        <code className="language-bash">
          PUT https://api.protocol.chat/v1/groups/GROUP_ID
        </code>
      </pre>
      <pre>
        <code className="language-json">
          &#123; "name": "Developers Collaborative Group", "metadata": &#123;
          "key": "new value", "description": "Updated group for developers"
          &#125; &#125;
        </code>
      </pre>
      <h2 id="deleting-a-group">Deleting a Group</h2>
      <p>
        To delete a group from your account, make a DELETE request to the
        following endpoint, replacing <code>GROUP_ID</code> with the ID of the
        group to be deleted:
      </p>
      <pre>
        <code className="language-bash">
          DELETE https://api.protocol.chat/v1/groups/GROUP_ID
        </code>
      </pre>
      <p>
        The API will respond with a success message upon successful deletion of
        the group.
      </p>
      <h2 id="group-conversations">Group Conversations</h2>
      <p>
        When you create a group, a group conversation is automatically created.
        This conversation acts as a shared messaging thread for all members of
        the group. You can use the "Conversations" API to interact with this
        group conversation and manage messages exchanged within it.
      </p>
    </main>
  );
}
