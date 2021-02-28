import { getBusiness } from './BusinessData.js'
import { Business } from './Business.js'

export const businessList = () => {
    const businesses = getBusiness()
    const inputLocation = document.querySelector(".business-list")

        let clientItem = "";
        for (const client of businesses) {
            clientItem += Business(client);
        }
        inputLocation.innerHTML += clientItem;
}