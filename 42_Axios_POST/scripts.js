const button = document.querySelector('#button')
button.onclick = () => {
    axios({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: {
            title: 'A new post',
            body: ' Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            userId: 1
        }
    }).then(res=>{
        console.log(res.data)
    })

        .catch(err => console.log(err))
}