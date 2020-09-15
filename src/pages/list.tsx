import Link from 'next/link';
import {useEffect, useState} from 'react';
import {VehiclePerson} from '../../api/VehiclePerson';

export interface ListProps {
    ownersList: VehiclePerson[] | undefined;
}

function List({ownersList}: ListProps) {

    return(
        <div>
            {ownersList?.map((e, index) => (
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



List.getInitialProps = async () => {
    const response = await fetch('http://localhost:4001/vehicles');
    const ownersList: VehiclePerson[] | undefined = await response.json();

    return {ownersList: ownersList}
}

export default List;