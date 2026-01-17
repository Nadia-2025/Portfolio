import React from "react";

const Contact = () => {
  return (
    <section>
      <div>
        <h2>Contacto</h2>
        <p>No dudes en contactar conmigo!</p>
      </div>
      <div>
        <form>
          <div>
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Email" />
            <input type="number" placeholder="Teléfono" />
            <textarea placeholder="Mensaje"></textarea>
          </div>
        </form>
        <button type="submit">Enviar</button>
      </div>
    </section>
  );
};

export default Contact;
