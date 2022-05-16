<script>
  import { onMount } from "svelte";

  export let params;
  let customer = [];

  const apiUrl =
    "https://europe-west2-striped-graph-349818.cloudfunctions.net/gcp-hello/getCustomer?customerId=";

  onMount(async () => {
    console.log(customer);
    const res = await fetch(apiUrl + params.id);
    customer = await res.json(customer[0]);
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

