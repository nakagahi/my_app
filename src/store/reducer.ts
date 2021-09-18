import ActionTypes from "./action";
export interface MyInfoType {
//ここにstoreが持つstateを書く
    name: string,
    age: number
}

export const initialState: MyInfoType = {
//ここにstateの初期値を書く
    name: '中川 大樹',
    age: 27
}

export default function myInfoReducer(state=initialState, action: any){
        switch (action.type){
            case ActionTypes.ADD:
                return state.age + 1;
            case ActionTypes.minus:
                return state.age - 1;
            default:
                return state;
        }
}


