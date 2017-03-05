import {observable, action} from 'mobx';

var AppStore = observable({
    showContent: 'HotPosts'
});


AppStore.changeContent = action(function reset(val) {
    AppStore.showContent = val;
    console.log('AppStore.showContent:', AppStore.showContent);
});



export default observable(AppStore);