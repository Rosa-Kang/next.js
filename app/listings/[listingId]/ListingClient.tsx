import { Reservation } from ".prisma/client";

import { SafeUser, safeListing } from "@/app/types";

interface ListingClientProps {
    reservations?: Reservation[];
    listing: safeListing & {
        user: SafeUser
    };
    currentUser?: SafeUser | null;
}

const ListingClient: React.FC<ListingClientProps> = ({
    listing, currentUser
}) => {
    return (<></>)
}

export default ListingClient;