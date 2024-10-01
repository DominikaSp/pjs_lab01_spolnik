import React from "react";

// function CFooter() {
//     let date = new Date();

//     return (

//         <div>
//             <h5>Programowanie JavaScript przykładowy serwis React. Dzisiaj mamy: {date.toString()}</h5>
//         </div>
//     )
// }

export const CFooter = () => {
    let date = new Date();

    return (

        <div>
            <h5>Prog. JS przykładowy serwis React. Dzisiaj mamy: {" "}{date.toLocaleDateString()}{" "}</h5>
        </div>
    )
}


// export default CFooter;