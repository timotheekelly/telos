import Head from 'next/head'
import styles from '../../styles/Tasks.module.css'

export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { tasks: data }
    }
}

const Tasks = ({ tasks }) => {
    return ( 
        <>
            <Head>
                <title>Telos | Tasks</title>
                <meta name="keywords" content="todo" />
            </Head>
            <div>
                <h1>Tasks</h1>
                {tasks.map(task => (
                    <div key={task.div}>
                        <a className={styles.single}>
                            <h3>{task.name}</h3>
                        </a>
                    </div>
                ))}
            </div>
        </>
     );
}
 
export default Tasks;