addEventListener("DOMContentLoaded", async(e)=> {
    let data = await (await fetch("data.json")).json();
    document.querySelector(".logo").insertAdjacentHTML("afterbegin", data.home.nombre);
    document.querySelector(".navbar").insertAdjacentHTML("afterbegin", /*html*/`
        <a href="${data.home.menu[0].link}" class="active">${data.home.menu[0].nombre}</a>
        <a href="${data.home.menu[1].link}">${data.home.menu[1].nombre}</a>
        <a href="${data.home.menu[2].link}">${data.home.menu[2].nombre}</a>
        <a href="${data.home.menu[3].link}">${data.home.menu[3].nombre}</a>
        <a href="${data.home.menu[4].link}">${data.home.menu[4].nombre}</a>
        <a href="${data.home.menu[5].link}">${data.home.menu[5].nombre}</a>
    `);

    document.querySelector(".home-content").insertAdjacentHTML("afterbegin", /*html*/`
        <h1>${data.home.parrafo.titulo[0]} <span>${data.home.parrafo.titulo[1]}</span><span class="animate" style="--i:2;"></span></h1>
        <div class="text-animate">
            <h3>${data.home.parrafo.subtitulo}</h3>
                <span class="animate" style="--i:3;"></span>
        </div>
        <p>${data.home.parrafo.descripcion}<span class="animate" style="--i:4;"></span></p>
        <div class="btn-box">
            <a href="${data.home.parrafo.botones[0].link}" class="btn">${data.home.parrafo.botones[0].nombre}</a>
            <a href="${data.home.parrafo.botones[1].link}" class="btn">${data.home.parrafo.botones[1].nombre}</a>
                <span class="animate" style="--i:5;"></span>
        </div>
    `);

    document.querySelector(".home-sci").insertAdjacentHTML("afterbegin", /*html*/`
        <a href="${data.home.parrafo.redes[0].link}"><i class='${data.home.parrafo.redes[0].nombre}' ></i></a>
        <a href="${data.home.parrafo.redes[1].link}"><i class='${data.home.parrafo.redes[1].nombre}' ></i></a>
        <a href="${data.home.parrafo.redes[2].link}"><i class='${data.home.parrafo.redes[2].nombre}' ></i></a>
    `);

    document.querySelector(".about").insertAdjacentHTML("afterbegin", /*html*/`
        <h2 class="heading">${data.about.parrafo.titulo[0]} <span>${data.about.parrafo.titulo[1]}</span><span class="animate scroll" style="--i:1;"></span></h2>
    `);

    document.querySelector(".about-content").insertAdjacentHTML("afterbegin", /*html*/`
        <h3>${data.about.parrafo.subtitulo}<span class="animate scroll" style="--i:3;"></span></h3>
        <p>${data.about.parrafo.descripcion}<span class="animate scroll" style="--i:4;"></span></p>
        <div class="btn-box btns">
            <a href="${data.about.parrafo.boton[0].link}" class="btn">${data.about.parrafo.boton[0].nombre}</a><span class="animate scroll" style="--i:5;"></span>
        </div>
    `);

    document.querySelector(".education").insertAdjacentHTML("afterbegin", /*html*/`
        <h2 class="heading">${data.education.titulo[0]} <span>${data.education.titulo[1]}</span><span class="animate scroll" style="--i:1;"></span></h2>
    `);

    document.querySelector("#mi_educacion").insertAdjacentHTML("afterbegin", /*html*/`
        <h3 class="title">${data.education.education[0].nombre}<span class="animate scroll" style="--i:2;"></span></h3>

        <div class="education-box">
            <div class="education-content">
                <div class="content">
                    <div class="year"><i class='bx bxs-calendar'></i> ${data.education.education[1].año}</div>
                    <h3>${data.education.education[1].institucion}</h3>
                    <p>${data.education.education[1].descripcion}</p>
                </div>
            </div>

            <div class="education-content">
                <div class="content">
                    <div class="year"><i class='bx bxs-calendar'></i> ${data.education.education[2].año}</div>
                    <h3>${data.education.education[2].institucion}</h3>
                    <p>${data.education.education[2].descripcion}</p>
                </div>
            </div>

            <div class="education-content">
                <div class="content">
                    <div class="year"><i class='bx bxs-calendar'></i> ${data.education.education[3].año}</div>
                    <h3>${data.education.education[3].institucion}</h3>
                    <p>${data.education.education[3].descripcion}</p>
                </div>
            </div> 

            <span class="animate scroll" style="--i:3;"></span>
        </div>
    `);

    document.querySelector("#mi_experiencia").insertAdjacentHTML("afterbegin", /*html*/`
        <h3 class="title">${data.education.experience[0].nombre}<span class="animate scroll" style="--i:5;"></span></h3>

        <div class="education-box">
            <div class="education-content">
                <div class="content">
                    <div class="year"><i class='bx bxs-calendar'></i> ${data.education.experience[1].año}</div>
                    <h3>${data.education.experience[1].empresa}</h3>
                    <p>${data.education.experience[1].descripcion}</p>
                </div>
            </div>

            <div class="education-content">
                <div class="content">
                    <div class="year"><i class='bx bxs-calendar'></i> ${data.education.experience[2].año}</div>
                    <h3>${data.education.experience[2].empresa}</h3>
                    <p>${data.education.experience[2].descripcion}</p>
                </div>
            </div>

            <div class="education-content">
                <div class="content">
                    <div class="year"><i class='bx bxs-calendar'></i> ${data.education.experience[3].año}</div>
                    <h3>${data.education.experience[3].empresa}</h3>
                    <p>${data.education.experience[3].descripcion}</p>
                </div>
            </div> 

            <span class="animate scroll" style="--i:6;"></span>
        </div>
    `);

    document.querySelector(".skills").insertAdjacentHTML("afterbegin", /*html*/`
        <h2 class="heading">${data.skills.titulo[0]} <span>${data.skills.titulo[1]}</span><span class="animate scroll" style="--i:1;"></span></h2>
    `);

    document.querySelector("#mis_lenguajes").insertAdjacentHTML("afterbegin", /*html*/`
        <h3 class="title">${data.skills.coding_skills[0].nombre}<span class="animate scroll" style="--i:2;"></span></h3>

        <div class="skills-box">
            <div class="skills-content">
                <div class="progress">
                    <h3>${data.skills.coding_skills[1].lenguage} <span>${data.skills.coding_skills[1].porcent}</span></h3>
                    <div class="bar"><span></span></div>
                </div>

                <div class="progress">
                    <h3>${data.skills.coding_skills[2].lenguage} <span>${data.skills.coding_skills[2].porcent}</span></h3>
                    <div class="bar"><span></span></div>
                </div>

                <div class="progress">
                    <h3>${data.skills.coding_skills[3].lenguage} <span>${data.skills.coding_skills[3].porcent}</span></h3>
                    <div class="bar"><span></span></div>
                </div>

                <div class="progress">
                    <h3>${data.skills.coding_skills[4].lenguage} <span>${data.skills.coding_skills[4].porcent}</span></h3>
                    <div class="bar"><span></span></div>
                </div>
            </div>

            <span class="animate scroll" style="--i:3;"></span>
        </div>
    `);

    document.querySelector("#mis_habilidades").insertAdjacentHTML("afterbegin", /*html*/`
        <h3 class="title">${data.skills.professional_skills[0].nombre}<span class="animate scroll" style="--i:5;"></span></h3>

        <div class="skills-box">
            <div class="skills-content">
                <div class="progress">
                    <h3>${data.skills.professional_skills[1].skill} <span>${data.skills.professional_skills[1].porcent}</span></h3>
                    <div class="bar"><span></span></div>
                </div>

                <div class="progress">
                    <h3>${data.skills.professional_skills[2].skill} <span>${data.skills.professional_skills[2].porcent}</span></h3>
                    <div class="bar"><span></span></div>
                </div>

                <div class="progress">
                    <h3>${data.skills.professional_skills[3].skill} <span>${data.skills.professional_skills[3].porcent}</span></h3>
                    <div class="bar"><span></span></div>
                </div>

                <div class="progress">
                    <h3>${data.skills.professional_skills[4].skill} <span>${data.skills.professional_skills[4].porcent}</span></h3>
                    <div class="bar"><span></span></div>
                </div>
            </div>

            <span class="animate scroll" style="--i:6;"></span>
        </div>
    `);

    document.querySelector(".contact").insertAdjacentHTML("afterbegin", /*html*/`
        <h2 class="heading">${data.contact.titulo[0]} <span></span><span class="animate scroll" style="--i:1;"></span></h2>
        
        <form id="myForm" action="#">
            <div class="input-box">
                <div class="input-field">
                    <input name="nombre" type="text" placeholder="${data.contact.campo1}" required>
                    <span class="focus"></span>
                </div>
                <div class="input-field">
                    <input name="correo" type="text" placeholder="${data.contact.campo2}" required>
                    <span class="focus"></span>
                </div>
                <span class="animate scroll" style="--i:3;"></span>
            </div>

            <div class="input-box">
                <div class="input-field">
                    <input name="telefono" type="number" placeholder="${data.contact.campo3}" required>
                    <span class="focus"></span>
                </div>
                <div class="input-field">
                    <input name="asunto" type="text" placeholder="${data.contact.campo4}" required>
                    <span class="focus"></span>
                </div>
                <span class="animate scroll" style="--i:5;"></span>
            </div>

            <div class="textarea-field">
                <textarea name="mensaje" id="" cols="30" rows="10" placeholder="${data.contact.campo5}" required></textarea>
                <span class="focus"></span>
                <span class="animate scroll" style="--i:7;"></span>
            </div>

            <div class="btn-box btns">
                <button type="submit" class="btn">${data.contact.boton}</button>

                <span class="animate scroll" style="--i:9;"></span>
            </div>
        </form>
    `);

    document.querySelector(".footer-text").insertAdjacentHTML("afterbegin", /*html*/`
        <p>${data.pie_de_pagina.texto}</p>
    `);

    // https://6497003b83d4c69925a34f7c.mockapi.io/contactame

    let formulario = document.querySelector("#myForm");

    formulario.addEventListener("submit", async(e)=>{
        e.preventDefault();
        let data = Object.fromEntries(new FormData(e.target));
        let confgi = {
            method:"POST",
            headers: {"Content-Type": "application/json"},
            body:JSON.stringify(data)
        };
        let conexion = await (await fetch("https://6497003b83d4c69925a34f7c.mockapi.io/contactame", confgi)).json();
        formulario.reset();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: `Usuario ${conexion.nombre}, tu solicituid fue enviada exitosamente. Tique # ${conexion.id}`,
            showConfirmButton: false,
            timer: 5000
          })
        
    });

})