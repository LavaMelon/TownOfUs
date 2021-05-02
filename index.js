//aeoslzzcn

var Crew =
{
    "Nazwa":"Crewmate",
    "Klasa":"Crewmate",
    "Tekst":"THERE ARE 2 INPOSTORS AMONG US",
    "Opis":"Musisz wykonywac zadania. Na glosowaniu staraj sie wytypowac i wyglosowac inpostora albo osobe ktora ci zagraza.",
    "Kolor":"Crew"
}
var Impo = 
{
    "Nazwa":"Impostor",
    "Klasa":"Impostor",
    "Tekst":"brak",
    "Opis":"Udawaj, ze robisz zdania. Sabotuj oraz zabij wszystkich Crewmatow. Staraj sie nie wyglodac podejrzanie. Bron innych impostorow oraz nie daj sie wyglosowac.",
    "Kolor":"Impo"
}
var Love = 
{
    "Nazwa":"Lover",
    "Klasa":"Crewmate",
    "Tekst":"You are in Love with Graf",
    "Opis":"Dwaj gracze, ktorzy sa ze soba polaczeni. Ci dwaj gracze sa wybierani losowo miedzy czlonkami zalogi i oszustami. Zyskuja glowny cel, aby pozostac razem przy zyciu. Jesli obaj sa wsrod ostatnich 3 graczy, wygrywaja. W tym celu uzyskuja dostep do prywatnego czatu, widocznego tylko dla nich pomiedzy spotkaniami. Jednak moga tez wygrac ze swoja druzyna, dlatego Kochankowie nie znaja roli drugiego kochanka.",
    "Kolor":"Love"
}
var Sher = 
{
    "Nazwa":"Sheriff",
    "Klasa":"Crewmate",
    "Tekst":"Shoot the Impostor",
    "Opis":"Szeryf to czlonek zalogi, ktory moze eliminowac oszustow za pomoca przycisku zabicia. Jesli jednak zabija czlonka zalogi lub gracza neutralnego, ktorego nie moga zabic, zamiast tego umieraja sami.",
    "Kolor":"Sher"
}
var Engi = 
{
    "Nazwa":"Engineer",
    "Klasa":"Crewmate",
    "Tekst":"Maintain important systems on the ship",
    "Opis":"Inzynier to czlonek zalogi, ktory moze naprawiac sabotaze z dowolnego miejsca na mapie. Moga korzystac z otworow wentylacyjnych, aby latwo poruszac sie po mapie.",
    "Kolor":"Engi"
}
var Swap = 
{
    "Nazwa":"Swapper",
    "Klasa":"Crewmate",
    "Tekst":"Swap the votes of two people",
    "Opis":"Swapper to czlonek zalogi, ktory podczas spotkania moze zamienic glosy na 2 graczy. Zamiast tego wszystkie glosy na pierwszego gracza beda liczone do drugiego gracza i odwrotnie.",
    "Kolor":"Swap"
}
var Mayo = 
{
    "Nazwa":"Mayor",
    "Klasa":"Crewmate",
    "Tekst":"Save your votes to double vote",
    "Opis":"Major moze glosowac wiele razy. Major ma bank glosow, okreslajacy, ile razy moga glosowac. Maja mozliwosc wstrzymania sie od glosu podczas spotkania, dodajac ten glos do banku glosow. Dopoki nie wszyscy glosowali, Major moze wykorzystac tyle glosow ze swojego banku glosow, ile mu sie podoba.",
    "Kolor":"Mayo"
}
var Inve = 
{
    "Nazwa":"Investigator",
    "Klasa":"Crewmate",
    "Tekst":"Find all imposters by examining footprints",
    "Opis":"Czlonek zalogi, ktory widzi slady graczy. Kazdy slad znika po okreslonym czasie.",
    "Kolor":"Inve"
}
var Time = 
{
    "Nazwa":"Time Lord",
    "Klasa":"Crewmate",
    "Tekst":"Rewind Time",
    "Opis":"Czlonek zalogi, ktory moze cofac czas i odwracac pozycje wszystkich graczy. Jesli ta opcja jest wlaczona, wszyscy gracze zabici w tym czasie zostana ozywieni. Nie ma to wplywu na nic poza ruchami i zabojstwami.",
    "Kolor":"Time"
}
var Medi = 
{
    "Nazwa":"Medic",
    "Klasa":"Crewmate",
    "Tekst":"Create a shield to protect a crewmate",
    "Opis":"to czlonek zalogi, ktory moze dac kazdemu graczowi tarcze, ktora uczyni go niesmiertelnym, dopoki medyk nie umrze. Gracz chroniony nie moze zostac przez nikogo przesuniety, zhakowany ani zabity, chyba ze przez samobojstwo. Jesli Medyk zglosi martwe cialo, moze otrzymac raport zawierajacy wskazowki dotyczace tozsamosci Zabojcy.Raport moze zawierac imie zabojcy lub rodzaj koloru (Ciemniejszy / Jasniejszy)",
    "Kolor":"Medi"
}
var Seer = 
{
    "Nazwa":"Seer",
    "Klasa":"Crewmate",
    "Tekst":"Investigate roles",
    "Opis":"Czlonek zalogi, ktory moze ujawniac role innych graczy. Na podstawie ustawien serr moze dowiedziec sie, czy dana rola jest dobra, zla czy neutralna, albo moze dowiedziec sie, jaka jest sama rola.",
    "Kolor":"Seer"
}
var Chil = 
{
    "Nazwa":"Child",
    "Klasa":"Crewmate",
    "Tekst":"No one will harm you",
    "Opis":"Nie mozna tej osoby zabic ani przeglosowac. Jesli tak sie stanie, wszyscy przegrywaja.",
    "Kolor":"Chil"
}
var Spyy = 
{
    "Nazwa":"Spy",
    "Klasa":"Crewmate",
    "Tekst":"Snoop around and find stuff out",
    "Opis":"Zyskuje wiecej informacji, gdy jest na stole administracyjnym i w Vitals. Na stole administracyjnym Szpieg moze zobaczyc kolory wszystkich osob na mapie. Na Vitals Spy moze zobaczyc, od jak dawna zabite ciala sa martwe.",
    "Kolor":"Spyy"
}
var Snit = 
{
    "Nazwa":"Snitch",
    "Klasa":"Crewmate",
    "Tekst":"Complete all your tasks to discover the Impostors",
    "Opis":"Moze otrzymac strzaly skierowane w strone Oszustow, gdy wszystkie ich zadania zostana ukonczone. Nazwiska oszustow rowniez pojawia sie na ich ekranie w kolorze czerwonym. Na podstawie ustawien gry znicz moze nie wiedziec, kim jest, dopoki nie zostanie mu jedno zadanie. Jednak gdy zostalo im tylko jedno zadanie, oszusci otrzymuja strzale skierowana w strone znicza.",
    "Kolor":"Snit"
}
var Altr = 
{
    "Nazwa":"Altruist",
    "Klasa":"Crewmate",
    "Tekst":"Sacrifice yourself to save another",
    "Opis":"Altruista to czlonek zalogi, ktory jest w stanie ozywic martwych graczy. Po znalezieniu martwego ciala Altruista moze nacisnac przycisk wskrzeszenia, ryzykujac poswiecenie sie dla odrodzenia innego gracza. Jesli jest wlaczona, martwe cialo znika, wiec na miejscu zdarzenia pozostaje tylko cialo Altruistow. Po okreslonym czasie gracz zostanie wskrzeszony, jesli odrodzenie nie zostanie przerwane.",
    "Kolor":"Altr"
}
var Jest = 
{
    "Nazwa":"Jester",
    "Klasa":"Neutral",
    "Tekst":"Get voted out",
    "Opis":"Jesli po spotkaniu zostnie wyrzucony, gra konczy sie i wygrywa.",
    "Kolor":"Jest"
}
var Shif = 
{
    "Nazwa":"Shifter",
    "Klasa":"Normal",
    "Tekst":"Shift around dufferent roles",
    "Opis":"Zmienny to rola neutralna bez warunku wygranej. Maja zero zadan i zasadniczo nie maja roli. Moga jednak zamieniac sie rolami z innymi graczami.\n- Zamiana rol na role niestandardowa daje Shifterowi jego role i zadania oraz zamienia drugiego gracza w Crewmata.\n- Zamiana rol z Crewmatem zamienia zadania.\n- Zamiana rol z Impostorem konczy sie niepowodzeniem i zabija Shiftera.",
    "Kolor":"Shif"
}
var Glit = 
{
    "Nazwa":"The Glitch",
    "Klasa":"Neutral",
    "Tekst":"forreach PlayerControl Glitch.MurderPlayer",
    "Opis":"Rola neutralna z wlasnym warunkiem wygranej. Celem Glitch jest zabicie wszystkich i bycie ostatnia stojaca osoba. Glitch moze zhakowac graczy, uniemozliwiajac im zglaszanie cial i wykonywanie zadan. Hakowanie uniemozliwia zaatakowanemu graczowi robienie czegokolwiek poza chodzeniem po mapie. Zaklocenie moze kogos nasladowac, co powoduje, ze wyglada dokladnie tak, jak druga osoba.",
    "Kolor":"Glit"
}
var Exec = 
{
    "Nazwa":"Executor",
    "Klasa":"Neutral",
    "Tekst":"Vote Mitrix out",
    "Opis":"Ma za zadanie, wyglosowac dana osobe podczas meeetingu, jesli osoba zostanie zabita staje sie on jesterem.",
    "Kolor":"Exec"
}
var Arso = 
{
    "Nazwa":"Arsonist",
    "Klasa":"Neutral",
    "Tekst":"Douse players and ignite the light",
    "Opis":"Ma zdolnosc oblewania innych graczy benzyna. Dopiero, gdy obleje wszystkich pozostalych graczy, moze podpalic wszystkich naraz. Po podpaleniu kazdego z zyjacych graczy i wcisnieciu przycisku ignite wygrywa gre.",
    "Kolor":"Arso"
}
var Jani = 
{
    "Nazwa":"Janitor",
    "Klasa":"Impostor",
    "Tekst":"Clean up bodies",
    "Opis":"Impostor, ktory potrafi sprzatac ciala. Zarowno ich umiejetnosc zabijania, jak i czyszczenia maja wspolny czas odnowienia, co oznacza, ze musza wybrac, ktorej chca uzyc.",
    "Kolor":"Impo"
}
var Morp = 
{
    "Nazwa":"Morphling",
    "Klasa":"Impostor",
    "Tekst":"Transform into crewmates",
    "Opis":"Moze przeksztalcic sie w innego gracza.Na poczatku gry i po kazdym spotkaniu moga wybrac kogos do probkowania.Nastepnie moga przeksztalcic sie w te osobe w dowolnym momencie przez ograniczony czas.",
    "Kolor":"Impo"
}
var Camo = 
{
    "Nazwa":"Camouflager",
    "Klasa":"Impostor",
    "Tekst":"Camouflage and turn everyone grey",
    "Opis":"Moze zmienic kazdego w bezbarwne postacie. Nastepnie wszyscy szarzeja na pewien czas, a ich imiona znikaja, przez co staja sie nierozpoznawalni.",
    "Kolor":"Impo"
}
var Mine = 
{
    "Nazwa":"Miner",
    "Klasa":"Impostor",
    "Tekst":"Place vents down to help the Impostors",
    "Opis":"Tworzy nowe otwory wentylacyjne. Te otwory wentylacyjne lacza sie tylko ze soba, tworzac nowe przejscie.",
    "Kolor":"Impo"
}
var Swoo = 
{
    "Nazwa":"Swooper",
    "Klasa":"Impostor",
    "Tekst":"Turn invisible temporarily",
    "Opis":"Moze chwilowo stac sie niewidzialny.",
    "Kolor":"Impo"
}
var MTor = 
{
    "Nazwa":"Torch",
    "Klasa":"Modifier",
    "Tekst":"(dodatek do roli)",
    "Opis":"Widzenie nie zmniejsza sie, gdy swiatla sa sabotowane.",
    "Kolor":"MTor"
}
var MDru = 
{
    "Nazwa":"Drunk",
    "Klasa":"Modifier",
    "Tekst":"(dodatek do roli)",
    "Opis":"Sterowanie pijaka jest odwrocone.",
    "Kolor":"MDru"
}
var MDis = 
{
    "Nazwa":"Diseased",
    "Klasa":"Modifier",
    "Tekst":"(dodatek do roli)",
    "Opis":"Zabicie Chorego potroi czas cooldownu Zabojcy.",
    "Kolor":"MDis"
}
var MGia = 
{
    "Nazwa":"Giant",
    "Klasa":"Modifier",
    "Tekst":"(dodatek do roli)",
    "Opis":"Gigantyczny czlonek zalogi, ktory ma zmniejszona predkosc chodzenia.",
    "Kolor":"MGia"
}
var MFla = 
{
    "Nazwa":"Flash",
    "Klasa":"Modifier",
    "Tekst":"(dodatek do roli)",
    "Opis":"Porusza sie z dwukrotnie wieksza predkoscia niz normalny gracz.",
    "Kolor":"MFla"
}
var MBut = 
{
    "Nazwa":"Button Barry",
    "Klasa":"Modifier",
    "Tekst":"(dodatek do roli)",
    "Opis":"Nie moglem znalesc informacji...",
    "Kolor":"MBut"
}
var MTie = 
{
    "Nazwa":"Tiebreaker",
    "Klasa":"Modifier",
    "Tekst":"(dodatek do roli)",
    "Opis":"Nie moglem znalesc informacji...",
    "Kolor":"MTie"
}
var None=
{
    "Nazwa":"Nazwa postaci.",
    "Klasa":"Crewmate, Impostor itp.",
    "Tekst":"Przykladowy tekst postaci, np, \"Get voted out\"",
    "Opis":"Tutaj znajduje sie opis postaci.",
    "Kolor":"None"
}

function change(data){
document.getElementById("container").removeAttribute("class");
document.getElementById("container").classList.add(data.Kolor);
document.getElementById("Postac").innerHTML=`
<div id="Nazwa" class="">
			<div class="text1 Light">
			${data.Nazwa}
			</div>
		</div>
		<div id="Info" class="">
			<div id="Klasa" class="fl ">
				<div class="text2">
				${data.Klasa}
			</div>
			</div>
			<div id="Tekst" class="fl ">
				<div class="text2">
				${data.Tekst}
			</div>
			</div>
		</div>
		<div id="Opis" class="">
			<div class="text3">
			${data.Opis}
		</div>
		</div>
`}