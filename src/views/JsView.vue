<template>
  <div class="js-wrapper">
    <h1 class="js-title">JavaScript - wprowadzenie</h1>
    <div class="js-content">
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="content-text">
              <div class="content-title">Do czego używamy JavaScript</div>
              JavaScript jest popularnym językiem <b>programowania</b>, który
              służy do tworzenia dynamicznych stron internetowych.<br />
              Jest jednym z podstawowych języków używanych w <b>frontendzie</b>,
              ale także ma szerokie zastosowanie w backendzie przy użyciu
              <b>Node.js</b>.<br />
              Aby zacząć korzystać z JavaScript, potrzebujesz przeglądarki lub
              środowiska, takiego jak Node.js, które interpretuje kod JS.<br />
              Nie musisz instalować żadnych kompilatorów, ponieważ JavaScript
              działa w przeglądarkach, takich jak Chrome czy Firefox.
            </div>
          </div>
          <div class="carousel-item">
            <div class="content-text">
              <div class="content-title">Cechy języka</div>
              <ul>
                <li>Dynamicznie typowany</li>
                <li>Wspiera programowanie obiektowe</li>
                <li>Asynchroniczne operacje</li>
                <li>Ścisła integracja z HTML i CSS</li>
              </ul>
            </div>
          </div>
          <div class="carousel-item">
            <div class="content-text">
              <div class="content-title">
                Wypiswanie danych w konsoli przeglądarki
              </div>
              <div class="content-compiler d-flex justify-content-center">
                <pre> 
                  <span class="text-success">console.log</span>(
                  <span class="text-success">"<input @focus="showResult=false" type="text" class="console-log text-success" placeholder="Hello World" v-model="logValue">"</span>
                  ); 
                  //Kliknij w napis "Hello World", aby zmienić treść komunikatu
                  //Komunikat ten wyświetli się w konsoli jednak na potrzeby tego kursu my wypiszemy go nizej
              </pre>
              </div>
              <button class="run" @click="runCode">Uruchom</button>
              <div class="show-result" v-if="showResult">{{ logValue, console.log(logValue) }}</div>
              <div class="show-result" v-else>{{ returnText }}</div>
            </div>
          </div>
          <div class="carousel-item">
            <!-- wprowadzanie danych -->
            <div class="content-text">
              <div class="content-title">Wprowadzanie danych</div>
              <div class="content-compiler d-flex justify-content-center">
                <pre> 
                  <span class="text-success">let</span> name = 
                  <span class="text-success">prompt</span>(
                  <span class="text-success">"Podaj swoje imię"</span>
                  );
                  <span class="text-success">alert</span>(
                  <span class="text-success">"Witaj, "</span> + name
                  );
                  //Kliknij przycisk "Uruchom", aby zobaczyć efekt
              </pre>
              </div>
              <button class="run" @click="runCodeAlert(1)">Uruchom</button>
              <!-- <div class="show-result" v-else>{{ returnText }}</div> -->
            </div>
          </div>
          <div class="carousel-item">
            <!-- Instrukcje warunkowe -->
            <div class="content-text">
              <div class="content-title">Instrukcje warunkowe</div>
              <div class="content-compiler d-flex justify-content-center">
                <pre> 
                  <span class="text-success">let</span> age = 
                  <span class="text-success">prompt</span>(
                  <span class="text-success">"Podaj swój wiek"</span>
                  );
                  <span class="text-success">if</span> (age >= 18) {
                    <span class="text-success">alert</span>(
                    <span class="text-success">"Jesteś pełnoletni"</span>
                    );
                  } <span class="text-success">else</span> {
                    <span class="text-success">alert</span>(
                    <span class="text-success">"Nie jesteś pełnoletni"</span>
                    );
                  }
                  //Kliknij przycisk "Uruchom", aby zobaczyć efekt
              </pre>
              </div>
              <button class="run" @click="runCodeAlert(2)">Uruchom</button>
              <!-- <div class="show-result" v-else>{{ returnText }}</div> -->
            </div>
          </div>
          <div class="carousel-item">
            <!-- Operatory logiczne w instrukcjach warunkowych jak dzialaja-->
            <div class="content-text">
              <div class="content-title">Operatory logiczne</div>
              <div class="content-compiler d-flex justify-content-center">
                <pre> 
                  <span class="text-success">let</span> age = 
                  <span class="text-success">prompt</span>(
                  <span class="text-success">"Podaj swój wiek"</span>
                  );
                  <span class="text-success">if</span> (age >= 18 && age <= 65) { //&& oznacza i oba warunku musza byc spelniowe
                    <span class="text-success">alert</span>(
                    <span class="text-success">"Jesteś w wieku produkcyjnym"</span>
                    );
                  } <span class="text-success">else</span> {
                    <span class="text-success">alert</span>(
                    <span class="text-success">"Nie jesteś w wieku produkcyjnym"</span>
                    );
                  }
                  //Istnieje jeszce operator || oznaczajacy "lub", który oznacza ze jeden warunek musi zostac spełniony
                  //Kliknij przycisk "Uruchom", aby zobaczyć efekt
              </pre>
              </div>
              <button class="run" @click="runCodeAlert(3)">Uruchom</button>
              <!-- <div class="show-result" v-else>{{ returnText }}</div> -->
            </div>
          </div>
          <div class="carousel-item">
            <!-- Pętla While -->
            <div class="content-text">
              <div class="content-title">Pętla While</div>
              <div class="content-compiler d-flex justify-content-center">
                <pre>
                  <span class="text-success">let</span> i = 0; // deklaracja zmiennej typu let
                  <span class="text-success">while</span>(i < 5) { // pętla While wykona się 5 razy
                    console.log(<span class="text text-success">"Powtórzenie nr"</span>, i); // instrukcja do wypisywania danych
                    i++; // inkrementacja zmiennej i
                  }
                </pre>
              </div>
              // W pętli while warunek jest sprawdzany przed wykonaniem pętli <br />
              <button class="run" @click="runCode">Kompiluj</button>
              <div class="show-result" v-if="showResult">
                <div v-for="n in 5" :key="n">Powtórzenie nr {{ n-1 }}</div>
              </div>
              <div class="show-result" v-else>{{ returnText }}</div>
            </div>
          </div>
          <div class="carousel-item">
            <!-- Pętla Do While -->
            <div class="content-text">
              <div class="content-title">Pętla Do While</div>
              <div class="content-compiler d-flex justify-content-center">
                <pre>
                  <span class="text-success">let</span> i = 0; // deklaracja zmiennej typu let
                  <span class="text-success">do</span> { // pętla Do While wykona się przynajmniej raz
                    console.log(<span class="text text-success">"Powtórzenie nr"</span>, i); // instrukcja do wypisywania danych
                    i++; // inkrementacja zmiennej i
                  } <span class="text-success">while</span>(i < 5);
                </pre>
              </div>
              // Pętla różni się od pętli while tym, że wykona się przynajmniej raz, nawet jeśli warunek jest niespełniony <br>
              // W pętli do while warunek jest sprawdzany po wykonaniu instrukcji <br />
              <button class="run" @click="runCode">Kompiluj</button>
              <div class="show-result" v-if="showResult">
                <div v-for="n in 5" :key="n">Powtórzenie nr {{ n-1 }}</div>
              </div>
              <div class="show-result" v-else>{{ returnText }}</div>
            </div>
          </div>
          <div class="carousel-item">
            <!-- Pętla For -->
            <div class="content-text">
              <div class="content-title">Pętla For</div>
              <div class="content-compiler d-flex justify-content-center">
                <pre>
                  <span class="text-success">for</span>(<span class="text-success">let</span> i = 0; i < 5; i++) { // pętla For wykona się 5 razy
                    console.log(<span class="text text-success">"Powtórzenie nr"</span>, i); // instrukcja do wypisywania danych
                  }
                </pre>
              </div>
              // Pętla for składa się z trzech części: inicjalizacji, warunku i inkrementacji <br />
              // Jej plusem jest to, że zmienna i jest dostępna tylko wewnątrz pętli, oraz wszystkie trzy części są widoczne w jednym miejscu <br />
              <button class="run" @click="runCode">Kompiluj</button>
              <div class="show-result" v-if="showResult">
                <div v-for="n in 5" :key="n">Powtórzenie nr {{ n-1 }}</div>
              </div>
              <div class="show-result" v-else>{{ returnText }}</div>
            </div>
          </div>
          <div class="carousel-item">
            <!-- Tablice jednowymiarowe -->
            <div class="content-text">
              <div class="content-title">Tablice jednowymiarowe</div>
              <div class="content-compiler d-flex justify-content-center">
                <pre>
                  <span class="text-success">let</span> tab = []; // deklaracja tablicy
                  <span class="text-success">for</span>(<span class="text-success">let</span> i = 0; i < 5; i++) { // pętla For wykona się 5 razy
                    tab[i] = i; // przypisanie wartości do tablicy
                  }
                  <span class="text-success">for</span>(<span class="text-success">let</span> i = 0; i < 5; i++) { // pętla For wykona się 5 razy
                    console.log(tab[i]); // instrukcja do wypisywania danych
                  }
                </pre>
              </div>
              // Tablice są zbiorem elementów tego samego typu <br />
              // W JavaScript indeksowanie tablic zaczyna się od 0 <br />
              // W powyższym przykładzie tablica tab zawiera liczby od 0 do 4 <br />
              // Wartość tablicy jest dostępna pod indeksem i <br />
              <button class="run" @click="runCode">Kompiluj</button>
              <div class="show-result" v-if="showResult">
                <div v-for="n in 5" :key="n">{{ n-1 }} </div>
              </div>
              <div class="show-result" v-else>{{ returnText }}</div>
            </div>
          </div>
          <div class="carousel-item">
            <!-- Tablice wielowymiarowe -->
            <div class="content-text">
              <div class="content-title">Tablice wielowymiarowe</div>
              <div class="content-compiler d-flex justify-content-center">
                <pre>
                  <span class="text-success">let</span> tab = [[], []]; // deklaracja tablicy 2x3
                  <span class="text-success">for</span>(<span class="text-success">let</span> i = 0; i < 2; i++) { // pętla For dla wierszy
                    <span class="text-success">for</span>(<span class="text-success">let</span> j = 0; j < 3; j++) { // pętla For dla kolumn
                      tab[i][j] = i + j; // przypisanie wartości do tablicy
                    }
                  }
                  <span class="text-success">for</span>(<span class="text-success">let</span> i = 0; i < 2; i++) { // pętla For dla wierszy
                    <span class="text-success">for</span>(<span class="text-success">let</span> j = 0; j < 3; j++) { // pętla For dla kolumn
                      console.log(tab[i][j]); // instrukcja do wypisywania danych
                    }
                    console.log(<span class="text text-success">"\n"</span>); // nowa linia po każdym wierszu
                  }
                </pre>
              </div>
              // Tablice wielowymiarowe są tablicami tablic <br />
              // W powyższym przykładzie tablica tab zawiera 2 wiersze i 3 kolumny <br />
              // Wartość tablicy jest dostępna pod dwoma indeksami: i i j <br />
              <button class="run" @click="runCode">Kompiluj</button>
              <div class="show-result" v-if="showResult">
                <div v-for="i in 2" :key="i">
                  <span v-for="j in 3" :key="j">{{ i-1 + j-1 }} &nbsp;</span>
                </div>
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
let logValue = ref("Hello World");
let returnText = ref("Tutaj wyświetli się wynik");
let name = ref("");
let age = ref();
const runCode = () => {
  // returnText.value = "Uruchamianie...";
  // returnText.value = "Tutaj wyświetli się wynik";
  showResult.value = true;
  console.log("Kod uruchomiony");
};
const getData = (text: string) => {
  return prompt(text)?.toString() || "";
};
const showData = (text: string) => {
  alert(text);
};

const runCodeAlert = (alertNumber: number) =>{
  switch (alertNumber) {
    case 1:
      name.value = getData("Podaj swoje imię");
      showData("Witaj, " + name.value);
      break;
    case 2:
      age.value = getData("Podaj swój wiek");
      age.value >= 18 ? showData("Jesteś pełnoletni") : showData("Nie jesteś pełnoletni");
      break;
    case 3:
      age.value = getData("Podaj swój wiek");
      age.value >= 18 && age.value <= 65 ? showData("Jesteś w wieku produkcyjnym") : showData("Nie jesteś w wieku produkcyjnym");
      break;
    
  }
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
.js-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.js-title {
  font-size: 50px;
  color: #2c3e50;
}
.js-content {
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
.console-log {
  background-color: transparent;
  border: 0;
}
</style>
