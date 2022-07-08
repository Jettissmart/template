//export type here


export type RegisterUserWithPasswordDTO ={
    username:string
    password:string
    chronic_disease?:string
    gender?:string
    birthday?:Date
    delivery_address?:string
    mobile?:number
    email?:string
    registered_number?:number
    role?:string
    other_info?:Text

}

export type LoginUserWithPasswordDTO ={
    username:string
    password:string
    chronic_disease?:string
    gender?:string
    birthday?:Date
    delivery_address?:string
    mobile?:number
    email?:string
    registered_number?:number
    role?:string
    other_info?:Text

}

export type User ={
    id:number
    username:string
    password_hash?:string
    email?:string
}


export type JWTPayload ={
    id:number //user_id

    exp:number //expire_at (ms)
}

