import {Router} from 'express'

const router = Router()

// Product routes

router.get('/product', () => {})
router.get('/product:id', () => {})
router.put('/product:id', () => {})
router.post('/product', () => {})
router.delete('/product:id', () => {})

// Updates routes
router.get('/update', () => {})
router.get('/update:id', () => {})
router.put('/update:id', () => {})
router.post('/update', () => {})
router.delete('/update:id', () => {})

// Update Point routes
router.get('/updatepoint', () => {})
router.get('/updatepoint:id', () => {})
router.put('/updatepoint:id', () => {})
router.post('/updatepoint', () => {})
router.delete('/updatepoint:id', () => {})


export default router