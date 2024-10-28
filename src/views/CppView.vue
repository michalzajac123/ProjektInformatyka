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
                  <span class="text-primary">int</span> main() { // główna funkcja
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
                  cout << <span class="text text-success">"<input @focus="showResult=false" type="text" class="cout text-success" placeholder="Podaj wiek" v-model="age">"</span>; // instrukcja do wypisywania danych
                  cin >> age; // instrukcja do wczytywania danych
                  cout << <span class="text text-success">"Twój wiek to: "</span> << age; // instrukcja do wypisywania danych
                </pre>
              </div>
              <button class="compile" @click="compile">Kompiluj</button>
              <div class="show-result" v-if="showResult">{{ age }}</div>
              <div class="show-result" v-else>{{ returnText }}</div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="content-text">
              <div class="content-title">Instrukcje warunkowe</div>
              <div class="content-compiler d-flex justify-content-center">
                <pre> 
                  <span class="text-success">int</span> age; // deklaracja zmiennej typu int
                  cout << <span class="text text-success">"<input @focus="showResult=false" type="text" class="cout text-success" placeholder="Podaj wiek" v-model="age">"</span>; // instrukcja do wypisywania danych
                  cin >> age; // instrukcja do wczytywania danych
                  <span class="text-success">if</span>(age >= 18) { // instrukcja warunkowa
                    cout << <span class="text text-success">"Jesteś pełnoletni"</span>; // instrukcja do wypisywania danych
                  } <span class="text-success">else</span> {
                    cout << <span class="text text-success">"Nie jesteś pełnoletni"</span>; // instrukcja do wypisywania danych
                  }
                </pre>
              </div>
              <button class="compile" @click="compile">Kompiluj</button>
              <div class="show-result" v-if="showResult">
                {{ age >= 18 ? "Jesteś pełnoletni" : "Nie jesteś pełnoletni" }}
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
                  cout << <span class="text text-success">"<input @focus="showResult=false" type="text" class="cout text-success" placeholder="Podaj wiek" v-model="age">"</span>; // instrukcja do wypisywania danych
                  cin >> age; // instrukcja do wczytywania danych
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
                  age >= 18 && age <= 65
                    ? "Jesteś w wieku produkcyjnym"
                    : "Nie jesteś w wieku produkcyjnym"
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
let age = ref(0); // Inicjalizacja zmiennej age
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
}
</style>
