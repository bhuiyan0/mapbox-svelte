<script>
	
</script>

<div class="menu-left">
	<span class="title">Layers</span>
	<hr class="my-2">
	<div class="mb-2">
		<input class="cursor-pointer" id="flood-zone" type="checkbox" value="flood-zone">
		<label class="cursor-pointer" for="flood-zone" >Flood Zone</label>
	</div>
	<div>
		<input class="cursor-pointer" id="noise-zone" type="checkbox" value="noise-zone">
		<label class="cursor-pointer" for="noise-zone" >Noise Zone</label>
	</div>
</div>

<style>
	.title {
		@apply text-lg;
	}

	.menu-left{
		@apply absolute top-2 left-3 p-3 bg-white z-10;
	}
</style>