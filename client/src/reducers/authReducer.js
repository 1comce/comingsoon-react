export const authReducer = (state, action) => {
    const { type, payload } = action;
    //holder
    console.log('payload:', payload);
    switch (type) {
        case 'SET_AUTH':
            return { ...state };
        default:
            console.log('error authReducer');
    }
};
