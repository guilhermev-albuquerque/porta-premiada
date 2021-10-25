import { useEffect, useState } from "react";
import Porta from "../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import styles from "../../../styles/Game.module.css";
import Link from "next/link"
import { useRouter } from "next/dist/client/router";

export default function Home() {
  const router = useRouter()

  const [portas, setPortas] = useState([]);
  const [valido, setValido] = useState(false);

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente

    const qtdePortasValida = portas >= 3 && portas <= 100
    const presenteValido = temPresente >= 1 && temPresente <= portas

    setValido(qtdePortasValida && presenteValido)
  }, [portas])

  useEffect(() => {
    const portas = +router.query.portas
    const temPresente = +router.query.temPresente

    setPortas(criarPortas(portas, temPresente))
  }, [router?.query])

  function renderizarPortas() {
    return valido && portas.map(porta => {
      return <Porta key={porta.numero} value={porta}
      onChange={novaPorta => setPortas(atualizarPortas(portas, novaPorta))} />
    })
  }

  return (
    <div id={styles.game}>
      <div className={styles.portas}>
        {valido ?
          renderizarPortas():
          <h1>Valores inválidos</h1>
        }
      </div>
      <div className={styles.botoes}>
        <Link href='/'>
          <button>Restart</button>
        </Link>
      </div>
    </div>
  );
}
