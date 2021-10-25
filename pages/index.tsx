import Link from "next/link"
import { useState } from "react";
import Cartao from "../components/Cartao";
import EntradaNumerica from "../components/EntradaNumerica";
import styles from '../styles/Form.module.css'

export default function Form() {
  const [qtdePortas, setQtdePortas] = useState(3)
  const [presente, setPresente] = useState(2)

  return (
    <div className={styles.form}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text="Quantidade de portas" value={qtdePortas} onChange={novaQtde => setQtdePortas(novaQtde)} />
        </Cartao>
      </div>
      <div>
      <Cartao>
      <EntradaNumerica text="Porta com Presente" value={presente} onChange={comPresente => setPresente(comPresente)} />
      </Cartao>
      <Cartao bgcolor="#28a085">
        <Link href={`/game/${qtdePortas}/${presente}`}>
          <h2 className={styles.link}>Start</h2>
        </Link>
      </Cartao>
      </div>
    </div>

  );
}
