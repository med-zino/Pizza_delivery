import mongoose from 'mongoose'

const OrderShema = new mongoose.Schema(
  {
    customer: {
      type: String,
      required: true,
    },
    adresse: {
      type: String,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    status: {
      type: Number,
      required: true,
      default: 0,
    },
    method: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
)

//singleton design pattern

export default mongoose.models.Order || mongoose.model('Product', OrderShema)
