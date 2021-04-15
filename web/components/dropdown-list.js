// renders a number of dropdown items.


Vue.component('hf-dropdown-list', 
{
    data: function() {
        return {
            isDropped: false,
            courseList: [
                {name: 'CS 0045: Data Structres'}
            ]
        }
    },
    props: ['search'],
    template: '<div></div>'
});
