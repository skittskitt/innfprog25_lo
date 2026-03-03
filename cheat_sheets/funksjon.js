const stillingArray = ["rektor", "dekan", "vaktmester", "professor", "lektor"]
const ansatte = [
            {   //Rektor 0
                navn: "Bente Johannsen",
                stilling: stillingArray[0],
                kontor: "F100",
                epost: "bentej@hiof.no",
                kursansvar: ""
            },
            {   //Dekan 1
                navn: "Ole Nordmann",
                stilling: stillingArray[1],
                kontor: "A100",
                epost: "nordmann@hiof.no",
                kursansvar: ""
            },
            {
                navn: "Mathias Kjellberg",
                stilling: stillingArray[1],
                kontor: "A101",
                epost: "mathiask@hiof.no",
                kursansvar: ""
            },
            {   //Vaktmester 2
                navn: "Anja Mikkelsen",
                stilling: stillingArray[2],
                kontor: "D201",
                epost: "amikkelsen@hiof.no",
                kursansvar: ""
            },
            {
                navn: "Pelle Pettersen",
                stilling: stillingArray[2],
                kontor: "D202",
                epost: "pellep@hiof.no",
                kursansvar: ""
            },
            {
                navn: "Nina Dahl",
                stilling: stillingArray[2],
                kontor: "D203",
                epost: "ninadahl@hiof.no",
                kursansvar: ""
            },
            {   //Professor 3
                navn: "Jonas Åseberg",
                stilling: stillingArray[3],
                kontor: "A110",
                epost: "jonasaa@hiof.no",
                kursansvar: ["Programmering", "Webutvikling"]
            },
            {
                navn: "Vilde Wilmhelsen",
                stilling: stillingArray[3],
                kontor: "A111",
                epost: "vildew@hiof.no",
                kursansvar: ["Webutvikling", "Responsiv Utvikling"]
            },
            {
                navn: "Roy Larsen",
                stilling: stillingArray[3],
                kontor: "A103",
                epost: "roylarsen@hiof.no",
                kursansvar: "Databaser"
            },
            {
                navn: "Vanja Andreasen",
                stilling: stillingArray[3],
                kontor: "A104",
                epost: "vadndreasen@hiof.no",
                kursansvar: ["Kunstig Intelligens", "Datasikkerhet"]
            },
            {
                navn: "Henrik Didrikson",
                stilling: stillingArray[3],
                kontor: "A105",
                epost: "henrikd@hiof.no",
                kursansvar: ["Opperativsystemer", "Webdesign"]
            },
            {   //Lektor 4
                navn: "Oda Ullriksen",
                stilling: stillingArray[4],
                kontor: "B100",
                epost: "oullriksen@hiof.no",
                kursansvar: "Databaser"
            },
            {
                navn: "Tor Solbakk",
                stilling: stillingArray[4],
                kontor: "B101",
                epost: "tsolbakk@hiof.no",
                kursansvar: "Webutvikling"
            },
            {
                navn: "Jenny Viik",
                stilling: stillingArray[4],
                kontor: "B102",
                epost: "jennyviik@hiof.no",
                kursansvar: ["Kunstig Intelligens", "Maskinlæring"]
            },
            {
                navn: "Robert Diaz",
                stilling: stillingArray[4],
                kontor: "B103",
                epost: "robertd@hiof.no",
                kursansvar: "Operativsystem"
            },
            {
                navn: "John Smith",
                stilling: stillingArray[4],
                kontor: "B104",
                epost: "johnsmith@hiof.no",
                kursansvar: "Webdesign"
            },
            {
                navn: "Inga Simonsen",
                stilling: stillingArray[4],
                kontor: "B105",
                epost: "isimonsen@hiof.no",
                kursansvar: "Responsiv Utvikling"
            },
            {
                navn: "Kageyama Sakurai",
                stilling: stillingArray[4],
                kontor: "E110",
                epost: "kageyamasm@hiof.no",
                kursansvar: "Programmering"
            },
            {
                navn: "Pernille Lilleberg",
                stilling: stillingArray[4],
                kontor: "E111",
                epost: "pernillel@hiof.no",
                kursansvar: ["Databaser", "Datasikkerhet"]
            },
            {
                navn: "Robin Sandernes",
                stilling: stillingArray[4],
                kontor: "E112",
                epost: "robins@hiof.no",
                kursansvar: "Programmering"
            },
            {
                navn: "Ingrid Fjell",
                stilling: stillingArray[4],
                kontor: "E113",
                epost: "ingridfj@hiof.no",
                kursansvar: "Webutvikling"
            },
        ]

        const profil = document.getElementById("ansattMap")
        const profil2 = document.getElementById("ansattMap2")

//Funksjon 2: Mapper ut alle ansatte.
        function f2() {
            ansatte.map(ansatt => {
            profil.innerHTML += 
            `<article>
                <h3>${ansatt.navn}</h3>
                <p>Stilling: ${ansatt.stilling}</p>
                <p>Kontor: ${ansatt.kontor}</p>
                <p>Epost:<a href="mailto:${ansatt.epost}">${ansatt.epost}</a></p>
                <p>Kursansvar: ${ansatt.kursansvar}</p>
            </article`
            })} f2()

        /*function f2b() {
        ansatte.map(ansatt => {
        profil2.innerHTML += 
        `<article>
            <h3>${ansatt.navn}</h3>
            <p>Stilling: ${ansatt.stilling}</p>
            <p>Kontor: ${ansatt.kontor}</p>
            <p>Epost:<a href="mailto:${ansatt.epost}">${ansatt.epost}</a></p>
            <p>Kursansvar: ${ansatt.kursansvar}</p>
            <button type="button" onClick="f7()">Slett ansatt</button>
        </article`
        })} f2b()*/

//Funksjon 3: Filtrer ansatte etter stilling.
        function f3(s){
        const ansattStilling = ansatte.filter((ansatt) => ansatt.stilling.includes(s))

        profil.innerHTML = 
        ansattStilling.map(ansatt =>
        `<article>
            <h3>${ansatt.navn}</h3>
            <p>Stilling: ${ansatt.stilling}</p>
            <p>Kontor: ${ansatt.kontor}</p>
            <p>Epost:<a href="mailto:${ansatt.epost}">${ansatt.epost}</a></p>
            <p>Kursansvar: ${ansatt.kursansvar}</p>
        </article>`).join('');

        console.log(ansattStilling)
        }

//Funksjon 4: Retunere alle kurs som tilbys på høyskolen, finne alle kurs over kursoversikt.
//Stillinger er lagret i en array, trengs å filtreres/mappes ut.
        function f4(){
            const kursTilgjegelig = ansatte.flatMap(a => Array.isArray(a.kursansvar) ? a.kursansvar : [a.kursansvar])
            const kursTilbud = [...new Set(kursTilgjegelig)]
            
            document.getElementById("kurs").innerHTML =
            kursTilbud.map(kurs => 
                `<li>${kurs}</li>`
            ).join('');

            console.log(kursTilbud)
        } f4()

// Funksjon 5: Filtrere ut alle undervisere og funksjon som filtrerer administrasjon.
        function f5a(){
            const ansattStilling = ansatte.filter((ansatt) => ansatt.stilling.includes("professor") || ansatt.stilling.includes("lektor"))

            document.getElementById("ansattMap").innerHTML = 
            ansattStilling.map(ansatt =>
            `<article>
                <h3>${ansatt.navn}</h3>
                <p>Stilling: ${ansatt.stilling}</p>
                <p>Kontor: ${ansatt.kontor}</p>
                <p>Epost:<a href="mailto:${ansatt.epost}">${ansatt.epost}</a></p>
                <p>Kursansvar: ${ansatt.kursansvar}</p>
            </article>`).join('');

            console.log(ansattStilling)
        }

        function f5b(){
            const ansattStilling = ansatte.filter((ansatt) => ansatt.stilling.includes("rektor") || ansatt.stilling.includes("dekan") || ansatt.stilling.includes("vaktmester"))
            document.getElementById("ansattMap").innerHTML = 
            ansattStilling.map(ansatt =>
            `<article>
                <h3>${ansatt.navn}</h3>
                <p>Stilling: ${ansatt.stilling}</p>
                <p>Kontor: ${ansatt.kontor}</p>
                <p>Epost:<a href="mailto:${ansatt.epost}">${ansatt.epost}</a></p>
                <p>Kursansvar: ${ansatt.kursansvar}</p>
            </article>`).join('');
            console.log(ansattStilling)
        }

//Funksjon 6: Ta i mot parametre for all informasjon om en underviser, og legge den til i registeret.
//https://stackoverflow.com/questions/40250139/how-can-i-push-an-object-into-an-array

        /*
        const fnavn = document.getElementById("fnavn").value
        const enavn = document.getElementById("enavn").value
        const stilling = document.getElementById("stilling").value
        const kontor = document.getElementById("kontor").value
        const epost = document.getElementById("epost").value
        const kursansvar = document.getElementById("kursansvar").value

        function f6(fn = fnavn, en = enavn, st = stilling, kn = kontor, ep = epost, ka = kursansvar){
            ansatte.push({
                navn: fn + " " + en,
                stilling: st,
                kontor: kn,
                epost: ep,
                kursansvar: ka
                })

            console.log(fnavn, enavn, stilling, kontor, epost, kursansvar)
            console.log(ansatte)
            f2()
        }*/

//Funksjon 7: Ta i mot en parameter som identifiserer en ansatt og sletter denne fra registeret.
        function f7(slettAnsatt){
            ansatte.splice()
        }