<script>
  import router from "page";
  import routes from "./routes";

  let page = null;
  let params = {};

  routes.forEach((route) => {
    router(
      route.path,
      (ctx, next) => {
        params = { ...ctx.params };
        next();
      },
      () => {
        if (route.auth) {
          router.redirect("/");
        } else {
          page = route.component;
        }
      }
    );
  });

  router.start();
</script>

<main>
<nav class="relative w-full flex flex-wrap items-center justify-between py-6 bg-orange-100 text-orange-500 shadow-lg navbar navbar-expand-lg navbar-light">
<div class="collapse navbar-collapse flex-grow space-x-6 items-center">
  <a class="text-xl font-semibold font-sans px-4" href="/">Home</a>
  <a class="text-xl font-semibold font-sans" href="/customers">Customers</a>
</div>
</nav>

<svelte:component this={page} {params} />
</main>

<style lang="postcss" global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

