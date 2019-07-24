var val_count = document.getElementById("spanCount");

var click_counter = {
    count : 0,
    increment : (function(el){
        this.count++
        el.innerText = "[" + this.count + "]"
    })()
};

function trackCount(){
    click_counter.increment(val_count);
}
