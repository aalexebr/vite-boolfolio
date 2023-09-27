<script>
import axios from "axios";
export default{
    data(){
      return{
        projects: null
      }
    },
    methods:{
		getProjects(){
			axios.get('http://127.0.0.1:8000/api/projects')
					.then((res)=>{
						console.log(res.data.results.data);
						this.projects = res.data.results.data;
						console.log(this.projects);
						console.log(this.projects[10].give_tech[0].name);
					})
		}
	},
	created(){
		this.getProjects();
	}
}
</script>

<template>
	<div class="container">
			<table>
				<thead>
					<tr>
						<th scope="col">id</th>
						<th scope="col">title</th>
						<th scope="col">date</th>
						<th scope="col">type</th>
						<th scope="col">tech</th>
					</tr>
    			</thead>
				<tbody>
					<tr v-for="(project,i) in projects" :key="i">
						<td>
							{{ project.id }}
						</td>
						<td>
							{{ project.title }}
						</td>
						<td>
							{{ project.start_date }}-{{ project.end_date }}
						</td>
						<td>
							{{ project.type.name }}
						</td>
						<td>
							<span v-for="(tech,j) in project.give_tech" :key="j">
								{{tech.name}}
							</span>
						</td>
					</tr>
				</tbody>
			</table>
	</div>
</template>

<style lang="scss" scoped>

</style>
