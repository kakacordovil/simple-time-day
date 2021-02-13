function load() {
    var msg = window.document.getElementById('msg');
    var image = window.document.getElementById('image');
    var date = new Date();
    var time = date.getHours();
    msg.innerHTML = `It's ${time} now.`;
    

    if (time >= 0 && time < 12) {
        //dia
        image.src = "https://images.unsplash.com/photo-1595702859037-7c3eb1f86034?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80";
        document.body.style.background = '#f44336';
    } else if (time >= 12 && time < 18) {
        //tarde
        image.src = "https://images.unsplash.com/photo-1577257483254-ae9e9a5ab802?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80";
        document.body.style.background = '#f06292';
    } else {
        //noite
        image.src = "https://images.unsplash.com/photo-1591291747586-99a6a94ef33a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80";
        document.body.style.background = '#3f50b5';
    }
}