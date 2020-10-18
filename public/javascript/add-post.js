async function newFormHandler(event) {
  console.log("form submitted");
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const blog_content = document.querySelector('.blog-content').value;
  
    const token = localStorage.getItem("token");

    const response = await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        blog_content
      }),
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);