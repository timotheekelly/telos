import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/dist/client/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Telos | Home</title>
        <meta name="keywords" content="todo" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer lobortis, elit a rhoncus imperdiet, elit tortor lacinia ligula, non imperdiet sem arcu sit amet felis. Nam eget vehicula erat. Curabitur non tincidunt diam. Etiam molestie, elit vel mollis dapibus, urna sem placerat ante, id volutpat massa sapien eget sapien. Duis felis lectus, convallis elementum placerat vitae, faucibus ac tellus. Vestibulum non semper quam. Quisque convallis rutrum imperdiet. Integer interdum nec nisl finibus bibendum. Vivamus placerat pellentesque leo, eget semper lorem vulputate vitae. Aenean pulvinar ligula nulla. Nunc condimentum aliquam eros, sit amet aliquam lorem auctor id. Sed et est ut massa viverra faucibus non at risus. Sed a aliquet eros, quis condimentum lorem.</p>
        <Link href="/tasks">
          <a className={styles.btn}>See all tasks</a>
        </Link>
      </div>
    </>
  )
}
