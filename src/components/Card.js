import React from "react";

const Card = ({ name, email, id }) => {

    return (
        <div className="bg-light-green w5 dib br3 pa1 ma2 grow ba bw2 shadow-5 ba b--light-silver pointer">
            <img src={`https://robohash.org/${id}?200x200`} alt="roboto" className="w-80 ma3 mb0 bg-washed-green ba br3 bw shadow-1 b--light-silver" />
            <div className="tc">
                <p><strong>{name}</strong></p>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;