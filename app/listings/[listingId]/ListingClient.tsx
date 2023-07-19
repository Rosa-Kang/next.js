'use client';

import { Reservation } from ".prisma/client";
import { categories } from "@/app/components/navbar/Categories";

import { SafeUser, safeListing } from "@/app/types";
import Container from "@/app/components/Container";
import { useMemo } from "react";
import ListingHead from "@/app/components/listings/ListingHead";
import ListingInfo from "@/app/components/listings/ListingInfo";

const initialDataRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
};

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
        return categories.find((item) => 
            item.label === listing.category);
    }, [listing.category]);


    return (
        <Container>
            <div className="max-w-screen-lg mx-auto">
                <div className="flex flex-col gap-6">
                    <ListingHead
                        title={listing.title}
                        imageSrc={listing.imageSrc}
                        locationValue={listing.locationValue}
                        id={listing.id}
                        currentUser={currentUser}
                    />

                    <div className="grid grid-cols-1 mt-6">
                        <ListingInfo
                            user={listing.user}
                            category={category}
                            description={listing.description}
                            roomCount={listing.roomCount}
                            guestCount={listing.guestCount}
                            bathroomCount={listing.bathroomCount}
                            locationValue={listing.locationValue}
                        />
                    </div>

                </div>
            </div>
        </Container>
    )
}

export default ListingClient; 