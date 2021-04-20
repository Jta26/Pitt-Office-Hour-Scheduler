const hfDropdown = {
    data: function () {
        return {
            isDropped: false,
            searchValue: '',
            selectedItem: null,
            mutableItemList: []
        }
    },
    props: {
        placeholder: String,
        itemList: {
            type: Array/Object,
            required: true
        },
        dropdownContext: String
    },
    methods: {
        toggle: function (event) {
            this.isDropped = !this.isDropped;
        },
        toggleInput: function(event) {
            this.isDropped = true;
            this.mutableItemList = this.itemList;
        },
        selectItem: function(event, item) {
            this.selectedItem = item;
            this.$root.$emit(this.dropdownContext != null ? this.dropdownContext : 'generic dropdown', this.selectedItem);
        },
        clearItem: function(event) {
            this.selectedItem = null;
            this.isDropped = false;
            this.searchValue = '';
        },
        filterItemList: function(event) {
            console.log('updated list', this.searchValue);
            this.mutableItemList = this.itemList.filter((item) => {
                return item.name.includes(this.searchValue);
            })
        }
    },
    mounted: function() {
        // listen for the event that selects the course, then make a network request for students in that course.
        // i.e.
        // this.$root.$on('courseSelection', data=> {
        //     console.log('selected course', data.name);
        //     this.courseSelection = data.name;
        // });
    },
    created: function() {
        this.mutableItemList = this.itemList;
    },
    template: ` <div>
                    <div class='hf-dropdown' :class="(isDropped) ? 'toggled' : ''"  v-if="!selectedItem">
                        <div class='hf-dropdown-search'>
                            <input type="text" :placeholder="placeholder" v-model.trim="searchValue" @input="toggleInput(); filterItemList();" @focus="toggle"/>
                            <a href="#" v-on:click="toggle">CHV</a>    
                        </div>
                        <div class='hf-dropdown-list' v-show="isDropped">
                            <div v-for="item in mutableItemList" :key="item.name">
                                <a href="#" v-on:click="selectItem($event, item)">{{ item.name }}</a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 v-if="selectedItem"><span><a href="#" v-on:click="clearItem">Edit</a>&nbsp</span>{{ selectedItem.name }}</h3>
                    </div>
                </div>`
};


