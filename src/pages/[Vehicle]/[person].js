import {useRouter} from 'next/router';
import {useState, useEffect} from 'react';

function Person({peopleList}) {
    const router = useRouter();
    
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function loadData() {
            const response = await fetch('http://localhost:4001/vehicles?ownerName=' + 
            router.query.person + 
            '&vehicle' + 
            router.query.Vehicle);
            const peoplelist = await response.json();
            setPeople(peoplelist);
        }

        if(peopleList.length==0) {
            loadData();
        }

    }, []);

    if(!people[0]) {
        return(
            <div>Loading...</div>
        );
    }

    return(
        <pre>{people[0]?.details}</pre>
    );
}

Person.getInitialProps = async (ctx) => {
    if(!ctx.req) {
        return {peopleList: []};
    };

    const {query} = ctx;
    console.log("query", query);
    const response = await fetch(
        'http://localhost:4001/vehicles?ownerName=' + 
        query.person + 
        '&vehicle' + 
        query.Vehicle
    );
    const peopleList = await response.json();

    return {peopleList: peopleList}
}

export default Person;