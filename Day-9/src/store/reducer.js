import { createSlice } from '@reduxjs/toolkit'

export const customSlice = createSlice({
    name: 'custSlice',
    initialState: {
        products: [
            {
                id: 1,
                title: 'apple',
                stock: 32,
                img: 'https://img.freepik.com/free-photo/apples-red-fresh-mellow-juicy-perfect-whole-white-desk_179666-271.jpg?w=1380&t=st=1695275896~exp=1695276496~hmac=87c10efb460a7c567a8e05b6ac7ff65f57c9bc18244d24c3a62510088cbe9481',
                price: 4.00
            },
            {
                id: 2,
                title: 'banana',
                stock: 32,
                img: 'https://img.freepik.com/free-photo/apples-red-fresh-mellow-juicy-perfect-whole-white-desk_179666-271.jpg?w=1380&t=st=1695275896~exp=1695276496~hmac=87c10efb460a7c567a8e05b6ac7ff65f57c9bc18244d24c3a62510088cbe9481',
                price: 6.00
            },
            {
                id: 3,
                title: 'carrot',
                stock: 32,
                img: 'https://img.freepik.com/free-photo/apples-red-fresh-mellow-juicy-perfect-whole-white-desk_179666-271.jpg?w=1380&t=st=1695275896~exp=1695276496~hmac=87c10efb460a7c567a8e05b6ac7ff65f57c9bc18244d24c3a62510088cbe9481',
                price: 2.00
            },
            {
                id: 4,
                title: 'dragon fruit',
                stock: 32,
                img: 'https://img.freepik.com/free-photo/apples-red-fresh-mellow-juicy-perfect-whole-white-desk_179666-271.jpg?w=1380&t=st=1695275896~exp=1695276496~hmac=87c10efb460a7c567a8e05b6ac7ff65f57c9bc18244d24c3a62510088cbe9481',
                price: 10.00
            },
            {
                id: 5,
                title: 'egg',
                stock: 32,
                img: 'https://img.freepik.com/free-photo/apples-red-fresh-mellow-juicy-perfect-whole-white-desk_179666-271.jpg?w=1380&t=st=1695275896~exp=1695276496~hmac=87c10efb460a7c567a8e05b6ac7ff65f57c9bc18244d24c3a62510088cbe9481',
                price: 0.70
            },
            {
                id: 6,
                title: 'fish',
                stock: 32,
                img: 'https://img.freepik.com/free-photo/apples-red-fresh-mellow-juicy-perfect-whole-white-desk_179666-271.jpg?w=1380&t=st=1695275896~exp=1695276496~hmac=87c10efb460a7c567a8e05b6ac7ff65f57c9bc18244d24c3a62510088cbe9481',
                price: 12.00
            },
            {
                id: 7,
                title: 'orange',
                stock: 32,
                img: 'https://img.freepik.com/free-photo/apples-red-fresh-mellow-juicy-perfect-whole-white-desk_179666-271.jpg?w=1380&t=st=1695275896~exp=1695276496~hmac=87c10efb460a7c567a8e05b6ac7ff65f57c9bc18244d24c3a62510088cbe9481',
                price: 3.00
            },
            {
                id: 8,
                title: 'mango',
                stock: 32,
                img: 'https://img.freepik.com/free-photo/apples-red-fresh-mellow-juicy-perfect-whole-white-desk_179666-271.jpg?w=1380&t=st=1695275896~exp=1695276496~hmac=87c10efb460a7c567a8e05b6ac7ff65f57c9bc18244d24c3a62510088cbe9481',
                price: 6.00
            },
        ],
        users: [
            {
                username: 'shapthakirish',
                contact: '9342222407',
                total_orders: 7
            },
            {
                username: 'chithu',
                contact: '9803245643',
                total_orders: 10
            }
        ],
        orders: [
            {
                id: 1,
                date: '10-9-2023',
                price: 143,
                selected: false
            },
            {
                id: 2,
                date: '11-9-2023',
                price: 43,
                selected: false
            },
            {
                id: 3,
                date: '12-9-2023',
                price: 233,
                selected: false
            },
            {
                id: 4,
                date: '13-9-2023',
                price: 53,
                selected: false
            },
            {
                id: 5,
                date: '14-9-2023',
                price: 133,
                selected: false
            },
            {
                id: 6,
                date: '14-9-2023',
                price: 533,
                selected: false
            },
            {
                id: 7,
                date: '14-9-2023',
                price: 231,
                selected: false
            },
            {
                id: 8,
                date: '14-9-2023',
                price: 533,
                selected: false
            },
            {
                id: 9,
                date: '14-9-2023',
                price: 132,
                selected: false
            },
            {
                id: 10,
                date: '14-9-2023',
                price: 231,
                selected: false
            },
            {
                id: 11,
                date: '14-9-2023',
                price: 321,
                selected: false
            },
            {
                id: 12,
                date: '15-9-2023',
                price: 122,
                selected: false
            },
            {
                id: 13,
                date: '15-9-2023',
                price: 212,
                selected: false
            },
            {
                id: 14,
                date: '15-9-2023',
                price: 422,
                selected: false
            },
            {
                id: 15,
                date: '15-9-2023',
                price: 214,
                selected: false
            },
            {
                id: 16,
                date: '15-9-2023',
                price: 21,
                selected: false
            },
            {
                id: 17,
                date: '15-9-2023',
                price: 72,
                selected: false
            }
        ],
        order: {
            id: null,
            date: null,
            price: null,
            selected: false
        },
        workers: [
            {
                id: 1,
                username: 'TrixR',
                email: 'kingkrabby10@gmail.com',
                contact: '9855672452',
                password: '123',
                gender: 'M',
                isAdmin: true,
                present: true,
                time: '23-09-2023'
            },
            {
                id: 2,
                username: 'TrickXer',
                email: 'kingrabby10@gmail.com',
                contact: '9452344532',
                password: '123',
                gender: 'M',
                salaray: 15000,
                isAdmin: false,
                present: false,
                time: 'Sun, 24 Sep 2023 12:02:42 GMT'
            },
            {
                id: 3,
                username: 'Roxy',
                email: 'Roxy@gmail.com',
                contact: '9653483281',
                password: '123',
                gender: 'F',
                salaray: 12000,
                isAdmin: false,
                present: false,
                time: 'Sun, 24 Sep 2023 12:02:42 GMT'
            }
        ],
        worker: {
            username: null,
            email: null,
            password: null,
            isAdmin: false,
            present: false,
            time: null
        },
        isLogin: false
    },
    reducers: {
        setProducts(state, action) {
            action.payload.map(item => {
                state.products[(item.id - 1)].stock -= item.quantity
            })
        },
        setOrder(state, action) {
            state.order = action.payload
        },

        setOrders(state, action) {
            state.orders = [...state.orders, action.payload]
        },

        setUsers(state, action) {
            let flag = false

            state.users?.map(user => {
                if (!flag) {
                    if (user.username === action.payload.username && action.payload.contact === user.contact) {
                        user.total_orders += 1
                        flag = true
                    }
                }
            })

            if (!flag) state.users = [...state.users, action.payload]
        },

        setWorker(state, action) {
            state.worker = action.payload
            state.workers[action.payload.id-1].present = action.payload.present
            state.workers[action.payload.id-1].time = action.payload.time
        },

        setWorkers(state, action) {
            state.workers = [...state.workers, action.payload]
        },

        setIsLogin(state, action) {
            state.isLogin = action.payload
        }
    }
})

export const { setProducts, setUsers, setWorker, setWorkers, setIsLogin, setOrder, setOrders } = customSlice.actions
export default customSlice.reducer