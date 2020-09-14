import Link from 'next/link';
import {useEffect, useState} from 'react';

function Details({peopleList}) {
    // const [people, setPeople] = useState([]);

    // useEffect(() => {
    //     async function loadData() {
    //         const response = await fetch('http://localhost:4001/vehicles');
    //         const peoplelist = await response.json();
    //         setPeople(peoplelist);
    //     }

    //     loadData();
    // }, []);

    return(
        <div>
            {peopleList.map((e, index) => (
                <div key={index}>
                    <Link 
                        as={`/${e.vehicle}/${e.ownerName}`} 
                        href="/[Vehicle]/[person]"
                    >
                        <a>Navigate to {e.ownerName}'s {e.vehicle}</a>
                    </Link>
                </div>
            ))}
        </div>
    );
}

Details.getInitialProps = async () => {
    const response = await fetch('http://localhost:4001/vehicles');
    const peopleList = await response.json();

    return {peopleList: peopleList}
}

export default Details;