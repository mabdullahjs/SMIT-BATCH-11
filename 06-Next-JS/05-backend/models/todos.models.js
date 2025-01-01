import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema(
    {
        title: { type: String, required: true }
    },
    { timestamps: true }
);

export default mongoose.model('Todos', todoSchema);