import React from "react";
import Card from './Card'

const CardList = ({ robots }) => {
    
    return (
        <div className="flex flex-wrap justify-center">
            {
                robots.map((user, i) => {
                    return (
                    <Card
                        key={robots[i].id}
                        id={robots[i].id}
                        name={robots[i].name}
                        />
                    );
                    })
            }
        </div>
    );
}

export default CardList;