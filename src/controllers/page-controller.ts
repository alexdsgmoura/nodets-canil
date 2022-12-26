import { Request, Response } from 'express'

import { createMenuObject } from '../helpers/create-menu-object'
import { pet } from '../models/pet'

export function home(req: Request, res: Response) {
  let list = pet.getAll()

  const banner = {
    title: 'Todos os animais',
    background: 'allanimals.jpg',
    menu: createMenuObject('all'),
    list,
  }

  res.render('pages/page', banner)
}

export function dogs(req: Request, res: Response) {
  let list = pet.getFromType('dog')

  const banner = {
    title: 'Cachorros',
    background: 'banner_dog.jpg',
    menu: createMenuObject('dog'),
    list,
  }

  res.render('pages/page', banner)
}

export function cats(req: Request, res: Response) {
  let list = pet.getFromType('cat')

  const banner = {
    title: 'Gatos',
    background: 'banner_cat.jpg',
    menu: createMenuObject('cat'),
    list,
  }

  res.render('pages/page', banner)
}

export function fishes(req: Request, res: Response) {
  let list = pet.getFromType('fish')

  const banner = {
    title: 'Peixes',
    background: 'banner_fish.jpg',
    menu: createMenuObject('fish'),
    list,
  }

  res.render('pages/page', banner)
}
