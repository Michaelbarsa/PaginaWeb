AppRouter.jsx
export default function Contacto() {
  return (
    <Layout
    title={"Contacto"}
    description="Contactar con nosotros"
  >
    <main className="contenedor">

        <h2>Contacta con nosotros</h2>
        <div >
        <form action="sssss" method="POST" >

            <label for="Nombre">nombre</label>
            <input  type="text" name="name"/>

            <label  for="email">Email</label>
            <input type="email" name="email"/>

            <label for="Subject">Asunto</label>
            <textarea  type="text" name="subject"/>

            <input  type="submit" value="Enviar"/>

        </form>
        </div>


    </main>
    </Layout>
  )
}