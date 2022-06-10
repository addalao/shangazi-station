const home = {
    state: {
        navId: 0,
        childrenNavId: -1,
        Navtitle: '首页',
        islogin: false,
    },
    mutations: {
        setNavid(state, value) {
            state.navId = value
        },
        setChildrenNavId(state, value) {
            state.childrenNavId = value
        },
        setNavtitle(state, value) {
            state.Navtitle = value
        },
        setislogin(state, value) {
            state.Navtitle = value
        }
    }
}

export default home