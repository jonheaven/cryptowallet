import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { injected } from '../components/wallet/connectors'
import { useWeb3React } from '@web3-react/core'

export default function Home() {
  const {active, account, library, connector, activate, deactivate} = useWeb3React()
  
  async function connect() 
  { 
    try { 
      await activate(injected)
    }
    catch(ex) {
      console.log(ex)
    }
  }

  return (
    <div className={styles.container}>

      <Head>
        <title>Wallet Connect</title>
        <meta name="description" content="Wallet Connect" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>Wallet Connect</h1>

        {!active ? <button onClick={connect}>Connect Wallet</button> : <span></span>}
        {active ? <button onClick={deactivate}>Disconnect Wallet</button> : <span></span>}

        {active ? <span>Connected with <b>{account}</b></span> : <span>Not connected</span>}

      </main>

      <footer className={styles.footer}>
        
      </footer>

    </div>
  )
}
