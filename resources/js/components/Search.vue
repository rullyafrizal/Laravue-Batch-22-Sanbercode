<template>
    <v-card class="rounded-lg" width="800">
        <v-toolbar class="py-2" dark color="indigo darken-4">
            <v-btn class="mb-3" icon dark @click.native="close">
                <v-icon>mdi-close-circle</v-icon>
            </v-btn>
            <v-text-field class="mt-5 mb-1 rounded-pill" append-icon="mdi-microphone"
                          flat label="Pencarian"
                          prepend-inner-icon="mdi-magnify"
                          v-model="keyword" @input="doSearch" solo-inverted>
            </v-text-field>
        </v-toolbar>
        <v-card-text>
            <v-subheader v-if="keyword.length > 0">
                Result Search "{{keyword}}"
            </v-subheader>


        <!--Menampilkan Hasil Pencarian-->
            <v-container class="ma-0 pa-0 mx-auto" grid list-sm>
                <v-layout wrap>
                    <v-flex xs15 sm8 md6 lg4 v-for="(campaign) in campaigns" :key="`campaign-` + campaign.id">
                        <campaign-item :campaign="campaign" @click.native="close" />
                    </v-flex>
                    <v-alert v-if="campaigns.length === 0 && keyword.length > 0" color="warning" class="white--text">
                        Hasil pencarian tidak ditemukan
                    </v-alert>
                </v-layout>
            </v-container>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: "Search",
    components: {
        CampaignItem: () => import('./CampaignItem.vue')
    },
    data(){
        return {
            keyword: '',
            campaigns: []
        }
    },
    methods: {
        doSearch(){
            let keyword = this.keyword
            if(keyword.length > 0){
                let url = '/api/campaign/search/' + keyword;
                axios.get(url).then((response) => {
                    let{data} = response.data
                    this.campaigns = data.campaigns
                }).catch((error) => {
                    console.log(error.response)
                })
            } else {
                this.campaigns = []
            }
        },
        close(){

            this.$emit('closed', false)
        }
    }
}
</script>

<style scoped>

</style>
