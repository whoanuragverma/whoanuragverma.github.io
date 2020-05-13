$(document).ready(()=>{
    $(window).scroll(()=>{
        if(this.scrollY<window.innerHeight){
            $("meta[name='theme-color']").attr("content","#000");
        }else if(this.scrollY>window.innerHeight&&this.scrollY<2*window.innerHeight){
            $("meta[name='theme-color']").attr("content","#fff");
        }else if(this.scrollY>2*window.innerHeight&&this.scrollY<3*window.innerHeight){
            $("meta[name='theme-color']").attr("content","#ffd1dc");
        }else if(this.scrollY>3*window.innerHeight&&this.scrollY<4*window.innerHeight){
            $("meta[name='theme-color']").attr("content","#add8e6");
        }
    })
})