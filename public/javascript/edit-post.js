async function editFormHandler(event) {
    event.preventDefault();
     console.log("edit form submitted");
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
    const title = document.querySelector('input[name="post-title"]').value;
    const blog_content = document.querySelector('.blog-content').value;
      console.log(id, title, blog_content);
      
    const response = await fetch(`/api/post/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            title, blog_content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
      }
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);