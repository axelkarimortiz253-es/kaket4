
const app = Vue.createApp({
    data() {
        return {
            nombre: 'EL GRITO DE LA HISTORIA',
            estudiante: 'Vue 3',
            fecha: '20 de noviembre de 1910',

            imagenPrincipal: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Francisco%20I%20Madero.jpg',

            secciones: [
                {
                    titulo: '🇲🇽 ¿Qué es el 20 de noviembre?',
                    texto: 'El 20 de noviembre se conmemora el inicio de la Revolución Mexicana de 1910. Fue un movimiento armado que buscaba terminar con la dictadura de Porfirio Díaz y conseguir justicia, libertad e igualdad.',
                    imagen: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Francisco%20I%20Madero.jpg'
                },
                {
                    titulo: '📜 Causas de la Revolución',
                    texto: 'La desigualdad social, la falta de democracia, las malas condiciones laborales y la concentración de tierras fueron algunas de las principales causas de la Revolución Mexicana.',
                    imagen: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Collage%20revoluci%C3%B3n%20mexicana.jpg'
                },
                {
                    titulo: '🌾 Principales demandas',
                    texto: 'Los revolucionarios buscaban justicia social, mejores salarios, libertad política, reparto de tierras y mejores condiciones de vida para los mexicanos.',
                    imagen: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800'
                },
                {
                    titulo: '📖 Consecuencias',
                    texto: 'La Revolución transformó la vida política y social de México. Uno de sus resultados más importantes fue la Constitución de 1917.',
                    imagen: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800'
                }
            ],

            personajes: [
                {
                    nombre: 'Francisco I. Madero',
                    descripcion: 'Impulsó el inicio de la Revolución Mexicana y defendió la democracia.',
                    imagen: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Francisco%20I%20Madero.jpg'
                },
                {
                    nombre: 'Emiliano Zapata',
                    descripcion: 'Luchó por los derechos de los campesinos y el reparto de tierras.',
                    imagen: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/EmilianoZapataLetters2020.jpg'
                },
                {
                    nombre: 'Francisco Villa',
                    descripcion: 'Fue uno de los principales líderes revolucionarios del norte.',
                    imagen: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Pancho%20Villa%20bandolier%20(cropped).jpg'
                },
                {
                    nombre: 'Venustiano Carranza',
                    descripcion: 'Encabezó el movimiento constitucionalista.',
                    imagen: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Portrait%20of%20Venustiano%20Carranza%20(cropped).jpg'
                }
            ],

            curiosidad: 'La Constitución Política de México fue promulgada el 5 de febrero de 1917 en Querétaro.'
        };
    },

    template: `
        <div style="
            background:#fff5df;
            padding:25px;
            border:10px solid #75451f;
            font-family:Georgia,serif;
            color:#422b18;
        ">

            <header style="
                background:#8b1e1e;
                color:white;
                text-align:center;
                padding:25px;
                border:5px double #f5d47b;
            ">
                <h1 style="font-size:38px;">
                    {{ nombre }}
                </h1>

                <h2 style="color:#ffdf80;">
                    ¡VIVA LA REVOLUCIÓN MEXICANA!
                </h2>

                <h3>{{ fecha }}</h3>
            </header>

            <h2 style="
                background:#174d36;
                color:white;
                text-align:center;
                padding:12px;
            ">
                📰 NOTICIAS DE NUESTRA HISTORIA
            </h2>

            <div style="
                display:grid;
                grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
                gap:20px;
            ">
                <article v-for="seccion in secciones"
                    :key="seccion.titulo"
                    style="
                        background:white;
                        padding:15px;
                        border:3px solid #c49a50;
                        box-shadow:3px 3px 5px #aaa;
                    ">

                    <h2 style="color:#941f1f;">
                        {{ seccion.titulo }}
                    </h2>

                    <img
                        :src="seccion.imagen"
                        :alt="seccion.titulo"
                        style="
                            width:100%;
                            height:180px;
                            object-fit:cover;
                        "
                    >

                    <p style="font-size:17px;line-height:1.5;">
                        {{ seccion.texto }}
                    </p>
                </article>
            </div>

            <h2 style="
                text-align:center;
                background:#8b1e1e;
                color:white;
                padding:15px;
            ">
                ⭐ PERSONAJES DE LA REVOLUCIÓN
            </h2>

            <div style="
                display:grid;
                grid-template-columns:repeat(auto-fit,minmax(200px,1fr));
                gap:15px;
            ">
                <article v-for="persona in personajes"
                    :key="persona.nombre"
                    style="
                        background:#f9e8c3;
                        padding:12px;
                        text-align:center;
                        border:2px solid #a77a42;
                    ">

                    <img
                        :src="persona.imagen"
                        :alt="persona.nombre"
                        style="
                            width:100%;
                            height:180px;
                            object-fit:cover;
                        "
                    >

                    <h3 style="color:#8b1e1e;">
                        {{ persona.nombre }}
                    </h3>

                    <p>{{ persona.descripcion }}</p>
                </article>
            </div>

            <div style="
                background:#174d36;
                color:white;
                padding:20px;
                text-align:center;
                margin-top:20px;
            ">
                <h2 style="color:#ffdf80;">
                    💡 ¿SABÍAS QUE...?
                </h2>

                <p style="font-size:18px;">
                    {{ curiosidad }}
                </p>
            </div>

            <footer style="
                background:#8b1e1e;
                color:white;
                text-align:center;
                padding:20px;
                margin-top:20px;
            ">
                <h2>¡LA HISTORIA NOS DA IDENTIDAD!</h2>
                <p>Periódico mural realizado con {{ estudiante }}</p>
                <h2>🇲🇽 ¡VIVA MÉXICO! 🇲🇽</h2>
            </footer>

        </div>
    `
});

app.mount('#app');
