export interface User{
    id: number;
    isAdmin: boolean;
    name: string;
    email: string;
    cpf: string;
    password: string;
    birthDate: Date | string;
}