<script>
import axios from "axios";
import card from './card.vue'
export default{
    data(){
      return{
        projects: null,
		viewCard: false,
		singleProject : null
      }
    },
    methods:{
		getProjects(){
			axios.get('http://127.0.0.1:8000/api/projects')
					.then((res)=>{
						this.projects = res.data.results;
					})
		},
		getCard(i){
			this.viewCard = false
			this.singleProject = null
			axios.get(`http://127.0.0.1:8000/api/projects/${i}`)
					.then((res)=>{
						// console.log(res.data);
						console.log(i);
						this.viewCard = !this.viewCard
						this.singleProject = res.data.results
						console.log(this.singleProject);
					})
		},
		closeCard(){
			this.viewCard = false;
		}
	},
	created(){
		this.getProjects();
		// this.getCard();
	},
	components:{
		card
	}
}
</script>

<template>
	<router-view></router-view>
</template>

<style lang="scss" scoped>

</style>
