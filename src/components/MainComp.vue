<script>
import axios from "axios";
export default{
    data(){
      return{
        
      }
    },
    methods:{
		getProjects(){
			axios.get('http://127.0.0.1:8000/api/projects')
					.then((res)=>{
						console.log(res.data)
					})
		}
	},
	created(){
		this.getProjects();
	}
}
</script>

<template>
	<main>
		main
	</main>
</template>

<style lang="scss" scoped>

</style>
