<template>
  <div class="cpp-wrapper">
    <h1 class="cpp-title">C++ - wprowadzenie</h1>
    <div class="cpp-content">
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="content-text">
              <div class="content-title">Do czego uzywamy C++</div>
              C++ jest popularnym językiem <b>programowania.</b> Służy do
              tworzenia programów komputerowych i jest jednym z najczęściej
              używanych języków programowania w tworzeniu gier.<br />
              Jest on rozszerzeniem języka C, a oba języki mają niemal
              identyczną <b>składnię</b>.<br />
              Aby zacząć używać języka C++, potrzebne Ci są dwie rzeczy: Edytor
              tekstu, taki jak Notatnik, do pisania kodu C++ oraz
              <b>kompilator</b>, taki jak GCC, który tłumaczy kod C++ na język
              zrozumiały dla komputera.<br />
              Istnieje wiele edytorów tekstu i kompilatorów do wyboru. W tym
              kursie polecamy <b>CodeBlocks</b>.
            </div>
          </div>
          <div class="carousel-item">
            <div class="content-text">
              <div class="content-title">Cechy języka</div>
              <ul>
                <li>Zorientowany obiektowo</li>
                <li>Statycznie typowany</li>
                <li>Kompatybilność</li>
                <li>Wspiera programowanie proceduralne</li>
              </ul>
            </div>
          </div>
          <div class="carousel-item">
            <div class="content-text">
              <div class="content-title">
                Składnia języka i pierwszy program
              </div>
              <div class="content-compiler d-flex justify-content-center">
                <pre>
                  <span class="text-success">#include &lt;iostream&gt;</span> // wczytanie biblioteki iostream
                  using namespace std; // deklaracja użycia przestrzeni nazw std
                  <span class="text-success">int</span> <span class="text-primary">main</span>() { // główna funkcja
                    cout << <span class="text text-success">"<input @focus="showResult=false" type="text" class="cout text-success" placeholder="Hello World" v-model="coutValue">"</span>; // instrukcja do wypisywania danych
                    // Kliknij w napis Hello World, aby wczytać swoje dane
                    return 0; // zwracamy wartość typu integer
                  }  
                </pre>
              </div>
              <button class="compile" @click="compile">Kompiluj</button>
              <div class="show-result" v-if="showResult">{{ coutValue }}</div>
              <div class="show-result" v-else>{{ returnText }}</div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="content-text">
              <div class="content-title">Wprowadzanie danych</div>
              <div class="content-compiler d-flex justify-content-center">
                <pre> 
                  <span class="text-success">int</span> age; // deklaracja zmiennej typu int
                  age = <span class="text text-success">"<input @focus="showResult=false" type="text" class="cout text-success" placeholder="Podaj wiek" v-model="age">"</span>; // instrukcja do wypisywania danych
                  // cin >> age; // instrukcja do wczytywania danych z konsoli
                  cout << <span class="text text-success">"Twój wiek to: "</span> << age; // instrukcja do wypisywania danych
                </pre>
              </div>
              <button class="compile" @click="compile">Kompiluj</button>
              <div class="show-result" v-if="showResult">
                {{
                  Number.isInteger(parseFloat(age)) && !isNaN(age)
                    ? "Twój wiek to: " + parseInt(age)
                    : "Nieprawidłowe dane wejściowe"
                }}
              </div>
              <div class="show-result" v-else>{{ returnText }}</div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="content-text">
              <div class="content-title">Instrukcje warunkowe</div>
              <div class="content-compiler d-flex justify-content-center">
                <pre> 
                  <span class="text-success">int</span> age; // deklaracja zmiennej typu int
                  age = <span class="text text-success">"<input @focus="showResult=false" type="text" class="cout text-success" placeholder="Podaj wiek" v-model="age">"</span>; // instrukcja do wypisywania danych
                  // cin >> age; // instrukcja do wczytywania danych z konsoli
                  <span class="text-success">if</span>(age >= 18) { // instrukcja warunkowa
                    cout << <span class="text text-success">"Jesteś pełnoletni"</span>; // instrukcja do wypisywania danych
                  } <span class="text-success">else</span> {
                    cout << <span class="text text-success">"Nie jesteś pełnoletni"</span>; // instrukcja do wypisywania danych
                  }
                </pre>
              </div>
              <button class="compile" @click="compile">Kompiluj</button>
              <div class="show-result" v-if="showResult">
                {{
                  Number.isInteger(parseFloat(age)) && !isNaN(age)
                    ? age >= 18 && age <= 65
                      ? "Jesteś pełnoletni"
                      : "Nie jesteś pełnoletni"
                    : "Nieprawidłowe dane wejściowe"
                }}
              </div>
              <div class="show-result" v-else>{{ returnText }}</div>
            </div>
          </div>
          <div class="carousel-item">
            <!-- Operatory logiczne w c++ -->
            <div class="content-text">
              <div class="content-title">Operatory logiczne</div>
              <div class="content-compiler d-flex justify-content-center">
                <pre> 
                  <span class="text-success">int</span> age; // deklaracja zmiennej typu int
                  age = <span class="text text-success">"<input @focus="showResult=false" type="text" class="cout text-success" placeholder="Podaj wiek" v-model="age">"</span>; // instrukcja do wypisywania danych
                  // cin >> age; // instrukcja do wczytywania danych z konsoli
                  <span class="text-success">if</span>(age >= 18 <span class="text-success">&amp;&amp;</span> age <= 65) { // instrukcja warunkowa && oznacza "i" to znaczy ze dwa warunku musza byc spelnione
                    cout << <span class="text text-success">"Jesteś w wieku produkcyjnym"</span>; // instrukcja do wypisywania danych
                  } <span class="text-success">else</span> {
                    cout << <span class="text text-success">"Nie jesteś w wieku produkcyjnym"</span>; // instrukcja do wypisywania danych
                  }
                </pre>
              </div>
              // istnieje jeszcze operator ||, który oznacza "lub" i !, który
              oznacza "nie" jest to tak zwane zaprzeczenie <br />
              <button class="compile" @click="compile">Kompiluj</button>
              <div class="show-result" v-if="showResult">
                {{
                  Number.isInteger(parseFloat(age)) && !isNaN(age)
                    ? age >= 18 && age <= 65
                      ? "Jesteś w wieku produkcyjnym"
                      : "Nie jesteś w wieku produkcyjnym"
                    : "Nieprawidłowe dane wejściowe"
                }}
              </div>
              <div class="show-result" v-else>{{ returnText }}</div>
            </div>
          </div>
          <div class="carousel-item">
            <!-- Petla while w c++ -->
            <div class="content-text">
              <div class="content-title">Pętla While</div>
              <div class="content-compiler d-flex justify-content-center">
                <pre>
                  <span class="text-success">int</span> i = 0; // deklaracja zmiennej typu int
                  <span class="text-success">while</span>(i < 5) { // pętla While wykona się 5 razy
                    cout << <span class="text text-success">"Powtórzenie nr"</span>; << i // instrukcja do wypisywania danych
                    i++; // inkrementacja zmiennej i
                  }
                </pre>
              </div>
              // W pętli while warunek jest sprawdzany przed wykonaniem pętli
              <br />
              <button class="compile" @click="compile">Kompiluj</button>
              <div class="show-result" v-if="showResult">
                <div v-for="n in 5" :key="n">Powtórzenie nr {{ n - 1 }}</div>
              </div>
              <div class="show-result" v-else>{{ returnText }}</div>
            </div>
          </div>
          <div class="carousel-item">
            <!-- Pętla do while -->
            <div class="content-text">
              <div class="content-title">Pętla Do While</div>
              <div class="content-compiler d-flex justify-content-center">
                <pre>
                  <span class="text-success">int</span> i = 0; // deklaracja zmiennej typu int
                  <span class="text-success">do</span> { // pętla Do While wykona się przynajmniej raz
                    cout << <span class="text text-success">"Powtórzenie nr"</span> << i; // instrukcja do wypisywania danych
                    i++; // inkrementacja zmiennej i
                  } <span class="text-success">while</span>(i < 5);
                </pre>
              </div>
              // Pętla różni się od pętli while tym, że wykona się przynajmniej
              raz, nawet jeśli warunek jest niespełniony <br />
              // W pętli do while warunek jest sprawdzany po wykonaniu
              instrukcji <br />
              <button class="compile" @click="compile">Kompiluj</button>
              <div class="show-result" v-if="showResult">
                <div v-for="n in 5" :key="n">Powtórzenie nr {{ n - 1 }}</div>
              </div>
              <div class="show-result" v-else>{{ returnText }}</div>
            </div>
          </div>
          <div class="carousel-item">
            <!-- Pętla for -->
            <div class="content-text">
              <div class="content-title">Pętla For</div>
              <div class="content-compiler d-flex justify-content-center">
                <pre>
                  <span class="text-success">for</span>(<span class="text-success">int</span> i = 0; i < 5; i++) { // pętla For wykona się 5 razy
                    cout << <span class="text text-success">"Powtórzenie nr"</span> << i; // instrukcja do wypisywania danych
                  }
                </pre>
              </div>
              // Pętla for składa się z trzech części: inicjalizacji, warunku i
              inkrementacji <br />
              // Jej plusem jest to, że zmienna i jest dostępna tylko wewnątrz
              pętli, oraz wszystkie trzy części są widoczne w jednym miejscu
              <br />
              <button class="compile" @click="compile">Kompiluj</button>
              <div class="show-result" v-if="showResult">
                <div v-for="n in 5" :key="n">Powtórzenie nr {{ n - 1 }}</div>
              </div>
              <div class="show-result" v-else>{{ returnText }}</div>
            </div>
          </div>
          <div class="carousel-item">
            <!-- Tablice jednowymiarowe w c++ -->
            <div class="content-text">
              <div class="content-title">Tablice jednowymiarowe</div>
              <div class="content-compiler d-flex justify-content-center">
                <pre>
                  <span class="text-success">int</span> tab[5]; // deklaracja tablicy o rozmiarze 5
                  <span class="text-success">for</span>(<span class="text-success">int</span> i = 0; i < 5; i++) { // pętla For wykona się 5 razy
                    tab[i] = i; // przypisanie wartości do tablicy
                  }
                  <span class="text-success">for</span>(<span class="text-success">int</span> i = 0; i < 5; i++) { // pętla For wykona się 5 razy
                    cout << tab[i] << <span class="text text-success">" "</span>; // instrukcja do wypisywania danych
                  }
                </pre>
              </div>
              // Tablice są zbiorem elementów tego samego typu <br />
              // W C++ indeksowanie tablic zaczyna się od 0 <br />
              // W powyższym przykładzie tablica tab zawiera liczby od 0 do 4
              <br />
              // Wartość tablicy jest dostępna pod indeksem i <br />
              <button class="compile" @click="compile">Kompiluj</button>
              <div class="show-result" v-if="showResult">
                <div v-for="n in 5" :key="n">{{ n - 1 }}</div>
              </div>
              <div class="show-result" v-else>{{ returnText }}</div>
            </div>
          </div>
          <div class="carousel-item">
            <!-- Tablice wielowymiarowe w c++ -->
            <div class="content-text">
              <div class="content-title">Tablice wielowymiarowe</div>
              <div class="content-compiler d-flex justify-content-center">
                <pre>
                  <span class="text-success">int</span> tab[2][3]; // deklaracja tablicy 2x3
                  <span class="text-success">for</span>(<span class="text-success">int</span> i = 0; i < 2; i++) { // pętla For dla wierszy
                    <span class="text-success">for</span>(<span class="text-success">int</span> j = 0; j < 3; j++) { // pętla For dla kolumn
                      tab[i][j] = i + j; // przypisanie wartości do tablicy
                    }
                  }
                  <span class="text-success">for</span>(<span class="text-success">int</span> i = 0; i < 2; i++) { // pętla For dla wierszy
                    <span class="text-success">for</span>(<span class="text-success">int</span> j = 0; j < 3; j++) { // pętla For dla kolumn
                      cout << tab[i][j] << <span class="text text-success">" "</span>; // instrukcja do wypisywania danych
                    }
                    cout << <span class="text text-success">"\n"</span>; // nowa linia po każdym wierszu
                  }
                </pre>
              </div>
              // Tablice wielowymiarowe są tablicami tablic <br />
              // W powyższym przykładzie tablica tab zawiera 2 wiersze i 3
              kolumny <br />
              // Wartość tablicy jest dostępna pod dwoma indeksami: i i j <br />
              <button class="compile" @click="compile">Kompiluj</button>
              <div class="show-result" v-if="showResult">
                <div v-for="i in 2" :key="i">
                  <span v-for="j in 3" :key="j"
                    >{{ i - 1 + j - 1 }} &nbsp;</span
                  >
                </div>
              </div>
              <div class="show-result" v-else>{{ returnText }}</div>
            </div>
          </div>
          <div class="carousel-item">
            <!-- Funkcje w c++ wprowadzenie, wytlumaczenie pojecia, zastosowania oraz skladni-->
            <div class="content-text">
              <div class="content-title">Funkcje</div>
              <div class="content-compiler d-flex justify-content-center">
                <pre>
                  <span class="text-success">#include &lt;iostream&gt;</span> // wczytanie biblioteki iostream
                  using namespace std; // deklaracja użycia przestrzeni nazw std 
                  
                  <span class="text-success">int</span> <span class="text-primary">add</span>(<span class="text-success">int</span> a, <span class="text-success">int</span> b) { // deklaracja funkcji add
                    <span class="text-success">return</span> a + b; // zwracanie sumy dwóch liczb
                  }
                  
                  <span class="text-success">int</span> <span class="text-primary">main</span>() { // główna funkcja
                    <span class="text-success">int</span> result = add(2, 3); // wywołanie funkcji add
                    cout << result; // instrukcja do wypisywania danych
                    return 0; // zwracamy wartość typu integer
                  }
                </pre>
              </div>
              // Funkcje są blokami kodu, które wykonują określone zadanie
              <br />
              // Funkcje mogą przyjmować argumenty i zwracać wartość <br />
              // W powyższym przykładzie funkcja add przyjmuje dwa argumenty i
              zwraca ich sumę <br />
              // Funkcja add jest wywoływana z argumentami 2 i 3 <br />
              // Wynik funkcji add jest przypisywany do zmiennej result <br />
              <button class="compile" @click="compile">Kompiluj</button>
              <div class="show-result" v-if="showResult">{{ 2 + 3 }}</div>
              <div class="show-result" v-else>{{ returnText }}</div>
            </div>
          </div>
          <div class="carousel-item">
            <!-- Funkcje w c++ rozwiniecie, funkcja void, przyklad z Hello user -->
            <div class="content-text">
              <div class="content-title">Funkcje - dalsza część</div>
              <div class="content-compiler d-flex justify-content-center">
                <pre>
                  <span class="text-success">#include &lt;iostream&gt;</span> // wczytanie biblioteki iostream
                  using namespace std; // deklaracja użycia przestrzeni nazw std 
                  
                  <span class="text-success">void</span> <span class="text-primary">helloUser</span>(<span class="text-success">string</span> name) { // deklaracja funkcji helloUser
                    if (name != "Podaj swoje imię") { // instrukcja warunkowa
                      cout << <span class="text text-success">"Hello "</span> << name; // instrukcja do wypisywania danych
                    }
                    else{
                      cout << <span class="text text-success">"Zapomniałeś podaj swojego imienia"</span>; // instrukcja do wypisywania danych
                    }
                    <!-- cout << <span class="text text-success">"Hello "</span> << name; // instrukcja do wypisywania danych -->
                  }
                  
                  <span class="text-success">int</span> <span class="text-primary">main</span>() { // główna funkcja
                    helloUser(<span class="text text-success">"<input @focus="showResult=false" type="text" class="cout text-success" placeholder="Podaj wiek" v-model="name">"</span>); // wywołanie funkcji helloUser
                    return 0; // zwracamy wartość typu integer
                  }
                </pre>
              </div>
              // Funkcje mogą zwracać wartość lub nie zwracać nic <br />
              // Funkcje, które nie zwracają wartości, są deklarowane jako void
              <br />
              // W powyższym przykładzie funkcja helloUser przyjmuje jeden
              argument i nie zwraca wartości <br />
              // Funkcja helloUser jest wywoływana z argumentem "User" <br />
              <button class="compile" @click="compile">Kompiluj</button>
              <div class="show-result" v-if="showResult">
                {{
                  name !== "Podaj swoje imię" && name !== ""
                    ? "Hello " + name
                    : "Zapomniałeś podaj swojego imienia"
                }}
              </div>
              <div class="show-result" v-else>{{ returnText }}</div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
          @click="showResult = false"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          @click="showResult = false"
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const showResult = ref(false);
let coutValue = ref("Hello World");
let age = ref<any>(0); // Inicjalizacja zmiennej age
let name = ref("Podaj swoje imię");
let returnText = ref("Tutaj wyświetli się fragment kodu");

const compile = () => {
  returnText.value = "Kompilacja...";
  setTimeout(() => {
    returnText.value = "Tutaj wyświetli się fragment kodu";
    showResult.value = true;
  }, 1000);
};
</script>

<style>
pre {
  text-align: left;
}
.carousel-control-prev-icon,
.carousel-control-next-icon {
  padding: 0;
  filter: invert(1); /* Zmienia kolor ikon na czarny */
}
.carousel {
  display: flex;
  justify-content: center;
}
.carousel-inner {
  position: relative;
}
.carousel-control-prev,
.carousel-control-next {
  position: absolute !important;
}
.carousel-control-prev {
  left: -15%;
}
.carousel-control-next {
  right: -15%;
}
.cpp-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.cpp-title {
  font-size: 50px;
  color: #2c3e50;
}
.cpp-content {
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: 50px;
  width: 80%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
.content-title {
  font-size: 30px;
  color: #2c3e50;
}
li {
  list-style-type: none;
}
.cout {
  background-color: transparent;
  border: 0;
  /* border-bottom: 1px solid #000; */
  background-image: linear-gradient(
    to right,
    black 33%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: bottom;
  background-size: 10px 1px;
  background-repeat: repeat-x;
}
</style>
