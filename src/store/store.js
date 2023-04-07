import { configureStore, createSlice, current } from '@reduxjs/toolkit'

let data = createSlice({
    name: 'data',
    initialState: { // data.json
    },
    reducers: {
        remove(state, action) {   
            let result = [], type = action.payload.type;
            result = state[type].filter((list)=>list.id !== action.payload.id)
            console.log(result)
            return {...state,[type]:[...result]}
        },
        add(state, action) {
            let result = []
            result = [...state[action.payload.type], action.payload]
            return {...state, [action.payload.type]: [...result]}
        },
        update(state, action) {
            let id = action.payload.id, result = [] , newData = {}
            let type = action.payload.type;
            result = current(state[type]).map(el => el.id === id ? action.payload : el)
            newData = {[type]:[...result]}
            console.log(newData)
            return Object.assign({},state,newData)
        },
        addTag(state, action) {
            if(Object.keys(action.payload)[0]==='') return {...state}
            return {...state,...action.payload}
        },
        init(state,action){
            return {...action.payload}
        }
    }

})

let CU_state = createSlice({
    name: 'CU_state',
    initialState: {
        isCreate: false, isUpdate: false
    },
    reducers: {
        IsCreate(state) {
            return { ...state, isCreate: !state.isCreate }
        }, IsUpdate(state) {
            return { ...state, isUpdate: !state.isUpdate }
        },
    }
})
let mode = createSlice({
    name: 'mode',
    initialState: {
        mode: false // false - light, true - dark
    },
    reducers: {
        Change(state) {
            return !state
        }
    }
})
let cal_icon = createSlice({
    name: 'cal_icon',
    initialState:false,
    reducers:{
        Show(state){
            return !state
        }
    }

})


export let { remove, add, update, addTag,init } = data.actions
export let { IsCreate, IsUpdate } = CU_state.actions
export let { Change } = mode.actions
export let { Show } = cal_icon.actions


export default configureStore({
    reducer: {
        data: data.reducer,
        CU_state: CU_state.reducer,
        mode: mode.reducer,
        cal_icon: cal_icon.reducer
    }
})