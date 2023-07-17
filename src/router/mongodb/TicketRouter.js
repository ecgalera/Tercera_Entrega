import BaseRouter from "./Router.js";
import ticketControllers from "../../controllers/mongo.controllers/ticketControllers.js";
import { passportCall } from "../../services/auth.js";

export default class TicketsRouter extends BaseRouter{
    init(){

        this.get("/", ["AUTH"], passportCall("jwt", {strategyTipe: "jwt"}), ticketControllers.getTicketByIdController)
        this.get("/:tid", ["AUTH"], passportCall("jwt", {strategyTipe: "jwt"}), ticketControllers.getTicketByUserIdController)
        this.post("/", ["AUTH"], passportCall("jwt", {strategyTipe: "jwt"}), ticketControllers.createTicketController)
        this.delete("/", ["AUTH"], passportCall("jwt", {strategyTipe: "jwt"}), ticketControllers.deleteTicketController)
        this.put("/", ["AUTH"], passportCall("jwt", {strategyTipe: "jwt"}), ticketControllers.udateTicketController)
    }
}