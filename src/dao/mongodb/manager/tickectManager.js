import ticketModel from  "../models/ticketModels.js"

export default class TikectManager{

    getTickets = () =>{
        try {
            return ticketModel.find();
        } catch (error) {
            return error;
        }
    }

    getTicketByUserId = (uid)=>{
        try {
            return ticketModel.find({user:uid})
        } catch (error) {
            return error
        }
    }

    getTicketById =(tid)=>{
        try {
            return ticketModel.findOne({_id:tid}).lean()
        } catch (error) {
            return error;
        }
    }

    createTicket = (ticket) =>{
        try {
            return ticketModel.create(ticket)
        } catch (error) {
            return error
        }
    }

    deleteTicket = (tid) =>{
        try {
            return ticketModel.deleteOne({_id:tid})
        } catch (error) {
            return error
        }
    }

    updateTicket = () =>{
        try {
            return ticketModel.findOneAndUpdate(id, {$set: ticket})
        } catch (error) {
            return error
        }
    }
}