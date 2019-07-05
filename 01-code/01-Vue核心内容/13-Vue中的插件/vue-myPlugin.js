(function(window){

    //定义插件对象
    const myPlugin={}
    //必须给插件对象添加一个install方法
    myPlugin.install=function (Vue,options){
        //1.添加全局方法或属性
        Vue.myGlobalMethod=function(){
            //一些逻辑
            console.log('Vue全局方法 调用')
        };
        //2.谈价一个全局资源
        Vue.directive('my-directive',(el,binding)=>{
            el.textContent='my-directive'+'==='+binding.value
        });
        //添加实例方法
        Vue.prototype.$myMethod=function(){
            console.log('vm $myMethod()调用')
        }
    }
    window.myPlugin=myPlugin
})(window)