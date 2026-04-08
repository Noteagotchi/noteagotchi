<script lang="ts">
  import { ArrowUpIcon } from 'phosphor-svelte';
  import { Button } from '$ui/button/index.js';
</script>

<div class="flex flex-wrap items-center gap-2 md:flex-row bg-red-50">
  <Button variant="outline">Button</Button>
  <Button variant="outline" size="icon" aria-label="Submit">
    <ArrowUpIcon />
  </Button>
</div>
