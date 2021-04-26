var students = new Array();
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
        dropdownContext: String,
        dropdownLabel: String
    },
    methods: {
        toggle: function (event) {
            this.isDropped = !this.isDropped;
            if(this.dropdownContext == "studentSelection" && students.length>0){
                this.mutableItemList = students;
            }
        },
        toggleInput: function(event) {
            this.isDropped = true;
            if(this.dropdownContext == "studentSelection" && students.length>0){
                this.mutableItemList = students;
            }
            //this.mutableItemList = this.itemList;
        },
        selectItem: async function(event, item) {
            this.selectedItem = item;
            if(this.dropdownContext == "courseSelection"){
                var code = this.selectedItem.name.substring(0, this.selectedItem.name.indexOf(":"));
                const apiResult = await fetch('/data/students.php?course=' + code);
                const studentData = await apiResult.json();
                students = studentData;
            }
            this.$root.$emit(this.dropdownContext != null ? this.dropdownContext : 'generic dropdown', this.selectedItem);
        },
        clearItem: function(event) {
            this.selectedItem = null;
            this.isDropped = false;
            this.searchValue = '';
            this.$root.$emit(this.dropdownContext != null ? this.dropdownContext : 'generic dropdown', null);
            
        },
        filterItemList: function(event) {
            console.log('updated list', this.searchValue);
            this.mutableItemList = this.itemList.filter((item) => {
                return item.name.includes(this.searchValue);
            })
        }
    },
    mounted: async function() {
        // listen for the event that selects the course, then make a network request for students in that course.
        // i.e.
        // this.$root.$on('courseSelection', data=> {
        //     console.log('selected course', data.name);
        //     this.courseSelection = data.name;
        // });
        if(this.dropdownContext == "courseSelection"){
            const apiResult = await fetch('/data/courses.php');
            const courseData = await apiResult.json();

            var courses = new Array();
            for(var i = 0; i < courseData.length; i++){
                courses[courses.length] = {"name": "" + courseData[i]["course_code"] + ": " + courseData[i]["title"]};
            }
            this.mutableItemList = courses;
        }
    },
    created: function() {
        this.mutableItemList = this.itemList;
    },
    template: ` <div>
                    <p><b>{{ dropdownLabel }}</b> 
                    <div class='hf-dropdown' :class="(isDropped) ? 'toggled' : ''"  v-if="!selectedItem">
                        <div class='hf-dropdown-search'>
                            <input type="text" :placeholder="placeholder" v-model.trim="searchValue" @input="toggleInput(); filterItemList();" @focus="toggle"/>
                        </div>
                        <div class='hf-dropdown-list' v-show="isDropped">
                            <div v-for="item in mutableItemList" :key="item.name">
                                <a href="#" v-on:click="selectItem($event, item)">{{ item.name }}</a>
                            </div>
                        </div>
                    </div>
                    <div class='dropdown-selected' v-if="selectedItem">
                        <button v-on:click="clearItem" title="Click to edit">
                            <img src='./assets/pencil.png' alt='a pencil icon'/>
                            <h3>{{ selectedItem.name }}</h3>
                        </button>
                    </div>
                </div>`
};


