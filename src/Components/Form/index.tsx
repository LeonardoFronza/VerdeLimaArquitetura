import { Thanks } from "./ScreenThanks";

interface Iprops {
  styles : {
    readonly [key: string]: string;
  }
}

export function Form({styles} : Iprops) {
  return (
    <>
      <div className={styles.contatoDivEmail}>
        <form action="https://formsubmit.co/fronzajf@gmail.com" method="POST">
          <input
            className={styles.itens}
            type="text"
            name="name"
            placeholder="Nome"
            required
          />
          <input
            className={styles.itens}
            type="email"
            name="email"
            placeholder="Seu e-mail"
            required
          />

          <textarea
            className={styles.itens}
            placeholder="Mensagem"
            color="#BA9A37"
            name="message"
            required
          />

          <button type="submit">Enviar</button>

          <input
            type="hidden"
            name="_subject"
            value={"Novo cliente? Via Site."}
          />
          <input type="text" name="_honey" style={{ display: "none" }} />
          <input type="hidden" name="_captcha" value={"false"} />
          <input
            type="hidden"
            name="_next"
            value={"http://localhost:3000/teste"}
          />
        </form>
      </div>
    </>
  );
}
