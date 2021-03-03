import { getBusiness } from './BusinessData.js'
import { getNYBusiness, getMFBusiness } from './BusinessData.js'

import { Business } from './Business.js'




 export const nyBusinessList = () => {
    const businesses = getNYBusiness()
    const inputLocation = document.querySelector(".business-list")

        businesses.forEach(
            (clientObj) => {
                inputLocation.innerHTML += Business(clientObj)
            }
        );
};

export const mfBusinessList = () => {
    const businesses = getMFBusiness()
    const mfInputLocation = document.querySelector(".businessList--manufacturing")

        businesses.forEach(
            (clientObj) => {
                mfInputLocation.innerHTML += Business(clientObj)
            }
        );
};