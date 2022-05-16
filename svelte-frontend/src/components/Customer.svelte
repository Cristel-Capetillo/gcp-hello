<script>
   import { onMount } from "svelte";

  const apiUrl = "https://europe-west2-striped-graph-349818.cloudfunctions.net/gcp-hello/getCustomer?customerId=";
  let customer = [];

  export let params;

  onMount(async () => {
    let res = await fetch(apiUrl + params.id);
    customer = await res.json();
    console.log(customer);
  });
</script>

<main class="text-center py-24 max-w-xs mx-auto sm:max-w-none">
  <div class="flex justify-center text-2xl leading-loose font-semibold">
    {#if customer == undefined}
      <p class="font-thin font-sans">Loading ...</p>
    {:else}
        <ul>
          <li class="font-sans font-medium">Country:
            <p class="font-thin font-sans">{customer.origin}</p>
          </li>
          <li class="font-sans font-medium">Habits:
            <p class="font-thin font-sans">{customer.details}</p>
          </li>
          </ul>
    {/if}
  </div>
</main>
