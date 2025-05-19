const postFormContainer = document.querySelector(".postFormContainer");
if(postFormContainer) {
    const postTextarea = document.querySelector("#postTextarea");
    const submitPostButton = document.querySelector("#submitPostButton");

    postTextarea.addEventListener("keyup", (e) => {
        const value = e.target.value.trim();

        if(value == ""){
            submitPostButton.disabled = true;
            return;
        } 
        
        submitPostButton.disabled = false;
        
    })
    submitPostButton.addEventListener("click", (e) => {
        let data = {
            content: postTextarea.value.trim()
        }

        fetch("/api/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(async response => {
            const data = await response.json()
            console.log(data)
        })
        .catch(error => {
            console.log(error)
        })
    })
}

