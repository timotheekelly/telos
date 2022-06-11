export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(task => {
        return {
            params: { id: task.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

 export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    const data = await res.json();

    return {
        props: { task: data }
    }
 }

const Details = ({ task }) => {
    return ( 
        <div>
            <h1>{ task.name }</h1>
            <p>{ task.email }</p>
            <p>{ task.website }</p>
        </div>
     );
}
 
export default Details;