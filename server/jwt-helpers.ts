import { HttpError } from './http-error'
import { Bearer } from 'permit'
import express from 'express'
import {userService} from './server'
import { JWTPayload } from './models'

//get token from query in URL which is linked by Bearer
//www.tecky.com/?token
const permit = new Bearer({
  query: 'access_token',
})

export function requireJWTPayload(req: express.Request): JWTPayload {
  let token: string
  try {
    token = permit.check(req)
  } catch (error) {
      //eg. no token, expired token, wrong token
    throw new HttpError('Invalid Bearer Token', 401)
  }

  let payload = userService.decodeToken(token)
  return payload
}
