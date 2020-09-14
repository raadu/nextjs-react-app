import Link from 'next/link';

const people = [
    {vehicle: "car", name: "bruno"},
    {vehicle: "bike", name: "john"},
    {vehicle: "rickshaw", name: "momin"},
]

function Details() {
    return(
        <div>
            {people.map((e) => (
                <div>
                    <Link as={`/${e.vehicle}/${e.name}`} href="/[Vehicle]/[person]">
                        <a>Navigate to {e.name}'s {e.vehicle}</a>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Details;