import { ticketService } from "../../services/repository/index.js";

//--------------------------------------------------------

const getTicketsController = async (req, res) => {
    try {
        const tickets = await ticketService.deleteTicketService()
        return res.sendSuccess(tickets)
    } catch (error) {
        return res.sendInternalError(error)
    }
};

//--------------------------------------------------------

const getTicketByIdController = async (req, res) => {
    const { tid } = req.params
    try {
        const ticket = await ticketService.getTicketByIdService(tid)
        res.sendSuccess(ticket)

    } catch (error) {
        res.sendInternalError(error)
    }
};

//--------------------------------------------------------

const getTicketByUserIdController = async (req, res) => {
    const { uid } = req.params
    try {
        const ticket = await ticketService.getTicketByUserIdService(uid)
        res.sendSuccess(ticket)

    } catch (error) {
        return res.sendInternalError(error)
    }
};

//--------------------------------------------------------

const createTicketController = async(req,res)=>{
    try {
        const {uid, cid} = req.params
        const {ticketBody} = req.body
        const preTicket = {
            user: uid,
            cart: cid,
            ...ticketBody
        }
        console.log(uid, cid)
        const ticket = await ticketService.createTicketController(preTicket)
        return res.sendSuccess(ticket)
    } catch (error) {
        return res.sendInternalError(error)
    }
};

//--------------------------------------------------------

const deleteTicketController = async (req, res) =>{
    try {
        const {tid} = req.params
        const ticket = await ticketService.deleteTicketService(tid)
    } catch (error) {
        return res.sendInternalError(error)
    }
};

//--------------------------------------------------------

const udateTicketController = async(req, res) =>{
    try {
        const {tid} = req.params
        const {ticketBody} = req.body
        const ticket = await ticketService.updateTicketService(tid, ticketBody)
        return res.sendSuccess(ticket)
    } catch (error) {
        return res.sendInternalError(error)
    }
}


//--------------------------------------------------------
export default {
    getTicketsController,
    getTicketByIdController,
    getTicketByUserIdController,
    createTicketController,
    deleteTicketController,
    udateTicketController
}