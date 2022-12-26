import { Request, Response } from 'express'

export function home(req: Request, res: Response) {
  res.send('Home do controller')
  // res.render('pages/page')
}

export function dogs(req: Request, res: Response) {
  res.send('Home dos dogs')
  // res.render('pages/page')
}

export function cats(req: Request, res: Response) {
  res.send('Home dos gatos')
  // res.render('pages/page')
}

export function fishes(req: Request, res: Response) {
  res.send('Home dos peixes')
  // res.render('pages/page')
}
