<script>
  import { onMount } from "svelte";

  const apiUrl =
    "https://europe-west2-striped-graph-349818.cloudfunctions.net/gcp-hello/getCustomers";

  let customer = [];

  onMount(async () => {
    const res = await fetch(apiUrl);
    customer = await res.json();
  });
</script>

<main>
  <div class="p-12 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-10">
    {#each customer as customer}
      <div class="w-full max-w-lg rounded-lg overflow-hidden shadow-xl sm:flex">
        <div class="w-full sm:w-1/3">
          <img
            class="inline object-cover w-20 h-20 mr-2 rounded-full"
            src="https://images.unsplash.com/photo-1606225457115-9b0de873c5db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="customer profile"/>
        </div>
        <div class="flex-1 px-6 py-4">
          <div class="font-medium font-sans text-xl mb-2 leading-loose">
            <a href="/customers/{customer.id}">
            {customer.name}
            </a>
          </div>
        </div>
      </div>
    {/each}
  </div>
</main>
