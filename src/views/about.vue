<template>
    <div class="min-h-screen flex flex-col justify-end pr-10">
        <div >
            <h1 class=" text-3xl mb-4 text-right">About</h1>
            <h2 class="text-2xl font-semibold mb-2 text-right"><span class=" text-sm font-light">(مرتضی کریمی)</span> Morteza Karimi</h2>
            <div class="flex flex-row gap-5 text-sm font-normal leading-[1.6] text-justify">
                <div class="md:basis-3/5">
                    <img
                        src="../assets/me.png"
                        alt=""
                        class="float-left w-[350px] mr-[20px]"
                        style="max-width:50%;  shape-outside: polygon(
                            94.1% 91.2%, 99.8% 100%, 0% 11.5%, 6.6% 6.7%, 18.4% 2.2%, 28.5% 0%, 48.2% 1.1%, 60.3% 3.9%, 66.7% 6.7%, 72.9% 7.9%, 83% 11.5%, 87.8% 15.5%, 86.4% 17.7%, 80.4% 19.1%, 71.2% 31.9%, 65.4% 37.9%, 68.6% 41.3%, 64.2% 43%, 64.2% 46.2%, 68.6% 47.2%, 77.2% 50.7%, 81.5% 54.7%, 87.1% 67.9%, 93.8% 80.7%, 94.1% 91.2%
                        ); shape-margin:20px;"
                    />
                    <p>
                        Hi, I'm <b>Morteza</b>, I'm a software developer with a background in architecture <span class="font-thin">(like building design, not software architecture)</span>.
                        I made this website to share things I make and do.
                        <br />
                        <br />
                        I'm originally from Iran, my wife and I moved from New York to Seattle during the pandemic and we love it here!
                        <br />
                        <br />
                         I'm happily employed at <span class="font-bold">McNeel & Associates</span>, where I work on <a href="https://www.rhino3d.com/" class="text-blue-600 underline hover:text-blue-800 transition-colors">Rhino</a> and <a href="https://apps.apple.com/us/app/irhino-3d/id373666504" class="text-blue-600 underline hover:text-blue-800 transition-colors">iRhino3D</a>, which are CAD tools I used in my architecture career.

                        <span class="block md:hidden">
                            When I'm not coding, I enjoy paragliding, <a href="/art/paintings" class="text-blue-600 underline hover:text-blue-800 transition-colors">painting</a> and hiking in beautiful pacific northwest.
                            <br />
                            <br />
                            I did some oil painting as a kid, but during the pandemic <span class="font-thin">(constrained by our tiny apartment in NYC)</span> I discovered gouache, and I feel way more comfortable with it than I ever did with oil paints. I like realism, so I usually paint from photographs, but I also enjoy painting from life when I can.
                        </span>
                    </p>
                </div>
                <div class="basis-2/5 hidden md:block">
                    <p>
                        When I'm not coding, I enjoy paragliding, <a href="/art/paintings" class="text-blue-600 underline hover:text-blue-800 transition-colors">painting</a> and hiking in beautiful pacific northwest.
                        <br />
                        <br />
                        I started painting when I was younger using oil paints but it's been a while, during the pandemic <span class="font-thin">(constrained by our tiny apartment in NYC)</span> I discovered gouache, and I felt way more comfortable with it than I ever did with oil paints. I like realism, so I usually paint from photographs, but I also enjoy painting from life when I can.
                    </p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'About',
};
</script>
