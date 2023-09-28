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
						// console.log(res.data.results);
						this.projects = res.data.results;
						// console.log(this.projects);
						// console.log(this.projects[10].give_tech[0].name);
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
	<div class="container">
			<table>
				<thead>
					<tr>
						<th scope="col">id</th>
						<th scope="col">title</th>
						<!-- <th scope="col">date</th> -->
						<!-- <th scope="col">type</th>
						<th scope="col">tech</th> -->
						<th scope="col">ACTION</th>
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
						<!-- <td>
							{{ project.start_date }}||{{ project.end_date }}
						</td>
						<td>
							<span v-if="project.type">{{ project.type.name }}</span>
						</td>
						<td>
							<span v-for="(tech,j) in project.give_tech" :key="j">
								{{tech.name}}
							</span>
						</td> -->
						<td>
							<button @click="getCard(project.id)">view project</button>
						</td>
					</tr>
				</tbody>
			</table>
			<button v-if="viewCard" @click="closeCard()">
				close card
			</button>
			<div v-if="viewCard">
				<card 
					:title="singleProject.title"
					:content="singleProject.content"
					:type="singleProject.type"
					:techs="singleProject.give_tech"
					:start_date="singleProject.start_date"
					:end_date="singleProject.end_date"
					/>
			</div>
	</div>
	<router-view></router-view>
</template>

<style lang="scss" scoped>

</style>
