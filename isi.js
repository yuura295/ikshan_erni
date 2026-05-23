simplyCountdown(".simply-countdown", {
    year: 2026, // required
    month: 5,// required
    day: 31, // required
    hours: 8, // Default is 0 [0-23] integer
    words: { //words displayed into the countdown
        days: { singular: 'hari', plural: 'hari' },
        hours: { singular: 'jam', plural: 'jam' },
        minutes: { singular: 'menit', plural: 'menit' },
        seconds: { singular: 'detik', plural: 'detik' }
    },
    })

    function pindahHalaman() {
    // 1. Ambil parameter URL yang ada di halaman saat ini
    const urlParams = new URLSearchParams(window.location.search);
    const namaTamu = urlParams.get('to');

    // 2. Tentukan nama file HTML tujuan Anda (misal: undangan.html)
    const halamanTujuan = "undangan.html";

    // 3. Jika ada nama tamunya, oper nama tersebut ke halaman berikutnya
    if (namaTamu) {
        window.location.href = halamanTujuan + "?to=" + encodeURIComponent(namaTamu);
    } else {
        // Jika dibuka tanpa nama, langsung pindah saja
        window.location.href = halamanTujuan;
    }
}