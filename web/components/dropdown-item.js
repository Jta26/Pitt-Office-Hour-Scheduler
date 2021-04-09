// renders a number of dropdown items.


Vue.component('hf-dropdown-item', 
{
    data: function() {
        return {
            isDropped: false
        }
    },
    props: ['search'],
    template: '<div><a href="#">CS 0045: Data Structures</a></div>'
});

new Vue({ el: "#app"});