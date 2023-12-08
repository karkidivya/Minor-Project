<svelte:head>
    <title>KaamSewa</title>
</svelte:head>
<script>
    let count = 0
    function increment(){
        count += 1;
    }


    $:{
        // console.log('Hello World', count )
        console.log('This will be logged whenever the count chages')
    }
</script>
<nav>
    <ul class = "flex flex-row">
        <li class = "p-2">
            <a href="/">Home</a>
        </li>

        <li  class = "p-2">
            <a href="/about">About</a>
        </li>
    </ul>
</nav>

<main>
    <button on:click = {increment} class = 'bg-blue-500 p-2 rounded-md text-[#fffff]'>
        Clicked {count}
        {count === 1 ? 'time' : 'times'}       
    </button>
</main>

