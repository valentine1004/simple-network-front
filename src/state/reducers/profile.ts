const initialState = [
    'My home playlist',
    'My work playlist'
];

export default function profile (state = initialState, action: any){
    if(action.type === "ADD_PLAYLIST"){
        return state;
    }else if (action.type === "DELETE_PLAYLIST"){
        return state;
    }
    return state;
}