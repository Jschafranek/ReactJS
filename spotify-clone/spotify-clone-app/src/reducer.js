export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // remove after finished developing
    //token: "BQB2EeJ31nGcX_7ZA4mX6rW_AljqzEbMGB3Urm0a95fbn5cf8MRKRf8KwfOd4Sl-5Dn27ptYAsTJ0zWQss-_cJwgopw48L54Xek7VULkKMET6T8W-aMprQQ6MSnS3Z8t-Sw-tt-0TcrHfRFP3mtjwKR6BWmTUQ",
};

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            }
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    };
}

export default reducer;