function About() {
   return (
     <div>
       <h1>Sobre el creador</h1>
       <br />
       <h2>Andrés López</h2>

       <img
         src={process.env.PUBLIC_URL + "/andres.png"}
         alt=""
         style={{ width: "200px", borderRadius: "25%" }}
       />

       <hr />
       <p>En esta página se encuentra la información del creador de la misma</p>
     </div>
   );
}

export default About;