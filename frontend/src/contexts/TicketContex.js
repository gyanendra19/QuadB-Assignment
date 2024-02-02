import React, { useContext } from "react"

const TicketContext = React.createContext()

export const useTicket = () => {
    return useContext(TicketContext)
}

export default TicketContext