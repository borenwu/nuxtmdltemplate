import { Router } from 'express'

const router = Router()

// Mock blogs
const blogs = [
    {
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1508579547151&di=6d7250ca6ce1211dde84cebe3b681873&imgtype=0&src=http%3A%2F%2Fg.hiphotos.baidu.com%2Fimage%2Fcrop%253D0%252C0%252C800%252C956%2Fsign%3D8ca87e95df3f8794c7b0126eef2b22c4%2Fd788d43f8794a4c263f37a0605f41bd5ac6e39ce.jpg',
        title:'Blog template',
        shortContent:'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.'
    },

    {
        img: '~assets/img/example-work07.jpg',
        title:'Sunt nulla',
        shortContent:'Enim labore aliqua consequat ut quis ad occaecat aliquip incididunt. Sunt nulla eu enim irure enim nostrud aliqua consectetur ad consectetur sunt ullamco officia. Ex officia laborum et consequat duis.'
    }
]

/* GET users listing. */
router.get('/blogs', function (req, res, next) {
    res.json(blogs)
})

/* GET user by ID. */
router.get('/blogs/:id', function (req, res, next) {
    const id = parseInt(req.params.id)
    if (id >= 0 && id < users.length) {
        res.json(users[id])
    } else {
        res.sendStatus(404)
    }
})

export default router/**
 * Created by Administrator on 2017/10/21.
 */
