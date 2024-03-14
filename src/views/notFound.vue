<template>
	<div class="not-found">
		<p>אופס! הדף שחיפשת לא נמצא.</p>
		<span>
			<h1>404</h1>
			<router-link to="/">לחזור לדף הבית</router-link>
		</span>
		<span>
			<img src="../assets/404.jpg" alt="אופס 404" width="200px" />
		</span>
	</div>
</template>

<script>
export default {
	name: 'NotFound',
};
</script>

<style>
.not-found {
	text-align: right;
	padding-right: 250px;
}

.not-found p {
	font-size: 24px;
}

.not-found a {
	display: inline-block;
	margin-top: 20px;
	padding: 10px 20px;
	background-color: #007bff;
	color: white;
	border-radius: 4px;
	text-decoration: none;
}
</style>
