<template>
    <div class="pr-5 md:pr-20 pl-5 md:pl-0 pb-48 md:pb-0 pt-5 md:pt-20 md:max-h-none md:overflow-visible max-h-screen overflow-auto">
        <div>
            <div class="flex flex-row items-center mb-8">
                <div class=" w-20 flex-shrink-0 block md:hidden">
                    <img
                        src="../assets/me_mobile_alt.png"
                        alt="Morteza Karimi"
                        class="rounded-lg w-full"
                    />
                </div>
                <div class="flex-1 pl-8">
                    <h1 class="text-3xl mb-4 text-right">About</h1>
                    <h2 class="text-2xl font-semibold mb-2 text-right">
                        <span class="text-sm font-light">(مرتضی کریمی)</span> Morteza Karimi
                    </h2>
                </div>
            </div>
            <!-- Mobile content -->
            <div class="block md:hidden text-sm leading-[1.6] text-justify">
                <p >
                    Hi, I'm <b>Morteza</b>, I'm a software developer with a background in architecture <span class="font-thin">(like building design, not software architecture)</span>.
                    I made this website to share things I make and do.
                    <br /><br />
                    I'm originally from Iran, my wife and I moved from New York to Seattle during the pandemic and we love it here!
                    <br /><br />
                    I'm happily employed at <span class="font-bold">McNeel & Associates</span>, where I work on <a href="https://www.rhino3d.com/" class="text-blue-600 underline hover:text-blue-800 transition-colors">Rhino</a> and <a href="https://apps.apple.com/us/app/irhino-3d/id373666504" class="text-blue-600 underline hover:text-blue-800 transition-colors">iRhino3D</a>, which are CAD tools I used in my architecture career.
                    <br /><br />
                    When I'm not coding, I enjoy paragliding, <a href="/art/paintings" class="text-blue-600 underline hover:text-blue-800 transition-colors">painting</a> and hiking in beautiful pacific northwest.
                    <br /><br />
                    I did some oil painting as a kid, but during the pandemic <span class="font-thin">(constrained by our tiny apartment in NYC)</span> I discovered gouache, and I feel way more comfortable with it than I ever did with oil paints. I like realism, so I usually paint from photographs, but I also enjoy painting from life when I can.
                </p>
            </div>

            <!-- Desktop content -->
            <div class="hidden md:flex flex-row gap-5 text-sm leading-[1.6] text-justify">
                <div class="basis-1/2">
                    <img
                        src="../assets/me.png"
                        alt=""
                        class="float-left mr-[20px] w-[320px]"
                        style="margin-top:100px; shape-outside: polygon(
                            94.1% calc(80% + 80px), 99.8% calc(89% + 80px), 0% 80px, 6.6% 80px, 18.4% 80px, 28.5% 80px, 48.2% calc(1.1% + 80px), 60.3% calc(3.9% + 80px), 66.7% calc(6.7% + 80px), 72.9% calc(7.9% + 80px), 83% calc(11.5% + 80px), 87.8% calc(15.5% + 80px), 86.4% calc(17.7% + 80px), 80.4% calc(19.1% + 80px), 71.2% calc(31.9% + 80px), 65.4% calc(37.9% + 80px), 68.6% calc(41.3% + 80px), 64.2% calc(43% + 80px), 64.2% calc(46.2% + 80px), 68.6% calc(47.2% + 80px), 77.2% calc(50.7% + 80px), 81.5% calc(54.7% + 80px), 87.1% calc(67.9% + 80px), 93.8% calc(75% + 80px), 94.1% calc(80% + 80px)
                        ); shape-margin:20px;"
                    />
                    <p class="pl-20">
                        Hi, I'm <b>Morteza</b>, I'm a software developer with a background in architecture <span class="font-thin">(like building design, not software architecture)</span>.
                        I made this website to share things I make and do.
                        <br /><br />
                        I'm originally from Iran, my wife and I moved from New York to Seattle during the pandemic and we love it here!
                        <br /><br />
                        I'm happily employed at <span class="font-bold">McNeel & Associates</span>, where I work on <a href="https://www.rhino3d.com/" class="text-blue-600 underline hover:text-blue-800 transition-colors">Rhino</a> and <a href="https://apps.apple.com/us/app/irhino-3d/id373666504" class="text-blue-600 underline hover:text-blue-800 transition-colors">iRhino3D</a>, which are CAD tools I used in my architecture career.
                    </p>
                </div>
                <div class="basis-1/2">
                    <p>
                        When I'm not coding, I enjoy paragliding, <a href="/art/paintings" class="text-blue-600 underline hover:text-blue-800 transition-colors">painting</a> and hiking in beautiful pacific northwest.
                        <br /><br />
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
