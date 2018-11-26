// fetch("/api/blogs", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     credentials: "same-origin",
//     body: JSON.stringify({title: "New Title", content: "New Content"}) 
// })

fetch("/api/blogs", {
    method: "GET",
    headers: {
        "Content-Type": "application/json"
    },
    credentials: "same-origin",
})