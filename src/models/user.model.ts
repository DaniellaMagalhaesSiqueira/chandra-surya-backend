export interface User{
    id: string;
    isAdmin: boolean;
    name: string;
    email: string;
    cpf: string;
    password: string;
    birthDate: Date | string;
}