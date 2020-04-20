const initialState = {
    user: {
        data: null,
        loading: false,
        error: null
    }
};

interface IAction {
    type: string,
    payload: any
}

export default function profile(state = initialState, action: IAction) {
    const {type, payload} = action;
    switch (type) {
        case 'GET_TOKEN_SUCCESS':
            return {
                ...state,
                user: {
                    ...state.user,
                    data: payload,
                    loading: false,
                    error: null
                }
            };
        case 'GET_TOKEN_ERROR':
            return {
                ...state,
                user: {
                    ...state.user,
                    error: payload,
                    loading: false
                }
            };
        case 'GET_TOKEN_LOADING':
            return {
                ...state,
                user: {
                    ...state.user,
                    loading: payload
                }
            };
        case 'GET_PROFILE_SUCCESS':
            return {
                ...state,
                user: {
                    ...state.user,
                    data: payload,
                    loading: false,
                    error: null
                }
            };
        case 'GET_PROFILE_ERROR':
            return {
                ...state,
                user: {
                    ...state.user,
                    error: payload,
                    loading: false
                }
            };
        case 'GET_PROFILE_LOADING':
            return {
                ...state,
                user: {
                    ...state.user,
                    loading: payload
                }
            };
        default: {
            return state;
        }
    }
}