'use strict';

const events=document.querySelector('.cards');

document.addEventListener("load", loadEvents());

async function loadEvents()
{
    var data={};

    await fetch('https://node-host.onrender.com/api/events', {
        // mode: "no-cors",
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    })
        .then(response => response.json())
        .then((response) =>
        {
            data=response.data;
            console.log(data);
        })
        .catch(error => {console.log('request failed', error);});

    data.forEach(event =>
    {
        const card=document.createElement("div");
        card.className="card";
        const image=document.createElement("img");
        image.src=event.image;
        const content=document.createElement("div");
        content.className="content";
        const name=document.createElement("h4");
        name.innerHTML=event.name;
        const desc=document.createElement("p");
        desc.innerHTML=event.desc;
        const date=document.createElement("p");
        date.innerHTML=event.date;

        content.appendChild(name);
        content.appendChild(desc);
        content.appendChild(date);

        card.appendChild(image);
        card.appendChild(content);

        events.appendChild(card);
    });
}

// For all events

const table=document.querySelector('.event-table');

document.addEventListener("load", listEvents());

async function listEvents()
{
    // var data={};

    // await fetch('http://localhost:3000/api/events', {
    //     // mode: "no-cors",
    //     method: "GET",
    //     headers: {
    //         "Accept": "application/json"
    //     }
    // })
    //     .then(response => response.json())
    //     .then((response) =>
    //     {
    //         data=response.data;
    //         console.log(data);
    //     })
    //     .catch(error => {console.log('request failed', error);});

    // data.forEach(event =>
    // {}
    const row=document.createElement("tr");
    card.className="rows";
    const image=document.createElement("td");
    image.src=event.image;
    const content=document.createElement("td");
    content.className="content";
    const name=document.createElement("td");
    name.innerHTML=event.name;
    const desc=document.createElement("td");
    desc.innerHTML=event.desc;
    const date=document.createElement("p");
    date.innerHTML=event.date;

    content.appendChild(name);
    content.appendChild(desc);
    content.appendChild(date);

    card.appendChild(image);
    card.appendChild(content);

    events.appendChild(card);
}