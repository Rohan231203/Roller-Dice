// import React from 'react';
import { useEffect } from "react";
import useFilterByCategory from "../../hooks/useFilterByCategory";
import Test1 from './Test1';

const Tests1 = () => {
    const { isLoading, categoryItems,sortByCategory } = useFilterByCategory();
    useEffect(() => {
        sortByCategory("Academics");
    }, []); 

    return (
        <div className="flex gap-10">
            {!isLoading && categoryItems.length > 0 ? (
                categoryItems.map((item) => (
                    <Test1 key={item.id} item={item} />
                ))
            ) : (
                <>Dayuum. Looks like you don&apos;t have any ads now.</>
            )}
        </div>
    );
};

export default Tests1;
