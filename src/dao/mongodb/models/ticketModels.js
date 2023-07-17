import mongoose from "mongoose";

const collection = "Tickets";

const schema = mongoose.Schema({

    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Users",
    },

    code: {
        type: String,
        unique: true
    },

    cart: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Cart",
    },

    amount: Number, // suma total de la compra

    purchaser: String, // correo del usuario asociado al carrito

    count: {
        type: Number,
        default: 0,
    }


},

    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }

);

schema.pre("save", async function (next) {
    if (this.isNew) {

        const user = await this.model("Users").findById(this.user);

        this.purchaser = user.email;

        const count = await this.model("Tickets").countDocuments();
        this.code = `${user.email}.${count + 1}/${this._id}`;
        console.log(this.code);
        this.count = count + 1;

        next();

        try {

        } catch (error) {
            next(error)
        }

    } else {
        next()
    }
})

const ticketModel = mongoose.model(collection, schema);

export default ticketModel;
