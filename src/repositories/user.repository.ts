import { getConnection, getRepository } from "typeorm";
import { UserEntity } from "../entities/user.entity";
import { User } from "../models/user.model";


export class UserRepository{

    public static getAll(){
        return getConnection()
        .getRepository(UserEntity)
        .find();
    }

    public static getById(id: number){
        return getConnection()
        .getRepository(UserEntity)
        .findOne({ id });
    }

    public static findByEmailAndPassword(email: string, password: string){
        return getRepository(UserEntity)
        .findOne({ email, password})
    }

    public static create(user: Partial<User>){
        return getConnection()
        .getRepository(UserEntity)
        .insert(user);
    }

    public static update(id: number, user: Partial<User>){
        return getConnection()
        .getRepository(UserEntity)
        .update({ id }, user);
    }

    public static remove(id: number){
        return getConnection()
        .getRepository(UserEntity)
        .delete({ id });
    }

}