<script>
export default{
    data(){
      return{
        
      }
    },
    components: {

    }
}
</script>

<template>
	<header>
		<nav class="row">
			<div class="logo">
				<router-link :to="{name:'home'}">
						Logo
				</router-link>
			</div>
			<ul>
				<li>
					<router-link :to="{name:'projects'}">
						projects
					</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<style lang="scss" scoped>
	header{
		background-color: rgb(60, 60, 60);
		color: white;
		padding: 10px;
		.logo{
			margin-left: 10px;
			padding: 5px;
		}
		li{
			list-style-type: none;
			display: inline-block;
			padding: 5px;
			margin: 5px;
		}
	}
</style>
