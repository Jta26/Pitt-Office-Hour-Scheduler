Vue.component('hf-dropdown', {
    data: function () {
        return {
            isDropped: false,
            searchValue: '',
            selectedItem: null
        }
    },
    props: {
        placeholder: String,
        itemList: {
            type: Array/Object,
            required: true
        }
    },
    methods: {
        toggle: function (event) {
            this.isDropped = !this.isDropped;
        },
        toggleInput: function(event) {
            this.isDropped = true;
        },
        selectItem: function(event, item) {
            this.selectedItem = item;
        },
        clearItem: function(event) {
            this.selectedItem = null;
            this.isDropped = false;
            this.searchValue = '';
        }
    },
    template: ` <div>
                    <div class='hf-dropdown' :class="(isDropped) ? 'toggled' : ''"  v-if="!selectedItem">
                        <div class='hf-dropdown-search'>
                            <input type="text" :placeholder="placeholder" v-model.trim="searchValue" @input="toggleInput" @focus="toggle"/>
                            <a href="#" v-on:click="toggle">CHV</a>    
                        </div>
                    
                        <div class='hf-dropdown-list' v-show="isDropped">
                            <div v-for="item in itemList" :key="item.name">
                                <a href="#" v-on:click="selectItem($event, item)">{{ item.name }}</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 v-if="selectedItem"><span><a href="#" v-on:click="clearItem">Edit</a>&nbsp</span>{{ selectedItem.name }}</h3>
                    </div>
                     
                </div>`
});





new Vue({
    el: "#app"
});