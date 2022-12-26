import { Request, Response } from 'express'

import { pet } from '../models/pet'
import { createMenuObject } from '../helpers/create-menu-object'

export function search(req: Request, res: Response) {
  let query: string = req.query.q as string

  if (!query) {
    res.redirect('/')
    return
  }

  let list = pet.getFromName(query)

  const menu = {
    menu: createMenuObject(''),
    list,
    query,
  }

  res.render('pages/page', menu)
}
