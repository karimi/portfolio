<template>
    <div class="max-h-screen overflow-y-auto flex flex-col md:flex-row gap-12 mx-auto my-8 p-6 rounded-lg shadow-none">
        <div class="flex-1 flex flex-col">
            <h1 class="text-xl font-bold mb-4">About the artist</h1>
            <p class="mb-2 text-sm">
            My name is <strong>Morteza Karimi</strong>, I'm a software developer and I paint in my free time <span class="font-thin">(unless it's sunny out)</span>.
            <br/>
            I started painting when I was younger using oils but it's been a while. During the pandemic (constrained by our tiny apartment in New York) I discovered gouache, and I loved it. I usually paint from photographs, but I also enjoy painting from life when I can.
            </p>
            <h1 class="text-xl font-bold mb-4">The show</h1>
            <p class="mb-2 text-sm">
            This is my first show ever. I made the theme around sleep, it came from my experience of getting a puppy who kept me up all night for months. After that, I really started to appreciate a good night's sleep. 
            </p>
            <h1 class="text-xl font-bold mb-4">Commissions</h1>
            <p class="mb-2 text-sm">
            I'm having a lot of fun painting pets lately.
            Let me know if you have a furry friend you'd like me to paint!
            </p>
            <p class="mb-2 text-sm">
            Find me at Lighthouse, shoot me an email at <a href="mailto:email@mortezakarimi.com" class="text-blue-600 underline">email@mortezakarimi.com</a> or text me at <a href="tel:+1917960726" class="text-blue-600 underline">(+1) 917-960-726</a>. 
            </p>
            <img src="../assets/qr.png" alt="QR code" class="h-40 w-full m-10 object-contain" />
        </div>
        
        <div class="flex-1 flex items-stretch">
            <span class="img-bracket m-auto" style="position:relative;display:inline-block;">
            <img
            src="/src/assets/paintings/commission_hi_res.png"
            alt="Sample painting"
            style="max-height:80vh;height:80%;object-fit:contain;display:block;"
            />
            <span class="corner tl"></span>
            <span class="corner tr"></span>
            <span class="corner bl"></span>
            <span class="corner br"></span>
            </span>
        </div>
    </div>
</template>
