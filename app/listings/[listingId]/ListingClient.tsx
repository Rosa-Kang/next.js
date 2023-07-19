import { Reservation } from ".prisma/client";
import {categories} from "@/app/components/navbar/Categories";

import { SafeUser, safeListing } from "@/app/types";
import { useMemo } from "react";

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

    const category = useMemo(() => {
        return categories.find((item) => {
            item.label === listing.category;
        })
    }, [listing.category]);

    return (<></>)
}

export default ListingClient; 