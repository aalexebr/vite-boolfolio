<script>
    import axios from "axios";
    export default{
        data(){
        return{
            singleProject : null,
            loadingProjecs :false
        }
        },
        methods:{
            getCard(){
                if(!this.loadingProjecs){
                    this.loadingProjecs = true;
                    axios.get(`http://127.0.0.1:8000/api/projects/${this.$route.params.id}`)
                        .then((res)=>{
                            console.log(res.data,'from data');
                            this.singleProject = res.data.results
                            console.log(this.singleProject,'from var');
                            this.loadingProjecs = false;
                        })
                        .catch(err=>{
                        if(err.response.status == 404){
                            this.$router.push({name:'notFound'})
                        }
                    })
                }
            },
        },
        created(){
            this.getCard();
        },
    }
</script>

<template>
    <template v-if="singleProject">
        <div class="container">
            <div class="row justify-center">
                <ul>
                <li>
                    title :{{ singleProject.title }}
                </li>
                <li v-if="singleProject.content">
                    content:{{ singleProject.content }}
                </li>
                <li v-if="singleProject.type">
                    type: {{ singleProject.type.name }}
                </li>
                <li v-if="singleProject.start_date && singleProject.end_date">
                    {{ singleProject.start_date }} until {{ singleProject.end_date }}
                </li>
                <li v-if="singleProject.give_tech">
                    <ul>
                        techs:
                        <li v-for="tech in singleProject.give_tech">
                            {{ tech.name }}
                        </li>
                    </ul>
                </li>
            </ul>
            </div>
	    </div>
    </template>
</template>

<style lang="scss" scoped>

</style>