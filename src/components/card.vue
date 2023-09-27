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
		techs: Array
	}
}
</script>

<template>
	<div class="card">
		<ul>
			<li>
				title :{{ title }}
			</li>
			<li>
				content:{{ content }}
			</li>
			<li v-if="type">
				type: {{ type.name }}
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
