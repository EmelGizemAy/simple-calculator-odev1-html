function toplam() {
            var deger1 = parseInt(document.getElementById('sayi1').value);
            var deger2 = parseInt(document.getElementById('sayi2').value);
            document.getElementById('sonuc').value = deger1 + deger2;
        }
        function cikartma() {
            var deger1 = parseInt(document.getElementById('sayi1').value);
            var deger2 = parseInt(document.getElementById('sayi2').value);
            document.getElementById('sonuc').value = deger1 - deger2;
        }
        function carpma() {
            var deger1 = parseInt(document.getElementById('sayi1').value);
            var deger2 = parseInt(document.getElementById('sayi2').value);
            document.getElementById('sonuc').value = deger1 * deger2;
        }
        function bolme() {
            var deger1 = parseInt(document.getElementById('sayi1').value);
            var deger2 = parseInt(document.getElementById('sayi2').value);
            document.getElementById('sonuc').value = deger1 / deger2;
        }