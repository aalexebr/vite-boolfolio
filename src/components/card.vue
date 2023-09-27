<script>
export default{
    data(){
      return{
        
      }
    },
    props:{
		title : String,
		content : String,
		type: Object,
		techs: Array,
		start_date : Date,
		end_date :Date
	}
}
</script>

<template>
	<div class="card">
		<h3>
			im a card btw
		</h3>
		<ul>
			<li v-if="title">
				title :{{ title }}
			</li>
			<li v-if="content">
				content:{{ content }}
			</li>
			<li v-if="type">
				type: {{ type.name }}
			</li>
			<li v-if="start_date && end_date">
				{{ start_date }} until {{ end_date }}
			</li>
			<li v-if="techs">
				<ul>
					techs:
					<li v-for="tech in techs">
						{{ tech.name }}
					</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
.card{
  border: 1px solid red;
  ul{
	margin-left: 20px;
  }
}
</style>
