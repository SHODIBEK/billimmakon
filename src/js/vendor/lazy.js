<script>
    document.addEventListener('lazybeforeunveil', function(e){
		var bg = e.target.getAttribute('data-poster');
		if(bg){
			e.target.setAttribute("poster", bg);
		}
	});
</script>