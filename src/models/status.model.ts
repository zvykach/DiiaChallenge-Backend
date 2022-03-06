import {model, Schema} from "mongoose";

export interface IStatus {
    id: string,
    weight: number
}

const schema = new Schema<IStatus>(
    {
        id: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        weight: {
            type: Number,
            required: true
        }
    },
    {
        toJSON: {versionKey: false, useProjection: true, getters: true},
        toObject: {versionKey: false, useProjection: true, getters: true}
    }
);

export const StatusModel = model<IStatus>('Status', schema);