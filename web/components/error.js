


const errorHandler = {
    data: function() {
        return {
            errorMessage: null
        }
    },
    created: function() {
        this.$root.$on('updateErrorMessage', data => {
            this.errorMessage = data;
        });
        
        this.$root.$on('clearErrorMessage', data => {
            console.log('clearing error')
            this.errorMessage = null;
        });
    },

    template: `

        <div class='error' v-if="errorMessage != null">
            <p>Error: {{ this.errorMessage }}</p>
        </div>
    `


}