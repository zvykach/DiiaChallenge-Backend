import {model, Schema} from "mongoose";

export interface ICity {
    id: string
}

const schema = new Schema<ICity>(
    {
        id: {
            type: String,
            required: true,
            unique: true,
            index: true
        }
    },
    {
        toJSON: {versionKey: false, useProjection: true, getters: true},
        toObject: {versionKey: false, useProjection: true, getters: true}
    }
);

export const CityModel = model<ICity>('City', schema);