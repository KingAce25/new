import React from "react";
import Browse from './Browse'

function Apps() {
    const heading = "Web Design";
    const text = "Topic Listing Template based on Bootstrap 5";
    const image = "Per active user, per month $8/user/month if billed monthly";

    return(
        <div>
            <Browse text={heading}/>
            <Browse text={text}/>
            <Browse image={image}/>
        </div>
    );
}

export default Apps;