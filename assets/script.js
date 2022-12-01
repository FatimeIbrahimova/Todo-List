window.addEventListener('load', () => {
    const form = document.querySelector("#topic-form");
    const input = document.querySelector(".input");
    const list_topics = document.querySelector("#topics");
    console.log(form);
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const topic = input.value;
        if (!topic) {
            alert("please write smth");
            return;
        }
        const topic_el = document.createElement("div");
        topic_el.classList.add("topic");

        const topic_content_el = document.createElement("div");
        topic_content_el.classList.add("content");
        //   topic_content_el.innerText = topic;

        topic_el.appendChild(topic_content_el);

        const topic_input_el = document.createElement("input");
        topic_input_el.classList.add("text");
        topic_input_el.type = "text";
        topic_input_el.value = topic;
        topic_input_el.setAttribute("readonly", "readonly");

        topic_content_el.appendChild(topic_input_el);

        list_topics.appendChild(topic_el);



    })
})