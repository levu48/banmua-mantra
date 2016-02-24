import {Mongo} from 'meteor/mongo';

export const Posts = new Mongo.Collection('posts');
export const Entries = new Mongo.Collection('entries');