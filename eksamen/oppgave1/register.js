/*Stilling: Professor, dekan, rektor, vaktmester, lektor
Innhold: 1 rektor, 2 dekaner, 3 vaktmestere, 5 professorer, 10 lektorer.
- kursansvar gjelder kun professor og lektor
- Minst 3 undervisere skal ha annsvar for minst 2 kurs
- Kurs: Programmering, Kunstig Intelligens, Webutvikling, Databaser, Opertaivsystemer, Responsiv utvikling
Maskinlæring, Datasikkerhet, Webdesign */

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
                epost: "kageyamas@hiof.no",
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