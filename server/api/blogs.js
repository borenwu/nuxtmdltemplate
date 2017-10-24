import { Router } from 'express'

const router = Router()

// Mock blogs
const blogs = [
    {
        img: 'http://oybhwbo4h.bkt.clouddn.com/DK003/DK003_01.jpg',
        title:'UGG DK 003',
        shortContent:'DK UGG DK003 防泼水雪地靴'
    },

    {
        img: 'http://oybhwbo4h.bkt.clouddn.com/DK003/DK003_01.jpg',
        title:'UGG DK 003',
        shortContent:'DK UGG DK003 防泼水雪地靴'
    },

    {
        img: 'http://oybhwbo4h.bkt.clouddn.com/DK003/DK003_01.jpg',
        title:'UGG DK 003',
        shortContent:'DK UGG DK003 防泼水雪地靴'
    },

    {
        img: 'http://oybhwbo4h.bkt.clouddn.com/DK003/DK003_01.jpg',
        title:'UGG DK 003',
        shortContent:'DK UGG DK003 防泼水雪地靴'
    },

    {
        img: 'http://oybhwbo4h.bkt.clouddn.com/DK003/DK003_01.jpg',
        title:'UGG DK 003',
        shortContent:'DK UGG DK003 防泼水雪地靴'
    },

    {
        img: 'http://oybhwbo4h.bkt.clouddn.com/DK003/DK003_01.jpg',
        title:'UGG DK 003',
        shortContent:'DK UGG DK003 防泼水雪地靴'
    },

    {
        img: 'http://oybhwbo4h.bkt.clouddn.com/DK003/DK003_01.jpg',
        title:'UGG DK 003',
        shortContent:'DK UGG DK003 防泼水雪地靴'
    },

    {
        img: 'http://oybhwbo4h.bkt.clouddn.com/DK003/DK003_01.jpg',
        title:'UGG DK 003',
        shortContent:'DK UGG DK003 防泼水雪地靴'
    },

    {
        img: 'http://oybhwbo4h.bkt.clouddn.com/DK003/DK003_01.jpg',
        title:'UGG DK 003',
        shortContent:'DK UGG DK003 防泼水雪地靴'
    },

]

/* GET users listing. */
router.get('/blogs', function (req, res, next) {
    res.json(blogs)
})

/* GET user by ID. */
router.get('/blogs/:id', function (req, res, next) {
    const id = parseInt(req.params.id)
    if (id >= 0 && id < users.length) {
        res.json(blogs[id])
    } else {
        res.sendStatus(404)
    }
})

export default router/**
 * Created by Administrator on 2017/10/21.
 */
