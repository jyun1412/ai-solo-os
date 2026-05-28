(function () {
  const posts = window.AI_SOLO_OS_POSTS || [];

  function escapeHTML(value) {
    return String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function createPostCard(post) {
    const meta = `${post.day} · ${post.week} · ${post.date}`;

    return `
      <article class="post-card">
        <div class="post-meta">${escapeHTML(meta)}</div>
        <h3>${escapeHTML(post.title)}</h3>
        <p>${escapeHTML(post.description)}</p>
        <a href="${escapeHTML(post.url)}">Read Post</a>
      </article>
    `;
  }

  const latestContainer = document.querySelector("[data-latest-posts]");
  if (latestContainer && posts.length > 0) {
    latestContainer.innerHTML = posts.slice(0, 2).map(createPostCard).join("");
  }

  const allContainer = document.querySelector("[data-all-posts]");
  if (allContainer && posts.length > 0) {
    allContainer.innerHTML = posts.map(createPostCard).join("");
  }
})();
