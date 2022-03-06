import {model, Schema, Types} from "mongoose";
import {IStreet, streetSchema} from "./street.model";

export interface IApplication {
    address: IStreet
    status?: Types.ObjectId
}

const schema = new Schema<IApplication>(
    {
        address: {
            type: streetSchema,
            required: true
        },
        status: {
            type: Schema.Types.ObjectId,
            ref: 'Status'
        }
    },
    {
        toJSON: {versionKey: false, useProjection: true, getters: true},
        toObject: {versionKey: false, useProjection: true, getters: true}
    }
);

export const ApplicationModel = model<IApplication>('Application', schema);