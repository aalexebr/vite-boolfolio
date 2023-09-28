<script>
import axios from "axios";
import card from '../components/card.vue'
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
                    .catch(err=>{
                        if(err.response.status == 404){
                            this.$router.push({name:'notFound'})
                        }
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
    <h1>this is projects</h1>
    <div class="container">
		<div class="row justify-center">
            <table>
				<thead>
					<tr>
						<th scope="col">id</th>
						<th scope="col">title</th>
						<!-- <th scope="col">date</th> -->
						<!-- <th scope="col">type</th>
						<th scope="col">tech</th> -->
						<th scope="col">ACTION</th>
                        <th scope="col">view single</th>
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
                        <td>
                            <router-link :to="{name:'singleProject',params:{ id: project.id}}">
                                view
                            </router-link>
                        </td>
					</tr>
				</tbody>
			</table>
        </div>
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
</template>

<style lang="scss" scoped>
    .container{
        background-color: lightblue;
        table,td,th{
            border: 1px solid black;
            background-color: rgb(58, 58, 58);
            color: white;
        }
    }
</style>