//Variabler for å skrive ut tekst.
const profil = document.getElementById("ansattMap")
const kurs = document.getElementById("kurs")

//Funksjon 1: Ta i mot index til en ansatt og retunere html-strukturen med informasjon om en ansatte (ett ansattkort).
function f1(index){
    const ansattKort = ansatte[index]

    profil.innerHTML =
        `<article>
            <h3>${ansattKort.navn}</h3>
            <p>Stilling: ${ansattKort.stilling}</p>
            <p>Kontor: ${ansattKort.kontor}</p>
            <p>Epost:<a href="mailto:${ansattKort.epost}"> ${ansattKort.epost}</a></p>
            <p>Kursansvar: ${ansattKort.kursansvar}</p>
        </article`;
} //f1(0)
/*#OPPD3: Tilkallingen av funksjonen er kommentert ut for å ikke komme i veien for funksjon f2()*/

//Funksjon 2: Liste ut alle ansatte og bruke den første funksjonen for å stukturere utskriften av HTMLen.
function f2() {
    ansatte.map(ansatt => {
    profil.innerHTML += 
        `<article>
            <h3>${ansatt.navn}</h3>
            <p>Stilling: ${ansatt.stilling}</p>
            <p>Kontor: ${ansatt.kontor}</p>
            <p>Epost:<a href="mailto:${ansatt.epost}"> ${ansatt.epost}</a></p>
            <p>Kursansvar: ${ansatt.kursansvar}</p>
        </article`
})} f2()

//Funksjon 3: Ta i mot en parameter som anngir stilling og dermed filtrere alle ansatte på den innsendte parameteren.
function f3(s){
    const ansattStilling = ansatte.filter((ansatt) => ansatt.stilling.includes(s))

    profil.innerHTML = 
    ansattStilling.map(ansatt =>
        `<article>
            <h3>${ansatt.navn}</h3>
            <p>Stilling: ${ansatt.stilling}</p>
            <p>Kontor: ${ansatt.kontor}</p>
            <p>Epost:<a href="mailto:${ansatt.epost}"> ${ansatt.epost}</a></p>
            <p>Kursansvar: ${ansatt.kursansvar}</p>
        </article>`
    ).join('');
}

//Funksjon 4: Retunere alle kurs som tilbys på høyskolen, finne alle kurs over kursoversikt.
function f4(){
    const kursTilgjegelig = ansatte.flatMap(a => {
        if (Array.isArray(a.kursansvar)){
            return a.kursansvar
        } else if (a.kursansvar) {
            return [a.kursansvar]
        } else {
            return []
        }
    })
    const kursTilbud = [...new Set(kursTilgjegelig)]

    kurs.innerHTML =
    kursTilbud.map(kurs => 
        `<li>${kurs}</li>`
    ).join('');
} f4()

// Funksjon 5: Filtrere ut alle undervisere og funksjon som filtrerer administrasjon.
function f5a(){
    const ansattStilling = ansatte.filter((ansatt) => ansatt.stilling.includes("professor") || ansatt.stilling.includes("lektor"))

    profil.innerHTML = 
    ansattStilling.map(ansatt =>
        `<article>
            <h3>${ansatt.navn}</h3>
            <p>Stilling: ${ansatt.stilling}</p>
            <p>Kontor: ${ansatt.kontor}</p>
            <p>Epost:<a href="mailto:${ansatt.epost}"> ${ansatt.epost}</a></p>
            <p>Kursansvar: ${ansatt.kursansvar}</p>
        </article>`
    ).join('');
}

function f5b(){
    const ansattStilling = ansatte.filter((ansatt) => ansatt.stilling.includes("rektor") || ansatt.stilling.includes("dekan") || ansatt.stilling.includes("vaktmester"))

    profil.innerHTML = 
    ansattStilling.map(ansatt =>
        `<article>
            <h3>${ansatt.navn}</h3>
            <p>Stilling: ${ansatt.stilling}</p>
            <p>Kontor: ${ansatt.kontor}</p>
            <p>Epost:<a href="mailto:${ansatt.epost}"> ${ansatt.epost}</a></p>
            <p>Kursansvar: ${ansatt.kursansvar}</p>
        </article>`
    ).join('');
}
/*#OPPD3: Laget variabler som holder på verdier til input-feltene, for å kunne bruke verdiene i f6() */
const fnavn = document.getElementById("fnavn").value
const enavn = document.getElementById("enavn").value
const stilling = document.getElementById("stilling").value
const kontor = document.getElementById("kontor").value
const epost = document.getElementById("epost").value
const kursansvar = document.getElementById("kursansvar").value

//Funksjon 6: Ta i mot parametre for all informasjon om en underviser, og legge den til i registeret.
function f6(fn = fnavn, en = enavn, st = stilling, kn = kontor, ep = epost, ka = kursansvar){

    ansatte.push({
        navn: fn + " " + en,
        stilling: st,
        kontor: kn,
        epost: ep,
        kursansvar: ka
    })
    f2()
}

//Funksjon 7: Ta i mot en parameter som identifiserer en ansatt og sletter denne fra registeret.
function f7(i, ii=i+1){
    ansatte.splice(i, ii)
} f7(0)


console.log(ansatte)