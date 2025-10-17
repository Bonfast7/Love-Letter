function loadMessage(md) {
    const message = document.querySelector("#message");

    fetch("message.txt")
        .then(response => response.text())
        .then(data => {
            message.innerHTML = md.render(data);
        })
        .catch(error => {
            message.innerHTML = "An error occurred while fetching the message";
        });
}

document.addEventListener('DOMContentLoaded', function() {
    let tempdata = {
        "did_open": false
    }

    const heart = document.querySelector("#solid-heart");
    const heart_container = document.querySelector(".heart-container");
    
    const msg_container = document.querySelector("#message-container");
    
    const audio = document.querySelector("#backsound");

    const md = window.markdownit({html: true});

    loadMessage(md);

    heart.addEventListener("click", function() {
        if (tempdata.did_open) {
            return;
        }
        tempdata.did_open = true;
        
        msg_container.style.display = "block";
        heart_container.style.marginTop = "-1.5%";
        
        const auto_css_height = msg_container.scrollHeight + 20; 
        msg_container.style.height = auto_css_height + "px";
        
        audio.volume = 0.5;
        audio.play();

        setTimeout(() => {
            msg_container.style.overflowY = "scroll";
        }, 1500);
    });

});