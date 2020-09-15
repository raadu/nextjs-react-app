import { NextPageContext } from 'next';
import {useRouter} from 'next/router';
import {useState, useEffect} from 'react';
import {VehiclePerson} from '../../../api/VehiclePerson';

export interface PersonProps {
    ownersList?: VehiclePerson[];
}

function Person({ownersList}: PersonProps) {
    const router = useRouter();
    
    const [owners, setOwners] = useState(ownersList);

    console.log("owners", owners);

    useEffect(() => {
        async function loadData() {
            const response = await fetch(
                'http://localhost:4001/vehicles?ownerName=' + 
                router.query.person + 
                '&vehicle' + 
                router.query.vehicle);
                const ownersList: VehiclePerson[] | undefined = await response.json();
                setOwners(ownersList);
        }

        if(ownersList?.length==0) {
            loadData();
        }

    }, []);

    if(!owners?.[0]) {
        return(
            <div>Loading...</div>
        );
    }

    return(
        <pre>{owners[0]?.details}</pre>
    );
}

interface MyNextPageContext extends NextPageContext {
    query: {
        person: string;
        vehicle: string;
    }
}

Person.getInitialProps = async ({query, req}: MyNextPageContext) => {
    if(!req) {
        return {ownersList: []};
    };

    console.log("query", query);

    const response = await fetch(
        'http://localhost:4001/vehicles?ownerName=' + 
        query.person + 
        '&vehicle' + 
        query.vehicle
    );
    const ownersList: VehiclePerson[] | undefined = await response.json();

    return {ownersList: ownersList};
}

export default Person;