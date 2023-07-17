export default class TicketService{
    constructor(dao){
        this.dao = dao;
    }

    getTicketService = () =>{
        return this.dao.getTickets()
    }

    getTicketByIdService = (tid) =>{
        return this.dao.getTicketById(tid)
    }

    getTicketByUserIdService = (udi) =>{
        return this.dao.getTicketByUserId(uid)

    }

    addTicketService = (ticket) =>{
        return this.dao.createTicket(ticket)
    }

    deleteTicketService = (tid) =>{
        return this.dao.deleteTicket(tid)
    }

    updateTicketService = (tid) =>{
        return this.dao.updateTicket(tid)
    }
}