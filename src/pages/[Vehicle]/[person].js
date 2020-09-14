import {useRouter} from 'next/router';

function Person() {
    const router = useRouter();
    console.log("router queries", router.query);

    return(
        <h2>{router.query.person}'s {router.query.Vehicle}</h2>
    );
}

export default Person;