<script lang="ts">
	import '../app.css';

	let { children } = $props();

	const ogImage = 'https://daydream.butwalhacks.com/og-image.png';
	const ogImageAlt = 'Daydream logo in a pastel sky framed by upside-down city buildings and clouds, with the caption Daydream Butwal · by Butwal Hacks';
</script>

<svelte:head>
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:type" content="image/png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={ogImageAlt} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:image:alt" content={ogImageAlt} />
</svelte:head>

{@render children()}
