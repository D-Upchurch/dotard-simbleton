
export const Business = (clientObj) => {
    
    return (
        `<div class="business-single">
            <h2 class="header">${clientObj.companyName}</h2>
            <ul>
                <li class="listItem">Industry: ${clientObj.companyIndustry}</li>
                <li class="listItem">Agent: ${clientObj.purchasingAgent.nameFirst} ${clientObj.purchasingAgent.nameLast}</li>
                <li class="listItem">Phone: ${clientObj.phoneWork}</li>
                <li class="listItem">Address: ${clientObj.addressFullStreet}</li>
                <li class="listItem">City: ${clientObj.addressCity}</li>
                <li class="listItem">State: ${clientObj.addressStateCode}</li>
                <li class="listItem">Zip Code: ${clientObj.addressZipCode}</li>
                <li class="listItem">Last 5 purchases: ${clientObj.orders[0]}, ${clientObj.orders[1]}, ${clientObj.orders[2]}, ${clientObj.orders[3]}, ${clientObj.orders[4]}</li>
            </ul>
        </div>`
    )
} 